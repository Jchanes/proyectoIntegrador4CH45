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

addItem({'name':'T-Shirt "Camisa Good Kid m.a.a.d city" Kendrick Lamar',
    'img':'./Assets/Rap/camisa_goodKiidMaadCity_kendrick.png',
    'description':'Camisa con portada de Good Kiid <.A.A.D City, color blanco unisex 100% algodon',
    'precio':'$384.74'});

addItem({'name':'T-Shirt "Camisa DAMN" Kendrick Lamar',
    'img':'./Assets/Rap/camisa_damn_kendrick.png',
    'description':'Camisa con portada de album DAMN, color blanco unisex 100% algodon',
    'precio':'$384.74'});

addItem({'name':'T-Shirt "Camisa Graduation" Kanye West',
    'img':'./Assets/Rap/camisa_graduation_ye.png',
    'description':'Camisa con portada de albumn Graduation by Kanye West, color blanco, texto "good life" unisex 100% algodon',
    'precio':'$384.74'});

addItem({'name':'T-Shirt "Camisa Mad Villiany" MF DOOM',
    'img':'./Assets/Rap/camisa_madVilliany_mfDoom.png',
    'description':'Camisa con portada de MadVilliany by MF DOOM, texto "ALL CAPS", color crema unisex 100% algodon',
    'precio':'$384.74'});

addItem({'name':'T-Shirt "Camisa Tupac Shakur"',
    'img':'./Assets/Rap/camisa_tupac.png',
    'description':'Camisa con Tupac Shakur, color Azul Claro, unisex 100% algodon',
    'precio':'$384.74'});

addItem({'name':'Vinyl "illmatic" de nas',
    'img':'./Assets/Rap/vinyl_illmatic_nas.jpg',
    'description':'Vinilo album "illmatic" by nas',
    'precio':'$1015.04'});

addItem({'name':'Vinyl "Marshal Mathers LP" de eminem',
    'img':'./Assets/Rap/vinyl_marshallMathersLp_eminem.webp',
    'description':'Vinilo album "Marshall Mathers LP" by EMINEM',
    'precio':'$1015.04'});
    
    addItem({'name':'Vinyl "To Pimp a Butterfly" de Kendrick Lamar',
        'img':'./Assets/Rap/vinyl_TPAB_kendrickLamar.jpg',
        'description':'Vinilo album "To Pimp A Butterfly" by Kendrick Lamar',
        'precio':'$1015.04'});