const input = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngle = angle1 + angle2 + angle3;
    return sumOfAngle;
}

function isTriangle(){
    const sumOfAngle = calculateSumOfAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    if(sumOfAngle === 180){
        outputEl.innerText = "Yay!! the angles are triangles";
    }else{
        outputEl.innerText = "The given angles don't form a triangle";
    }

}

isTriangleBtn.addEventListener("click", isTriangle)