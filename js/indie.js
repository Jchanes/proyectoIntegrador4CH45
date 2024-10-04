let listProducts = JSON.parse(localStorage.getItem("productos"));

if(listProducts != null){
    listProducts.forEach(e => {
        if(e.genero==="indie"){
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
    'name': ' Hoodie Zoé diseño multicolor',
    'img': './Assets/Indie/Susadera1Zoe.jpg',
    'description': 'Cerrada con capucha y cangurera, 50% algodón – 50%poliéster. ',
    'precio': '800'
});

addItem({
    'name': ' Hoodie Zoé diseño Gold',
    'img': './Assets/Indie/ZoeGold.jpg',
    'description': 'Cerrada con capucha y cangurera, 50% algodón – 50%poliéster. ',
    'precio': '800'
});

addItem({
    'name': ' Tote bag',
    'img': './Assets/Indie/TTO2.jpg',
    'description': 'Color negro impreso en lona. ',
    'precio': '300'
});

addItem({
    'name': 'Tote bag azul y negro',
    'img': './Assets/Indie/Totebag1.png',
    'description': 'Color negro impreso en lona con serigrafía ',
    'precio': '300'
});

addItem({
    'name': 'Playera Gold',
    'img': 'Assets/Indie/PlayeraGold.png"',
    'description': '100% algodón peinado Impresión  tacto suave.',
    'precio': '350'
});

addItem({
    'name': ' Hoodie Empire Of The Sun',
    'img': './Assets/Indie/sudaderaeos.webp',
    'description': 'Sudadera cubierta con diseño exclusivo, 50% algodón – 50%poliéster. ',
    'precio': '750'
});

addItem({
    'name': 'Taza "I am a looser" de Beck',
    'img': './Assets/Indie/TazaBeck.webp',
    'description': 'Taza original con frases de la canción looser de Beck Hansen ',
    'precio': '250'
});

addItem({
    'name': 'Playera gris de Cage the Elephant',
    'img': './Assets/Indie/cageelephant.jpg',
    'description': 'Playera gris con estampado rojo de banda Cage the Elephant. ',
    'precio': '200'
});

addItem({
    'name': 'Sudadera negra de beach fossils',
    'img': './Assets/Indie/SudaderaBeach.webp',
    'description': 'Sudadera negra con estampado original de la banda Beach Fossils ',
    'precio': '800'
});

addItem({
    'name': 'Playera de Beck Hansen',
    'img': 'Assets/Indie/beckPlayera.webp"',
    'description': 'Playera 100% algodon de Beck Hansen',
    'precio': '200'
});

