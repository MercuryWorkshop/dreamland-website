---
layout: layouts/Document.astro
order: 9
---

# Component `bind:`

`bind:` is where the true power of dreamland's components start to show. It creates a two-way data mapping between two instances of any component.

```tsx
const InputField: Component<{
	title: string
	// text value goes in public properties since it's visible from the outside
	text: string
},{
	// goes in the private section because it doesn't need to be visible from the outside
	hint: string
}> = function() {
	handle(use(this.text), ()=>{
		this.hint = ""
		if (this.text.length < 3)
			this.hint = "too short!"
		if (this.text.length > 12)
			this.hint = "too long!"
	})
	return (
		<div>
			// title won't change so we don't use `use`
			{this.title}
			<input bind:value={use(this.text)} />
			{use(this.hint)}
		</div>
	)
}

const SignUp: Component<{},{
	username: string
	password: string
}> = function() {
	this.username = "placeholderusername123"
	let onsubmit = () => {
		console.log(`Tried to make a new account with username ${this.username}, password ${this.password}`)
		
		// clear the input boxes
		this.username = ""
		this.password = ""
	};
	
	return (
		<div>
			<h1>Sign Up</h1>
			<InputField title="Username: " bind:text={use(this.username)} />
			<InputField title="Password: " bind:text={use(this.password)} />
			<button on:click={()=>onsubmit()}>Submit</button>
		</div>
	)
}
```
Notice how when the user types in the password field, the changes ripple outwards from there into the component's `this.text`, then to the SignUp component's `this.password`. And similarly, if `this.password` is set from within the SignUp component, it will automatically update the value of `this.text` in the other component, updating the text visible in the input field and triggering the "too short" hint.

This allows us to easily start composing multiple components together and and reuse components in multiple places.
