const quizData = [
	{
		pergunta: "Qual a porta do protocolo HTML?",
		a: "50",
		b: "60",
		c: "70",
		d: "80",
		correta: "d"
	},

	{
		pergunta: "Qual atributo devemos utilizar para inserir propriedades CSS?",
		a: 'style="" ',
		b: 'css-style="" ',
		c: 'css="" ',
		d: 'css.',
		correta: "a"
	},

	{
		pergunta: "Qual a forma correta de se criar um link?",
		a: '<a href="link">link aqui</a>',
		b: '<span href="link">Link aqui</span>',
		c: '<link rel="Link" value="Link aqui">',
		d: '<link rel="LINK" value="Link aqui">',
		correta: "a"
	},

	{
		pergunta: "Qual tag abaixo pertence ao corpo de uma tabela?",
		a: "<thead>",
		b: "<footer>",
		c: "<tf>",
		d: "<a>",
		correta: "a"
	},

	{
		pergunta: "Como que todo código de HTML começa?",
		a: "<!DOCTYPE html>",
		b: "<start></start>",
		c: "<head></head>",
		d: "<html></html>",
		correta: "a"
	}

]

const questao = document.querySelector("#pergunta")

const alternativaA = document.querySelector("#textoA")
const alternativaB = document.querySelector("#textoB")
const alternativaC = document.querySelector("#textoC")
const alternativaD = document.querySelector("#textoD")

const submit = document.querySelector("#buttonSubmit") 

let questaoAtual = 0
let alternativaCorreta = ''
let acertos = 0



carregarPergunta()

function carregarPergunta() {
	const dadosQuestao = quizData[questaoAtual]
	questao.innerText = dadosQuestao.pergunta

	alternativaA.innerText = dadosQuestao.a
	alternativaB.innerText = dadosQuestao.b
	alternativaC.innerText = dadosQuestao.c
	alternativaD.innerText = dadosQuestao.d
	alternativaCorreta = dadosQuestao.correta
	
}

submit.addEventListener("click", function () {
	verificarCorreta();
	questaoAtual++
	
	if (questaoAtual < quizData.length){
		
		resetar();
		carregarPergunta()
	} else{
		alert("Você finalizou o jogo!")
		document.querySelector("#quizContainer").innerText=acertos;
	}
	
	// body...
})

function resetar(){
	inputs = document.querySelectorAll("[type = radio]")
	for (var i = inputs.length - 1; i >= 0; i--) {
		inputs[i].checked=""
	}
}

function verificarCorreta() {
	let inputChecada = document.querySelector("[type='radio']:checked")
	if (inputChecada.id == alternativaCorreta){
		console.log("Você acertou!")
		acertos = acertos + 1
	}else{
		console.log("Você errou!")
	}
}