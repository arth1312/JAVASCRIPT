let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");

let currentNumber ="";

function displayData() {
    display.value = currentNumber || 0;
}

function appendData(data) {
    currentNumber = currentNumber + data;
    displayData();
}

displayData();

function calculate() {
    let result = eval(currentNumber);
    currentNumber = result.toString();
    displayData();
}

function clearData() {
    currentNumber = "";
    displayData();
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let value = (button.textContent);
        if(value == "C"){
            clearData();
        }
        else if(value == "="){
            calculate();
        }
        else{
            appendData(value);
        }
    })
})