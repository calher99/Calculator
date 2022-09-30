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
buttons.forEach (btn => btn.addEventListener('click', printScreen));

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