---
layout: layouts/Base.astro
order: 11
---


# Stores
### Note
> This requires the `stores` feature to be enabled in your build of dreamland. See the [Building Dreamland](/building-dreamland) page for more information.

If you're writing a simple app with the need to store state persistently through page reloads, you can use the `store` feature of dreamland. Store objects work the same way as stateful objects, but data in them persists.

## Creating a store

The `$store` function creates a store, in place of `$state`. Note that you do not need to nest `$store` objects. Nested stateful objects will automatically be stored.


(example given in plain javascript)
```js
let store = $store({
    count: 0,
    options: $state({
        fontSize: 16
    })
}, { ident: "my-store", backing: "localstorage", autosave: "auto" })

function Counter() {
    return html`
        <div style=${{ fontSize: use`${store.options.fontSize}px` }}>
            <button on:click=${()=>store.count++}>Increment</button>
            <p>${use(store.count)}</p>
        </div>
    `
}

function App() {
    return html`
        <div>
            <${Counter}></${Counter}>
            font size:
            <input type="number" bind:value=${use(store.options.fontSize)} />
        </div>
    `
}

```


## `$store` options
| | |
| -------- | ------- |
| ident    | string, should be a unique identifier |
| backing  | either "localstorage" or a { read: ()=>string, write: (string)=>void } object |
| autosave | either "auto" (saves every time a value changes, deeply nested), "manual" (only saves when saveAllStores is called), or "beforeunload" (saves when page closes)|


The `saveAllStores()` function is provided to manually save all stores if `autosave` is manual or beforeunload.
