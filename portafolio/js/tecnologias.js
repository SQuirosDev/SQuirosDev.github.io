async function mostrarMonedasLenguajesProgramacion (){
    const tecnologias = await cargarJSON('json/tecnologias.json'); // obtenemos los datos

    const contTituloTec = document.getElementById('ContenedorTituloTec');
    const contMonedasTec = document.getElementById('ContenedorMonedasTec');

    let monedasTecnologias = '';

    contTituloTec.innerHTML = "";
    contMonedasTec.innerHTML = ""

    for (let lp of tecnologias) {
        if (lp.categoria == "Lenguajes de Programacion"){
            monedasTecnologias += monedasEstructura(lp.urlImagen, lp.nombre);
        }
    }

    contTituloTec.innerHTML = "Lenguajes de Programacion"
    contMonedasTec.innerHTML = monedasTecnologias;
}

async function mostrarMonedasFrameworkLibrerias (){
    const tecnologias = await cargarJSON('json/tecnologias.json'); // obtenemos los datos

    const contTituloTec = document.getElementById('ContenedorTituloTec');
    const contMonedasTec = document.getElementById('ContenedorMonedasTec');

    let monedasTecnologias = '';

    contTituloTec.innerHTML = "";
    contMonedasTec.innerHTML = ""

    for (let fl of tecnologias) {
        if (fl.categoria == "Frameworks y Librerias"){
            monedasTecnologias += monedasEstructura(fl.urlImagen, fl.nombre);
        }  
    }

    contTituloTec.innerHTML = "Frameworks y Librerias"
    contMonedasTec.innerHTML = monedasTecnologias;
}

async function mostrarMonedasHerramientasIDEs (){
    const tecnologias = await cargarJSON('json/tecnologias.json'); // obtenemos los datos

    const contTituloTec = document.getElementById('ContenedorTituloTec');
    const contMonedasTec = document.getElementById('ContenedorMonedasTec');

    let monedasTecnologias = '';

    contTituloTec.innerHTML = "";
    contMonedasTec.innerHTML = ""

    for (let hi of tecnologias) {
        if (hi.categoria == "Herramientas y IDEs"){
            monedasTecnologias += monedasEstructura(hi.urlImagen, hi.nombre);
        }  
    }

    contTituloTec.innerHTML = "Herramientas y IDEs"
    contMonedasTec.innerHTML = monedasTecnologias;
}

async function mostrarMonedasDevOpsInfraestructura (){
    const tecnologias = await cargarJSON('json/tecnologias.json'); // obtenemos los datos

    const contTituloTec = document.getElementById('ContenedorTituloTec');
    const contMonedasTec = document.getElementById('ContenedorMonedasTec');

    let monedasTecnologias = '';

    contTituloTec.innerHTML = "";
    contMonedasTec.innerHTML = ""

    for (let dic of tecnologias) {
        if (dic.categoria == "DevOps e Infraestructura Cloud"){
            monedasTecnologias += monedasEstructura(dic.urlImagen, dic.nombre);
        }  
    }

    contTituloTec.innerHTML = "DevOps e Infraestructura Cloud"
    contMonedasTec.innerHTML = monedasTecnologias;
}

async function mostrarMonedasOtrasHabilidadesTecnicas (){
    const tecnologias = await cargarJSON('json/tecnologias.json'); // obtenemos los datos

    const contTituloTec = document.getElementById('ContenedorTituloTec');
    const contMonedasTec = document.getElementById('ContenedorMonedasTec');

    let monedasTecnologias = '';

    contTituloTec.innerHTML = "";
    contMonedasTec.innerHTML = ""

    for (let oht of tecnologias) {
        if (oht.categoria == "Otras Habilidades Tecnicas"){
            monedasTecnologias += monedasEstructura(oht.urlImagen, oht.nombre);
        }  
    }

    contTituloTec.innerHTML = "Otras Habilidades Tecnicas"
    contMonedasTec.innerHTML = monedasTecnologias;
}

async function mostrarMonedasTecnologiasPrincipales(){
    const tecnologias = await cargarJSON('json/tecnologias.json'); // obtenemos los datos
    
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