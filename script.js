const display = document.querySelector(".display");
const button1 = document.querySelector(".n1");
const button2 = document.querySelector(".n2");
const button3 = document.querySelector(".n3");
const button4 = document.querySelector(".n4");
const button5 = document.querySelector(".n5");
const button6 = document.querySelector(".n6");
const button7 = document.querySelector(".n7");
const button8 = document.querySelector(".n8");
const button9 = document.querySelector(".n9");
const button0 = document.querySelector(".n0");
const buttonAdd = document.querySelector(".add");
const buttonSubstract = document.querySelector(".substract");
const buttonMultiply = document.querySelector(".multiply");
const buttonDivide = document.querySelector(".divide");
const buttonClear = document.querySelector(".clear");
const buttonEquals = document.querySelector(".equals");
let num1;
let num2;
let result;
let lastOperation;
let clicked = false;
let numberString;
let error = false;

function add (){
    let sum = 0;
    for (i = 0; i < arguments.length; i ++){
        sum = sum + arguments[i];
    }
    return sum;
}

function substract (){
    let sum = 0;
    for (i = 1, sum = arguments[0]; i < arguments.length; i ++){
        sum = sum - arguments[i];
    }
    return sum;
}

function multiply (){
    let product = 0;
    for (i = 1, product = arguments[0]; i < arguments.length; i ++){
        product = product * arguments[i];
    }
    return product;
}

function divide (){
    let fraction = 0;
    for (i = 1, fraction = arguments[0]; i < arguments.length; i++){
        fraction = fraction / arguments[i];
    }
    return fraction;
}

function operate (operator, term1, term2){
    let resultIntDigits = String(Math.abs(Math.floor(window[operator](term1, term2)))).length;
    if (resultIntDigits > 7){
        error = true;
    }   else
        result = parseFloat((window[operator](term1, term2)).toFixed(7 - resultIntDigits));
}

function parseDisplay(parseValue){
    if (display.textContent === "" || 
        isNaN(display.textContent.charAt(display.textContent.length - 1))){
        return 0;
    }   else
        return parseFloat(parseValue);
}

function displayShow (content){
    if (!error && String(parseDisplay(display.textContent)).length < 7){
        display.textContent = (parseDisplay(display.textContent) * 10) + content;
    }
}

button1.addEventListener("click", function(){displayShow(1);});
button2.addEventListener("click", function(){displayShow(2);});
button3.addEventListener("click", function(){displayShow(3);});
button4.addEventListener("click", function(){displayShow(4);});
button5.addEventListener("click", function(){displayShow(5);});
button6.addEventListener("click", function(){displayShow(6);});
button7.addEventListener("click", function(){displayShow(7);});
button8.addEventListener("click", function(){displayShow(8);});
button9.addEventListener("click", function(){displayShow(9);});
button0.addEventListener("click", function(){displayShow(0);});
buttonAdd.addEventListener("click", function(){
    if (!error) {
        if (!clicked) {
            num1 = parseDisplay(display.textContent);
            display.textContent = "+";
            clicked = true;
            lastOperation = "add";
        }   else {
            num2 = parseDisplay(display.textContent);
            operate(lastOperation, num1, num2);
            if (error){
                display.textContent = "ERROR";
            }   else {
                num1 = result;
                num2 = 0
                display.textContent = result + "+";
                lastOperation = "add";
            }
        }
    }
})
buttonSubstract.addEventListener("click", function(){
    if (!error) {
        if (!clicked) {
            num1 = parseDisplay(display.textContent);
            display.textContent = "-";
            clicked = true;
            lastOperation = "substract";
        }   else {
            num2 = parseDisplay(display.textContent);
            operate(lastOperation, num1, num2);
            if (error) {
                display.textContent = "ERROR";
            }   else
                num1 = result;
                num2 = 0
                display.textContent = result + "-";
                lastOperation = "substract";
        }
        
    }
})
buttonMultiply.addEventListener("click", function(){
    if (!error) {
        if (!clicked) {
            num1 = parseDisplay(display.textContent);
            display.textContent = "X";
            clicked = true;
            lastOperation = "multiply";
        }   else {
            num2 = parseDisplay(display.textContent);
            operate(lastOperation, num1, num2);
            if (error) {
                display.textContent = "ERROR";
            }   else
                num1 = result;
                num2 = 0
                display.textContent = result + "X";
                lastOperation = "multiply";
        }
    }
})
buttonDivide.addEventListener("click", function(){
    if (!error) {
        if (!clicked) {
            num1 = parseDisplay(display.textContent);
            display.textContent = "/";
            clicked = true;
            lastOperation = "divide";
        }   else {
            num2 = parseDisplay(display.textContent);
            operate(lastOperation, num1, num2);
            if (error) {
                display.textContent = "ERROR";
            }   else
                num1 = result;
                num2 = 0
                display.textContent = result + "/";
                lastOperation = "divide";
        }
    }
})
buttonClear.addEventListener("click", function(){
    num1 = 0;
    num2 = 0;
    result = 0;
    lastOperation = ""
    clicked = false;
    error = false;
    display.textContent = "";
})
buttonEquals.addEventListener("click", function(){
    if (!error) {
        num2 = parseDisplay(display.textContent);
        operate(lastOperation, num1, num2);
        if (error) {
            display.textContent = "ERROR";
        }   else
        display.textContent = result;
        clicked = false;
    }
})