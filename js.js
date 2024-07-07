class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return 'Infinity';
        }
        return a / b;
    }
}

let display = document.getElementById('result');
let calc = new Calculator();
let currentOp = '';
let currentVal = '';

function input(num) {
    display.value += num;
}

function clearDisplay() {
    display.value = '';
    currentVal = '';
    currentOp = '';
}

function operate(op) {
    if (display.value !== '' && currentOp === '') {
        currentVal = display.value;
        currentOp = op;
        display.value += op;
    }
}

function calculate() {
    if (display.value.includes(currentOp)) {
        let components = display.value.split(currentOp);
        let num1 = parseFloat(components[0]);
        let num2 = parseFloat(components[1]);
        let result = 0;
        switch (currentOp) {
            case '+': result = calc.add(num1, num2); break;
            case '-': result = calc.subtract(num1, num2); break;
            case '*': result = calc.multiply(num1, num2); break;
            case '/': result = calc.divide(num1, num2); break;
        }
        display.value = result;
        currentOp = '';
    }
}
