// WIGGLE

const nametagEl = document.getElementById('nametag');
const inputEl = document.getElementById('name-input');
const buttonEl = document.getElementById('name-button');

// when the user clicks on the button.
buttonEl.addEventListener('click', () => {
    // 0) assume the user has typed something
    // okay did it

    // 1) grab what the user typed
    const whatTheUserTyped = inputEl.value;

    // 2) change the div's textContent to the text we got
    nametagEl.textContent = whatTheUserTyped;
});