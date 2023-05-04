var btn = document.querySelector('#btn')
var body = document.querySelector('body')

console.log(btn)
console.log(body)

btn.addEventListener('click', function(){ // 1º evento clique, 2º função de callback
    
    console.log('clicou')
    body.style.background = 'black' // assim que clica muda o dor de fundo do body para preto
    body.style.color = 'white' // cor de texto para branco

    console.log(this) // ele mesmo (btn)

    this.style.color = 'red'

})

// click afetando outros elementos
var title = document.querySelector('#title')

title.addEventListener('click', function(){
    
    var subtitle = document.querySelector('.subtitle')

    subtitle.style.display = 'none' // remove o subtitle do pagina
})

// double click
var subtitle = document.querySelector('.subtitle')

subtitle.addEventListener('dblclick', function(){ // so ira funcionar quando o usuario der um duplo clique
    console.log('click duplo')
})