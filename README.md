# may2022-dev101-js-demo


### Thing you need to know:
```js
// i can turn a string into a number like so:
Number('5')
```

## How to grab a DOM element so we can play with it
```js
const myEl = document.getElementById('my-id')
```

## Okay, I grabbed it . . . now what?
## Things I know how to do WITH A DOM ELEMENT

0) listen for a click / add an event listener

```js
myButton.addEventListener('click', () => {

})
```

1) set the text of a DOM element

```js
myEl.textContent = 'some new thing'
```

2) set the style of a DOM element

```js
myEl.style.color = 'red'
```

3) get the value of an input DOM element

```js
const whateverTheUserTyped = myInputEl.value
```


## Calculator App
## HTML Setup
- two inputs
- Why? Figure out what two numbers the user typed
- How? get the value of an input DOM element
- `const whatTheUserTyped = inputEl.value`

- button
- Why? Figure out WHEN to add and display the numbers
- How? listen for a click

```js
    button.addEventListener('click', () => {
        // code in here will happen after the click
    })
```
- div
- Why? A place to display the sum
- How? `divEl.textContent = something`

## Event