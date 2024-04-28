---
layout: layouts/Document.astro
order: 10
---
# CSS

## Inline styles

Similarly to React, you can use js inline styles in dreamland. Here's an example:

```jsx
let element = (
    <div style={{color: "red", backgroundColor: "blue"}}>
        Hello, world!
    </div>
);
```
You can also use the `use` function to bind a variable to a style property:

```jsx
let state = $state({
    color: "red"
});

let element = (
    <div style={{color: use(state.color)}}>
        Hello, world!
    </div>
);
```

## Tagged CSS
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
const App = function(){
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
}
```
Note that the css above the selectors gets applied to the root element. As of now, **do not** apply multiple selectors on one line.



## Class arrays
You can use arrays of class names in dreamland to simplify toggling classes. Here's an example:
```jsx
let state = $state({
    active: true
});

let element = (
    <div class={["container", use(state.active, a => a && "active")]}>
        Hello, world!
    </div>
);
```


