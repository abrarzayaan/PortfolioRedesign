import{S as l,O as u,V as h,W as c,a as p,b as d,C as n,M as v,P as m,c as f}from"./three-DfA6yizB.js";import{q as o}from"./index-BXohVjpP.js";import{g as a}from"./gsap-0ONJedR3.js";const w=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,g=`
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
`;class b{canvas;renderer=null;scene=new l;camera=new u(-1,1,1,-1,0,1);mat=null;ripples=Array.from({length:6},()=>new h(-2,-2,0));rippleHead=0;lastPointerSpawn=0;elapsed=0;contextLost=!1;constructor(e){this.canvas=e,this.init()}init(){try{const e=o.getState();this.renderer=new c({canvas:this.canvas,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(e.pixelRatio,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.mat=new p({vertexShader:w,fragmentShader:g,depthWrite:!1,depthTest:!1,uniforms:{uColorA:{value:new n("#FFE9D6")},uColorB:{value:new n("#FF5A36")},uRippleColor:{value:new n("#FF5A36")},uMix:{value:0},uTime:{value:0},uResolution:{value:new d(window.innerWidth,window.innerHeight)},uRipples:{value:this.ripples},uEnableRipple:{value:e.isMobile||e.reducedMotion?0:1}}});const t=new v(new m(2,2),this.mat);this.scene.add(t),this.canvas.addEventListener("webglcontextlost",i=>{i.preventDefault(),this.contextLost=!0,document.documentElement.classList.add("no-webgl")}),this.bindEvents(),this.startLoop()}catch{this.contextLost=!0,document.documentElement.classList.add("no-webgl")}}bindEvents(){window.addEventListener("resize",()=>{!this.renderer||!this.mat||(this.renderer.setSize(window.innerWidth,window.innerHeight),this.mat.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight))}),window.addEventListener("pointermove",e=>{const t=o.getState();if(t.isMobile||t.reducedMotion)return;const i=performance.now();if(i-this.lastPointerSpawn<48)return;this.lastPointerSpawn=i;const r=e.clientX/window.innerWidth,s=1-e.clientY/window.innerHeight;this.ripples[this.rippleHead].set(r,s,1),this.rippleHead=(this.rippleHead+1)%this.ripples.length},{passive:!0}),o.subscribe(e=>{!this.renderer||!this.mat||(this.renderer.setPixelRatio(Math.min(e.pixelRatio,1.5)),this.mat.uniforms.uEnableRipple.value=e.isMobile||e.reducedMotion?0:1)})}setStageBlend(e,t,i,r){this.mat&&(this.mat.uniforms.uColorA.value.set(e),this.mat.uniforms.uColorB.value.set(t),this.mat.uniforms.uRippleColor.value.set(r),this.mat.uniforms.uMix.value=f.clamp(i,0,1))}startLoop(){let e=a.ticker.time;a.ticker.add(t=>{if(document.hidden||this.contextLost||!this.renderer||!this.mat){e=t;return}const i=Math.min(.05,Math.max(.001,t-e));e=t,o.getState().reducedMotion||(this.elapsed+=i),this.mat.uniforms.uTime.value=this.elapsed;for(let r=0;r<this.ripples.length;r++)this.ripples[r].z=Math.max(0,this.ripples[r].z-i*1.45);this.renderer.render(this.scene,this.camera)})}}export{b as LiquidStageScene};
