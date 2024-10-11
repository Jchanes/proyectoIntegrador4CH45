let headerGlobal = document.getElementById('headerGlobal')

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
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0 text-uppercase" id="navbarItems">
                        <li class="nav-item">
                            <a class="nav-link active" id="colorLetraNavBar" aria-current="page" href="./index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./rock.html" id="colorLetraNavBar">Rock</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./indie.html" id="colorLetraNavBar">Indie</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./edm.html" id="colorLetraNavBar">EDM</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./regional.html" id="colorLetraNavBar">Regional</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./urban.html" id="colorLetraNavBar">Urban</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./pop.html" id="colorLetraNavBar">Pop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./rap.html" id="colorLetraNavBar">Rap</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./productos.html" id="colorLetraNavBar">Productos</a>
                        </li>
                    </ul>
                </div>
                <div class="d-flex">
                    <a class="navbar-brand" href="./carrito.html">
                        <img src="./Assets/NavBarLogos/carrito1.png" alt="Carrito" width="75" height="55">
                    </a>
                    <a class="navbar-brand" href="registroUsuario.html">
                        <img src="./Assets/NavBarLogos/perfil.png" alt="Perfil" width="60" height="55">
                    </a>
                </div>
            </div>
        </nav>
    </header>
`;
