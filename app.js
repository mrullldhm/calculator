// Select the display input
const display = document.querySelector('input[type="text"]');

// Get all buttons with the class of commonbutton
const buttons = document.querySelectorAll('.commonbutton input, .conflict input');

// Define an empty string to store the input value
let currentInput = "";

// Add click event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => handleInput(button.value));
});

// Function to handle input
function handleInput(value) {
  // Check if the button clicked is the "Del" button
  if (value === 'Del') {
    // Remove the last character from currentInput
    currentInput = "";
  }
  // Check if the button clicked is the "=" button
  else if (value === '=') {
    try {
      // Evaluate the current input and display the result
      currentInput = eval(currentInput.replace('X', '*').replace('√', 'Math.sqrt'));
    } catch (error) {
      currentInput = "Error";
    }
  }
  // Clear the current input if an error is displayed
  else if (currentInput === "Error") {
    currentInput = value;
  }
  else {
    // Append the value of the clicked button to currentInput
    currentInput += value;
  }

  // Update the display with the currentInput
  display.value = currentInput;
}

// Add event listener for keyboard input
document.addEventListener('keydown', (event) => {
  const key = event.key;

  // Map keyboard keys to calculator input
  if (key >= '0' && key <= '9') handleInput(key);
  if (key === '+') handleInput('+');
  if (key === '-') handleInput('-');
  if (key === '*') handleInput('X');
  if (key === '/') handleInput('/');
  if (key === '%') handleInput('%');
  if (key === '.') handleInput('.');
  if (key === 'Enter' || key === '=') handleInput('=');
  if (key === 'Backspace') handleInput('Del');
  if (key === 'Escape') currentInput = ''; // Clear the input on 'Escape'
  if (key === '(') handleInput('(');
  if (key === ')') handleInput(')');
  if (key === 's' || key === 'S') handleInput('√'); // Optional: 's' for square root

  // Update the display after handling the input
  display.value = currentInput;
});
