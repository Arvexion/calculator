// Calculator operations vars
let firstNum = '';
let operator = '';
let secondNum = '';
let position = 1;

const display = document.querySelector('.display');
const container = document.querySelector('.buttons-input');

container.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') return;

    let symbol = event.target.textContent
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(symbol)) {
        operator = symbol;
        position = 2
    } 
    else if (symbol === '=') {
        let firstNum = operate(firstNum, operator, secondNum);
        clearDisplay()
    } else if (position === 1) {
        firstNum += symbol;
    } else if (position === 2) {
        secondNum += symbol;
    }

    updateDisplay();
})

function clearDisplay() {
    operator = '';
    secondNum = '';
    position = 1;
}

function updateDisplay() {
    display.textContent = `${firstNum} ${operator} ${secondNum}`
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
        default: 
            return "ERROR || Invalid Operator";
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
    return a / b;
}