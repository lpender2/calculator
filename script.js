var display = document.getElementById('display');
var num1 = "";
var num2 = "";
var operator = "";

function press(num){
    num1 = num1 + num;
    display.innerHTML = num1;
}

function setOperator(key){
    operator = key;
    num2 = num1;
    num1 = "";
}

function clr() {
    num1 = "";
    num2 = "";
    operator = "";
    display.innerHTML = '0';
}

function calculate(){
    var firstNum = parseFloat(num2);
    var secondNum = parseFloat(num1);
    var result = 0;

    if (operator == '+') {
        result = firstNum + secondNum;
        display.innerHTML = result;
        operator = "";
    }
    if (operator == '-') {
        result = firstNum - secondNum;
        display.innerHTML = result;
        operator = "";
    }
    if (operator == '*'){
        result = firstNum * secondNum;
        display.innerHTML = result;
        operator = "";
    }
    if (operator == '/'){
        result = firstNum / secondNum;
        display.innerHTML = result;
        operator = "";
    }
    num1 = result;
    display.innerHTML = result;
    operator = "";
}