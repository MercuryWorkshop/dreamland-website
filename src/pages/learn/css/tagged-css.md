---
layout: layouts/Document.astro
order: 2
---

### Note

> This requires the `css` feature to be enabled in your build of dreamland. See the [Building Dreamland](/building-dreamland) page for more information.

dreamland also comes with an optional CSS-in-js solution, simplifying some boilerplate. This is provided through the `css` function, which returns a class name. Here's an example:

```jsx
let styles = css`
	color: green;
	background-color: yellow;
	.button {
		color: red;
		background-color: blue;
	}
`;

let element = (
	<div class={styles}>
		Hello, world!
		<button class="button">Click me!</button>
	</div>
);
```

To simplify boilerplate in functional components, css is usually written like this:

```tsx
const App = function () {
	this.css = css`
		color: green;
		background-color: yellow;

		button {
			color: red;
			background-color: blue;
		}
	`;

	return (
		<div>
			Hello, world!
			<button>Click me!</button>
		</div>
	);
};
```

Note that the css above the selectors gets applied to the root element. As of now, **do not** apply multiple selectors on one line.
