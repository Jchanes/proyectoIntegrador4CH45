let listProducts = JSON.parse(localStorage.getItem("productos"));

if(listProducts != null){
    listProducts.forEach(e => {
        if(e.genero==="regional"){
           addItem(e);
         }
    });
}

function addItem(item){
    const itemHTML = '<div class="card mt-3 mb-5" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '         <p class="card-text">'+item.precio+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Agregar al carrito</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'T-Shirt "Invasores de Nuevo León',
    'img':'./Assets/regional/tshirtINVASORES.jpeg',
    'description':'Elaborada en tela 100% algodón, con estampado de alta calidad',
    'precio':'$899.00'});


addItem({'name':'Hat cap "TQM" by Fuerza Régida',
    'img':'./Assets/regional/hatcap.jpeg',
    'description':'Elaborada en lona, bordado premium, con rejillas que ayudan a la transpiración',
    'precio':'$1099.00'});


addItem({'name':'Vaso con popote "Gerardo Ortíz',
    'img':'./Assets/regional/vaso.jpeg',
    'description':'35 cm de alto, capacidad de 750 ml, elaborado en polímero resistente a golpes',
    'precio':'$459.00'});


addItem({'name':'Jacket "Grupo Frontera"',
    'img':'./Assets/regional/jacket.jpeg',
    'description':'Elaborada en algodón con aplicaciones de vinipiel y bordado de alta calidad',
    'precio':'$1999.00'});


addItem({'name':'Taza "Vicente Fernández"',
    'img':'./Assets/regional/taza.jpeg',
    'description':'Taza cerámica con serigrafía. Ideal para microondas',
    'precio':'$429.00'});


addItem({'name':'T-Shirt "EL REY" by Vicente Fernández',
    'img':'./Assets/regional/elrey.jpeg',
    'description':'Elaborada en algodón con estampado de alta calidad',
    'precio':'$899.00'});



addItem({'name':'Perezoso by "Natanael Cano"',
    'img':'./Assets/regional/peluche.webp',
    'description':'Perezoso oficial by Natanael Cano, 25 cm de alto',
    'precio':'$1599.00'});


    addItem({'name':'Gorra by "Peso Pluma"',
        'img':'./Assets/regional/gorra.webp',
        'description':'Gorra oficial by Peso Pluma, clásica ajustable con visera plana bordada de 5 paneles',
        'precio':'$399.00'});


        addItem({'name':'T-Shirt by "Tigres del norte"',
            'img':'./Assets/regional/tigres.jpg',
            'description':'T-Shirt oficial by Tigres del norte, 100% algodón Camiseta cómoda y suave, un básico en tu armario',
            'precio':'$599.00'});


            addItem({'name':'T-Shirt by "Grupo Firme"',
                'img':'./Assets/regional/playera7.webp',
                'description':'T-Shirt by Grupo Firme, Playera con estampado de Impresión digital con mangas',
                'precio':'$799.00'});