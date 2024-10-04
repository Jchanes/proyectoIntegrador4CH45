let listProducts = JSON.parse(localStorage.getItem("productos"));

if(listProducts != null){
    listProducts.forEach(e => {
        if(e.genero==="pop"){
           addItem(e);
         }
    });
}

function addItem(item) {
    const itemHTML =         '<div class="product card h-150 mt-3 mb-5" style="width: 18rem;">\n' +
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
    'name': 'Cardigan de Harry Styles',
    'img': './Assets/pop/harryCardigan.jpg',
    'description': 'Celebra la moda con el cardigan que Harry Styles usó en el Today Show. Con colores vibrantes y patrones únicos, este cardigan de lana es cómodo y una verdadera declaración de estilo.',
    'precio': '1100'
})

addItem({
    'name': 'Cardigan de Taylor Swift',
    'img': './Assets/pop/taylorCardigan.jpg',
    'description': 'El cardigan de Taylor Swift en su video "Cardigan" es de suave lana gris, cómodo y con un estilo vintage ideal para los fans de la era Folklore.',
    'precio': '1100'
   
})

addItem({
    'name': 'Mítica Versace de Luis Miguel',
    'img': './Assets/pop/luismiguelMiticaVersace.jpg',
    'description': 'Rinde homenaje al estilo de Luis Miguel con esta prenda de seda y poliéster de alta calidad. Con detalles distintivos y un acabado lujoso, añade elegancia a cualquier atuendo.',
    'precio': '800'
  
});

addItem({
    'name': 'Sweater de Lana del Rey',
    'img': './Assets/pop/lanaSueter.jpg',
    'description': 'Conquista el estilo retro de Lana Del Rey con este suéter inspirado en Born to Die. Hecho de suave lana, combina calidez y elegancia, perfecto para añadir glamour a tu guardarropa.',
    'precio': '500'
})

addItem({
    'name': 'Sweater de One Direction',
    'img': './Assets/pop/onediSueter.jpg',
    'description': 'Lleva el estilo de One Direction con este suéter exclusivo que muestra sus caras icónicas. Hecho de algodón y poliéster, es cómodo y perfecto para cualquier fan.'
     ,'precio': '500'
});

addItem({
    'name': 'Tote Bag Jonas Brothers',
    'img': './Assets/Pop/ToteBagJonas.webp',
    'description': 'El tote Mountain en color natural es 100% algodón y está hecho para durar.',
    'precio': '250'
})

addItem({
    'name': 'Sudadera con capucha',
    'img': './Assets/pop/SudaderaJonas1.webp',
    'description': 'La Tour Hoodie es una sudadera con capucha de ajuste relajado con bolsillo canguro y capucha con cordón, que presenta el gráfico de Jonas Brothers en el frente y las fechas de la gira de 2023 en la parte posterior'
    ,'precio': '1200'
})

addItem({
    'name': 'T-shirt summer',
    'img': './Assets/pop/T-shirtNegra.webp',
    'description': 'Confeccionada con un suave tejido 100% algodón para comodidad durante todo el día, esta camiseta presenta el gráfico del horizonte de Summer Baby.'
    ,'precio': '350'
});

addItem({
    'name': 'Top corto peaches Justin Bieber',
    'img': './Assets/Pop/JustinTshirt.webp  ',
    'description': 'Gráficos frontales serigrafiados.',
    'precio': '450'
})

addItem({
    'name': 'Sudadera Justin Bieber negra con capucha',
    'img': './Assets/pop/SudaderaJustin1.webp',
    'description': 'Gráficos frontales serigrafiados con detalle de estampado de hojaldre.',
    'precio': '1200'
});


