function converter(){
var distancia = window.prompt('Digite uma distancia em metros (m)')
var res = document.getElementById('res')
var n = Number(distancia)
var km = (n / 1000).toFixed(3)
var hm = (n / 100).toFixed(3)
var Dam = (n / 10).toFixed(3)
var dm = (n * 1000).toFixed(3)
var cm = (n * 100).toFixed(3)
var mm = (n * 10).toFixed(3)
res.innerHTML = `<h2>A distancia de ${n} metros, corresponde a...</h2> <br> ${km} quilômetros (Km) <br> ${hm} hectômetros (hm) <br> ${Dam} decâmetros (Dam) <br> ${dm} decimetros (dm) <br> ${cm} centimetros (cm) <br> ${mm} milimetros (mm)`
}