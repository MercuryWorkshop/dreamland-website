---
layout: layouts/Document.astro
order: 1
---

## Inline styles

Similarly to React, you can use js inline styles in dreamland. Here's an example:

```jsx
let element = <div style={{ color: "red", backgroundColor: "blue" }}>Hello, world!</div>;
```

You can also use the `use` function to bind a variable to a style property:

```jsx
let state = $state({
	color: "red",
});

let element = <div style={{ color: use(state.color) }}>Hello, world!</div>;
```
