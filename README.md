# Playground

A collection of interactive creative-coding toys, hosted with GitHub Pages. The landing page is a minimal index in pure blue and white; each toy lives in its own folder.

**Live:** https://janetcheng0311.github.io/playground/

## Toys

- **[Fireworks](fireworks/)**: a pixel firework generator on a black sky. Tap to launch a rocket that bursts into thousands of tiny glowing pixels with trails. Adjust burst size, gravity, and trail length, toggle auto-launching and rainbow bursts, and save the result as a PNG.
- **[Flow](flow/)**: generative flow-field line art. Tap to grow a field from a point, tweak line count, curl, and scale, save the result as a PNG.
- **[Kaleidoscope](kaleidoscope/)**: draw with mirrored radial symmetry to build a chunky pixel mandala. Adjust segment count and pixel size, toggle spin or single-color, save as PNG.
- **[ASMR](asmr/)**: a little room of textured pads (squish, keys, pop, drip, wood, chime, crunch, boing). Tap or use number keys for satisfying synthesized sounds; letter keys add soft clacks.
- **[Voice](voice/)**: type a line and generate robotic or instrument speech blips, lasting about as long as the line takes to say. Pick an emotion (neutral, happy, sad, angry, curious, robotic) and a voice (robot, instrument, chiptune, deep, squeak, bell, alien, buzz); download the clip as WAV or MP3 to drop into a game.
- **[Modular](synth/)**: a small VCV-style modular synth. Drag patch cables between modules (Clock, Seq8, VCO, LFO, VCF, Out) to route signal, write a melody with the step bars (8 or 16), turn the knobs (incl. detune + drive for an electric tone), and randomize. Real WebAudio routing rebuilds as you patch; responsive wrapping layout.
- **[Ripples](ripples/)**: touch the water and watch ripples spread and interfere across the surface. Drag to make waves, toggle rain, switch color themes, calm to reset.
- **[Spiro](spiro/)**: draw glowing spirograph curves. Tune the outer/inner gears and pen offset, regenerate, switch palettes, and save the art as a PNG.
- **[Truchet](truchet/)**: generative Truchet arc-tile patterns that flow into mazes and loops. Shuffle, resize, switch color themes, tap a tile to flip it, and save as PNG.
- **[Phyllotaxis](phyllotaxis/)**: grow a sunflower spiral from the golden angle. Tune spacing and dot size, cycle palettes, tap for a new bloom, save as PNG.
- **[Swarm](swarm/)**: a living swarm of flocking particles (boids) that follow your touch. Adjust count and calmness, attract/repel, switch colors, tap to scatter.
- **[Mondrian](mondrian/)**: generate De Stijl compositions — recursive blocks of primary color with bold black grids. Change density, cycle palettes, tap for a new piece, save as PNG.
- **[Papers](papers/)**: a 3D scene of paper sheets tumbling on the wind (hand-rolled perspective + lighting, no libraries). Adjust count and wind, gust on tap, move to push the air, cycle themes (white paper, autumn leaves, sticky notes, kraft).
- **[2048](2048/)**: the classic tile-merging puzzle. Arrow keys or swipe to slide tiles; merge matching numbers to reach 2048.
- **[Blocks](blocks/)**: stack the falling pieces and clear lines. Arrow keys (or on-screen pad) to move and rotate, space to hard-drop; ghost piece, hold + next previews, levels, scoring, best-score memory and sound.
- **[Farm](farm/)**: a little isometric farm. Till soil, buy & plant seeds (carrot, wheat, pumpkin), water them and end the day to grow, then harvest ripe crops for coins. Coin shop for skills (fertilizer, rich soil, sprinkler) and field skins. Progress saves to your browser, with sound.
- **[Homestead](homestead/)**: a top-down farm-life & adventure game (Stardew × Don't Starve × Minecraft, all original art/code). Move with WASD/arrows (double-tap to run; on-screen D-pad on touch); **E / Space / use** acts on the tile you face — till, plant, water and harvest, chop trees, mine rocks/ore, fish, fight, place crafted items; hold use to pick placed items back up.
  - **Survival:** hearts + a hunger bar; actions and time drain hunger, well-fed heals, starving hurts and blocks effortful actions. Eat berries/meat/crops (**F**), or cook **buff food** at the kitchen stove. Sleep in bed to restore and advance crops.
  - **Crafting:** open the **bag (I)** for a Minecraft-style 3×3 grid + recipe book; a full **equipment** loadout (sword, armour, hat, chest, pants, shoes, 2 accessories) that adds hearts/attack/speed; a storage chest.
  - **World & NPCs:** your homestead with the fairy **shop cat**; a fenced, monster-free **village** across a road (with a bridge over its river) and animal NPCs — **Hamu** the hamster merchant, **Louie** the blue cat (100-fish quest), **David** the dog, **Pelle** the frog fisher. A side-view **Road Guardian** boss gates the village; craft a metal sword + armour to beat it.
  - **Dungeon:** a 1000-floor cave (entrance in the village) — dark and procedural, with limited resources per floor, monsters that scale and vary by depth, **bosses every 10 floors**, **elevator checkpoints every 50**, and scaling loot (gold, silver, coal, diamond, red/green jewels, fossils). Glowing beacons point to the stairs.
  - **Extras:** a 📋 quest/mission list, player **renaming**, save export/import + autosave, a minimap (**M**), full **English / 繁體中文** toggle, and a corner creator cheat box (`111` skip boss, `000` gear up). Plain-Unicode emoji icons only (no bundled vendor art).

The Kaleidoscope now renders glossy reflective circle/square gems (no pixel grid), and Voice has a **batch** box: paste one quote per line and download all clips as a single ZIP of MP3s.

## Adding a new toy

1. Create a folder, e.g. `sparks/`, with its own `index.html` (self-contained, no dependencies).
2. Add a link to it in the root `index.html` nav list.

Everything is plain HTML/CSS/JS with zero build steps. To preview locally:

```bash
python3 -m http.server 8000
```
