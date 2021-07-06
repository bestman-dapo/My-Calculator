const display1El = document.querySelector('.display1');
const display2El = document.querySelector('.display2');
const lastEntryEl = document.querySelector('.last-entery');
const numberEl = document.querySelectorAll('.button');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal')
const clearEl = document.querySelector('.delete');

let display1 = '';
let display2 = '';
let result = null;
let haveDot = false;
let lastOperation = '';

numberEl.forEach(number => {
    number.addEventListener('click', (e)=>{
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        }else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        display2 += e.target.innerText;
        display2El.innerText = display2;
    })
});

operationEl.forEach(operation => {
    operation.addEventListener('click',(e)=>{
        haveDot = false;
        const operationName = e.target.innerText;
        if (!display2) return;
        if (display1 && display2 && lastOperation) {
            mathOperation();
        }else{
            result = parseFloat(display2);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
});

function clearVar(name = ''){
    display1 += display2 + ' ' + name + ' ';
    display1El.innerText = display1;
    display2El.innerText = '0';
    display2 = '';
    lastEntryEl.innerText = result;
}

function mathOperation() {
    if (lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(display2);
    }else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(display2);
    }else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(display2);
    }else if(lastOperation === '/') {
        result = parseFloat(result) / parseFloat(display2);
    }
};

equalEl.addEventListener('click', (e)=>{
    if (!display1 && !display2 ) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    lastEntryEl.innerText = '0';
    display2 = result;
    display1 = '';
})

clearEl.addEventListener('click',(e)=>{
    display1 = '';
    display2 = '';
    display1El.innerText = '0';
    display2El.innerText = '0';
    lastEntryEl.innerText = '0';
    result = '';
})
