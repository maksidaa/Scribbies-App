# Scribbies art direction — proposed, awaiting review

The aim is a collection of lovable, readable 2D companions that retain the identities of the original Scribbies. Complexity is not a measure of quality. This draft becomes the production reference only after the one-creature study is approved.

## First review specimen

Hopple's original bunny renderer is preserved in `js/creatures/mammals.js`, variant 0. Although the old collection is often described as SVG art, this particular original is constructed with CSS shapes. `docs/art/preview.html` compares that actual renderer with the proposed editable SVG in `docs/art/hopple-proposal.svg`. The proposal is not connected to the game.

## Character rules

- Preserve each species' identifying silhouette, face, primary colors, and characteristic body parts before adding detail.
- Use rounded, generous shapes, a large expressive head, soft cheeks, and simple readable feet or paws. Avoid copying one face or body across species.
- A pose should remain identifiable as a filled silhouette at 64 pixels. The eyes and mouth should remain legible at 96 pixels.
- Use one dominant body color, one supporting color, one small accent, a dark feature color, and light/shadow tones. Colors should be warm and muted enough to sit together without becoming dull.
- Use a colored outline related to the creature's palette. At a 320-unit canvas, outer lines are about 3–4 units; internal lines about 2–3. Round joins and caps. Avoid pure black outlines on pale bodies.
- Light comes from the upper left. Use broad soft gradients or a simple shadow shape. No individual fur strands, photographic textures, glossy plastic, or many tiny highlights.
- Keep eyes expressive and consistent: a dark colored iris, one main highlight, and at most one small secondary highlight. Mouths and blush remain simple. Avoid adding eyelashes to every species.
- Accessories must fit dedicated attachment points and preserve the silhouette. Do not add default costumes merely to make a redesign look more elaborate.

## Growth

Eggs inherit the species' palette and one identifying motif. Babies have shorter appendages, larger head-to-body ratios, and tentative poses. Teens develop the species' distinctive ears, fins, tails, or horns and a more confident stance. Adults change proportions and posture, not only scale. Radiant stages use restrained markings or a soft aura; they remain the same recognizable friend.

## Motion and sound

Give each creature a restrained idle, blink timing, and one characteristic ear/tail/fin movement. Feeding, play, greeting, hatch, and growth each have a readable reaction. Avoid every body part moving continuously. Use anticipation and a soft settle for larger actions. Reduced motion must retain a clear static expression or message. Voices should match species and age without becoming startling or loud; repeated taps must not stack calls.

## World and UI

Illustrated environments may have more detail than creatures, but lower local contrast around interaction targets. Keep creature faces visually dominant. Eggs, charms, particles, and UI illustrations share the same rounded shapes, colored lines, warm light, and restrained highlights. Bring the textured Luma concept back into this style before making it a production reference.

## Acceptance before rollout

Review Hopple side by side with the original. Confirm identity, cuteness, line weight, eye style, shading, and the scale of the change. Once approved, make a small growth and expression sheet using the same rules, then apply the style across the collection. Retain original source assets and distinguish approved assets from studies.
