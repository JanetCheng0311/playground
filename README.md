# Bubble Playground

An interactive bubble toy that runs entirely in the browser. Blow, pop and style realistic soap bubbles with transparent, rainbow-shimmer surfaces and wobbly distorted edges.

## Features

- **Pop bubbles** by tapping or clicking them, or sweep your finger/mouse across the screen to pop a whole trail. Each pop bursts into iridescent droplets with a soft pop sound (mutable).
- **Blow bubbles** by tapping empty space.
- **Customize panel**: size, rainbow shimmer, edge wobble, tint hue, transparency, and spawn rate. Five built-in presets (Classic, Sunset, Mint fizz, Galaxy, Crystal), plus **Save my style** to keep your own (stored in your browser; long-press a chip to delete).
- **Background image + rope select**: upload any photo as the backdrop, then drag a rope loop around an area. New bubbles appear only inside the rope. Double-tap inside the rope to clear the selection.
- **Clear** pops every bubble on screen in one cascade.
- Works on phones and desktops (pointer + touch), honors `prefers-reduced-motion`.

## Run it

It is a single `index.html` with zero dependencies. Open the file directly, or serve the folder:

```bash
python3 -m http.server 8000
```

Hosted with GitHub Pages from this repository.
