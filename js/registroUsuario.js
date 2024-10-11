const passwordInput = document.getElementById('password');
const txtname = document.getElementById("name");
const txtnumber = document.getElementById("number");
const txtmail = document.getElementById("mail");
const confirmPasswordInput = document.getElementById('confirm-password');
const lengthItem = document.getElementById('length');
const uppercaseItem = document.getElementById('uppercase');
const specialItem = document.getElementById('special');
const matchItem = document.getElementById('match');
const btnValidar = document.getElementById("btnValidar");
const checkIcon = 'bi-check-circle';
const crossIcon = 'bi-x-circle';


let isValidName = true
let isValidTelefono = true
let isValidEmail = true
let isValidPassword = true

function validarName(name) {
    let pattern = /^[a-záéíóúñA-ZÁÉÍÓÚÑ]{2,}([ '-][a-záéíóúñA-ZÁÉÍÓÚÑ]{2,})*$/
    return pattern.test(name)
}

function validarTelefono(number) {
    let pattern =  /^[1-9]\d{9}$/ 
    return pattern.test(number)
}

function validarEmail(mail) {
    let pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    return pattern.test(mail)
}

function validarPassword() {

    const password = passwordInput.value;

    if (/.{8,}$/.test(password)) {
        lengthItem.classList.remove('invalid');
        lengthItem.classList.add('valid');
        lengthItem.querySelector('.icon').classList.remove(crossIcon, 'icon-invalid');
        lengthItem.querySelector('.icon').classList.add(checkIcon, 'icon-valid');

    } else {
        lengthItem.classList.remove('valid');
        lengthItem.classList.add('invalid');
        lengthItem.querySelector('.icon').classList.remove(checkIcon, 'icon-valid');
        lengthItem.querySelector('.icon').classList.add(crossIcon, 'icon-invalid');
        isValidPassword=false
    }

    if (/[A-Z]/.test(password)) {
        uppercaseItem.classList.remove('invalid');
        uppercaseItem.classList.add('valid');
        uppercaseItem.querySelector('.icon').classList.remove(crossIcon, 'icon-invalid');
        uppercaseItem.querySelector('.icon').classList.add(checkIcon, 'icon-valid');
    } else {
        uppercaseItem.classList.remove('valid');
        uppercaseItem.classList.add('invalid');
        uppercaseItem.querySelector('.icon').classList.remove(checkIcon, 'icon-valid');
        uppercaseItem.querySelector('.icon').classList.add(crossIcon, 'icon-invalid');
    }

    if (/[\W_]/.test(password)) {
        specialItem.classList.remove('invalid');
        specialItem.classList.add('valid');
        specialItem.querySelector('.icon').classList.remove(crossIcon, 'icon-invalid');
        specialItem.querySelector('.icon').classList.add(checkIcon, 'icon-valid');
    } else {
        specialItem.classList.remove('valid');
        specialItem.classList.add('invalid');
        specialItem.querySelector('.icon').classList.remove(checkIcon, 'icon-valid');
        specialItem.querySelector('.icon').classList.add(crossIcon, 'icon-invalid');
    }

    if (password === confirmPasswordInput.value && password.length > 0) {
        matchItem.classList.remove('invalid');
        matchItem.classList.add('valid');
        matchItem.querySelector('.icon').classList.remove(crossIcon, 'icon-invalid');
        matchItem.querySelector('.icon').classList.add(checkIcon, 'icon-valid');
        return password
    } else {
        matchItem.classList.remove('valid');
        matchItem.classList.add('invalid');
        matchItem.querySelector('.icon').classList.remove(checkIcon, 'icon-valid');
        matchItem.querySelector('.icon').classList.add(crossIcon, 'icon-invalid');
    }
}

passwordInput.addEventListener('input', validarPassword);
confirmPasswordInput.addEventListener('input', validarPassword);

btnValidar.addEventListener("click", function(event) {
    event.preventDefault();

    const nombreEsValido = validarName(txtname.value)
    const telefonoEsValido = validarTelefono(txtnumber.value)
    const emailEsValido = validarEmail(txtmail.value);
    const passwordEsValido = validarPassword(passwordInput.value)


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
    if(passwordEsValido){
        console.log("Password válida");
        passwordInput.style.border=''
    }else {
        isValidPassword=false
        console.log("Contraseña invalida");
        confirmPasswordInput.style.border='solid red medium'
        passwordInput.style.border='solid red medium'
    }

    if (emailEsValido==true && telefonoEsValido==true && nombreEsValido==true && passwordEsValido) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Enviado",
            showConfirmButton: false,
            timer: 1500
        })

        let usuario = {
            name: txtname.value,
            tel: txtnumber.value,
            email: txtmail.value,
            password: passwordInput.value,
        };

        let users = JSON.parse(localStorage.getItem("Users")) || [];   
        users.push(usuario);
        localStorage.setItem("Users", JSON.stringify(users));

        txtname.value = ''
        txtnumber.value=''
        txtmail.value=''
        passwordInput.value=''
        confirmPasswordInput.value=''
    } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Por favor llena los campos solicitados correctamente",
                showConfirmButton: false,
                timer: 1500
            });
            console.log(emailEsValido);
            console.log(telefonoEsValido);
            console.log(nombreEsValido);
            console.log(passwordEsValido);


    }
    
})

passwordInput.addEventListener('input', validarPassword);
confirmPasswordInput.addEventListener('input', validarPassword); 

