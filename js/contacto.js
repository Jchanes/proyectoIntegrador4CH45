
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
    let pattern = /^[a-záéíóúñA-ZÁÉÍÓÚÑ]{2,}([ '-][a-záéíóúñA-ZÁÉÍÓÚÑ]{2,})*$/
    return pattern.test(name)
}

function validarTelefono(telefono) {
    let pattern = /^[1-9]\d{9}$/
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
        txtname.style.border=''
    } else {isValidName= false
        console.log("Nombre inválido")
        txtname.style.border='solid red medium'
    }

    if (emailEsValido) {
        console.log("Email válido")
        txtmail.style.border=''
    } else {isValidEmail= false
        console.log("Email inválido")
        txtmail.style.border='solid red medium'
    }

    if (telefonoEsValido) {
        console.log("Teléfono válido")
        txtnumber.style.border=''
    } else {isValidTelefono= false
        console.log("Teléfono inválido (debe ser un número de 10 dígitos)")
        txtnumber.style.border='solid red medium'

    }

    if (mensajeEsValido) {
        console.log("Mensaje válido")
        txtmessage.style.border=''
    } else {isValidMensaje= false
        console.log("Mensaje inválido (debe tener entre 30 y 500 caracteres)")
        txtmessage.style.border='solid red medium'
    }

    if (emailEsValido==true && mensajeEsValido==true && nombreEsValido==true && telefonoEsValido==true) {
        
        let templateParams = {
            name: txtname.value,
            email: txtmail.value,
            tel: txtnumber.value,
            message: txtmessage.value  
        }
        txtmessage.value = ''
        txtname.value=''
        txtnumber.value=''
        txtmail.value=''


        emailjs.send('service_3sr4zi6','template_bm1ym9o',templateParams)
        .then((response)=>{
            
            console.log(response.status, response.txt)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Enviado",
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(()=>{
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Por favor llena los campos solicitados correctamente",
                showConfirmButton: false,
                timer: 1500
            });
        })

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


