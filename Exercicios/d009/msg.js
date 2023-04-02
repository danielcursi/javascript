function calcular(){
    let nome = window.prompt('Qual é o nome do funcionário?')
    let salario = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let reaj = Number(window.prompt(`O salário de ${nome} var ser reajustado em qual porcentagem?`))
    let res = document.getElementById('res')
    let porcent = reaj / 100
    let aumento = Number(salario * porcent)
    let st = Number(salario + aumento)
    
    res.innerHTML = `<h1>${nome} recebeu um aumanto salarial!</h1>`
    res.innerHTML += `<br> O salário atual era R$ ${salario}.`
    res.innerHTML += `<br> Com um aumento de 18%, o salário vai aumentar ${aumento.toFixed(2)} no próximo mês.`
    res.innerHTML += `<br> E a partir daí, ${nome} vai passar a ganhar ${st.toFixed(2)}.`
}