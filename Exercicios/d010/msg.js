function calcular(){
    let a = Number(window.prompt('Qual é o valor de a?'))
    let b = Number(window.prompt('Qual é o valor de b?'))
    let c = Number(window.prompt('Qual é o valor de c?'))
    let res = document.getElementById('res')
    let delta = (b**2 - 4 * a * c)
    res.innerHTML = `<h1>Resolvendo Bhaskara</h1>`
    res.innerHTML += `<br> A equação atual é ${a}x<sup>2</sup> + ${b}x + ${c} = 0`
    res.innerHTML += `<br> O cálculo realizado será &Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}`
    res.innerHTML += `<br> O valor calculado foi &Delta; = ${delta}`

}