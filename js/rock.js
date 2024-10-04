let listProducts = JSON.parse(localStorage.getItem("productos"));

if(listProducts != null){
    listProducts.forEach(e => {
        if(e.genero==="rock"){
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

addItem({'name':' Termo inoxidable de Pink Floyd + Llavero de regalo',
    'img':'Assets/rock/termo-rock.jfif',
    'description':'Termo lata con popote de 500 ml. Soporta más de 8 horas la temperatura de las bebidas ',
    'precio':'300'});

addItem({'name':' 50 parches de bandas de rock y metal',
    'img':'Assets/rock/parches-rock.jfif',
    'description':'Parches termoadherentes de máxima calidad, material algodón, tienen un tamaño de 11 cm x 6.5 cm y 1.1 mm de grosor ',
    'precio':'300'});

addItem({'name':' 3 pares de calcetines de rock',
    'img':'Assets/rock/calcetines-rock.jfif',
    'description':'Calcetines largos, deportivos, composición 100 % de algodón  ',
    'precio':'300'});

addItem({'name':'Correa para guitarra - Perris Leathers Guns N Roses',
    'img':'Assets/rock/correa-rock.jfif',
    'description':'Práctica correa de guitarra que se puede fijar rápida y fácilmente a todo tipo de guitarra. Todos los tamaños, 2 pulgadas de ancho, longitud ajustable de 39 a 58 pulgadas para un ajuste óptimo; antideslizante, duradero, cómodo, fácil de fijar ',
    'precio':'400'});

addItem({'name':'KESYOO Muñequeras',
    'img':'Assets/rock/muñequera-rock.jfif',
    'description':'Pulsera con forma de calavera, con patrón de calavera y el exterior decorado con cadenas de plata, hecho de cuero, para un uso prolongado y cómodo ',
    'precio':'400'});



    
