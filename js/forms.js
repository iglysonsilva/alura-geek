const inputs = document.querySelectorAll('.form-input');

const valid = (e) => {
    const input = e.target;
    console.log(e)
    if(input.validity.valid){
        input.parentElement.classList.remove("invalid_input");
    } else {
        input.parentElement.classList.add("invalid_input");
        showMessageError(input)
    }
}

const showMessageError = (input) => {
    let message;
    if(input.validity.valueMissing){
        message = '*Este campo não pode estar vazio';
    } else if(input.validity.typeMismatch){
        message = '*O e-mail é inválido';
    } else {
        message = '*Error no campo';
    }
    input.parentElement.querySelector(".input-message-error").innerHTML = mensagem;
}

inputs.forEach(input => input.addEventListener('blur', valid))

