const proximoAhacer = document.getElementById('placeholder');
const estilo = document.createElement('style');
estilo.innerHTML = `
    .message404{
        padding-top: 15px;
        padding-bottom: 15px;
    }

    p{
    text-align: center;
    font-weight: bold;
    font-size: 4rem;
    }
`

document.head.appendChild(estilo);

proximoAhacer.innerHTML=
`       <div class="container d-flex justify-content-center message404"> 
            <img src="Assets/error404.png" >
        </div>

        <div class="container row-mb d-flex justify-content-center message404" >
        <span> 
        <p> ¡¡Ups!!</p>
        <p> Esta página aún no funciona.</p>
        <p>Pero no te preocupes.</p>
        <p>Pronto tendremos activa esta función cuando se añada SQL</p>
        </span>
        </div>
`;
