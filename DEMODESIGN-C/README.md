# Design C — The Request's Journey (`DEMODESIGN-C`)

**Md. Shah Abrar Zahin · End-to-End Business Backend Architect**

This standalone project implements **Design C: The Request's Journey** from `../TASK.md`, using `../README.md` as the strict source of truth for copy and metrics.

## Quick Start

```bash
cd DEMODESIGN-C
npm install
npm run dev
```

*(Runs on `http://localhost:5175` by default so all three designs `A`, `B`, and `C` can run simultaneously.)*

## Key Architecture & Features
- **Signature Interaction — "Ride the Packet"**: Follow `Order #001` (white glowing packet with crisp black outline) along a scroll-driven SVG trajectory across 9 vivid business stops (*Customer → Edge → API → Queue & Worker → Database → Physics Warehouse → Receipt & Log → Scale → Growth*).
- **WebGL Liquid Stage Transitions (`Three.js` + Custom GLSL)**: Fullscreen noise-displaced liquid color transitions across stage palettes (`#FFE9D6` cream, `#FF5A36` tomato, `#1D3BFF` cobalt, `#FFC933` amber, `#0B0B0F` ink, `#7A4DFF` violet, `#EDEDE6` paper, `#C6FF3D` lime) + interactive cursor ripple trail & halftone tactile grain.
- **Interactive Storytelling Widgets**:
  - **API Swipe Deck (`Stop 02`)**: 3D draggable/swipeable 8-card problem deck.
  - **Horizontal Queue Posters (`Stop 03–04`)**: Pinned horizontal case study track with live packet queue processing & fullscreen case drawer.
  - **Database Query Race (`Stop 05`)**: Interactive `Before vs After (<500 ms, 45% faster)` SQL race (labelled illustrative) with confetti & screen shake.
  - **Matter.js Physics Drop Zone (`Stop 06`)**: Real 2D rigid-body physics warehouse where tech chips fall, pile up, and can be grabbed, thrown, or re-dropped by layer.
  - **Thermal Receipt (`Stop 07`) & Terminal Log (`Stop 07B`)**: 6-phase printed receipt with animated barcode + typed experience log.
  - **Multi-Lane Scale Simulator (`Stop 08`) & Growth Curve Finale (`Stop 09`)**: `1 → 10,000 orders/sec` Monolith vs Distributed lane simulation, ending with a rising growth chart & confetti burst.

