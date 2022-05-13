# may2022-dev101-js-demo

## How to make a plan
1) Draw simple wireframes
2) Name the HTML elements you need to make the wirefram
3) For each HTML element, ask, "Why do i need this?"
4) For each HTML element, turn the "Why" into a "How" (some js code)
5) Describe the events as if it's a peanut butter jelly sandwich instructions
6) WIGGLE and click together your plan

## HTML Setup
1) An empty div
- Why? A place to display our text
- How? `divEl.textContent = whateverText`
2) An input
- Why? Our data source: we need to know what the user typed
- How? `const whatTheUserTyped = inputEl.value`
3) A button
- Why? We need to know WHEN to display the text
- How?
```js
buttonEl.addEventListener('click', () => {
    // whatever i put here will happen on click
})
```

## Event
When the user clicks the button . . .
- the text they typed is displayed in the box
0) assume the user has typed something
1) grab what the user typed
2) change the div's textContent to the text we got

These are the only 4 things that ever happen in an event listener for the rest of your career.    
GET DOM
SET DOM
GET STATE
SET STATE
