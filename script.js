let input1;
let input2;

const operators = document.querySelectorAll('.calc-button');
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");

const resultField = document.getElementById('resultField');

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        let result;
        updateInputs();
        if (isNaN(input1) || isNaN(input2)){
            result = 'NaN'
        } else if (e.target === plusButton){
            result = parseInt(input1) + parseInt(input2);
        } else if (e.target === minusButton){
            result = input1 - input2;
        } else if (e.target === multiplyButton){
            result = input1 * input2;
        } else if (e.target === divideButton){
            result = input1 / input2;
        }
    
        if (!isNaN(result) && result % Math.floor(result) != 0 
        && (Math.floor(result) == 0 || !isNaN(result % Math.floor(result))))
            result = result.toFixed(3);

        if (input1 == '' || input2 == '') result = 'Enter values';

        resultField.innerHTML = result;
    })
})

function updateInputs() {
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
}