let calculation = [], result = 0, operator = '';

function display(n) {
    calculation.push(n);
    document.querySelector("#output").innerHTML = calculation.join('');
    return;
}

function add() {
    document.querySelector("#output").innerHTML = '+';
    result += Number(calculation.join(''));
    calculation = [], operator = '+';
}

function subtract() {
    document.querySelector("#output").innerHTML = '-';
    if(result == 0) {
        result += Number(calculation.join(''));
    }
    else {
        result -= Number(calculation.join(''));
    }
    calculation = [], operator = '-';
}

function multiply() {
    result = 1;
    document.querySelector("#output").innerHTML = '*';
    result *= Number(calculation.join(''));
    calculation = [], operator = '*';
}

function divide() {
    document.querySelector("#output").innerHTML = '/';
    if(result == 0) {
        result = Number(calculation.join(''));
    }
    else {
        result /= Number(calculation.join(''));
    }
    calculation = [], operator = '/';
}

function equalsTo() {
    switch(operator) {
        case '+':
            result += Number(calculation.join(''));
            break;
        case '-':
            result -= Number(calculation.join(''));
            break;
        case '*':
            result *= Number(calculation.join(''));
            break;
        case '/':
            result /= Number(calculation.join(''));
            break;
    }
    document.querySelector("#output").innerHTML = result;
    calculation = [];
    calculation.push(result);
    result = 0;
}

// FIXED
// This function does not seem to be working
// Looks like it's not being called
// Issue: clear() is apparently an obsolete inbuilt function which is not supposed to do anything 
// FIX: change function name from clear to clearCalc
function clearCalc() {
    result = 0, calculation = [];
    document.querySelector("#output").innerHTML = 0;
}
