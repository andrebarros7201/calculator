const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let a = undefined;
let b = undefined;
let operator = undefined;

const operate = (a, b, operator) => {
    switch (operator) {
        case '+':
            add(a, b);
            break;

        case '-':
            subtract(a, b);
            break;

        case '*':
            multiply(a, b);
            break;

        case '/':
            divide(a, b);
            break;

        default:
            break;
    }
}