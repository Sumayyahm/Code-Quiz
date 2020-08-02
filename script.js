//Creating Intro page elements, adding text appending and styling them using DOM
var divTag = document.getElementById("h4El")
var h4Tag = document.createElement("h4");
var h4Tag2 = document.createElement("h4");


h4Tag.textContent = "You have 90 seconds to take this quiz. Answer as many questions as you can. Keep in mind that you lose 10 seconds for every wrong answer. ";
h4Tag2.textContent = "Good Luck!";

divTag.appendChild(h4Tag);
divTag.appendChild(h4Tag2);

h4Tag.setAttribute("style", "text-align : center ; margin-top : 75px");
h4Tag2.setAttribute("style", "text-align : center");

//Intializing a timer variable to 90 seconds, 
var timer = 90;
var timerEl = document.querySelector("#timer");
var startQbtn = document.getElementById("startqbutton");


var quizQues = [ "1. Using ______ statement is how you test for a specific condition in JavaScript", "2. Which of the following function of Array object extracts a section of an array and returns a new array?", "3. Which of the following is not a reserved word in JavaScript? ", "4. Which was the first browser to support Javascript?", "5. Which of the following is correct? "]
var quizOptions = [
    ans1 = { a: "switch", b: "if", c :"while"},
    ans2 = { a: "reverse()", b: "some()", c :"slice()"},
    ans3 = { a: "program", b: "interface", c : "throws"},
    ans4 = { a: "Mozilla", b: "Netscape", c :"Google Chrome"},
    ans5 = { a: "i =+ 1", b: "i += 1", c :"i = i++1"},
]

var quizQuesEl = document.createElement("section");
var mainEl = document.getElementById("quiz-ques");
var myBr = document.createElement("br");
var btnEl1 = document.createElement("button");
var btnEl2 = document.createElement("button");
var btnEl3 = document.createElement("button");
quizQuesEl.textContent = " ";
mainEl.appendChild(quizQuesEl);
mainEl.appendChild(myBr);
mainEl.appendChild(btnEl1);
mainEl.appendChild(myBr);
mainEl.appendChild(btnEl2);
mainEl.appendChild(myBr);
mainEl.appendChild(btnEl3);
quizQuesEl.setAttribute("style", "text-align : center");
btnEl1.setAttribute("class", "btn btn-info");
btnEl2.setAttribute("class", "btn btn-info");
btnEl3.setAttribute("class", "btn btn-info");
btnEl1.setAttribute("style", "margin-left : 720px; margin-top : 15px");
btnEl2.setAttribute("style", "margin-left : 720px; margin-top : 15px");
btnEl3.setAttribute("style", "margin-left : 720px; margin-top : 15px");

window.onload=function(){
    btnEl1.style.visibility= "hidden";
    btnEl2.style.visibility = "hidden";
    btnEl3.style.visibility = "hidden";
  }



function setTimer() {
var timeInterval = setInterval(function() {
    timer--;
    timerEl.textContent = timer;

    if(timer === 0)
    {

    }

},1000)
}

function showButton(){
    btnEl1.style.visibility = "visible";
    btnEl2.style.visibility = "visible";
    btnEl3.style.visibility = "visible";
  }


function playQuiz () {
    for( var i = 0; i < quizQues.length; i++)
    {
    quizQuesEl.textContent = quizQues[i];
    btnEl1.textContent = quizOptions[i].a;
    btnEl2.textContent = quizOptions[i].b;
    btnEl3.textContent = quizOptions[i].c;

    }

}












startQbtn.addEventListener("click", function(){
    h4Tag.textContent =" ";
    h4Tag2.textContent = " ";
    startQbtn.remove();
    setTimer();
    showButton();

    playQuiz();
},)