const urlBase = "json/tecnologias/"

async function mostrarMonedasTecnologiasPrincipales(){
    const contTP = document.getElementById('contenedorMonedasTP')
    const filtrarTP = contTP.classList.contains('filtrado');
    const tecnologiasJSON = ["lenguajes_programacion.json","frameworks.json","herramientas.json","devops.json","otras_habilidades.json"]
    let tecnologias = []

    for (let json of tecnologiasJSON){
        const datos = await cargarJSON('json/tecnologias/' + json);
        tecnologias = tecnologias.concat(datos);
    }

    let monedasTecnologiasPrincipales = '';

    for (let TP of tecnologias) {
        // si filtrarLP es true, solo añadimos los de prioridad
        if (!filtrarTP || (filtrarTP && TP.prioridad)) {
            monedasTecnologiasPrincipales += monedasEstructura(TP.urlImagen, TP.nombre);
        }
    }

    contTP.innerHTML = monedasTecnologiasPrincipales;
}

function monedasEstructura(urlImagen, nombre){
    return `
        <div class="coin">
            <div class="coin-inner">
                <div class="coin-face front">
                    <img src=${urlImagen} alt=${nombre}>
                </div>
                <div class="coin-face back">
                    <span>${nombre}</span>
                </div>
            </div>
        </div>
    `
}