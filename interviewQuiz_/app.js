var num1 = document.querySelector('#number1-Id');
var num2 = document.querySelector('#number2-Id');
var addBtn = document.querySelector('#outputAdd');
var subtractBtn = document.querySelector('#outputSubtract');
var divideBtn = document.querySelector('#outputDevide');
var multiplyBtn = document.querySelector('#outputMultiply');
var output = document.querySelector('#outputValue');


function add(num1, num2){
    var sum = num1 + num2;
    return sum;
}

function addNumber(){
    var val1 = Number(num1.value);
    var val2 = Number(num2.value);
    const tot = add(val1,val2)
    output.innerHTML = "Sum = "+tot; 
}

function sub(num1, num2){
    var sub = num1 - num2;
    return sub;
}

function subNumber(){
    var val1 = Number(num1.value);
    var val2 = Number(num2.value);
    const subVal = sub(val1,val2)
    output.innerHTML = "sub = "+subVal; 
}

function div(num1 , num2){
    var ans = num1 / num2;
    return ans;
}

function devideNumber(){
    var val1 = Number(num1.value);
    var val2 = Number(num2.value);
    const ans = div(val1,val2);
    output.innerHTML = "Devided ans = "+ans;
}

function multiiply(num1, num2){
    var ans = num1 * num2;
    return ans;
}

function multiplyNumber(){
    var val1 = Number(num1.value);
    var val2 = Number(num2.value);
    const ans = multiiply(val1,val2);
    output.innerHTML = "Multiplication of Num = "+ans;
}

addBtn.addEventListener("click" ,addNumber);
subtractBtn.addEventListener("click", subNumber)
divideBtn.addEventListener("click", devideNumber);
multiplyBtn.addEventListener("click", multiplyNumber)
 