# Hooks — example

This folder contains React hooks used across the app.

Example usage:

```tsx
import useMyHook from './useMyHook'

export default function Component() {
  const value = useMyHook()
  return <div>{String(value)}</div>
}
```

Replace `useMyHook` with your hook filenames.
