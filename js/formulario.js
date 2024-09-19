const txtTitulo = document.getElementById("titulo");
const txtDescription = document.getElementById("description");
const txtLink = document.getElementById("link");
const txtPrecio= document.getElementById("precio");
const btnValidar = document.getElementById("btnValidar");


let isValidTitulo = true
let isValidDescription = true
let isValidLink = true
let isValidPrecio = true
let productos_local=new Array

function validarTitulo(titulo) {
    let pattern = /^[a-zA-Z\s]{3,}$/
    return pattern.test(titulo)
}

function validarDescription(description) {
    let pattern = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*${10,}/
    return pattern.test(description)
}

function validarLink(link) {
    let pattern = /^https?:\/\/(?:www\.)?([a-z0-9-]+)\.(?:[a-z]{2,}|[0-9]{1,3})(?:\.[a-z]{2,}|[0-9]{1,3})?(?:\/[^\s]*?)?$/;
    return pattern.test(link) 
}


function validarPrecio(precio) {
    let pattern = /^\$?[0-9]+(\.[0-9]{1,2})?$/
    return pattern.test(precio)
}

btnValidar.addEventListener("click", function (event) {
    event.preventDefault(); 

    const tituloEsValido = validarTitulo(txtTitulo.value)
    const descriptionEsValido = validarDescription(txtDescription.value)
    const linkEsValido = validarLink(txtLink.value);
    const precioEsValido = validarPrecio(txtPrecio.value)

    if (tituloEsValidoEsValido) {
        console.log("Título válido")
    } else {isValidTitulo= false
        console.log("Título inválido")
    }

    if (descriptionEsValido) {
        console.log("Descripcion válida")
    } else {isValidDescription= false
        console.log("Descripcion invalida")
    }

    if (linkEsValido) {
        console.log("Link válido")
    } else {isValidLink= false
        console.log("Link inválido (debe iniciar con https)")
    }

    if (precioEsValido) {
        console.log("Precio válido")
    } else {isValidPrecio= false
        console.log("Precio inválido (Solo se admiten números)")
    }

    if (isValidTitulo==true && isValidDescription==true && isValidLink==true && isValidPrecio==true) {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado",
        showConfirmButton: true,
        timer: 1500
    });
    function addItem(item){
        const itemHTML = '<div class="card mt-3 mb-5" style="width: 18rem;">\n' +
            '    <img src="'+item.link +'" class="card-img-top" alt="image">\n' +
            '    <div class="card-body">\n' +
            '        <h5 class="card-title">'+item.titulo+'</h5>\n' +
            '        <p class="card-text">'+item.description+'</p>\n' +
            '         <p class="card-text">'+item.precio+'</p>\n' +
            '        <a href="#" class="btn btn-primary">Agregar al carrito</a>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<br/>';
        const itemsContainer = document.getElementById("list-items");
        itemsContainer.innerHTML += itemHTML;
    }

    addItem({'name':txtTitulo.value,
        'img':txtLink.value,
        'description':txtDescription.value,
        'precio':txtPrecio.value});
    
        productos_local.push(addItem);
        localStorage.setItem ("producto", JSON.stringify(productos_local));        
    
            
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
