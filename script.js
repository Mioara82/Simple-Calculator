const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const operators = document.querySelectorAll('.calc-button');

const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");

const resultField = document.getElementById('resultField');

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        let result;

        switch (e.target) {
            case plusButton: {result = parseInt(input1.value) + parseInt(input2.value); break;}
            case minusButton: {result = input1.value - input2.value; break;}
            case multiplyButton: {result = input1.value * input2.value; break;}
            case divideButton: {result = input1.value / input2.value; break;}
        }
    
        if (!isNaN(result) && result % 1 !== 0)
            result = result.toFixed(3);

        if (input1.value == '' || input2.value == '') result = 'Enter values first';

        resultField.innerHTML = result;
    })
})


input1.addEventListener('input', checkInput);
input2.addEventListener('input', checkInput);

function checkInput(e) {
    const {value, classList} = e.target;
    classList.toggle('wrong-input', isNaN(value))

    document.querySelectorAll('.warning').forEach(label => {
        if (label.getAttribute('for') == e.target.getAttribute('id'))
            label.classList.toggle('hidden', !isNaN(value));
    })
}
