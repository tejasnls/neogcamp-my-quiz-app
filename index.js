var readlineSync = require('readline-sync');

var userName=readlineSync.question(`What's your name?:`);
var score=0;

console.log(`Welcome ${userName}. Let's see how well you know me.`);
function displayQuestion(item){
  var userInput=readlineSync.question(questionList[item].question);
  console.log(`You entered:${userInput}`);
  if (userInput.toLowerCase()==questionList[item].answer.toLowerCase()){
    score=score+1;
    return console.log("You're Right!!!");
  }
  else{
    return console.log("You're Wrong!");
  }
}
function checkHighScore(){
  if (score>highScore.score){
    console.log(`You Scored:${score}`)
    console.log(`Congratulations you've got a high score!! You beat ${highScore.name} by ${score - highScore.score} !!`)
  }
  else{
    console.log(`You Scored:${score}`)
  }
}
var questionList={
  questionOne:{
    question:"1.Where do I live?",
    answer:"Bangalore"
  },
questionTwo:{
    question:"2.Where do I work?",
    answer:"Cognizant"
  },
questionThree:{
    question:`3.Do I prefer Beaches or Mountains?`,
    answer:"Mountains"
  },
questionFour:{
    question:"4.What's my favorite sport to watch?",
    answer:"Formula 1"
  },
questionFive:{
    question:`5.What's my favorite Anime?`,
    answer:"Death Note"
  }
};

var highScore={
  name:"Tejas",
  score:5
};
var objList=Object.keys(questionList);
objList.map(item=>{displayQuestion(item)})
checkHighScore();
