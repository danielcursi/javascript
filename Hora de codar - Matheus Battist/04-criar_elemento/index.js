var novoParagrafo = document.createElement('p') // criando tag <p>

var texto = document.createTextNode("Este é o conteudo do paragrafo") // criando um texto para inserir no paragrafo

novoParagrafo.appendChild(texto) // tag <p> recebendo o texto

var body = document.querySelector('body') // variavel recebendo o body da arquivo html

body.appendChild(novoParagrafo) // body recebendo a tag <p> com o texto

// Inserir em um container

var container = document.querySelector('#container')

var el = document.createElement('span')

el.appendChild(document.createTextNode("Texto do span"))

container.appendChild(el)
