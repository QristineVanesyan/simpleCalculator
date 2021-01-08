const input = document.querySelector("input[type='number']");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const currentNumber = document.getElementById("current-number");
const result = document.getElementById("result");

function outputResult(res, text) {
    currentNumber.textContent = res;
    result.textContent = text;
}