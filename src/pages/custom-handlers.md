---
layout: layouts/Document.astro
order: 8
---

# Custom Handlers

The `handle` function takes in a reference pointer returned by `use` and a closure, which it will call once immediately, and then every time after that when the data updates.

```jsx
handle(use(this.text), () => {
	console.log("new value of this.text: ", this.text);
});
return <input bind:value={use(this.text)}/>
```
