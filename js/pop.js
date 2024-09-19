let listProducts = JSON.parse(localStorage.getItem("productos_local"));

if(listProducts != null){
    listProducts.forEach(e => {
        if(e.genero==="pop"){
           addItem(e);
         }
    });
}

function addItem(item) {
    const itemHTML = '<div class="card mt-3 mb-5" style="width: 18rem;">\n' +
        '    <img src="' + item.img + '" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.name + '</h5>\n' +
        '        <p class="card-text">' + item.description + '</p>\n' +
        '         <p class="card-text">' + item.precio + '</p>\n' +
        '        <a href="#" class="btn btn-primary">Agregar al carrito</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}



addItem({
    'name': 'Cardigan de Harry Styles',
    'img': './Assets/pop/harryCardigan.jpg',
    'description': 'Celebra la moda con el cardigan que Harry Styles llevó durante su aparición en el Today Show, diseñado por el aclamado JW Anderson. Este cardigan ha capturado la atención mundial por su llamativo diseño de colores vibrantes y su mezcla única de patrones, que se convirtió en un fenómeno de moda inmediato. Fabricado en lana de alta calidad, ofrece una comodidad excepcional y un ajuste versátil. Este cardigan no solo es una pieza de ropa, sino una declaración de estilo que redefine la moda contemporánea. ¡No te pierdas la oportunidad de tener en tu colección una prenda que marcó tendencia y mostró la creatividad del diseño moderno!',
    'precio': '$1500'
})

addItem({
    'name': 'Cardigan de Taylor Swift',
    'img': './Assets/pop/taylorCardigan.jpg',
    'description': 'Adéntrate en el mundo mágico de la era Folklore con el cardigan que Taylor Swift lució en su video musical "Cardigan". Este cardigan, emblemático de la estética etérea y nostálgica del álbum, es una pieza clave para cualquier fan de Taylor. Diseñado en un suave tono grisáceo con un tejido de lana de alta calidad, ofrece una textura acogedora y elegante. Su estilo vintage y su delicada confección reflejan la sofisticación y la creatividad que caracterizan a Folklore. No te pierdas la oportunidad de añadir a tu colección una pieza que captura la esencia de uno de los álbumes más queridos de Taylor Swift.',
    'precio': '$1800'
   
})

addItem({
    'name': 'Mítica Versace de Luis Miguel',
    'img': './Assets/pop/luismiguelMiticaVersace.jpg',
    'description': 'Captura la esencia del estilo icónico de Luis Miguel con esta prenda inspirada en el look que popularizó durante sus actuaciones. Con un diseño que evoca la sofisticación y el glamour característicos de Versace, esta pieza destaca por sus detalles distintivos y su elegante estética. Confeccionada en materiales de alta calidad, ofrece un acabado lujoso y cómodo que complementará cualquier atuendo con un toque de distinción. Ideal para quienes buscan añadir un aire de sofisticación y estilo a su guardarropa, esta prenda rinde homenaje al emblemático look de Luis Miguel.',
    'precio': '$2000'
  
});

addItem({
    'name': 'Sweater de Lana del Rey',
    'img': './Assets/pop/lanaSueter.jpg',
    'description': 'Conquista el estilo retro y sofisticado de Lana Del Rey con este suéter inspirado en la icónica era Born to Die. Este suéter destaca por su elegante diseño vintage, que captura la esencia de la famosa estética de Lana Del Rey. Confeccionado en lana suave de alta calidad, ofrece una calidez y comodidad excepcionales. El diseño presenta un toque nostálgico y un acabado refinado, ideal para aquellos que desean un look que combine glamour y confort. Perfecto para los días fríos y para añadir un toque de estilo clásico a tu guardarropa, este suéter es una pieza imprescindible para los fans de Lana Del Rey y los amantes de la moda',
    'precio': '$600'
})

addItem({
    'name': 'Sweater de One Direction',
    'img': './Assets/pop/onediSueter.jpg',
    'description': '¡Lleva contigo el estilo y la energía de One Direction con este suéter exclusivo que presenta las caras icónicas de los miembros de la banda! Este suéter, con un diseño vibrante y detallado, muestra un retrato único de Harry, Niall, Zayn, Liam y Louis en un estilo gráfico que rinde homenaje a su legado. Confeccionado en una mezcla de algodón y poliéster de alta calidad, ofrece comodidad y durabilidad para que disfrutes de tus días con un toque de fandom. Ideal para conciertos, encuentros con amigos o simplemente para mostrar tu amor por la banda, este suéter es una pieza destacada para cualquier fan de One Direction.'
     ,'precio': '$850'
});

addItem({
    'name': 'Tote Bag Jonas Brothers',
    'img': './Assets/Pop/ToteBagJonas.webp',
    'description': 'El tote Mountain en color natural es 100% algodón y está hecho para durar.',
    'precio': '$250'
})

addItem({
    'name': 'Sudadera con capucha',
    'img': './Assets/pop/SudaderaJonas1.webp',
    'description': 'La Tour Hoodie es una sudadera con capucha de ajuste relajado con bolsillo canguro y capucha con cordón, que presenta el gráfico de Jonas Brothers en el frente y las fechas de la gira de 2023 en la parte posterior'
    ,'precio': '$1200'
})

addItem({
    'name': 'T-shirt summer',
    'img': './Assets/pop/T-shirtNegra.webp',
    'description': 'Confeccionada con un suave tejido 100% algodón para comodidad durante todo el día, esta camiseta presenta el gráfico del horizonte de Summer Baby.'
    ,'precio': '$750'
});

addItem({
    'name': 'Top corto peaches Justin Bieber',
    'img': './Assets/Pop/JustinTshirt.webp  ',
    'description': 'Gráficos frontales serigrafiados.',
    'precio': '$450'
})

addItem({
    'name': 'Sudadera Justin bieber negra con capucha',
    'img': './Assets/pop/SudaderaJustin1.webp',
    'description': 'Gráficos frontales serigrafiados con detalle de estampado de hojaldre.',
    'precio': '$1500'
});


