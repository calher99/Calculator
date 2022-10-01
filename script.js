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
            return divide(a,b);
            break;
    }
}


const buttons = document.querySelectorAll('.number');
buttons.forEach (btn => btn.addEventListener('click', printScreen));
const div= document.querySelector('.display');
const clear = document.querySelector('.clear');
clear.addEventListener('click', clearScreen);
const equal = document.querySelector('.equal');
equal.addEventListener('click', equalScreen);
const operators = document.querySelectorAll('.operator');
operators.forEach (op => op.addEventListener('click', operationScreen));
let previousValue='';
let previousOperator ='';

function printScreen(e){
    div.textContent+=e.target.innerText;  
}

function clearScreen(){
    div.textContent='';
    previousValue = '';
}
function equalScreen() {
    console.log(div.textContent);
}
function operationScreen(e){
    
    if (previousValue===''){
        previousValue=div.textContent;
        previousOperator=e.target.innerText;
    }else{
        const operationResult = operate(previousOperator, parseInt(previousValue),parseInt(div.textContent));
        previousValue = operationResult;
        previousOperator=e.target.innerText;
        div.textContent=operationResult;

    }
   
}


/*

function printScreen(e){
    const div= document.querySelector('.display');
    const displayContent= div.textContent;
    console.log(div.textContent);
    if (displayContent ==='') {
        if(e.target.innerText === 'CLEAR' || e.target.innerText === '+' || e.target.innerText === '-' || e.target.innerText === '*' || e.target.innerText === '/' || e.target.innerText === '='){
            clearScreen();
        }else{
            div.textContent+=e.target.innerText;
        } 
    }else{
        if(e.target.innerText === 'CLEAR'){
            clearScreen();
        }else{
            switch(e.target.innerText){
                case "+":
                    clearScreen()
                    break;
                case '-':
                    clearScreen()
                    break;
                case '*':
                    clearScreen()
                    break;
                case '/':
                    clearScreen()
                    break;
                case "=":
                    clearScreen()
                    break;
                default:
                    div.textContent+=e.target.innerText;
            } 
        }
    }

    
}

function clearScreen(){
    const div= document.querySelector('.display');
    div.textContent='';
}

*/