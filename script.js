const calculatorDisplay=document.querySelector("h1");
const inputBtns=document.querySelectorAll("button");
const clearBtn=document.getElementById("clear-btn");

//Global variables
let firstValue=0;
let operatorValue='';
let awaitingNextValue=false;

const calculate={
    '/': (firstNumber, secondNumber)=> firstNumber/secondNumber,
    '*': (firstNumber, secondNumber)=> firstNumber*secondNumber,
    '+': (firstNumber, secondNumber)=> firstNumber+secondNumber,
    '-': (firstNumber, secondNumber)=> firstNumber-secondNumber,
    '=': (firstNumber, secondNumber)=> secondNumber,
}

function sendNumberValue(number){
    if(awaitingNextValue){
        calculatorDisplay.textContent=number;
        awaitingNextValue=false;

    }else{
        if(calculatorDisplay.textContent=="0"){
        calculatorDisplay.textContent=number;
    }else{
        calculatorDisplay.textContent=`${calculatorDisplay.textContent}${number}`;
    }
    }
    
    
}

//reset all variables
function resetAll(){
    firstValue=0;
    operatorValue='';
    awaitingNextValue=false;
    calculatorDisplay.textContent='0';
}

//Add decimal point
function addDecimal(){
    if(awaitingNextValue){
        return;
    }
    if(!calculatorDisplay.textContent.includes('.')){
        calculatorDisplay.textContent=`${calculatorDisplay.textContent}.`;
    }
}

//Operator function
function useOperator(operator){
    const currentValue=Number(calculatorDisplay.textContent);
    //prevent multiple operator entries
    if(operatorValue && awaitingNextValue){
        operatorValue=operator;
        return;
    };
    if(!firstValue){
        firstValue=currentValue
    }else{
        // console.log(firstValue, operator,currentValue);
        const calculation=calculate[operatorValue](firstValue,currentValue);
        firstValue=calculation;
        // console.log(calculation);
        calculatorDisplay.textContent=calculation;
    }
    awaitingNextValue=true;
    operatorValue=operator;

}

//Event listeners
inputBtns.forEach((inputBtn)=>{
    if(inputBtn.classList.length==0){
        inputBtn.addEventListener('click',()=>sendNumberValue(inputBtn.value));
    }else if(inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click',()=>useOperator(inputBtn.value));
    }else if(inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click',addDecimal);
    }
});


clearBtn.addEventListener('click', ()=>{
    resetAll();
});