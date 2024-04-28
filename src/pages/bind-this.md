---
layout: layouts/Document.astro
order: 6
---

# `bind:this`

As an alternative to doing `this.root.querySelector(...)`, bind:this lets you pick out a specific element in the component and assign it to a variable.

In this example we create a sacrificial `<div>`, assign it to `this.renderRoot`, and then after mount we can access its innerHTML property as well as any other.
```tsx
const RawHTMLRenderer: Component<{
	html: string
}, {
	renderRoot: HTMLDivElement
}> = function() {
	this.mount = () => {
		this.renderRoot.innerHTML = this.html
	}
	return (
		<div>
			unsanitized html below:
			<div bind:this={use(this.renderRoot)} />
		</div>
	)
}

document.body.appendChild(<RawHTMLRenderer html="<h1>hi</h1>" />)
```
