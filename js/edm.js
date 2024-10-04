let listProducts = JSON.parse(localStorage.getItem("productos"));

if(listProducts != null){
    listProducts.forEach(e => {
        if(e.genero==="edm"){
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

addItem({'name':'Bandera Oficial Tomorrowland',
    'img':'./Assets/edm/producto1edm.webp',
    'description':'Abraza el cálido sentimiento de amor, paz y unidad con la bandera oficial de Tomorrowland.',
    'precio':'200'});

addItem({'name':'Sudadera Fusion Shadow',
    'img':'./Assets/edm/producto2edm.webp',
    'description':'La sudadera Fusion Shadow cuenta con un  bordado de icono de Tomorrowland en colores de sombra para que destaque',
    'precio':'1100'});

addItem({'name':'Sudadera UNITE VARSITY',
    'img':'./Assets/edm/producto3edm.jpeg',
    'description':'La sudadera Unite es una adición imprescindible a tu guardarropa. Abraza el poder de los materiales de alta calidad en combinación con la belleza de la unidad',
    'precio':'1100'});

addItem({'name':'Sudadera STAIRWAY TO UNITY',
    'img':'./Assets/edm/producto4edm.webp',
    'description':'Stairway To Unity es un homenaje a la escalera de mosaico hecha a mano, simbolizando el valor más importante de Tomorrowland: unir a la gente del mañana de todo el mundo','precio':'1100'});

addItem({'name':'Sudadera HAPPICON',
    'img':'./Assets/edm/producto5edm.jpeg',
    'description':'Celebre 20 años de unificación del mundo. La Colección Happicon representa la conexión entre la Gente del Mañana de cada rincón del mundo','precio':'1100'});

addItem({'name':'Eau de Parfum Elixir de la Vida',
    'img':'./Assets/edm/producto6edm.webp',
    'description':'Inspirado en un paisaje natural único, hermosos céspedes verdes y las flores más poderosas, es una fragancia natural cautivadora que te transporta a un mundo sereno y mágico.','precio':'1500'});

addItem({'name':'EDC Las Vegas 2024 Vinyl Set',
    'img':'./Assets/edm/producto7edm.jpg.webp',
    'description':'Este es un PEDIDO ANTICIPADO para un juego de vinilo personalizado de 3 piezas en forma de margarita. Este es un artículo de edición limitada con solo 500 hechos.','precio':'1700'});
//
addItem({'name':'Gorra de béisbol Tomorrowland',
        'img':'./Assets/edm/gorraedm.jpeg',
        'description':'Tomorrowland-gorra de béisbol personalizada para hombre y mujer, gorro de béisbol con Snapback plano, estilo Hip Hop, para Festival de música de baile electrónico.','precio':'300'});

addItem({'name':'EDM termo D1 8oz eléctrica',
        'img':'./Assets/edm/termoedm.jpg',
        'description':'Termo D1 8oz eléctrica de acero inoxidable música Dance Rave luces de fiesta Marca Perfection In Style.','precio':'250'});

addItem({'name':'T-Shirt by "TecHno"',
        'img':'./Assets/edm/techNo.jpg',
        'description':'T-Shirt oficial by TecHno, 100% algodón Camiseta cómoda y suave, un básico en tu armario Tipo de impresión Transfer.','precio':'350'});