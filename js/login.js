const email = document.getElementById("mail");
const password = document.getElementById("password");
const button = document.getElementById("btnValidar");
let isValidEmail = true


function validaPassEmail(element){

    return element.email == email.value && element.password == password.value;

}

function validarEmail(mail) {
    let pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    return pattern.test(mail)
}


button.addEventListener("click",(e)=>{

    e.preventDefault();

    let listUsers = JSON.parse(localStorage.getItem("Users")) || [];

    console.log(validarEmail(email.value));

    if(!validarEmail(email.value)==true){

        console.log(validarEmail(email.value));
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Ingresa un correo valido",
            showConfirmButton: false,
            timer: 4000
        });

        email.style.border='solid red medium';

    }else{

       if(listUsers == []){
        
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Usuario y/o Contraseña no coinciden",
            showConfirmButton: false,
            timer: 4000
        });

        password.style.border='solid red medium';
        email.style.border='solid red medium';
        

    } else{

        let result = listUsers.filter(validaPassEmail);

        if(result.length != 0){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Inicio sesión con éxito",
                showConfirmButton: false,
                timer: 1500
            });     
            
            password.style.border='';
            email.style.border='';
            password.value = '';
            email.value = '';

        }else{
           
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Usuario y/o Contraseña no coinciden",
                showConfirmButton: false,
                timer: 4000
            });
    
            password.style.border='solid red medium';
            email.style.border='solid red medium';
            

        }

    }

    }
     
});