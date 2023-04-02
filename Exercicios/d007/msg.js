var dolar = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))
var res = document.getElementById('res')
function converter(){
    var carteira = Number(window.prompt('Quantos R$ você tem na carteira?'))
    var converte = (carteira / dolar).toFixed(2)
    res.innerHTML = `Você tem ${converte} dolares.`

}