//questions
const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "What is an Equinox:",
    alternativaA : "The time when the plane of Earth's equator passes through the geometric center of the Sun's disk",
    alternativaB : "The point where the Sun appears to reach either its highest or lowest point in the sky for the year",
    alternativaC : "The effect caused by the interaction of charged particles from the Sun with atoms in the upper atmosphere",
    correta      : "The time when the plane of Earth's equator passes through the geometric center of the Sun's disk",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "What NASA stands for:",
    alternativaA : "National Aliance and Space Aeronautics",
    alternativaB : "Nacional Administration and Space Aliance",
    alternativaC : "National Aeronautics and Space Administration",
    correta      : "National Aeronautics and Space Administration",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "The most common type of black holes, they can be up to 20 times more massive than the Sun:",
    alternativaA : "Primordial Black Holes",
    alternativaB : "Stellar Black Holes",
    alternativaC : "Supermassive Black Holes",
    correta      : "Stellar Black Holes",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "What is the deadliest planet in the Solar System?",
    alternativaA : "Venus",
    alternativaB : "Saturn",
    alternativaC : "Mars",
    correta      : "Venus",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "The Earth's average distance to the Sun is:",
    alternativaA : "109 million km",
    alternativaB : "149 million km",
    alternativaC : "199 million km",
    correta      : "149 million km",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "What is the Sun mainly made of?",
    alternativaA : "Rock",
    alternativaB : "Lava",
    alternativaC : "Gas",
    correta      : "Gas",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "How many moons does Mars have?",
    alternativaA : "6",
    alternativaB : "4",
    alternativaC : "2",
    correta      : "2",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Icy bodies of frozen gases, rocks and dust left over from the formation of the solar system are:",
    alternativaA : "Comets",
    alternativaB : "Stars",
    alternativaC : "Asteroids",
    correta      : "Comets",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "When did Apollo-11 successfully land on the Moon?",
    alternativaA : "1968",
    alternativaB : "1969",
    alternativaC : "1970",
    correta      : "1969",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Where is located the Asteroid Belt?",
    alternativaA : "Between Mars and Jupiter",
    alternativaB : "Between Mars and Earth",
    alternativaC : "Between Earth and Jupiter",
    correta      : "Between Earth and Jupiter"
}

// array with all questions
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')


let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    
}

let quizQuestions = [
    q0 = {
        nQuestion: 0,
        question: "Pergunta",
        choiceA: "Alternativa A",
        choiceB: "Alternativa B",
        choiceC: "Alternativa C",
        correctAnswer: "0",
    },

    q1 = {
		nQuestion: 1,
		question: "What is an Equinox:",
        choiceA: "The time when the plane of Earth's equator passes through the geometric center of the Sun's disk",
        choiceB: "The point where the Sun appears to reach either its highest or lowest point in the sky for the year",
        choiceC: "The effect caused by the interaction of charged particles from the Sun with atoms in the upper atmosphere",
		correctAnswer: "The time when the plane of Earth's equator passes through the geometric center of the Sun's disk"
	},
        
    q2 = {
        nQuestion: 2,
        question: "What NASA stands for:",
        choiceA: "National Aliance and Space Aeronautics",
        choiceB: "Nacional Administration and Space Aliance",
        choiceC: "National Aeronautics and Space Administration",
        correctAnswer: "National Aeronautics and Space Administration"
    },
    
]