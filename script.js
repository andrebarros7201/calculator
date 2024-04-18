const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let a = '';
let b = '';
let operation = '';

const operate = (a, b, operator) => {
    switch (operator) {
        case '+':
            return add(a, b);
            break;

        case '-':
            return subtract(a, b);
            break;

        case '*':
            return multiply(a, b);
            break;

        case '/':
            return divide(a, b);
            break;

        default:
            break;
    }
}

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')

console.log(numbers);
console.log(operators);


numbers.forEach(number =>{
    number.addEventListener('click', () =>{
        if(!operation){
            a += number.textContent;
            console.log('A: ' + a);
        }else{
            b += number.textContent;
            console.log('B:' + b);
        }
    })
})

operators.forEach(operator =>{
    operator.addEventListener('click', () =>{
        operation = operator.textContent;
        console.log(operation);
    })
})

const equals = document.querySelector('#equals');
equals.addEventListener('click', () =>{
    console.log(operate(Number(a), Number(b), operation));
})

