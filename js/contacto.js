const txtname = document.getElementById("name");
const txtnumber = document.getElementById("number");
const txtmail = document.getElementById("mail");
const txtmessage = document.getElementById("message");
const btnValidar = document.getElementById("btnValidar");


let isValidName = true
let isValidTelefono = true
let isValidMensaje = true
let isValidEmail = true

function validarName(name) {
    let pattern = /^[a-zA-ZáéíóúñÑ]{3,}+$/
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
    } else {isValidName= false
        console.log("Nombre inválido")
    }

    if (emailEsValido) {
        console.log("Email válido")
    } else {isValidEmail= false
        console.log("Email inválido")
    }

    if (telefonoEsValido) {
        console.log("Teléfono válido")
    } else {isValidTelefono= false
        console.log("Teléfono inválido (debe ser un número de 10 dígitos)")
    }

    if (mensajeEsValido) {
        console.log("Mensaje válido")
    } else {isValidMensaje= false
        console.log("Mensaje inválido (debe tener entre 30 y 500 caracteres)")
    }

    if (isValidEmail==true && isValidMensaje==true && isValidName==true && isValidTelefono==true) {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Enviado",
        showConfirmButton: false,
        timer: 1500
    }
    
    );

    } else {
    Swal.fire({
        position: "center",
        icon: "error",
        title: "Por favor llena los campos solicitados correctamente",
        showConfirmButton: false,
        timer: 1500
    });
    }

});


