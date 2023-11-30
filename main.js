const Questions = [
    {
        question: "The term ‘Computer’ is derived from__________?",
        answers: [
            { text: "Latin", correct: true},
            { text: "German", correct: false},
            { text: "French", correct: false},
            { text: "Arabic", correct: false},
        ]
    },

    {
        question: "Which technology is used in compact disks?",
        answers: [
            { text: "Electrical", correct: false},
            { text: "Electro Magnetic", correct: false},
            { text: "Laser", correct: true},
            { text: "Mechanical", correct: false},
        ]
    },

    {
        question: "Who is the father of Computer?",
        answers: [
            { text: "Allen Turing", correct: false},
            { text: "Charles Babbage", correct: true},
            { text: "Simur Cray", correct: false},
            { text: "MS Raheel", correct: false},
        ]
    },

    {
        question: "Who is the father of Internet ?",
        answers: [
            { text: "Chares Babbage", correct: false},
            { text: " Denis Riche", correct: false},
            { text: "Martin Cooper", correct: false},
            { text: " Vint Cerf", correct: true},
        ]
    },
];

let questionElemet = document.getElementById("question");
let answerButton = document.getElementById("answer-btn");
let nextButton = document.getElementById("next-btn");

let currentquestionIndex = 0;
let score = 0;
function startQuiz(){
    currentquestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let Cruentquestion = Questions[currentquestionIndex];
    let questionNo = currentquestionIndex + 1;
    questionElemet.innerHTML = questionNo+ "."+Cruentquestion.question;
    Cruentquestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectanswer(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }else{
            button.disabled = "true";
        }
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElemet.innerHTML = `You Scored ${score} Out Of ${Questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentquestionIndex++;
    if(currentquestionIndex<Questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentquestionIndex< Questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();

