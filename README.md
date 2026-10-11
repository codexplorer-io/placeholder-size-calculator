# `@codexporer.io/placeholder-size-calculator`

Pure geometric utility functions for calculating aspect-ratio-preserving dimensions, bounding box fits, and responsive image placeholders in React Native and web applications.

## Installation & Peer Dependencies

```bash
yarn add @codexporer.io/placeholder-size-calculator
```

This package is completely standalone and has zero runtime dependencies.

## Quick Start

```tsx
import {
  getFitSize,
  getFitWidth,
  getFitHeight
} from '@codexporer.io/placeholder-size-calculator';

// Fit a 4000x3000 photo inside an 800x600 preview frame
const { width, height } = getFitSize({
  sourceWidth: 4000,
  sourceHeight: 3000,
  maxWidth: 800,
  maxHeight: 600
});
console.log(width, height); // 800, 600

// Determine height for a banner with fixed width 375
const targetHeight = getFitHeight({
  sourceWidth: 1920,
  sourceHeight: 1080,
  maxWidth: 375
});
console.log(targetHeight); // 211
```

## API Reference

### `getFitSize(options): { width: number; height: number }`
Calculates the largest dimensions that fit inside the bounding box defined by `maxWidth` and `maxHeight` while strictly preserving the original aspect ratio.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `sourceWidth` | `number` | Original width in pixels |
| `sourceHeight` | `number` | Original height in pixels |
| `maxWidth` | `number` | Maximum boundary width |
| `maxHeight` | `number` | Maximum boundary height |

### `getFitWidth(options): number`
Calculates the proportional width given a target maximum height.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `sourceWidth` | `number` | Original width in pixels |
| `sourceHeight` | `number` | Original height in pixels |
| `maxHeight` | `number` | Constraint maximum height |

### `getFitHeight(options): number`
Calculates the proportional height given a target maximum width.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `sourceWidth` | `number` | Original width in pixels |
| `sourceHeight` | `number` | Original height in pixels |
| `maxWidth` | `number` | Constraint maximum width |

## Mathematical Guarantee

- Scale factor `percent = Math.min(maxWidth / sourceWidth, maxHeight / sourceHeight)`.
- Returns rounded ceiling integer dimensions: `Math.ceil(sourceWidth * percent)` and `Math.ceil(sourceHeight * percent)`.
- Never skews, stretches, or distorts images or canvas shapes.

## License

MIT
