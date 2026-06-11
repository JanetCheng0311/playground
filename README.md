# Playground

A collection of interactive creative-coding toys, hosted with GitHub Pages. The landing page is a minimal index in pure blue and white; each toy lives in its own folder.

**Live:** https://janetcheng0311.github.io/Bubble-/

## Toys

- **[Fireworks](fireworks/)**: a pixel firework generator on a black sky. Tap to launch a rocket that bursts into thousands of tiny glowing pixels with trails. Adjust burst size, gravity, and trail length, toggle auto-launching and rainbow bursts, and save the result as a PNG.
- **[Flow](flow/)**: generative flow-field line art. Tap to grow a field from a point, tweak line count, curl, and scale, save the result as a PNG.
- **[Kaleidoscope](kaleidoscope/)**: draw with mirrored radial symmetry to build a chunky pixel mandala. Adjust segment count and pixel size, toggle spin or single-color, save as PNG.
- **[ASMR](asmr/)**: a little room of textured pads (squish, keys, pop, drip, wood, chime, crunch, boing). Tap or use number keys for satisfying synthesized sounds; letter keys add soft clacks.

## Adding a new toy

1. Create a folder, e.g. `sparks/`, with its own `index.html` (self-contained, no dependencies).
2. Add a link to it in the root `index.html` nav list.

Everything is plain HTML/CSS/JS with zero build steps. To preview locally:

```bash
python3 -m http.server 8000
```
