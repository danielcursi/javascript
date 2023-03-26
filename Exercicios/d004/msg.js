function troco(){
var nome = window.prompt('Qual produto você está comprando?')
var preco = Number(window.prompt(`Quanto custa ${nome} que você está comprando?`))
var valor = Number(window.prompt(`Qual o valor que você deu para pagar ${nome}`))
var p = preco.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
var v = valor.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

window.alert(` Você comprou ${nome} que custou ${p}.\n Deu ${v} em dinheiro e vai receber ${valor - preco} de troco.\n volte sempre!`)
}