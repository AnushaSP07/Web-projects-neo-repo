const area = document.querySelectorAll(".area-input");
const sumOfArea = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function areaValue(a,b){
    const totArea  = (a*b)/2;
    return totArea;
}
function areaOfTriangle(){
    const sum = areaValue(2,3);
    outputEl.innerText = "Area of a triangle = "+sum;

}


sumOfArea.addEventListener("click",areaOfTriangle);