// Añadir clases o estilos opcionales
footer.classList.add('mi-footer');

// Crear el contenido del footer
footer.innerHTML = `
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 ps-lg-5  pt-4  border-top">
          <div class="col mb-3">
            <a href="./index.html" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
              <img src="./Assets/logoTFB.png" class="bi me-2" width="80" height="80"></img>
            </a>
            <p class="text-body-secondary">Atención al cliente</p>
            <p class="text-body-secondary">truefanboutique@gmail.com</p>
            <p class="text-body-secondary">True Fan © 2024</p>
          </div>
      
          <div class="col mb-3">
          </div>
      
          <div class="col mb-3">
            <a href="./" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">Nosotros</a>
            <a href="./" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">Contacto</a>
            <a href="./" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">Aviso de Privacidad</a>
            
          </div>
    
          <div class="col mb-3">
            <h5>Nuestros Productos</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Rock</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Indie</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">EDM</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Regional</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Urban</a></li>
            </ul>
          </div>
      
    
        </footer>
        
`;

// Insertar el footer en el contenedor específico en el DOM
document.getElementById('footer').appendChild(footer);
