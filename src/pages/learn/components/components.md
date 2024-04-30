---
layout: layouts/Document.astro
order: 2
---

# Components

Components are little smaller pieces of HTML and js that you can use elsewhere in your app. Components are also HTML elements, when you construct one it will be a normal DOM element.

```jsx
function ButtonComponent(){
    return (
        <div>
            {this.title}
            <button>{this.children}</button>
        </div>
    )
}

let element = <ButtonComponent title="some title">Button Text<ButtonComponent/>;
console.log(element); // HTMLDivElement...
document.body.appendChild(element);
```

If you're using typescript, the syntax is slightly different.

```tsx
const ButtonComponent: Component<
	{
		title: string;
	},
	{
		children: string;
	}
> = function () {
	return (
		<div>
			{this.title}
			<button>{this.children}</button>
		</div>
	);
};
```

> ### Note
>
> Unlike React, all components are only fully executed once per creation, so you are safe adding code with potential side-effects.

## Lifecycle

Declaring this.mount in the component sets a callback for after the component is initialized (but not necessarily after it's added to DOM)

This gives you access to `this.root`, the underlying HTML which you can run any DOM function on

```jsx
function UselessComponent() {
	this.mount = () => {
		console.log(this.root); // <div>hello!.....
		console.log("goodbye world!");
		this.root.remove();
	};

	return <div>hello!</div>;
}
```
