const calculatorDisplay=document.querySelector("h1");
const inputBtns=document.querySelectorAll("button");
const clearBtn=document.getElementById("clear-btn");

function sendNumberValue(number){
    if(calculatorDisplay.textContent=="0"){
        calculatorDisplay.textContent=number;
    }else{
        calculatorDisplay.textContent=`${calculatorDisplay.textContent}${number}`;
    }
    
}

//reset all
function resetAll(){
    console.log('clear')
    calculatorDisplay.textContent='0';
}

//Add decimal point
function addDecimal(){
    if(!calculatorDisplay.textContent.includes('.')){
        calculatorDisplay.textContent=`${calculatorDisplay.textContent}.`;
    }
}

//Event listeners
inputBtns.forEach((inputBtn)=>{
    if(inputBtn.classList.length==0){
        inputBtn.addEventListener('click',()=>sendNumberValue(inputBtn.value));
    }else if(inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click',()=>sendNumberValue(inputBtn.value));
    }else if(inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click',addDecimal);
    }
});


clearBtn.addEventListener('click', ()=>{
    resetAll();
});