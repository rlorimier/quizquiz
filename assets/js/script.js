let titulo = document.querySelector('h1')
let correctCounter = document.querySelector('.correctcounter')
let aviso = document.querySelector('#aviso')
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
    aviso.classList.remove("hide")
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
function proximaQuestao(nQuestao) {
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
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    correctCounter.innerText = "Game Over!"
    nQuestion.textContent = ""

    //let pont = ''
    //pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Final Score: " + pontos + " out of 100 "

    aviso.textContent = "Final Score: " + pontos + " out of 100 " 

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
    aviso.textContent = ""
    resposta.textContent = ""

}

