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

addItem({'name':' Termo inoxidable de Pink Floyd + Llavero de regalo',
    'img':'../Assets/rock/termo-rock.jfif',
    'description':'Termo lata con popote de 500 ml. Soporta más de 8 horas la temperatura de las bebidas ',
    'precio':'$449.99'});

