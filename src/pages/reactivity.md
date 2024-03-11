---
layout: layouts/Base.astro
order: 3
---

# Reactivity
The reactivity system is extremely simple, but it can take some time to get to know it.

At a basic level, if you call `use` and pass in a property that belongs in a stateful context, it gives back a dynamic reference that will update automatically as the data updates.

The value of `this` inside a functional component is always stateful, letting this example from earlier work
```js
function App() {
  this.counter = 0;
  return (
    <div>
      <button on:click={() => this.counter++}>Click me!</button>
      <p>
       {use(this.counter)}
      </p>
    </div>
  );
}
```
Whenever `counter` is updated, either from inside the component, from a parent component, or from devtools, the specific elements that depend on the value precisely update to reflect the new value with minimal overhead.

You can also manually create a stateful object, which is useful for nesting.
```js
let state = stateful({
    a: 0,
    b: stateful({
        c: 1
    })
})

let elm = <div> a is {use(state.a)}, c is {use(state.b.c)}</div>
document.body.appendChild(elm);

state.a++
state.b.c++
// div will now show "a is 1, c is 2"
```

## Mapping
It's important to remember that `use` yields a reference pointer, not the actual value. As such, something like this will not work
```jsx
<div>
    <button on:click={() => this.counter++}>Click me!</button>
    {use(this.counter % 2 == 0 ? "Count Is Even" : "Count Is Odd")}
</div>
```
As the function is only executed once ever. To have additional logic tied to state changes, you can pass in a closure to the second argument of use.
```jsx
<div>
    <button on:click={() => this.counter++}>Click me!</button>
    {use(this.counter, count => count % 2 == 0 ? "Count Is Even" : "Count Is Odd")}
</div>
```
This will have the expected behavior, flipping between even and odd when the button is pressed. Remember that the "count % 2 == 0" operation is recalculated every time `count` changes, but nothing else in the function is rerun.

