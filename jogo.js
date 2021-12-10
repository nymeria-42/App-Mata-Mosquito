var altura = 0
var largura = 0
var vidas=3
var tempo = 15

var criaMosquitoTempo

var nivel = window.location.search //retorna o que está a direita do ponto de interrogacao da url (incluido o ?)
nivel=nivel.slice(-1)

if (nivel==='2'){
	criaMosquitoTempo = 1000
} else if (nivel==='3'){
	criaMosquitoTempo = 750
} else if (nivel==='4'){
	criaMosquitoTempo = 600
} else {
	criaMosquitoTempo = 1500
}


// Ajustando o jogo de acordo com o tamanho da janela 
function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	return largura, altura
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo -= 1

	if (tempo<0){
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href='vitoria.html'

	}
		else {
		document.getElementById('cronometro').innerHTML = tempo //valor entre as tags
	}
},1000)

// Criando posicoes randomicas
function posicaoRandomica(){
	//remover mosca anterior caso exista
	if(document.getElementById('mosca')){ //para nao dar erro na primeira execucao
		document.getElementById('mosca').remove()

		
		if(vidas<1){
			window.location.href='game_over.html'
		} else{
			document.getElementById('v'+vidas).src="imagens/coracao_vazio.png"
			vidas--
		}	
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90 //-90 p/ n estourar
	var posicaoY = Math.floor(Math.random() * altura) - 90 

	posicaoX = posicaoX < 0 ? 0 : posicaoX // p/ nao criar imagens em pos. negativas
	posicaoY = posicaoY < 0 ? 0 : posicaoY 

	// Criar o elemento html
	var mosca = document.createElement('img')
	mosca.src = 'imagens/mosca.png'
	mosca.className = tamanhoAleatorio()+' '+ladoAleatorio()
	mosca.style.left=posicaoX+'px'
	mosca.style.top=posicaoY+'px'
	mosca.style.position='absolute'
	mosca.id="mosca" 
	mosca.onclick=function(){this.remove()}

	// Add no body o elemento criado
	document.body.appendChild(mosca)
}

function tamanhoAleatorio () {
	var classe = Math.floor(Math.random()*3) //0, 1 e 2 - nao chegaria em 3, apenas proximo
	switch(classe){
		case 0:
			return 'mosca1'
		case 1:
			return 'mosca2'
		case 2:
			return 'mosca3'
	}

}

function ladoAleatorio(){
	var classe = Math.floor(Math.random()*2) //0, 1 - nao chegaria em 2, apenas proximo
		switch(classe){
			case 0:
				return 'ladoA'
			case 1:
				return 'ladoB'
		}	
}


