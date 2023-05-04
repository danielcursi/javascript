// clearTimeout na pratica
var x = 0

var mytimer = setTimeout(function(){
    console.log('O x é 0')
}, 1500)

x = 5

if(x > 0){
    clearTimeout(mytimer)
    console.log('O x passou de 0')
}

// clearSetInterval na pratica
var myInterval = setInterval(function(){
    console.log('Imprimindo interval')
}, 500)

setTimeout(function(){
    console.log('Não precisamos mais repetir!')
    clearInterval(myInterval)
},1500)