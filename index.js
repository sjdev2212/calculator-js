const displayElement1 = document.querySelector('.display-1')
const displayElement2 = document.querySelector('.display-2')
const tempResult = document.querySelector('.temp-result')
const inputNumber = document.querySelectorAll('.number')
const operationElement = document.querySelectorAll('.operation')
const equalElement = document.querySelector('.equal')
const allClear = document.querySelector('.all-clear')
const lastClear = document.querySelector('.last-clear')
const allButtons = document.querySelectorAll('.btn')

let disNum1 = '';
let disNum2 = '';
let resutl = null;
let lastOperation = '';
let haveDot = false;

inputNumber.forEach(num => {
    num.addEventListener('click', (e)=> {
        if (e.target.innerText === '.' && haveDot === false){
            haveDot = true;
        }
        else if (e.target.innerText === '.' && haveDot == true){
            return;

        }
        disNum2 += e.target.innerText;
        displayElement2.innerText = disNum2
    })
})
operationElement.forEach(operation =>{
    operation.addEventListener('click',(e) => {
        if (!disNum2) {
            return
        }
        haveDot=false;
        const operationName = e.target.innerText;
        if( disNum1 && disNum2 && lastOperation) {
            mathOperation()
        }
        else {
            resutl= parseFloat(disNum2)
        }
clearVar(operationName)
lastOperation = operationName
    })
})

function clearVar (name=''){
    disNum1 += disNum2 + '' + name + '';
    displayElement1.innerText=disNum1;
    displayElement2.innerText = '';
    disNum2= '';
    tempResult.innerText = resutl

}
function mathOperation() {
    if (lastOperation === 'X'){
        resutl = parseFloat(resutl) * parseFloat(disNum2)
    }
    if (lastOperation === '/'){
        resutl = parseFloat(resutl) / parseFloat(disNum2)
    }
    if (lastOperation === '+'){
        resutl = parseFloat(resutl) + parseFloat(disNum2)
    }
    if (lastOperation === '-'){
        resutl = parseFloat(resutl) - parseFloat(disNum2)
    }
    if (lastOperation === '%'){
        resutl = parseFloat(resutl) % parseFloat(disNum2)
    }
    
    
}
equalElement.addEventListener ('click', (e) => {
    if ( !disNum2 || !disNum1){
        return;
    }
    else{
    haveDot=false;
    mathOperation();
    clearVar();
    displayElement2.innerText = resutl;
    tempResult.innerText= '';
    disNum2=resutl;
    disNum1 = '';}
    
})
allClear.addEventListener('click', (e) => {
    displayElement1.innerText = '0';
    displayElement2.innerText = '0';
    disNum1='';
    disNum2= '';
    tempResult.innerText = '';
    resutl='';


})
lastClear.addEventListener('click', (e)=> {
    displayElement2.innerText = '';
    disNum2 = '';
})
function clickButtonElemnt(key){
    inputNumber.forEach(button => {
        if (button.innerText === key){
            button.click()
        }
    })
}
function clickOperation (key) {
    operationElement.forEach(button => {
        if ( button.innerText === key){
            button.click()
        }
    })
}
function clickEqual ( ) {
  equalElement.click()
}
window.addEventListener('keydown',(e) => {
    if (
        e.key  === '0'||
        e.key  === '1'||
        e.key  === '2'||
        e.key  === '3'||
        e.key  === '4'||
        e.key  === '5'||
        e.key  === '6'||
        e.key  === '7'||
        e.key  === '8'||
        e.key  === '9'||
        e.key  === '.'){
            document.querySelector('.audio').play();
            clickButtonElemnt(e.key)
        }
        if ( 
           
            e.key === '+'||
            e.key === '-'||
            e.key === '/'||
            e.key === '%'


        )
        {
            clickOperation(e.key);
        }
        if ( e.key === '*'){
            clickOperation('X')
        }
      if(e.key == 'Enter' || e.key==='='){
          clickEqual()
      }
           
        
})
