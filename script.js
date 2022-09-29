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

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach (btn => btn.addEventListener('click', printScreen));



// Display

function printScreen(e){
    if(e.target.innerText === 'CLEAR'){
        clearScreen();
    }else{
        const div= document.querySelector('.display');
        div.textContent+=e.target.innerText;
    }
}

function clearScreen(){
    const div= document.querySelector('.display');
    div.textContent='';
}