function monedasTecnologias(){
    const contLP = document.getElementById('contenedorMonedasLP');
    const contTools = document.getElementById('contenedorMonedasTools');

    // ¿Estamos en modo “filtrado”? (busca la clase en cada contenedor)
    const filtrarLP = contLP.classList.contains('filtrado');
    const filtrarTools  = contTools.classList.contains('filtrado');

    let monedasLenguajesProgramacion = '';
    let monedasHerramientas = '';

    for (let lp of lenguajesProgramacion) {
        // si filtrarLP es true, solo añadimos los de prioridad
        if (!filtrarLP || (filtrarLP && lp.prioridad)) {
            monedasLenguajesProgramacion += monedasEstructura(lp.urlImagen, lp.nombre);
        }
    }

    for (let tool of herramientas) {
        if (!filtrarTools || (filtrarTools && tool.prioridad)) {
            monedasHerramientas += monedasEstructura(tool.urlImagen, tool.nombre);
        }
    }

    contLP.innerHTML = monedasLenguajesProgramacion;
    contTools.innerHTML = monedasHerramientas;
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