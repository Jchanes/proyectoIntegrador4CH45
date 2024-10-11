let listProducts = JSON.parse(localStorage.getItem("productos"));

if(listProducts != null){
    listProducts.forEach(e => {
        if(e.genero==="urban"){
           addItem(e);
         }
    });
}

function addItem(item) {
    const itemHTML =         
    '<div class="product card h-150 mt-3 mb-5" style="width: 18rem;">\n' +
    '    <div class="product-container">'+
        '    <img src="' + item.img + '" class="product-img  card-img-top" alt="image" style="height: 20rem; object-fit: cover;">\n' +
    '     </div> \n'+ 
    '    <div class="card-body d-flex flex-column justify-content-between" id="card-aling">\n' +
        '    <div">\n' +
            '   <h5 class="card-title text-center">' + item.name + '</h5>\n' +
            '   <p class="card-text">' + item.description + '</p>\n' +
        '    </div">\n' +
        '    <div">\n' +
        '   <p class="card-text">$' + item.precio + '</p>\n' +
        '   <a href="#" class="btn btn-primary rounded-pill btn-lg w-100 mt-auto " id="BtnAdd">Agregar al carrito</a>\n' +
        '    </div">\n' +
    '    </div>\n' +
'</div>\n' +
'<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({
    'name': 'Hoodie Bad Bunny',
    'img': './Assets/urban/hoodieBBsinMarcaAgua.webp',
    'description': 'Lleva la esencia de X100PRE de Bad Bunny con esta hoodie negra. Con un diseño minimalista y el logotipo en blanco, es cómoda y perfecta para cualquier ocasión.',
    'precio': '800'
});

addItem({
    'name': 'Gorra de Feid',
    'img': './Assets/urban/feidGorra.jpg',
    'description': 'Lleva el estilo urbano de Feid con esta gorra moderna y cómoda. Perfecta para cualquier outfit y para fans que quieren destacar.',
    'precio': '250'
})

addItem({
    'name': 'Playera "Mañana Será Bonito"',
    'img': './Assets/urban/karolgT-shirt.jpg',
    'description': 'Celebra "Mañana Será Bonito" de Karol G con esta t-shirt oficial. Con un diseño exclusivo y de algodón, es cómoda y perfecta para los fans en cualquier ocasión.',
    'precio': '350'
});

addItem({
    'name': 'Playera C.Tangana',
    'img': './Assets/urban/ctanganaT-shirt.jpg',
    'description': 'Exprésate con esta playera de C. Tangana que dice "Hacer dinero es un arte". Con un diseño audaz y de algodón, es cómoda y perfecta para destacar.',
    'precio': '350'
})

addItem({
    'name': 'Bad Bunny Un Verano Sin Ti Llavero',
    'img': './Assets/urban/llavero.webp',
    'description': 'Llavero de peluche, muñeco con diseño de cantante de Bad Bunny.',
    'precio': '200'
});
addItem({
    'name': 'Hoodie de Nicki Nicole',
    'img': './Assets/urban/nickiHoodi.jpg',
    'description': 'Añade frescura a tu guardarropa con esta hoodie rosa de Niki Nicole. Hecha de algodón y poliéster, es cómoda y perfecta para un look casual y moderno.',
    'precio': '800'
});

addItem({
    'name': 'Hoodie Latin Mafia',
    'img': './Assets/urban/latin.webp',
    'description': 'Nuestra Impresión se caracterizan por su alta calidad, colores, elasticidad y resistencia al lavado.',
    'precio': '800'
});

addItem({
    'name': 'Playera "El Malilla"',
    'img': './Assets/urban/malilla.webp',
    'description': 'Confeccionada con una composición de 50/50 de algodón y poliéster, esta playera ofrece una sensación suave y fresca al tacto. Su diseño liso y corte recto la convierten en una prenda versátil para diversas ocasiones.',
    'precio': '350'
});

addItem({
    'name': 'Playera gris Alvaro Diaz West Side',
    'img': './Assets/urban/diaz.webp',
    'description': 'Textura tacto algodón suavizado, estampado con alta calidad gráfica digital y muy durable.No se encoge y no se deforma.',
    'precio': '350'
});

addItem({
    'name': 'Playera "Ojalá Estuvieras Aquí" ',
    'img': './Assets/urban/aquihay.webp',
    'description': 'DETALLES: Impresión frente y vuelta en serigrafía MATERIALES Y CONSTRUCCIÓN: Elaborada en playera tubular 100% algodón TIPO DE FITTING:   El modelo mide 175 cm y utiliza una playera talla 3',
    'precio': '350'
});
