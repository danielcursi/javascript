// criar elemento
var el = document.createElement('h3')

el.classList = 'testando-classe'

var texto = document.createTextNode('Este é o texto')

el.appendChild(texto)

console.log(el)

// selecionar o elemento que quero trocar
var title = document.querySelector('#title')

console.log(title)

// selecionar o pai do el
var pai = title.parentNode; // para o js selecionar o pai do elemento, no caso aqui o body

// trocar os elementos
pai.replaceChild(el, title) // quem vai entrar e quem vai ser substituido