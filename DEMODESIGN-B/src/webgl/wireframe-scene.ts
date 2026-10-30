import * as THREE from 'three';
import { gsap } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';

export class IsometricWireframeScene {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer | null = null;
  private scene = new THREE.Scene();
  private camera!: THREE.OrthographicCamera;
  private rootGroup = new THREE.Group();

  private slabGroups: THREE.Group[] = [];
  private slabEdgeMats: THREE.LineBasicMaterial[] = [];
  private hitBoxes: THREE.Mesh[] = [];
  private riserLine: THREE.LineSegments | null = null;
  private packets: THREE.Mesh[] = [];

  private explode = 0.28; // 0 = compact, 1 = fully exploded
  private rotY = Math.PI * 0.25;
  private targetRotY = Math.PI * 0.25;
  private rotX = 0.06;
  private targetRotX = 0.06;
  private isDragging = false;
  private prevPointerX = 0;
  private prevPointerY = 0;

  private hoveredLayer = -1;
  private elapsed = 0;
  private isVisible = true;
  private contextLost = false;
  private raycaster = new THREE.Raycaster();
  private pointerNdc = new THREE.Vector2();
  private onLayerHoverCb?: (layerIdx: number) => void;

  constructor(canvas: HTMLCanvasElement, onLayerHover?: (layerIdx: number) => void) {
    this.canvas = canvas;
    this.onLayerHoverCb = onLayerHover;
    this.setupCamera();
    this.initRenderer();

    if (!this.contextLost) {
      this.buildIsometricArchitecture();
      this.bindInteraction();
      this.startLoop();
    }
  }

  private setupCamera(): void {
    const frustum = 6.6;
    const aspect = (this.canvas.clientWidth || 520) / (this.canvas.clientHeight || 520);
    this.camera = new THREE.OrthographicCamera(
      (-frustum * aspect) / 2,
      (frustum * aspect) / 2,
      frustum / 2,
      -frustum / 2,
      0.1,
      100
    );
    this.camera.position.set(0, 5.4, 10.5);
    this.camera.lookAt(0, 0, 0);
  }

  private initRenderer(): void {
    try {
      const q = qualityManager.getState();
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setPixelRatio(q.pixelRatio);
      this.resize();

      this.canvas.addEventListener('webglcontextlost', (e) => {
        e.preventDefault();
        this.contextLost = true;
      });
    } catch {
      this.contextLost = true;
    }
  }

  private buildIsometricArchitecture(): void {
    this.scene.add(this.rootGroup);

    const inkHex = 0x101010;
    const vermilionHex = 0xff4d1c;

    // Build 4 architectural slabs (0: Top Clients, 1: API/RBAC, 2: Cache/Queues, 3: Data Core)
    for (let i = 0; i < 4; i++) {
      const group = new THREE.Group();

      const mat = new THREE.LineBasicMaterial({
        color: inkHex,
        transparent: true,
        opacity: 0.88,
      });
      this.slabEdgeMats.push(mat);

      const subMat = new THREE.LineBasicMaterial({
        color: inkHex,
        transparent: true,
        opacity: 0.34,
      });

      // Outer structural slab wireframe
      const slabGeo = new THREE.BoxGeometry(3.5, 0.22, 3.5);
      const edges = new THREE.EdgesGeometry(slabGeo);
      group.add(new THREE.LineSegments(edges, mat));
      slabGeo.dispose();

      // Inner structural cross-grid ribs on each slab
      const gridPts: THREE.Vector3[] = [];
      for (let g = -1.2; g <= 1.21; g += 0.8) {
        gridPts.push(new THREE.Vector3(g, 0.112, -1.75), new THREE.Vector3(g, 0.112, 1.75));
        gridPts.push(new THREE.Vector3(-1.75, 0.112, g), new THREE.Vector3(1.75, 0.112, g));
      }
      const ribGeo = new THREE.BufferGeometry().setFromPoints(gridPts);
      group.add(new THREE.LineSegments(ribGeo, subMat));

      // Architectural sub-structures unique to each layer
      if (i === 0) {
        // Layer 01: 4 Actor Portal blocks (Vendor, Customer, Rider, Exec)
        const offsets = [
          [-0.9, -0.9],
          [0.9, -0.9],
          [-0.9, 0.9],
          [0.9, 0.9],
        ];
        offsets.forEach(([ox, oz]) => {
          const bGeo = new THREE.BoxGeometry(0.85, 0.36, 0.85);
          const bEdge = new THREE.EdgesGeometry(bGeo);
          const seg = new THREE.LineSegments(bEdge, mat);
          seg.position.set(ox, 0.29, oz);
          group.add(seg);
          bGeo.dispose();
        });
      } else if (i === 1) {
        // Layer 02: Central API & RBAC octagonal ring
        const octGeo = new THREE.CylinderGeometry(1.15, 1.15, 0.32, 8);
        const octEdge = new THREE.EdgesGeometry(octGeo);
        const seg = new THREE.LineSegments(octEdge, mat);
        seg.position.set(0, 0.27, 0);
        group.add(seg);
        octGeo.dispose();
      } else if (i === 2) {
        // Layer 03: Redis Cache prism + 3 Celery Queue lanes
        for (let lane = -1; lane <= 1; lane++) {
          const lGeo = new THREE.BoxGeometry(2.6, 0.24, 0.52);
          const lEdge = new THREE.EdgesGeometry(lGeo);
          const seg = new THREE.LineSegments(lEdge, mat);
          seg.position.set(0, 0.23, lane * 0.85);
          group.add(seg);
          lGeo.dispose();
        }
      } else if (i === 3) {
        // Layer 04: Twin Oracle & PostgreSQL Cylindrical Data Vaults
        [-0.85, 0.85].forEach((ox) => {
          const cylGeo = new THREE.CylinderGeometry(0.68, 0.68, 0.54, 14);
          const cylEdge = new THREE.EdgesGeometry(cylGeo);
          const seg = new THREE.LineSegments(cylEdge, mat);
          seg.position.set(ox, 0.38, 0);
          group.add(seg);
          cylGeo.dispose();
        });
      }

      // Invisible hit mesh for pointer hover raycasting
      const hitGeo = new THREE.BoxGeometry(3.6, 0.65, 3.6);
      const hitMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitMesh = new THREE.Mesh(hitGeo, hitMat);
      hitMesh.userData.layerIdx = i;
      group.add(hitMesh);
      this.hitBoxes.push(hitMesh);

      this.slabGroups.push(group);
      this.rootGroup.add(group);
    }

    // 4 Corner Vertical Riser Conduits
    const riserGeo = new THREE.BufferGeometry();
    riserGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(4 * 2 * 3), 3));
    const riserMat = new THREE.LineBasicMaterial({
      color: vermilionHex,
      transparent: true,
      opacity: 0.45,
    });
    this.riserLine = new THREE.LineSegments(riserGeo, riserMat);
    this.rootGroup.add(this.riserLine);

    // Vermilion Request Packets moving vertically along the 4 conduits
    const pktGeo = new THREE.OctahedronGeometry(0.11, 0);
    const pktMat = new THREE.MeshBasicMaterial({ color: vermilionHex });
    for (let p = 0; p < 4; p++) {
      const mesh = new THREE.Mesh(pktGeo, pktMat);
      this.packets.push(mesh);
      this.rootGroup.add(mesh);
    }

    this.updateSlabPositions();
  }

  private updateSlabPositions(): void {
    const gap = THREE.MathUtils.lerp(0.62, 1.38, this.explode);
    const topY = gap * 1.5;

    for (let i = 0; i < this.slabGroups.length; i++) {
      this.slabGroups[i].position.y = topY - i * gap;
    }

    if (this.riserLine) {
      const posArr = (this.riserLine.geometry.getAttribute('position') as THREE.BufferAttribute)
        .array as Float32Array;
      const corners = [
        [-1.65, -1.65],
        [1.65, -1.65],
        [-1.65, 1.65],
        [1.65, 1.65],
      ];
      const yMax = topY + 0.12;
      const yMin = topY - 3 * gap - 0.12;

      corners.forEach(([cx, cz], idx) => {
        posArr[idx * 6 + 0] = cx;
        posArr[idx * 6 + 1] = yMax;
        posArr[idx * 6 + 2] = cz;
        posArr[idx * 6 + 3] = cx;
        posArr[idx * 6 + 4] = yMin;
        posArr[idx * 6 + 5] = cz;
      });
      this.riserLine.geometry.getAttribute('position').needsUpdate = true;

      // Update flowing vermilion packets
      this.packets.forEach((pkt, idx) => {
        const [cx, cz] = corners[idx];
        const t = (this.elapsed * 0.42 + idx * 0.25) % 1;
        const py = idx % 2 === 0 ? THREE.MathUtils.lerp(yMax, yMin, t) : THREE.MathUtils.lerp(yMin, yMax, t);
        pkt.position.set(cx, py, cz);
      });
    }
  }

  private bindInteraction(): void {
    window.addEventListener('resize', () => this.resize());

    const io = new IntersectionObserver(
      (entries) => {
        this.isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.01 }
    );
    io.observe(this.canvas);

    this.canvas.addEventListener('pointerdown', (e) => {
      if (qualityManager.getState().isMobile) return;
      this.isDragging = true;
      this.prevPointerX = e.clientX;
      this.prevPointerY = e.clientY;
      this.canvas.setPointerCapture(e.pointerId);
    });

    this.canvas.addEventListener('pointermove', (e) => {
      if (qualityManager.getState().isMobile) return;
      if (this.isDragging) {
        const dx = e.clientX - this.prevPointerX;
        const dy = e.clientY - this.prevPointerY;
        this.prevPointerX = e.clientX;
        this.prevPointerY = e.clientY;
        this.targetRotY += dx * 0.008;
        this.targetRotX = THREE.MathUtils.clamp(this.targetRotX + dy * 0.004, -0.25, 0.35);
        return;
      }

      // Hover raycast to highlight individual slab
      const rect = this.canvas.getBoundingClientRect();
      this.pointerNdc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.pointerNdc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this.raycaster.setFromCamera(this.pointerNdc, this.camera);
      const hits = this.raycaster.intersectObjects(this.hitBoxes, false);
      const hitLayer = hits.length > 0 ? (hits[0].object.userData.layerIdx as number) : -1;
      this.setHighlightedLayer(hitLayer);
    });

    const endDrag = () => {
      this.isDragging = false;
    };
    this.canvas.addEventListener('pointerup', endDrag);
    this.canvas.addEventListener('pointercancel', endDrag);
    this.canvas.addEventListener('pointerleave', () => {
      this.isDragging = false;
      this.setHighlightedLayer(-1);
    });

    qualityManager.subscribe((s) => {
      this.renderer?.setPixelRatio(s.pixelRatio);
      this.resize();
    });
  }

  public setHighlightedLayer(layerIdx: number): void {
    if (this.hoveredLayer === layerIdx) return;
    this.hoveredLayer = layerIdx;

    this.slabEdgeMats.forEach((mat, idx) => {
      if (idx === layerIdx) {
        mat.color.setHex(0xff4d1c);
        mat.opacity = 1.0;
      } else {
        mat.color.setHex(0x101010);
        mat.opacity = layerIdx === -1 ? 0.88 : 0.35;
      }
    });

    this.onLayerHoverCb?.(layerIdx);
  }

  public setExplodeProgress(p: number): void {
    this.explode = THREE.MathUtils.clamp(p, 0.2, 1.0);
  }

  private resize(): void {
    if (!this.renderer) return;
    const w = this.canvas.clientWidth || 480;
    const h = this.canvas.clientHeight || 480;
    const frustum = 6.6;
    const aspect = w / h;
    this.camera.left = (-frustum * aspect) / 2;
    this.camera.right = (frustum * aspect) / 2;
    this.camera.top = frustum / 2;
    this.camera.bottom = -frustum / 2;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
  }

  private startLoop(): void {
    let prev = gsap.ticker.time;
    gsap.ticker.add((time) => {
      if (!this.isVisible || document.hidden || this.contextLost || !this.renderer) {
        prev = time;
        return;
      }
      const dt = Math.min(0.05, Math.max(0.001, time - prev));
      prev = time;

      const q = qualityManager.getState();
      if (!q.reducedMotion) {
        this.elapsed += dt;
        if (!this.isDragging) {
          this.targetRotY += dt * 0.22;
        }
      }

      this.rotY += (this.targetRotY - this.rotY) * 0.09;
      this.rotX += (this.targetRotX - this.rotX) * 0.09;
      this.rootGroup.rotation.y = this.rotY;
      this.rootGroup.rotation.x = this.rotX;

      this.updateSlabPositions();
      this.renderer.render(this.scene, this.camera);
    });
  }
}

