export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    const tipoDeInput2 = input2.dataset.tipo;
    if (validadores[tipoDeInput], validadores[tipoDeInput2]) {
        validadores[tipoDeInput](input), 
        validadores[tipoDeInput2](input2);
    }

    
    if (input.validity.valid, input2.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";

        input2.parentElement.classList.remove("input-container--invalid");
        input2.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = 
        mostrarMensajeDeError(tipoDeInput, input)

        input2.parentElement.classList.add("input-container--invalid");
        input2.parentElement.querySelector(".input-message-error").innerHTML = 
        mostrarMensajeDeError(tipoDeInput2, input2)
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    nombre:{
        valueMissing: "El campo nombre no puede estar vacio",
    },
    email:{
        valueMissing: 'El campo correo no puede estar vacio',
        typeMismatch: 'El correo no es válido.',
    },
    asunto: {
        valueMissing: 'El campo password no puede estar vacio',
        patternMismatch: 'Mínimo ocho y máximo 10 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.',
    },
    message:{
        valueMissing:'El campo fecha no puede estar vacio.',
        customError: 'Debes tener almenos 18 años de edad.',
    },
    
};


function mostrarMensajeDeError(tipoDeInput, input, input2){
    let mensaje = '';
    tipoDeErrores.forEach((error) => {
        if (input.validity[error], input2.validity[error]) {
            console.log(tipoDeInput, error), console.log(tipoDeInput2, error);
            console.log(input.validity[error]), console.log(input2.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]), console.log(mensajesDeError[tipoDeInput2][error]);
            mensaje = mensajesDeError[tipoDeInput][error], mensaje = mensajesDeError[tipoDeInput2][error];
        }
    });
    return mensaje;
}