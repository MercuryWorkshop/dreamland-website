---
layout: layouts/Document.astro
order: 7
---

# Arrays

You can pass an array of HTML elements (or strings) inside an element and it will render them correctly

```jsx
let items = [<div>1</div>, <div>2</div>];
let elm = <div>{items}</div>;
```

You can also do it with dynamic list references:

```jsx
this.items = [<div>1</div>, <div>2</div>];
let elm = <div>{use(this.items)}</div>;

this.items = [<div>a different</div>, <div>list</div>];
```

For mutating arrays, if you run `push` on an array it will not update automatically. You can either do

```jsx
this.items.push(<div>another item</div>);
this.items = this.items;
```

or use es6 spread syntax

```jsx
this.items = [...this.items, <div>another item</div>];
```

Using `this.items` to store the html elements from `ToDoItem`, we can easily create a todo app with dynamic add/remove elements.

```tsx
const ToDoItem: Component<
	{
		// required properties
		title: string;
		remove: () => void;
	},
	{}
> = function () {
	return (
		<div>
			// we don't need to use `use` here because `title` doesn't change over the lifetime of this component. If
			title is needed to react to changes, `use` can be added
			{this.title}
			<button on:click={() => this.remove()}>Remove Item</button>
		</div>
	);
};

const ToDoList: Component<
	{
		// items can also be an HTMLElement[]
		items: ComponentElement<typeof ToDoItem>[];
		text: string;
	},
	{}
> = function () {
	this.items = [];

	return (
		<div>
			<input bind:value={use(this.text)} />
			<button
				on:click={() => {
					let newitem = (
						<ToDoItem
							title={this.text}
							remove={() => (this.items = this.items.filter((i) => i != newitem))}
						/>
					);
					this.items = [...this.items, newitem];
				}}
			/>
			<div>{use(this.items)}</div>
		</div>
	);
};
```

Notice how `this.items = [...this.items, newitem]` added the new todo element and `this.items = this.items.filter(...)` removed the specific element when the button was pressed

## array.map

Often times you'll have an array that represents data and not the html elements directly. Using the array map, you can construct an html element based on the array data

```jsx
this.items = [{ text: "a string" }, { text: "another string" }];
<div>{use(this.items, (items) => items.map((item) => <span>{item.text}</span>))}</div>;
```
