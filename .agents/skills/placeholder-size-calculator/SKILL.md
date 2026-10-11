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
| Field | Type | Description |
| :--- | :--- | :--- |
| `sourceWidth` | `number` | Original width |
| `sourceHeight` | `number` | Original height |
| `maxWidth` | `number` | Maximum permissible width |
| `maxHeight` | `number` | Maximum permissible height |

### `getFitWidth(options): number`
Calculates proportional width constrained by `maxHeight`.

### `getFitHeight(options): number`
Calculates proportional height constrained by `maxWidth`.

---

## Critical Rules & Guidelines
1. **No External Dependencies**: Pure JS math functions; works everywhere.
2. **Positive Dimension Input**: Ensure `sourceWidth` and `sourceHeight` are greater than 0 before calling.
