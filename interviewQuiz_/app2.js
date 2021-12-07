var buttonAdd = document.querySelector('#btn-increment');
var buttonMinus = document.querySelector('#btn-decrement');
var inputData = document.querySelector('#input-text-id')

function increaseFontSize(button){
   // style = window.getComputedStyle(inputData, null).getPropertyValue('font-size');
   // var style = window.getComputedStyle(inputData, null).getPropertyValue('font-size');
    //var  currentSize = parseFloat(style);
    var computedStyle = window.getComputedStyle ? getComputedStyle(inputData) : inputData.computedStyle;
    var fontSize = parseFloat(computedStyle && computedStyle.fontSize);

    if(button == document.querySelector('#btn-increment')){
        fontSize +=5;
    }
    inputData.style.fontSize = fontSize+ "px";
}