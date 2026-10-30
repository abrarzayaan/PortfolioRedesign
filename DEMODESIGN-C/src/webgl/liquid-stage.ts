import * as THREE from 'three';
import { gsap } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uRippleColor;
  uniform float uMix;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uRipples[6]; // xy = uv, z = strength (0..1)
  uniform float uEnableRipple;

  varying vec2 vUv;

  // Simplex-like value noise for organic liquid boundary
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  void main() {
    vec2 aspectUv = vUv;
    aspectUv.x *= uResolution.x / max(1.0, uResolution.y);

    // Liquid wave boundary between consecutive stage colours
    float n = noise(vUv * vec2(4.2, 3.0) + vec2(uTime * 0.22, -uTime * 0.16));
    float n2 = noise(vUv * 8.5 - uTime * 0.28) * 0.35;
    float wave = (n + n2) * 0.22;

    float threshold = uMix * 1.32 - 0.16;
    float mask = smoothstep(threshold - 0.09, threshold + 0.09, (1.0 - vUv.y) + wave - 0.11);
    vec3 col = mix(uColorA, uColorB, mask);

    // Cursor liquid ripple trail (tomato ripple in Cream hero, adaptive elsewhere)
    if (uEnableRipple > 0.5) {
      for (int i = 0; i < 6; i++) {
        vec3 rp = uRipples[i];
        if (rp.z > 0.01) {
          vec2 rpAspect = rp.xy;
          rpAspect.x *= uResolution.x / max(1.0, uResolution.y);
          float d = distance(aspectUv, rpAspect);
          float ring = smoothstep(0.14, 0.0, d) * rp.z * 0.28;
          col = mix(col, uRippleColor, ring);
        }
      }
    }

    // Tactile halftone / micro-grain overlay
    vec2 grid = fract(gl_FragCoord.xy / 6.0) - 0.5;
    float dotPattern = smoothstep(0.45, 0.2, length(grid)) * 0.018;
    float grain = (hash(gl_FragCoord.xy + fract(uTime)) - 0.5) * 0.022;
    col += grain - dotPattern;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export class LiquidStageScene {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer | null = null;
  private scene = new THREE.Scene();
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private mat: THREE.ShaderMaterial | null = null;

  private ripples: THREE.Vector3[] = Array.from({ length: 6 }, () => new THREE.Vector3(-2, -2, 0));
  private rippleHead = 0;
  private lastPointerSpawn = 0;
  private elapsed = 0;
  private contextLost = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.init();
  }

  private init(): void {
    try {
      const q = qualityManager.getState();
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: false,
        alpha: false,
        powerPreference: 'high-performance',
      });
      this.renderer.setPixelRatio(Math.min(q.pixelRatio, 1.5));
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      this.mat = new THREE.ShaderMaterial({
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        depthWrite: false,
        depthTest: false,
        uniforms: {
          uColorA: { value: new THREE.Color('#FFE9D6') },
          uColorB: { value: new THREE.Color('#FF5A36') },
          uRippleColor: { value: new THREE.Color('#FF5A36') },
          uMix: { value: 0 },
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          uRipples: { value: this.ripples },
          uEnableRipple: { value: q.isMobile || q.reducedMotion ? 0 : 1 },
        },
      });

      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.mat);
      this.scene.add(quad);

      this.canvas.addEventListener('webglcontextlost', (e) => {
        e.preventDefault();
        this.contextLost = true;
        document.documentElement.classList.add('no-webgl');
      });

      this.bindEvents();
      this.startLoop();
    } catch {
      this.contextLost = true;
      document.documentElement.classList.add('no-webgl');
    }
  }

  private bindEvents(): void {
    window.addEventListener('resize', () => {
      if (!this.renderer || !this.mat) return;
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.mat.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    });

    window.addEventListener(
      'pointermove',
      (e) => {
        const q = qualityManager.getState();
        if (q.isMobile || q.reducedMotion) return;
        const now = performance.now();
        if (now - this.lastPointerSpawn < 48) return;
        this.lastPointerSpawn = now;

        const u = e.clientX / window.innerWidth;
        const v = 1 - e.clientY / window.innerHeight;
        const slot = this.ripples[this.rippleHead];
        slot.set(u, v, 1.0);
        this.rippleHead = (this.rippleHead + 1) % this.ripples.length;
      },
      { passive: true }
    );

    qualityManager.subscribe((s) => {
      if (!this.renderer || !this.mat) return;
      this.renderer.setPixelRatio(Math.min(s.pixelRatio, 1.5));
      this.mat.uniforms.uEnableRipple.value = s.isMobile || s.reducedMotion ? 0 : 1;
    });
  }

  public setStageBlend(colorAHex: string, colorBHex: string, mix: number, rippleHex: string): void {
    if (!this.mat) return;
    this.mat.uniforms.uColorA.value.set(colorAHex);
    this.mat.uniforms.uColorB.value.set(colorBHex);
    this.mat.uniforms.uRippleColor.value.set(rippleHex);
    this.mat.uniforms.uMix.value = THREE.MathUtils.clamp(mix, 0, 1);
  }

  private startLoop(): void {
    let prev = gsap.ticker.time;
    gsap.ticker.add((time) => {
      if (document.hidden || this.contextLost || !this.renderer || !this.mat) {
        prev = time;
        return;
      }
      const dt = Math.min(0.05, Math.max(0.001, time - prev));
      prev = time;

      if (!qualityManager.getState().reducedMotion) {
        this.elapsed += dt;
      }
      this.mat.uniforms.uTime.value = this.elapsed;

      for (let i = 0; i < this.ripples.length; i++) {
        this.ripples[i].z = Math.max(0, this.ripples[i].z - dt * 1.45);
      }

      this.renderer.render(this.scene, this.camera);
    });
  }
}
