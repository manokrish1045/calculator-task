// Get the display element
const display = document.getElementById('display');

// Append a character to the display
function appendChar(char) {
    display.value += char;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character from the display
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    const expression = display.value;
    let result;

    try {
        result = eval(expression);
        if (result === undefined || result === Infinity) {
            throw new Error('Invalid expression');
        }
    } catch (error) {
        result = 'Error';
    }

    display.value = result;
}

// Handle keyboard events
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (/[0-9]|\.|\+|-|\*|\/|%/.test(key)) {
        appendChar(key);
    } else {
        event.preventDefault();
        alert('Only numbers are allowed');
    }
});
