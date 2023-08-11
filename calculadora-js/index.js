const main = document.querySelector("main")
const input = document.querySelector("#input")
const allowkeys = ["%", "/", "*", "-", "+", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."]

input.addEventListener('keydown', function (ev){
    ev.preventDefault()
    if(allowkeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if(ev.key === "Backspace"){
        input.value = input.value.slice(0, -1)
    }
    if(ev.key === "Enter"){
        calculate()
    }
})

document.querySelectorAll(".charkey").forEach(function(charkeyBtn){ // percorrendo por todos botoes
    charkeyBtn.addEventListener("click", function(){
        const value = charkeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById("clear").addEventListener("click", () => {
    input.value = ""
    input.focus()
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate(){
    const result = eval(input.value)
    input.value = result
    
}