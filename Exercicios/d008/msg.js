function calcular(){
    let produto = window.prompt('Qual é o produto que você está comprando?')
    let prec = window.prompt('Qual é o preço de ' + produto)
    let res = document.getElementById('res')
    let desc = (Number(prec) * 0.1).toFixed(2)
    let vf = (prec - desc).toFixed(2)
    res.innerHTML = `<h1>Calculando desconto de 10% para ${produto}`
    res.innerHTML += `<br> O preço original era R$ ${prec}.`
    res.innerHTML += `<br> Você acaba de ganhar R$ ${desc} de desconto (-10%).`
    res.innerHTML += `<br> No fim, você vai pagar R$ ${vf} no produto ${produto}.`
}