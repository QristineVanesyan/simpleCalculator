const defaultResult = 0;
let currResult = defaultResult;
function isValid() {
    return (input.value === '') ? 0 : Number.parseInt(input.value);
}
function add() {
    let number = isValid(input.value);
    let text = `${currResult}+${number}`;
    currResult += number;
    outputResult(currResult,text);

}
function subtract() {
    let number = isValid(input.value);
    let text = `${currResult}-${number}`;
    currResult -= number;
    outputResult(currResult,text);
}
function multiply() {
    let number = isValid(input.value);
    let text = `${currResult}*${number}`;
    currResult *= number;
    outputResult(currResult,text);
}
function divide() {
    let number = (isValid(input.value)===0) ? 1 : Number.parseInt(input.value);
    let text = `${currResult}/${number}`;
    currResult /= number;
    outputResult(currResult,text);
}
plus.addEventListener('click',add);
minus.addEventListener('click',subtract);
multiplication.addEventListener('click',multiply);
division.addEventListener('click',divide);
