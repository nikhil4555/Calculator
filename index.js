let inputField = document.querySelector('input');
let buttons = document.querySelectorAll('.data button');
let history = []; 

// For the current input values
const currentInput = (value) => {
    inputField.value += value;
};

// Clearing the entire input
const clearInput = () => {
    inputField.value = '';
};

// Using slice to delete the last element
const deleteLastChar = () => {
    inputField.value = inputField.value.slice(0, -1);
};

// TO store the last 5 values of the history
const addToHistory = (expression, result) => {
    if (history.length >= 5) {
        history.shift(); // Remove the oldest calculation if history is full
    }
    history.push(`${expression} = ${result}`);
    displayHistory();
};

// Function to display the history
const displayHistory = () => {
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = history.slice().reverse().map(item => `<li>${item}</li>`).join('');
};

// Function to evaluate the expression and handle history
const calculateResult = () => {
    let expression = inputField.value;
    let result;
    try {
        result = eval(expression);
        inputField.value = result;
        addToHistory(expression, result);
    } catch (error) {
        inputField.value = 'Invalid';
    }
};

// Using event listeners to access the inside values
buttons.forEach(button => {     //Using foreach to find each element 
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;     //Getting the each element value using eventlistner
        
        switch (buttonValue) {
            case 'CE':
                clearInput();
                break;
            case 'DEL':
                deleteLastChar();
                break;
            case '=':
                calculateResult();
                break;
            default:
                currentInput(buttonValue);
                break;
        }
    });
});


