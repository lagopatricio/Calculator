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
let displayValue;
let num1;
let num2;
let operation;

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
    return window[operator](term1, term2);
}

function parseDisplay(parseValue){
    if (display.textContent === "" || display.textContent === "+" ||
        display.textContent === "-" || display.textContent === "X" ||
        display.textContent === "/"){
        return 0;
    }   else
        return parseInt(parseValue);
}

function displayShow (content){
    display.textContent = (parseDisplay(display.textContent) * 10) + content;
    displayValue = parseDisplay(display.textContent);
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
    operation = "add";
    num1 = parseDisplay(display.textContent);
    display.textContent = "+";
})
buttonSubstract.addEventListener("click", function(){
    operation = "substract";
    num1 = parseDisplay(display.textContent);
    display.textContent = "-";
})
buttonMultiply.addEventListener("click", function(){
    operation = "multiply";
    num1 = parseDisplay(display.textContent);
    display.textContent = "X";
})
buttonDivide.addEventListener("click", function(){
    operation = "divide";
    num1 = parseDisplay(display.textContent);
    display.textContent = "/";
})
buttonClear.addEventListener("click", function(){
    num1 = 0;
    display.textContent = "";
})
buttonEquals.addEventListener("click", function(){
    num2 = parseDisplay(display.textContent);
    display.textContent = operate(operation, num1, num2);
})