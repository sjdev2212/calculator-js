const displayElement1 = document.querySelector('.display-1')
const displayElement2 = document.querySelector('.display-2')
const tempResult = document.querySelector('.temp-result')
const inputNumber = document.querySelectorAll('.number')
const operationElement = document.querySelectorAll('.operation')
const equalElement = document.querySelector('.equal')
const allClear = document.querySelector('.all-clear')
const lastClear = document.querySelector('.last-clear')

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
        

    })
})