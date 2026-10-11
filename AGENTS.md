# AGENTS.md — `@codexporer.io/placeholder-size-calculator`

## Package Overview
Zero-dependency geometric utility functions for calculating aspect-ratio preserving dimensions (`getFitSize`, `getFitWidth`, `getFitHeight`).

## Key Exports
- `getFitSize({ sourceWidth, sourceHeight, maxWidth, maxHeight })`: Returns `{ width, height }`.
- `getFitWidth({ sourceWidth, sourceHeight, maxHeight })`: Returns proportional width.
- `getFitHeight({ sourceWidth, sourceHeight, maxWidth })`: Returns proportional height.

## Critical Guidelines for AI Agents
- Pure synchronous functions with zero React or React Native dependencies. Safe for node, web, native, or background workers.
- Always verify `sourceWidth > 0` and `sourceHeight > 0` before calling to avoid divide-by-zero results.
- Returns integer dimensions via `Math.ceil()`.
