//questions
const q0 = {
    nQuestion: 0,
    question: "Pergunta",
    choiceA: "Alternativa A",
    choiceB: "Alternativa B",
    choiceC: "Alternativa C",
    correctAnswer: "0",
}

const q1 = {
    nQuestion: 1,
    question: "What is an Equinox:",
    choiceA: "The time when the plane of Earth's equator passes through the geometric center of the Sun's disk",
    choiceB: "The point where the Sun appears to reach either its highest or lowest point in the sky for the year",
    choiceC: "The effect caused by the interaction of charged particles from the Sun with atoms in the upper atmosphere",
    correctAnswer: "The time when the plane of Earth's equator passes through the geometric center of the Sun's disk",
}

const q2 = {
    nQuestion: 2,
    question: "What NASA stands for:",
    choiceA: "National Aliance and Space Aeronautics",
    choiceB: "Nacional Administration and Space Aliance",
    choiceC: "National Aeronautics and Space Administration",
    correctAnswer: "National Aeronautics and Space Administration",
}

const q3 = {
    nQuestion: 3,
    question: "The most common type of black holes, they can be up to 20 times more massive than the Sun:",
    choiceA: "Primordial Black Holes",
    choiceB: "Stellar Black Holes",
    choiceC: "Supermassive Black Holes",
    correctAnswer: "Stellar Black Holes",
}

const q4 = {
    nQuestion: 4,
    question: "What is the deadliest planet in the Solar System?",
    choiceA: "Venus",
    choiceB: "Saturn",
    choiceC: "Mars",
    correctAnswer: "Venus",
}

const q5 = {
    nQuestion: 5,
    question: "The Earth's average distance to the Sun is:",
    choiceA: "109 million km",
    choiceB: "149 million km",
    choiceC: "199 million km",
    correctAnswer: "149 million km",
}

const q6 = {
    nQuestion: 6,
    question: "What is the Sun mainly made of?",
    choiceA: "Rock",
    choiceB: "Lava",
    choiceC: "Gas",
    correctAnswer: "Gas",
}

const q7 = {
    nnQuestion: 7,
    question: "How many moons does Mars have?",
    choiceA: "6",
    choiceB: "4",
    choiceC: "2",
    correctAnswer: "2",
}

const q8 = {
    nQuestion: 8,
    question: "Icy bodies of frozen gases, rocks and dust left over from the formation of the solar system are:",
    choiceA: "Comets",
    choiceB: "Stars",
    choiceC: "Asteroids",
    correctAnswer: "Comets",
}

const q9 = {
    nQuestion: 9,
    question: "When did Apollo-11 successfully land on the Moon?",
    choiceA: "1968",
    choiceB: "1969",
    choiceC: "1970",
    correctAnswer: "1969",
}

const q10 = {
    nQuestion: 10,
    question: "Where is located the Asteroid Belt?",
    choiceA: "Between Mars and Jupiter",
    choiceB: "Between Mars and Earth",
    choiceC: "Between Earth and Jupiter",
    correctAnswer: "Between Earth and Jupiter"
}

// array with all questions
const allQuestions = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

// variables from html
let titulo = document.querySelector('h1')
let correctCounter = document.querySelector('.correctcounter')
let numberOfQuestions = document.querySelector('#numberofquestions')
let nQuestion = document.querySelector('#nQuestion')
let question = document.querySelector('#questiontxt')
let optionA = document.querySelector('#optiona')
let optionB = document.querySelector('#optionb')
let optionC = document.querySelector('#optionc')
let articleQuestoes = document.querySelector('.box-container')
let allChoices = document.querySelector('#allchoices')
let questionNumber = document.querySelector('#questionn')
let startBtn = document.getElementById("startquiz")
let boxContainer = document.getElementById("box-container")
let infoBar = document.querySelector(".infobar")

let score = 0 
let totalQuestions = (allQuestions.length)-1
total.textContent = totalQuestions

questionNumber.textContent = q1.nQuestion

startBtn.addEventListener("click", startQuiz)


// to start the quiz
function startQuiz(){
    // console.log("hello")
    startBtn.classList.add("hide")
    boxContainer.classList.remove("hide")
    numberOfQuestions.classList.remove("hide")
    correctCounter.classList.remove("hide")
    infoBar.classList.remove("hide")

    nQuestion.textContent = q1.nQuestion
    question.textContent = q1.question
    optionA.textContent = q1.choiceA
    optionB.textContent = q1.choiceB
    optionC.textContent = q1.choiceC

    optionA.setAttribute('value', '1')
    optionB.setAttribute('value', '1')
    optionC.setAttribute('value', '1')
}

// for the next questions
function nextQuestions(nQuestao) {
    questionNumber.textContent = nQuestao
    nQuestion.textContent = allQuestions[nQuestao].nQuestion
    question.textContent = allQuestions[nQuestao].question
    optionA.textContent = allQuestions[nQuestao].choiceA
    optionB.textContent = allQuestions[nQuestao].choiceB
    optionC.textContent = allQuestions[nQuestao].choiceC
    optionA.setAttribute('value', nQuestao+'A')
    optionB.setAttribute('value', nQuestao+'B')
    optionC.setAttribute('value', nQuestao+'C')
}

// to hide the choices
function blockAnswers() {
    optionA.classList.add('hide')
    optionB.classList.add('hide')
    optionC.classList.add('hide')
}

//to unhide the choices
function unblockAnswers() {
    optionA.classList.remove('hide')
    optionB.classList.remove('hide')
    optionC.classList.remove('hide')
}

// to check if is the right answer
function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    let userChoice = resposta.textContent
    let correct = allQuestions[numeroDaQuestao].correctAnswer

    // update score
    if (userChoice == correct) {
        score ++
    }
    correctCounter.innerText = "Correct Answers: " + score

    blockAnswers()

    setTimeout(function() {
        proxima = numeroDaQuestao + 1

        if(proxima > totalQuestions) {
            gameOver()
        } else {
            nextQuestions(proxima)
        }
    }, 300)

    unblockAnswers()
}

function gameOver() {
    // final results
    correctCounter.innerText = "You got " + score + " out of 10"
    numberOfQuestions.innerText = "Game Over!"

    // reset all questions and answers
    nQuestion.innerText = ""
    optionA.textContent = ""
    optionB.textContent = ""
    optionC.textContent = ""
    optionA.setAttribute('value', '0')
    optionB.setAttribute('value', '0')
    optionC.setAttribute('value', '0')

    // add class of hide
    articleQuestoes.style.display = 'none'

    // start button is shown under different name
    startBtn.classList.remove("hide")
    startBtn.innerText = "Restart Quiz"
    startBtn.addEventListener("click", resetQuiz)
}

// to reset the page
function resetQuiz() {
    window.location.reload(true)

}

