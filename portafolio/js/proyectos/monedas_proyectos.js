function monedasLenguagesProgramacionProyectos(proyecto){
    const ids = proyecto.lenguajesProgrmacion || [];
    let html = '';
    for (let i = 0; i < ids.length; i++) {
        const tech = tecnologias.find(t => t.id === ids[i]);
        if (tech && tech.categoria === 'Lenguajes de Programacion') {
            html += monedasEstructuraProyectos(tech.urlImagen, tech.nombre);
        }
    }
    return html;
}

function monedasFrameworksLibreriasProyectos(proyecto){
    const ids = proyecto.frameworkLibreria || [];
    let html = '';
    for (let i = 0; i < ids.length; i++) {
        const tech = tecnologias.find(t => t.id === ids[i]);
        if (tech && tech.categoria === 'Frameworks y Librerias') {
            html += monedasEstructuraProyectos(tech.urlImagen, tech.nombre);
        }
    }
    return html;
}

function monedasHerramientasIDEsProyectos(proyecto){        
    const ids = proyecto.herramientas || [];
    let html = '';
    for (let i = 0; i < ids.length; i++) {
        const tech = tecnologias.find(t => t.id === ids[i]);
        if (tech && tech.categoria === 'Herramientas y IDEs') {
            html += monedasEstructuraProyectos(tech.urlImagen, tech.nombre);
        }
    }
    return html;
}

function monedasDevOpsInfraestructuraCloudProyectos(proyecto){
    const ids = proyecto.devopsInfraestructuraCloud || [];
    let html = '';
    for (let i = 0; i < ids.length; i++) {
        const tech = tecnologias.find(t => t.id === ids[i]);
        if (tech && tech.categoria === 'DevOps e Infraestructura Cloud') {
            html += monedasEstructuraProyectos(tech.urlImagen, tech.nombre);
        }
    }
    return html;
}

function monedasEstructuraProyectos(urlImagen, nombre){
    return `
        <div class="coin-P">
            <div class="coin-inner-P">
            <div class="coin-face-P front-P">
                <img src="${urlImagen}" alt="${nombre}">
            </div>
            <div class="coin-face-P back-P">
                <span>${nombre}</span>
            </div>
            </div>
        </div>
    `
}