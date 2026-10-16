# AGENTS.md — `@codexporer.io/placeholder-size-calculator`

## Package Overview
Zero-dependency geometric utility functions for calculating aspect-ratio preserving dimensions (`getFitSize`, `getFitWidth`, `getFitHeight`).

## Peer Dependencies
None. This package is completely self-contained with zero runtime and peer dependencies.

## TypeScript Contracts (`src/index.js`)

```typescript
export interface FitSizeOptions {
  sourceWidth: number;
  sourceHeight: number;
  maxWidth: number;
  maxHeight: number;
}

export interface FitWidthOptions {
  sourceWidth: number;
  sourceHeight: number;
  maxHeight: number;
}

export interface FitHeightOptions {
  sourceWidth: number;
  sourceHeight: number;
  maxWidth: number;
}

export interface Dimensions {
  width: number;
  height: number;
}

export function getFitSize(options: FitSizeOptions): Dimensions;
export function getFitWidth(options: FitWidthOptions): number;
export function getFitHeight(options: FitHeightOptions): number;
```

## Key Exports
- `getFitSize({ sourceWidth, sourceHeight, maxWidth, maxHeight })`: Calculates the bounding box fit preserving aspect ratio and returns `{ width, height }`.
- `getFitWidth({ sourceWidth, sourceHeight, maxHeight })`: Calculates proportional width given constrained height.
- `getFitHeight({ sourceWidth, sourceHeight, maxWidth })`: Calculates proportional height given constrained width.

## Mathematical Behavior & Implementation Facts
- Scaling factor: `percent = Math.min(maxWidth / sourceWidth, maxHeight / sourceHeight)`.
- Dimensions are rounded up using `Math.ceil()`:
  - `width: Math.ceil(sourceWidth * percent)`
  - `height: Math.ceil(sourceHeight * percent)`
- `getFitWidth` internally calls `getFitSize` with `maxWidth: Number.MAX_SAFE_INTEGER` and extracts `.width`.
- `getFitHeight` internally calls `getFitSize` with `maxHeight: Number.MAX_SAFE_INTEGER` and extracts `.height`.

## Critical Guidelines for AI Agents
- **Environment Agnostic**: Pure synchronous functions with zero React or React Native dependencies. Safe for Node.js, Web, React Native, or background workers.
- **Input Validation**: Ensure `sourceWidth > 0` and `sourceHeight > 0` before calling to avoid `NaN` or division by zero.
- **Aspect Ratio Integrity**: Guarantees aspect ratio preservation without distortion or letterbox stretching.
