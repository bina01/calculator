
let currentInput = '';
let currentResult = "";
let resultDisplayed = false;
let operator = ["+", "-", "*", "/"];

function appendToDisplay(value) {
    if (resultDisplayed === false) {
        currentInput += value;
        document.getElementById("result").value = currentInput;
    }

    if (resultDisplayed === true && !operator.includes(value)) {
        currentInput = "";
        currentInput += value;
        document.getElementById("result").value = currentInput;
        resultDisplayed = false;
    }

    if (resultDisplayed === true && operator.includes(value)) {
        currentInput = currentResult;
        currentInput += value;
        document.getElementById("result").value = currentInput;
        resultDisplayed = false;
    }
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("result").value = "";
}

function calculateResult() {
    try {
        currentResult = eval(currentInput);
        document.getElementById("result").value = currentResult;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
    resultDisplayed = true;
}

function deleteLastDigit() {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    currentInput = currentInput.slice(0, -1); 
    document.getElementById("result").value = currentInput;
}
