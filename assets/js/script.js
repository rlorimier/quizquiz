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

let titulo = document.querySelector('h1')
let correctCounter = document.querySelector('.correctcounter')
let numberOfQuestions = document.querySelector('#numberofquestions')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 
let placar = 0 

// QUESTIONS
let nQuestion = document.querySelector('#nQuestion')
let question = document.querySelector('#pergunta')

// ANSWERS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.box-container')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')


let numero = document.querySelector('#numero')
//let total  = document.querySelector('#total')

numero.textContent = q1.nQuestion

let totalDeQuestoes = (allQuestions.length)-1
total.textContent = totalDeQuestoes

let startBtn = document.getElementById("startquiz")
startBtn.addEventListener("click", startQuiz)

let boxContainer = document.getElementById("box-container")

//to start the quiz
function startQuiz(){
    console.log("hello")
    startBtn.classList.add("hide")
    boxContainer.classList.remove("hide")
    numberOfQuestions.classList.remove("hide")
    correctCounter.classList.remove("hide")

    nQuestion.textContent = q1.nQuestion
    question.textContent   = q1.question
    a.textContent = q1.choiceA
    b.textContent = q1.choiceB
    c.textContent = q1.choiceC

    a.setAttribute('value', '1')
    b.setAttribute('value', '2')
    c.setAttribute('value', '3')
}

// for the next questions
function nextQuestions(nQuestao) {
    numero.textContent = nQuestao
    nQuestion.textContent = allQuestions[nQuestao].nQuestion
    question.textContent = allQuestions[nQuestao].question
    a.textContent = allQuestions[nQuestao].choiceA
    b.textContent = allQuestions[nQuestao].choiceB
    c.textContent = allQuestions[nQuestao].choiceC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

// to hide the choices
function bloquearAlternativas() {
    a.classList.add('hide')
    b.classList.add('hide')
    c.classList.add('hide')
}

//to unhide the choices
function desbloquearAlternativas() {
    a.classList.remove('hide')
    b.classList.remove('hide')
    c.classList.remove('hide')
}

// to check if is the right answer
function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value

    let respostaEscolhida = resposta.textContent

    let correct = allQuestions[numeroDaQuestao].correctAnswer

    if(respostaEscolhida == correct) {
        pontos ++ 
    }

    // update score
    placar = pontos
    correctCounter.innerText = "Correct Answers: " + placar

    // block answers
    bloquearAlternativas()

    setTimeout(function() {
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            gameOver()
        } else {
            nextQuestions(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function gameOver() {
    correctCounter.innerText = "You got " + pontos + " out of 10"
    nQuestion.innerText = ""
    numberOfQuestions.innerText = "Game Over!"
    
    //let pont = ''
    //pontos == 0 ? pont = 'ponto' : pont = 'pontos'
    //pergunta.textContent   = "Final Score: " + pontos + " out of 100 "

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    startBtn.classList.remove("hide")
    startBtn.innerText = "Restart Quiz"
    startBtn.addEventListener("click", resetQuiz)
}

function resetQuiz() {
    articleQuestoes.style.display = ""
    pergunta.textContent = ""
    numberOfQuestions.textContent = ""
    resposta.textContent = ""

}

