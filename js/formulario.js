document.addEventListener("DOMContentLoaded", function () {
    const txtTitulo = document.getElementById("titulo");
    const txtDescription = document.getElementById("description");
    const txtLink = document.getElementById("link");
    const txtPrecio = document.getElementById("precio");
    const btnValidar = document.getElementById("btnValidar");

    function validarTitulo(titulo) {
        let pattern = /^[a-zA-Z\s-]{3,}$/;
        return pattern.test(titulo);
    }

    function validarDescription(description) {
        let pattern = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{10,}$/;
        return pattern.test(description);
    }

    function validarLink(link) {
        let pattern = /^https?:\/\/(?:www\.)?([a-z0-9-]+)\.(?:[a-z]{2,}|[0-9]{1,3})(?:\.[a-z]{2,}|[0-9]{1,3})?(?:\/[^\s]*?)?$/;
        return pattern.test(link);
    }

    function validarPrecio(precio) {
        let pattern = /^\$?[0-9]+(\.[0-9]{1,2})?$/;
        return pattern.test(precio);
    }

    btnValidar.addEventListener("click", function (event) {
        event.preventDefault(); 

        const tituloEsValido = validarTitulo(txtTitulo.value);
        const descriptionEsValido = validarDescription(txtDescription.value);
        const linkEsValido = validarLink(txtLink.value);
        const precioEsValido = validarPrecio(txtPrecio.value);

        // Verifica en consola los resultados de la validación
        console.log("Título válido:", tituloEsValido);
        console.log("Descripción válida:", descriptionEsValido);
        console.log("Enlace válido:", linkEsValido);
        console.log("Precio válido:", precioEsValido);

        if (!tituloEsValido) {
            console.log("Error: Título no es válido");
            Swal.fire({
                icon: 'error',
                title: 'Error en el título',
                text: 'El título debe tener al menos 3 caracteres y solo contener letras y espacios.',
            });
            return;
        }

        if (!descriptionEsValido) {
            console.log("Error: Descripción no es válida");
            Swal.fire({
                icon: 'error',
                title: 'Error en la descripción',
                text: 'La descripción debe tener al menos 10 caracteres.',
            });
            return;
        }

        if (!linkEsValido) {
            console.log("Error: Enlace no es válido");
            Swal.fire({
                icon: 'error',
                title: 'Error en el enlace',
                text: 'Introduce una URL válida.',
            });
            return;
        }

        if (!precioEsValido) {
            console.log("Error: Precio no es válido");
            Swal.fire({
                icon: 'error',
                title: 'Error en el precio',
                text: 'El precio debe estar en un formato numérico válido, como 100 o $100.00.',
            });
            return;
        }

        // Si todo es válido
        let producto = {
            titulo: txtTitulo.value,
            description: txtDescription.value,
            link: txtLink.value,
            precio: txtPrecio.value
        };

        let productos_local = JSON.parse(localStorage.getItem("productos")) || [];
        productos_local.push(producto);
        localStorage.setItem("productos", JSON.stringify(productos_local));

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto agregado",
            showConfirmButton: true,
            timer: 1500
        });

        txtTitulo.value = "";
        txtDescription.value = "";
        txtLink.value = "";
        txtPrecio.value = "";

    });
});
