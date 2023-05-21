const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const jobSelect = document.querySelector('#job')
const messageTextarea = document.querySelector('#message')

form.addEventListener('submit', function(event){
    event.preventDefault()

    // Verificar se o nome está vazio
    if(nameInput.value === ''){
        alert('Por favor, preencha seu nome!')
        return
    }

    // Verificar se o email está preenchido e se é valido
    if(emailInput.value === '' || !isEmailValid(emailInput.value)){
        alert('Por favor, preencha seu email!')
        return
    }

    // Verificar se a senha tem no minimo 8 digitos
    if(!validatePassword(passwordInput.value, 8)){
        alert('A senha precisa ser no minimo 8 dígitos')
        return
    }

    // Verificar se a situação está preenchida
    if(jobSelect.value === ''){
        alert('Por favor, selecione a sua situação')
        return
    }

    if(messageTextarea.value === ''){
        alert('Por favor, escreva uma mensagem')
        return
    }



    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
})

// Função que valida e-mail
function isEmailValid(email){
    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true
    }
    return false
}

// Função que valida a senha
function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        // senha válida
        return true
    } 
    return false
}