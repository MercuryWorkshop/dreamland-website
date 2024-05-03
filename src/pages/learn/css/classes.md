---
layout: layouts/Document.astro
order: 3
---

## Class arrays

You can use arrays of class names in dreamland to simplify toggling classes. Here's an example:

```jsx
let state = $state({
	active: true,
});

let element = <div class={["container", use(state.active, (a) => a && "active")]}>Hello, world!</div>;
```
