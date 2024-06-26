---
layout: layouts/Document.astro
order: 8
---

# useChange

The useChange function is used to run a callback whenever a value changes. This is useful for running side effects when a value changes, such as updating the DOM or making a network request.

```jsx
useChange(this.text, () => {
	console.log("new value of this.text: ", this.text);
});
return <input bind:value={use(this.text)} />;
```

You can also pass in an array of pointers to watch multiple values.

```jsx
useChange([this.text, this.count], () => {
	console.log("new value of this.text: ", this.text);
	console.log("new value of this.count: ", this.count);
});
```
