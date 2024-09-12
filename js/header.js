let headerGlobal = document.getElementById('headerGlobal')

// Crear el contenido del footer
headerGlobal.innerHTML = `
    <header class="headerFont">
        <nav class="navbar navbar-expand-sm border-bottom border-black" id="headerColor">
            <div class="container-fluid">
                <a class="navbar-brand" href="/index.html">
                    <img id="logoTFB" src="./Assets/logopng.png" alt="Logo de la marca">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="d-flex flex-row p-2 bd-highlight">
                    <div class="collapse navbar-collapse p-2 bd-highlight" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item  ">
                            <a class="nav-link active" id="colorLetraNavBar" aria-current="page" href="/index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./rock.html"" id="colorLetraNavBar" target="_blank">Rock</a >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./indie.html"" id="colorLetraNavBar" target="_blank">Indie</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./edm.html"" id="colorLetraNavBar" target="_blank">EDM</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./regional.html"" id="colorLetraNavBar" target="_blank">Regional</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./urban.html"" target="_blank" id="colorLetraNavBar">Urban</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./productos.html"" target="_blank" id="colorLetraNavBar">Productos</a>
                        </li>
                        </ul>
                    </div>
                    <div class="container p-2 bd-highlight">
                        <a class="navbar-brand" href="#">
                            <img src="./Assets/NavBarLogos/carrito1.png" alt="Bootstrap" width="30" height="30">
                            </a>
                        <a class="navbar-brand" href="#">
                        <img src="./Assets/NavBarLogos/perfil.png" alt="Bootstrap" width="30" height="30">
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
        
`;

