---
name: placeholder-size-calculator
description: Instructions and guidelines for using @codexporer.io/placeholder-size-calculator (Placeholder Size Calculator) in React Native and Expo applications.
---

# `@codexporer.io/placeholder-size-calculator` Skill

## Overview
`@codexporer.io/placeholder-size-calculator` provides fast, zero-dependency aspect-ratio calculation algorithms for image sizing, layout fitting, and canvas scaling.

---

## When to Use
- Fitting camera images or video frames inside screen viewports without letterbox distortion or aspect stretching.
- Computing placeholder image dimensions before remote assets finish loading.
- Resizing canvas or Skia views proportionally.

---

## Usage Example

```tsx
import { getFitSize, getFitHeight } from '@codexporer.io/placeholder-size-calculator';

// Fitting an image into a viewport
export function calculateThumbnailSize(image: { width: number; height: number }, maxBox: { width: number; height: number }) {
  return getFitSize({
    sourceWidth: image.width,
    sourceHeight: image.height,
    maxWidth: maxBox.width,
    maxHeight: maxBox.height
  });
}
```

---

## API Reference

### `getFitSize(options): { width: number; height: number }`
Calculates dimensions fitting within `maxWidth` and `maxHeight` while preserving aspect ratio.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `sourceWidth` | `number` | Original source width |
| `sourceHeight` | `number` | Original source height |
| `maxWidth` | `number` | Maximum bounding width |
| `maxHeight` | `number` | Maximum bounding height |

### `getFitWidth(options): number`
Calculates proportional width constrained by a maximum height.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `sourceWidth` | `number` | Original source width |
| `sourceHeight` | `number` | Original source height |
| `maxHeight` | `number` | Maximum bounding height |

### `getFitHeight(options): number`
Calculates proportional height constrained by a maximum width.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `sourceWidth` | `number` | Original source width |
| `sourceHeight` | `number` | Original source height |
| `maxWidth` | `number` | Maximum bounding width |

---

## Critical Rules & Guidelines
1. **Zero Runtime & Peer Dependencies**: Pure synchronous JavaScript functions with no external dependencies. Works in Node.js, browsers, React Native, and web workers.
2. **Integer Ceiling Dimensions**: Both width and height are rounded up using `Math.ceil()` to guarantee elements fit within boundaries.
3. **Positive Dimension Input**: Ensure `sourceWidth > 0` and `sourceHeight > 0` before calling to prevent division by zero or `NaN`.
