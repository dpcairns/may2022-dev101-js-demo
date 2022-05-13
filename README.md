# may2022-dev101-js-demo

## HTML Setup
1) Div with word "Hello!"
- Why do we need it? We need something to turn green.
- How do we turn it green?
    - `divElement.style.backgroundColor = 'green'`
2) Button
- Why do we need to it? It tells us WHEN to turn it green.
- How do I tell the button to listen?
```js
someButton.addEventListener('click', () => {
    // whatever i put here will HAPPEN ON CLICK
})
```

## Event
- when the user clicks the button
    - the other div on the page turns green