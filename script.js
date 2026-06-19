// Calculator operations vars
let firstNum = '';
let operator = '';
let secondNum = '';
let position = 1;

// Gets the reference of the divs
const display = document.querySelector('.display');
const container = document.querySelector('.buttons-input');

// Does the calculations based on user inputs
container.addEventListener('click', (event) => {
    // Checks if button got actually clicked
    if (event.target.tagName !== 'BUTTON') return;

    let symbol = event.target.textContent
    const operators = ['+', '-', '*', '/'];

    // If button clicked was a symbol, use that on calculation and if twice clicked then calculates it
    if (operators.includes(symbol)) {
        // Checks if theres a firstNum
        if (firstNum === '') return;

        if (firstNum.toString().includes("BUDDY!")) return;

        if (firstNum && secondNum && operator) {
            let newNum = operate(firstNum, operator, secondNum);
            
            if (newNum.toString().includes("BUDDY!")) {
                firstNum = '';
                operator = '';
                secondNum = '';
                position = 1;
                updateDisplay();
                return;
            }

            firstNum = newNum.toString();
            secondNum = '';
        }

        operator = symbol;
        position = 2
    } 
    // Calculates the operation and prevents multiple calculations
    else if (symbol === '=') {
        if (firstNum && secondNum && operator) {
            let newNum = operate(firstNum, operator, secondNum);
            
            if (newNum.toString().includes("BUDDY!")) {
                // Shows the error message to the display
                firstNum = newNum;
                operator = '';
                secondNum = '';
                position = 1;
            } else {
                // Keep the answer on screen for next calculations
                firstNum = newNum.toString();
                operator = '';
                secondNum = '';
                position = 1;                
            }
            
        }
    } 

    // Clears the whole screen 
    else if (symbol === 'Clear') {
        clearDisplay();
        updateDisplay();
        return;
    }

    // Inserts the user inputs based on its position
    else {
        // Clears the screen if it still has the error message
        if (firstNum.toString().includes("BUDDY!")) {
            clearDisplay();
        }

        // Sets the new numbers
        else if (position === 1) {
            firstNum += symbol;
        } else if (position === 2) {
            secondNum += symbol;
        }
    }


    // Updates the screen every button click
    updateDisplay();
})


// Update the screen based on the current values
function updateDisplay() {
    display.textContent = `${firstNum} ${operator} ${secondNum}`.trim();
}


// Resets the current values
function clearDisplay() {
    firstNum = '';
    operator = '';
    secondNum = '';
    position = 1;
}


// Returns the result of the calculator operation 
function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return add(Number(firstNum), Number(secondNum));
        case '-':
            return subtract(Number(firstNum), Number(secondNum));
        case '*':
            return multiply(Number(firstNum), Number(secondNum));
        case '/':
            return divide(Number(firstNum), Number(secondNum));
    }
}

// Returns the sum of two numbers
function add(a, b) {
    return a + b;
}

// Returns the difference between two numbers
function subtract(a, b) {
    return a - b;
}

// Returns the product of two numbers
function multiply(a, b) {
    return a * b;
}

// Returns the quotient of two numbers
function divide(a, b) {
    if (b === 0) {
        return "BUDDY! || You can't divide by zero.";
    }
    let result = a / b;
    // Round only if theres a decimal value
    return result % 1 === 0 ? result : Number(result.toFixed(2));
}