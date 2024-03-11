---
layout: layouts/Base.astro
order: 4
---

# `bind:value` and `bind:checked`

## `bind:value`
An extremely common pattern when handling input is to tie the value of an `<input>` or `<textarea>` to a variable in javascript
```tsx
const TextInput: Component<{},{
	textvalue: string
}> = function() {
	this.textvalue = "Preset text..."
	return (
		<div>
			<input bind:value={use(this.textvalue)} />
			value of input is: {use(this.textvalue)}
		</div>
	)
}
```

Remember that `bind` always goes 2 ways. Whenever you assign the value of `this.textvalue` the input will update, and whenever the user types into the input field the value of `this.textvalue` will update. You can also use this for `<textarea>`

## `bind:checked`
Same thing as `bind:value` but specifically for checkboxes
```tsx
const CheckBox: Component<{},{
	ischecked: boolean
}> = function() {
	this.ischecked = true
	return (
		<div>
			<input type="checkbox" bind:checked={use(this.ischecked)} />
		</div>
	)
}
```

