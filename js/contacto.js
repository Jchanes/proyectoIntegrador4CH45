const txtname = document.getElementById("name");
const txtnumber = document.getElementById("number");
const txtmail = document.getElementById("mail");
const txtmessage = document.getElementById("message");
const btnValidar = document.getElementById("btnValidar");

function validarName(name) {
    let pattern = /^[a-zA-Z\s]{3,}$/
    return pattern.test(name)
}

function validarTelefono(telefono) {
    let pattern = /^\d{10}$/
    return pattern.test(telefono)
}

function validarMensaje(mensaje) {
    return mensaje.length >= 30 && mensaje.length <= 500
}

function validarEmail(email) {
    let pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    return pattern.test(email)
}

btnValidar.addEventListener("click", function (event) {
    event.preventDefault(); 

    const nombreEsValido = validarName(txtname.value)
    const telefonoEsValido = validarTelefono(txtnumber.value)
    const emailEsValido = validarEmail(txtmail.value);
    const mensajeEsValido = validarMensaje(txtmessage.value)

    if (nombreEsValido) {
        console.log("Nombre válido")
    } else {
        console.log("Nombre inválido")
    }

    if (emailEsValido) {
        console.log("Email válido")
    } else {
        console.log("Email inválido")
    }

    if (telefonoEsValido) {
        console.log("Teléfono válido")
    } else {
        console.log("Teléfono inválido (debe ser un número de 10 dígitos)")
    }

    if (mensajeEsValido) {
        console.log("Mensaje válido")
    } else {
        console.log("Mensaje inválido (debe tener entre 30 y 500 caracteres)")
    }
});
