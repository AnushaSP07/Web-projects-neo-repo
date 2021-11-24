var readLineSync = require('readline-sync');

var username = readLineSync.question("What is your name ?");
console.log("Hey!! "+username+" Welcome to the quiz ");
var patt1 = /W3S/i;
console.log("===========================");

console.log("Remember answers are case sensitive");
console.log("===========================");
var userWish = readLineSync.question("Do you like to take this quiz ?Yes/No ")
console.log("===========================");
if(userWish === "Yes" ){
  let score = 0;
  var quizQuestion = [{
    question:"Find the sum of 111 + 222 + 333 = ",
    answer:"666"
  },
  {
    question:"Subtract 457 from 832 = ",
    answer:"375"
  },
  {
    question:"what is 90 ÷ 10 = ",
    answer:"9"
  },
  {
    question:"Simplify: 26 + 32 - 12 = ",
    answer:"46"
  },
  {
    question:"Find the product of 72 × 3 = ",
    answer:"216"
  },
  {
    question:"Solve : 200 – (96 ÷ 4) = ",
    answer:"176"
  },
  {
    question:" Solve : 24 + 4 ÷ 4 = ",
    answer:"25"
  },
  ]

function playQuiz(question,answer){
  var userData = readLineSync.question(question);
  if(userData===answer){
    console.log("Correct");
    score = score+1;
    console.log("Your Score "+score);
  }else{
    console.log("Wrong");
    console.log("Your Score "+score);
  }
  console.log("===========================");
}
for(let i=0;i<quizQuestion.length;i++){
  var quizItem = quizQuestion[i];
  playQuiz(quizItem.question,quizItem.answer);
}
console.log("Your Total score "+score)

}else{
  console.log("Thanks for visiting our site");
}