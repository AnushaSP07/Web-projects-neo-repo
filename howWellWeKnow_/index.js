var readLineSync = require('readline-sync');
var userName = readLineSync.question("Enter your Name ?");
console.log(userName);
var score = 0;

console.log("============================")
console.log("Let's see how much you know me");
console.log("Remember!! answer is case sensitive");
console.log("============================")
var listAboutMe = [{
  question :"Okay!! Tell what my name is ?",
  answer:"Anusha"
},{
  question :"Next Question!! what do I studied ?",
  answer:"MCA"
},{
  question :"Which is my native place ?",
  answer:"Shimoga"
},{
  question :"I'm I working or Not ? [Ans-Yes/No]",
  answer:"Yes"
}]

function callAboutMe(question,answer){
  var data = readLineSync.question(question)
  if(data === answer){
    score = score + 1;
    console.log("current score "+score);
  }else{
    console.log("Wrong!");
    console.log("current score "+score);
  }
  console.log("============================");
}
for(let i=0;i<listAboutMe.length;i++){
  var listData = listAboutMe[i];
 callAboutMe(listData.question,listData.answer); 
}
console.log("Awww !! you know me well :-) and you scored : "+score);