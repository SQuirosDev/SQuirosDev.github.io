function monedasTecnologias(){
    const contLP = document.getElementById('contenedorMonedasLP');
    const contFL = document.getElementById('contenedorMonedasFL');
    const contHI = document.getElementById('contenedorMonedasHI');
    const contDIC = document.getElementById('contenedorMonedasDIC');
    const contOHT = document.getElementById('contenedorMonedasOHT');

    // ¿Estamos en modo “filtrado”? (busca la clase en cada contenedor)
    const filtrarLP = contLP.classList.contains('filtrado');
    const filtrarFL  = contFL.classList.contains('filtrado');
    const filtrarHI  = contHI.classList.contains('filtrado');
    const filtrarDIC  = contDIC.classList.contains('filtrado');
    const filtrarOHT  = contOHT.classList.contains('filtrado');

    let monedasLenguajesProgramacion = '';
    let monedasFrameworksLibrerias = '';
    let monedasHerramientasIDEs = '';
    let monedasDevOpsInfraestructuraCloud = '';
    let monedasOtrasHabilidadesTecnicas = '';

    for (let lp of tecnologias) {
        if (lp.categoria == "Lenguajes de Programacion"){
            monedasLenguajesProgramacion += monedasEstructura(lp.urlImagen, lp.nombre);
        }
    }

    for (let fl of tecnologias) {
        if (fl.categoria == "Frameworks y Librerias"){
            monedasFrameworksLibrerias += monedasEstructura(fl.urlImagen, fl.nombre);
        }  
    }

    for (let hi of tecnologias) {
        if (hi.categoria == "Herramientas y IDEs"){
            monedasHerramientasIDEs += monedasEstructura(hi.urlImagen, hi.nombre);
        }  
    }

    for (let dic of tecnologias) {
        if (dic.categoria == "DevOps e Infraestructura Cloud"){
            monedasDevOpsInfraestructuraCloud += monedasEstructura(dic.urlImagen, dic.nombre);
        }  
    }

    for (let oht of tecnologias) {
        if (oht.categoria == "Otras Habilidades Tecnicas"){
            monedasOtrasHabilidadesTecnicas += monedasEstructura(oht.urlImagen, oht.nombre);
        }  
    }

    contLP.innerHTML = monedasLenguajesProgramacion;
    contFL.innerHTML = monedasFrameworksLibrerias;
    contHI.innerHTML = monedasHerramientasIDEs;
    contDIC.innerHTML = monedasDevOpsInfraestructuraCloud;
    contOHT.innerHTML = monedasOtrasHabilidadesTecnicas;
}

function monedasTecnologiasPrincipales(){
    const contTP = document.getElementById('contenedorMonedasTP')

    const filtrarTP = contTP.classList.contains('filtrado');

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