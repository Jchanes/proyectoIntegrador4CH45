let listProducts = JSON.parse(localStorage.getItem("productos"));

if(listProducts != null){
    listProducts.forEach(e => {
        if(e.genero==="regional"){
           addItem(e);
         }
    });
}

function addItem(item){
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

addItem({'name':'T-Shirt "Invasores de Nuevo León"',
    'img':'./Assets/regional/tshirtINVASORES.jpeg',
    'description':'Elaborada en tela 100% algodón, con estampado de alta calidad',
    'precio':'350'});


addItem({'name':'Hat cap "TQM" by Fuerza Régida',
    'img':'./Assets/regional/hatcap.jpeg',
    'description':'Elaborada en lona, bordado premium, con rejillas que ayudan a la transpiración',
    'precio':'300'});


addItem({'name':'Vaso con popote "Gerardo Ortíz"',
    'img':'./Assets/regional/vaso.jpeg',
    'description':'35 cm de alto, capacidad de 750 ml, elaborado en polímero resistente a golpes',
    'precio':'200'});


addItem({'name':'Jacket "Grupo Frontera"',
    'img':'./Assets/regional/jacket.jpeg',
    'description':'Elaborada en algodón con aplicaciones de vinipiel y bordado de alta calidad',
    'precio':'1100'});


addItem({'name':'Taza "Vicente Fernández"',
    'img':'./Assets/regional/taza.jpeg',
    'description':'Taza cerámica con serigrafía. Ideal para microondas',
    'precio':'300'});


addItem({'name':'T-Shirt "EL REY" by Vicente Fernández',
    'img':'./Assets/regional/elrey.jpeg',
    'description':'Elaborada en algodón con estampado de alta calidad',
    'precio':'350'});



addItem({'name':'Perezoso de "Natanael Cano"',
    'img':'./Assets/regional/peluche.webp',
    'description':'Perezoso oficial de Natanael Cano, 25 cm de alto',
    'precio':'400'});


    addItem({'name':'Gorra de "Peso Pluma"',
        'img':'./Assets/regional/gorra.webp',
        'description':'Gorra oficial de Peso Pluma, clásica ajustable con visera plana bordada de 5 paneles',
        'precio':'250'});


        addItem({'name':'T-Shirt by "Tigres del Norte"',
            'img':'./Assets/regional/tigres.jpg',
            'description':'T-Shirt oficial de Tigres del norte, 100% algodón Camiseta cómoda y suave, un básico en tu armario',
            'precio':'350'});


            addItem({'name':'T-Shirt by "Grupo Firme"',
                'img':'./Assets/regional/playera7.webp',
                'description':'T-Shirt by Grupo Firme, Playera con estampado de Impresión digital con mangas',
                'precio':'350'});