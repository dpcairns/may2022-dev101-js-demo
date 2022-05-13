// WIGGLE
// WE always just 
// IMPORT functions, 
// GRAB DOM elements with 
// GETELEMENTBYID, 
// LET state, and describe 
// EVENTS

// boxEl is an object: DOM element
const boxEl = document.getElementById('my-cool-box');
const buttonEl = document.getElementById('my-button');

// I think I have grabbed the DOM elements...
// I need to validate that belief

buttonEl.addEventListener('click', () => {
    // i believe i have an event listener!
    // - when the user clicks the button
    // - the other div on the page turns green
    boxEl.style.backgroundColor = 'green';
});