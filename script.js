// Calculator operations vars
let firstNum = 0;
let operator = null;
let secondNum = 0;

// Returns the result of the calculator operation 
function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
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