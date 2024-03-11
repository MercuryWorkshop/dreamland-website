---
layout: layouts/Base.astro
order: 5
---

# Conditional Rendering

Being able to dynamically display data with `{use()}` is great, but it's also common to hide and show elements depending on data. The `$if()` macro helps you do that easily.


```jsx
<div>
   {$if(condition,
       <div>rendered if true</div>,
       <div>rendered if false<div>,
   )}
</div>
```


Here's an example, using a button to show/hide an input field.
```js
function App(){
    this.showInput = false;

    return (
       <div>
           <h1>Conditional Rendering!</h1>

           <button on:click={() => this.showInput = !this.showInput}>
                {use(this.showInput, show=>show ? "Hide Input" : "Show Input")}
           </button>
           
           {$if(use(this.showInput),
               <input placeholder="type here...." />
           )}
       </div>
    )
}
```