//Intro Page Styling
var divTag1 = document.querySelector("#mainpg");
divTag1.setAttribute("style", "text-align : center");

//Initialising Timer, Timer Element and StartQuiz button Element
var timer;
var timerEl = document.querySelector("#timer");
var startQbtn = document.getElementById("startqbutton");

//Initializing Quizques Elements, creating Answer Button Elements, score elements, initial input elements- appending and styling
var quizQuesEl = document.querySelector("#quiz-ques");
var allBtnEl = document.querySelector(".allbtnclass");
var myBr = document.createElement("br");
var btnEl1 = document.createElement("button");
var btnEl2 = document.createElement("button");
var btnEl3 = document.createElement("button");
quizQuesEl.textContent = " ";
allBtnEl.appendChild(btnEl1);
allBtnEl.appendChild(myBr);
allBtnEl.appendChild(btnEl2);
allBtnEl.appendChild(myBr);
allBtnEl.appendChild(btnEl3);
quizQuesEl.setAttribute("style", "text-align : center");
btnEl1.setAttribute("class", "btn btn-info btn1");
btnEl2.setAttribute("class", "btn btn-info btn2");
btnEl3.setAttribute("class", "btn btn-info btn3");
btnEl1.setAttribute("style", "margin-left : 720px; margin-top : 15px");
btnEl2.setAttribute("style", "margin-left : 720px; margin-top : 15px");
btnEl3.setAttribute("style", "margin-left : 720px; margin-top : 15px");
var msgDiv = document.querySelector("#msg");
var mainEl = document.querySelector(".mainEl");
var scoreEl = document.createElement("div");
scoreEl.textContent = " ";
mainEl.appendChild(scoreEl);
scoreEl.setAttribute("style", "text-align : center");
var ansBtn1 = document.querySelector(".btn1");
var ansBtn2 = document.querySelector(".btn2");
var ansBtn3 = document.querySelector(".btn3");
var formEl = document.querySelector("#high-scores");
formEl.setAttribute("style", "text-align: center");
var inputInitialEl = document.querySelector("#initial");
var submitBtn = document.querySelector("#submitbutton");
var highScoreslist = document.querySelector("#high-scoreslist");



//Function to hide the answer buttons on loading page
window.onload=function(){
    btnEl1.style.visibility= "hidden";
    btnEl2.style.visibility = "hidden";
    btnEl3.style.visibility = "hidden";
    formEl.style.visibility = "hidden";
}

//Function to show the answer buttons after the start button has been clicked
function showButton(){
    btnEl1.style.visibility = "visible";
    btnEl2.style.visibility = "visible";
    btnEl3.style.visibility = "visible";
}

//Function to input score
function inputScore(){
    formEl.style.visibility = "visible";    
}

//Event listener when the submit button is clicked to submit initial- displays initial and score
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    var initials = [];

    var userInitial = inputInitialEl.value.trim();
    if (userInitial === "") {
        return;
    } 
    else {
        var scoreCard = userInitial + " : " + timer;
        initials.push(scoreCard)
        initials.value = " ";
        localStorage.setItem("myinitials", JSON.stringify(initials));
        var retScorebrd = JSON.parse(localStorage.getItem("myinitials"));
        if(retScorebrd !== null){
            initials = retScorebrd;
        }
       

        for(var j = 0; j < initials.length; j++)
        {
            var finalList = initials[j];
            var liEl = document.createElement("li");
            liEl.setAttribute("style", "text-align : center; color : teal");
            liEl.textContent = finalList;
            highScoreslist.appendChild(liEl);
        }
    }
    
    });

//Function to send message once timer reaches 0
function sendMessage(){
    quizQuesEl.textContent = " ";
    btnEl1.style.visibility= "hidden";
    btnEl2.style.visibility = "hidden";
    btnEl3.style.visibility = "hidden";
    var gameOvermsg = document.createElement("p");
    gameOvermsg.textContent = "Game over!"; 
    quizQuesEl.appendChild(gameOvermsg);
    gameOvermsg.setAttribute("style", "font-weight : bold; font-size : 150px");
}

//Function to decrement the timer when the start button is clicked
var timeInterval;
function setTimer() {
    timeInterval = setInterval(function() {
        timer--;
        timerEl.textContent = '00:'+ timer;
    
        if(timer <= 0)
        {
            clearInterval(timeInterval);
            timerEl.textContent =" ";
            msgDiv.textContent = " ";
            sendMessage();   
            scoreEl.textContent = "Your Score is 0! Better luck next time";
        }
},1000)
}

//Function to stop timer
function stopTimer(timeInterval) {
    clearInterval(timeInterval);
    timerEl.textContent = "00.00";
    msgDiv.textContent = " ";
    sendMessage();   
    scoreEl.textContent = "Your Final Score is " + timer;
    inputScore();
}


// Initialising the quiz Questions and quiz Answers arrays
var quizQues = [ "1. Using ______ statement is how you test for a specific condition in JavaScript", "2. Which of the following function of Array object extracts a section of an array and returns a new array?", "3. Which of the following is not a reserved word in JavaScript? ", "4. Which was the first browser to support Javascript?", "5. Which of the following is correct? "]
var quizOptions = [
    ans1 = { a: "switch", b: "if", c :"while"},
    ans2 = { a: "reverse()", b: "some()", c :"slice()"},
    ans3 = { a: "program", b: "interface", c : "throws"},
    ans4 = { a: "Mozilla", b: "Netscape", c :"Google Chrome"},
    ans5 = { a: "i =+ 1", b: "i += 1", c :"i = i++1"},
]

//Function to display message after an option has been selected
function displayMessage(type, message){
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
    msgDiv.setAttribute("style", "text-align: center; margin-top: 35px");
}

// Function to go to next question
function incrementQues (i)
{
    i ++;

    if(i === 1)
   { questionTwo();
}
    else 
    if(i === 2){
        questionThree();
    }
    else
    if(i === 3)
    {
        questionFour();
    }
    else
    if (i === 4)
    {
        questionFive();
    }
    else {
        stopTimer(timeInterval);
    }
}

//Function called when the wrong answer has been selected 
function wrongAnswer(i) {
    displayMessage("error", "Wrong! Oops you just lost 10 seconds");
    timer -= 10;
    timerEl.textContent = '00:'+ timer;  
    incrementQues(i);
}

//Function called when the answer is right
function rightAnswer (i) {
    displayMessage("success", "Correct! Way to go"); 
    incrementQues(i); 
}


//Funtion that displays question one, accepts the user input and lets user know if the answer was right
function questionOne() {
    var i = 0;
    quizQuesEl.textContent = quizQues[i];
    btnEl1.textContent = quizOptions[i].a;
    btnEl2.textContent = quizOptions[i].b;
    btnEl3.textContent = quizOptions[i].c;
    ansBtn1.onclick = function() {wrongAnswer(i)};
    ansBtn2.onclick = function(){rightAnswer(i)};
    ansBtn3.onclick = function(){wrongAnswer(i)};
}

//Funtion that displays question two, accepts the user input and lets user know if the answer was right
function questionTwo() {
        var i = 1;
        quizQuesEl.textContent = quizQues[i];
        btnEl1.textContent = quizOptions[i].a;
        btnEl2.textContent = quizOptions[i].b;
        btnEl3.textContent = quizOptions[i].c;
        ansBtn1.onclick = function() {wrongAnswer(i)};
        ansBtn2.onclick = function(){wrongAnswer(i)};
        ansBtn3.onclick = function(){rightAnswer(i)};
      }

 //Funtion that displays question three, accepts the user input and lets user know if the answer was right
function questionThree() {
    var i = 2;
    quizQuesEl.textContent = quizQues[i];
    btnEl1.textContent = quizOptions[i].a;
    btnEl2.textContent = quizOptions[i].b;
    btnEl3.textContent = quizOptions[i].c;
    ansBtn1.onclick = function(){rightAnswer(i)};
    ansBtn2.onclick = function(){wrongAnswer(i)};
    ansBtn3.onclick = function(){wrongAnswer(i)};
}

//Funtion that displays question four, accepts the user input and lets user know if the answer was right
function questionFour() {
    var i = 3;
    quizQuesEl.textContent = quizQues[i];
    btnEl1.textContent = quizOptions[i].a;
    btnEl2.textContent = quizOptions[i].b;
    btnEl3.textContent = quizOptions[i].c;
    ansBtn1.onclick = function() {wrongAnswer(i)};
    ansBtn2.onclick = function(){rightAnswer(i)};
    ansBtn3.onclick = function(){wrongAnswer(i)};
}

//Funtion that displays question five, accepts the user input and lets user know if the answer was right
function questionFive() {
    var i = 4;
    quizQuesEl.textContent = quizQues[i];
    btnEl1.textContent = quizOptions[i].a;
    btnEl2.textContent = quizOptions[i].b;
    btnEl3.textContent = quizOptions[i].c;
    
    ansBtn1.onclick = function() {wrongAnswer(i)};
    ansBtn2.onclick = function(){rightAnswer(i)};
    ansBtn3.onclick = function(){wrongAnswer(i)};
}


//Event Listener function for the Start Quiz Button
startQbtn.addEventListener("click", function(){
    timer = 75;
    divTag1.remove();
    setTimer();
    showButton();
    questionOne();
})