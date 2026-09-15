---
name: figma-annotation-tags
description: Use when converting a Figma design to code (via the Builder.io Figma-to-Code plugin export) and a layer has an annotation whose category is "<a> tag" or "<img> tag". Tells the Code agent how to read the annotation content and turn it into the correct HTML/JSX attributes.
---

# Figma annotation tags: `<a> tag` and `<img> tag`

Figma layers can carry a custom annotation category named `<a> tag` or `<img> tag`
(added via the Builder.io Figma plugin's annotation categories). When generating
code from a Figma export, check every annotated layer's category and apply the
rules below before falling back to any generic image/link handling.

## `<a> tag` annotations

1. Find the layer's annotation with category `<a> tag`.
2. Read the annotation content and extract the URL to use as `href`:
   - If the content contains `href=` or `href:`, use the value that follows it.
   - Otherwise, if the content is just a URL or path (e.g. `/pricing`,
     `https://example.com`), use it verbatim as the href.
3. Wrap the layer's generated element in a link using that href:
   - Internal paths (start with `/`, or match an existing app route) → use
     React Router's `<Link to="...">`, not `<a>`.
   - External URLs (`http://`, `https://`, `mailto:`, `tel:`) → use a real
     `<a href="..." target="_blank" rel="noopener noreferrer">` for external
     http(s) links.
4. If no href can be found in the annotation content, do not invent one — leave
   the element as-is and flag it in your summary to the user instead of guessing.

## `<img> tag` annotations

1. Find the layer's annotation with category `<img> tag`.
2. Read the annotation content and extract the image source to use as `src`:
   - If the content contains `src=` or `src:`, use the value that follows it.
   - Otherwise, if the content is just a URL or path, use it verbatim as the src.
3. Set the generated `<img>` element's `alt` attribute to the **Figma layer's
   name** (not the annotation content, and not a generic/empty string).
4. If no src can be found in the annotation content, do not invent one — keep
   the layer's existing fill/export asset as the image source, but still set
   `alt` from the layer name.

## General notes

- These rules take priority over any default asset-export or link-inference
  behavior for annotated layers.
- Apply this per-layer: a single Figma selection may contain many layers, only
  some of which carry these annotations — only touch the annotated ones.
- If an annotation's content is ambiguous or empty, ask the user rather than
  guessing the href/src.
