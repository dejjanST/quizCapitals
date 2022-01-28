const quizData = [
    {
        question: 'What Is The Capital Of Andorra?',
        a: 'Andorra la Vella',
        b: 'Valencia',
        c: 'Sevilla',
        d: 'Toulouse',
        correct: 'a'
    },
    {
        question: 'What Is The Capital Of Netherlands?',
        a: 'Maastricht',
        b: 'Amsterdam',
        c: 'Eindhoven',
        d: 'Rotherham',
        correct: 'b'
    },
    {
        question: 'What Is The Capital Of Greece?',
        a: 'Thessaloniki',
        b: 'Tripoli',
        c: 'Ankara',
        d: 'Athens',
        correct: 'd'
    },
    {
        question: 'What Is The Capital Of Serbia?',
        a: 'Budapest',
        b: 'Belgrade',
        c: 'Athens',
        d: 'Bratislava',
        correct: 'b'
    },
    {
        question: 'What Is The Capital Of Germany?',
        a: 'Bonn',
        b: 'Berlin',
        c: 'München',
        d: 'Stuttgart',
        correct: 'b'
    },
    {
        question: 'What Is The Capital Of Switzerland?',
        a: 'Bern',
        b: 'Zürich',
        c: 'Basel',
        d: 'Geneva',
        correct: 'a'
    },
    {
        question: 'What Is The Capital Of Slovakia?',
        a: 'Kiev',
        b: 'Warsaw',
        c: 'Bratislava',
        d: 'Geneva',
        correct: 'c'
    },
    {
        question: 'What Is The Capital Of Belgium?',
        a: 'Prague',
        b: 'Lisbon',
        c: 'Brussels',
        d: 'Riga',
        correct: 'c'
    },
    {
        question: 'What Is The Capital Of Norway?',
        a: 'Minsk',
        b: 'Lisbon',
        c: 'Stockholm',
        d: 'Oslo',
        correct: 'd'
    },
    {
        question: 'What Is The Capital Of Iceland?',
        a: 'Reykjavik',
        b: 'Lisbon',
        c: 'Stockholm',
        d: 'Tromso',
        correct: 'a'
    },
    {
        question: 'What Is The Capital Of Latvia?',
        a: 'Reykjavik',
        b: 'Riga',
        c: 'Stockholm',
        d: 'Vilnius',
        correct: 'b'
    },
    {
        question: 'What Is The Capital Of Estonia?',
        a: 'Vaduz',
        b: 'Helsinki',
        c: 'Tallinn',
        d: 'Vilnius',
        correct: 'b'
    },
    {
        question: 'What Is The Capital Of Austria?',
        a: 'Vaduz',
        b: 'Monaco',
        c: 'Sturm',
        d: 'Vienna',
        correct: 'd'
    }
]

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");

var currentQuestion;

let score = 0;
var count = 1;
var questions = [];
var quizHeader = document.getElementById('quizHeader');

loadQuiz();

function loadQuiz() {
    do{
        currentQuestion = Math.round(Math.random() * 10);
    }while(questions.includes(currentQuestion))
    
    console.log(currentQuestion);
    questions.push(currentQuestion);

    // unchecked at start
    const answersEls = document.querySelectorAll(".answer");
    answersEls.forEach((answer) => answer.checked = false);

    console.log(quizData[currentQuestion].question);
    questionEl.innerText = quizData[currentQuestion].question;
    a_text.innerText = quizData[currentQuestion].a;
    b_text.innerText = quizData[currentQuestion].b;
    c_text.innerText = quizData[currentQuestion].c;
    d_text.innerText = quizData[currentQuestion].d;
}


submitBtn.addEventListener('click', () => {
    if(submitBtn.innerHTML === 'Restart') {
        location.reload();
    }
    const answersEls = document.querySelectorAll(".answer");
    answersEls.forEach((answer) => {
        if(answer.checked) {
            if(answer.value === quizData[currentQuestion].correct) {
                score = score + 1;
            }
        }
    });
    
    count++;

    if(count < 11) {
        loadQuiz();
    } else {
        quizHeader.style.textAlign = 'center';
        quizHeader.innerHTML = 'Your score is '+score+'/10';
        submitBtn.innerHTML = 'Restart'
    }  
});   





