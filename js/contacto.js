const txtname = document.getElementById("name");
const txtnumber = document.getElementById("number");
const txtmail = document.getElementById("mail");
const txtmessage = document.getElementById("message");
const btnValidar = document.getElementById("btnValidar");

let isValidName = true;
let isValidTelefono = true;
let isValidMensaje = true;
let isValidEmail = true;

function validarName(name) {
    let pattern = /^[a-zA-Z\s]{3,}$/;
    return pattern.test(name);
}

function validarTelefono(telefono) {
    let pattern = /^\d{10}$/;
    return pattern.test(telefono);
}

function validarMensaje(mensaje) {
    return mensaje.length >= 15 && mensaje.length <= 500;
}

function validarEmail(email) {
    let pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return pattern.test(email);
}

function sendEmail(name, email, tel, message){

    const msg = {
    From: `truefanboutique3@gmail.com`, // Change to your recipient
    To: `${email}`, // Change to your verified sender
    Subject: 'Gracias por mandar mensaje a TrueFan Boutique',
    Body: `<strong>Tu mensaje es muy importante ${name} para nosotros, mantente al pendiente para recibir una respuesta a tus dudas. </strong>
          <br>
          <p> El mensaje recibido fue el siguiente:</p>
          <ul>
          <li> Nombre: ${name}</li>
          <li> Correo: ${email}</li>
          <li> Telefono: ${tel}</li>
          <li> Mensaje: ${message}</li>
          </ul>
          <p> Tendrá respuesta en 2 a 3 días hábiles, nuestros expertos están trabajando en el asunto</p>
    `,
    Host: `smtp.elasticemail.com` ,
    Username: `truefanboutique3@gmail.com` ,
    Password: `EF911D6C79BA79433F007302769C0D703681`,
    }

    Email.send(msg)
    .then( (info) => {

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Correo enviado éxitosamente",
            showConfirmButton: false,
            timer: 1500
        });
        
    })
    .catch( (err) => {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Sucedio un error al enviar el correo",
            showConfirmButton: false,
            timer: 1500
        })
    })
    ;
    
}

btnValidar.addEventListener("click", function (event) {
    event.preventDefault(); 

    const nombreEsValido = validarName(txtname.value);
    const telefonoEsValido = validarTelefono(txtnumber.value);
    const emailEsValido = validarEmail(txtmail.value);
    const mensajeEsValido = validarMensaje(txtmessage.value);

 
    if (nombreEsValido) {
        isValidName = true;
        txtname.style.border = "";
        txtname.style.borderColor = "";
    } else {
        isValidName = false;
        txtname.style.border = "solid 2.5px";
        txtname.style.borderColor = "red";
    }


    if (emailEsValido) {
        isValidEmail = true;
        txtmail.style.border = "";
        txtmail.style.borderColor = "";
    } else {
        isValidEmail = false;
        txtmail.style.border = "solid 2.5px";
        txtmail.style.borderColor = "red";
    }


    if (telefonoEsValido) {
        isValidTelefono = true;
        txtnumber.style.border = "";
        txtnumber.style.borderColor = "";
    } else {
        isValidTelefono = false;
        txtnumber.style.border = "solid 2.5px";
        txtnumber.style.borderColor = "red";
    }

    if (mensajeEsValido) {
        isValidMensaje = true;
        txtmessage.style.border = "";
        txtmessage.style.borderColor = "";
    } else {
        isValidMensaje = false;
        txtmessage.style.border = "solid 2.5px";
        txtmessage.style.borderColor = "red";
    }

    if (isValidEmail && isValidMensaje && isValidName && isValidTelefono) {
        

        //Colocar la función de validación sendEmail()

        sendEmail(txtname.value, txtmail.value, txtnumber.value, txtmessage.value)

  
        txtname.value = "";
        txtnumber.value = "";
        txtmail.value = "";
        txtmessage.value = "";
        

        txtname.style.border = "";
        txtname.style.borderColor = "";
        txtmail.style.border = "";
        txtmail.style.borderColor = "";
        txtnumber.style.border = "";
        txtnumber.style.borderColor = "";
        txtmessage.style.border = "";
        txtmessage.style.borderColor = "";


    } else {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Por favor llena los campos solicitados correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
});
