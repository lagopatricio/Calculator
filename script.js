function add (){
    let sum = 0;
    for (i = 0; i < arguments.length; i ++){
        sum = sum + arguments[i];
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

function operate (operator, num1, num2){
    return window[operator](num1, num2);
}