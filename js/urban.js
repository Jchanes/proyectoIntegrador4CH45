function addItem(item){
    const itemHTML = '<div class="card mt-3 mb-5" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'Hoodie Bad Bunny',
    'img':'./Assets/urban/badbunnyHoodie.jpg',
    'description':'¡Lleva contigo la esencia del icónico disco X100PRE de Bad Bunny con esta hoodie negra exclusiva! Diseñada para capturar la esencia del álbum que revolucionó el reguetón y el trap latino, esta hoodie presenta un diseño minimalista con el logotipo del disco en un elegante color blanco. Hecha de algodón de alta calidad, garantiza comodidad y durabilidad, perfecta para cualquier fan que quiera lucir con orgullo su apoyo a Bad Bunny. Ideal tanto para conciertos como para el día a día, esta hoodie es un must-have para los seguidores del fenómeno musical.'});

addItem({'name':'Gorra de Feid',
    'img':'./Assets/urban/feidGorra.jpg',
    'description':'Lleva contigo el estilo urbano de Feid con esta gorra que se ha convertido en un emblema de su look distintivo. Con un diseño moderno y un ajuste cómodo, esta gorra destaca por su logotipo exclusivo y su confección en materiales de alta calidad. Ideal para añadir un toque de estilo a cualquier outfit, ya sea para un día casual o para un evento especial. Esta gorra es perfecta para los fanáticos que desean llevar un pedazo del icónico estilo de Feid en su vida cotidiana.'})

addItem({'name':'T-Shirt Mañana Será Bonito',
        'img':'./Assets/urban/karolgT-shirt.jpg',
        'description':'Celebra el éxito del álbum Mañana Será Bonito de Karol G con esta t-shirt oficial, que captura la esencia vibrante y positiva del disco. Con un diseño exclusivo que presenta el arte del álbum, esta camiseta está confeccionada en algodón de alta calidad, ofreciendo comodidad y un ajuste perfecto. Su diseño gráfico moderno y colorido refleja la energía y el estilo único de Karol G, convirtiéndola en una prenda imprescindible para los fans que quieren mostrar su apoyo y su amor por la música de la artista. Ideal para cualquier ocasión, desde conciertos hasta un día casual.'});
    
addItem({'name':'T-Shirt C.Tangana',
        'img':'./Assets/urban/ctanganaT-shirt.jpg',
        'description':'Expresa tu estilo y filosofía con esta playera exclusiva de C. Tangana, que presenta la icónica frase "Hacer dinero es un arte". Con un diseño audaz y moderno, esta camiseta resalta con un estampado llamativo que captura la esencia del artista y su enfoque único hacia el éxito. Confeccionada en algodón de alta calidad, ofrece una comodidad excepcional y un ajuste ideal para el uso diario. Perfecta para mostrar tu apoyo a C. Tangana y tu aprecio por su mensaje poderoso, esta playera es un must-have para los fanáticos que buscan destacar con originalidad y actitud.'})
addItem({'name':'Hoodie de Nicki Nicole',
            'img':'./Assets/urban/nickiHoodi.jpg',
            'description':'Añade un toque de frescura y estilo a tu guardarropa con esta hoodie rosa exclusiva de Niki Nicole. Diseñada para capturar la esencia vibrante y contemporánea de la artista, esta sudadera presenta un color rosa suave que combina elegancia y modernidad. Confeccionada en una mezcla de algodón y poliéster de alta calidad, ofrece una comodidad inigualable y un ajuste relajado perfecto para cualquier ocasión. Ideal para los días frescos o para un look casual y a la moda, esta hoodie es una pieza clave para los seguidores de Niki Nicole que desean destacar con un estilo único y auténtico.'});
        
addItem({'name':'Tayto',
            'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
            'description':'Cheese & Onion Chips'})
