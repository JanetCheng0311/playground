# Playground

A collection of interactive creative-coding toys, hosted with GitHub Pages. The landing page is a minimal index in pure blue and white; each toy lives in its own folder.

**Live:** https://janetcheng0311.github.io/Bubble-/

## Toys

- **[Shapes](shapes/)**: fill the screen with shapes (circle, square, triangle, diamond, pentagon, hexagon, star, or a mix). Adjust size and amount, switch between solid and outline, and toggle optional float and shake motion. Tap to add or remove individual shapes; save the result as a PNG.
- **[Flow](flow/)**: generative flow-field line art. Tap to grow a field from a point, tweak line count, curl, and scale, save the result as a PNG.

## Adding a new toy

1. Create a folder, e.g. `sparks/`, with its own `index.html` (self-contained, no dependencies).
2. Add a link to it in the root `index.html` nav list.

Everything is plain HTML/CSS/JS with zero build steps. To preview locally:

```bash
python3 -m http.server 8000
```
