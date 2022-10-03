//Calculation functions

function add(a,b) {
    return a+b;
} 
function substract(a,b) {
    return a-b;
} 
function multiply(a,b) {
    return a*b;
} 
function divide(a,b) {
    return a/b;
} 

//Hardware functions

function operate (operator,a,b){
    switch(operator){
        case '+':
            return add(a,b);
            break;
        case '-':
            return substract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            if(b===0){
                return 0;
            }else{
                return divide(a,b);
            }
            break;
    }
}

//Program

const buttons = document.querySelectorAll('.number');
buttons.forEach (btn => btn.addEventListener('click', printScreen));
const div= document.querySelector('.display');
const clear = document.querySelector('.clear');
clear.addEventListener('click', clearScreen);
const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', addDecimal);
const erase = document.querySelector('.erase');
erase.addEventListener('click', eraseInScreen);
const operators = document.querySelectorAll('.operator');
operators.forEach (op => op.addEventListener('click', operationScreen));
//Global variables for storing data
let clearContent = false;
let previousValue='';
let previousOperator ='';

window.addEventListener('keydown', function(e){
    if(e.keyCode < 48 || e.keyCode > 57){
        return;
    }
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});

//Screen funtions

function printScreen(e){
    if (clearContent){
        div.textContent=e.target.innerText;
        clearContent=false;
    }else{
        div.textContent+=e.target.innerText;  
    } 
}

function clearScreen(){
    div.textContent='';
    previousValue = '';
    clearContent = false;
}

function operationScreen(e){
    clearContent = true;
    if (previousValue==='' || previousOperator === "="){
        previousValue=div.textContent;
        previousOperator=e.target.innerText;
    }else{
        const operationResult = Math.round(operate(previousOperator, parseFloat(previousValue),parseFloat(div.textContent))*100)/100;
        previousValue = operationResult;
        previousOperator=e.target.innerText;
        div.textContent=operationResult;
    }
}

function eraseInScreen (){
    const newScreenValue = div.textContent.slice(0,-1);
    div.textContent = newScreenValue;
    clearContent=false;
}

function addDecimal () {
    if (div.textContent.includes('.')){
        return;
    }
    div.textContent += '.';
    clearContent=false;
}
