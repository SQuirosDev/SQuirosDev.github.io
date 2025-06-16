function monedasLenguagesProgramacionProyectos(proyecto){
    return proyecto.lenguajesProgrmacion.map(
        idLenguajeProgramacion => {
            const lenguajeProgramacion = lenguajesProgramacion.find(m => m.id === idLenguajeProgramacion);
            if (!lenguajeProgramacion) return "";  // si no existe, saltar
            return monedasEstructuraProyectos(lenguajeProgramacion.urlImagen, lenguajeProgramacion.nombre);
        }   
    ).join("");
}

function monedasHerramientasProyectos(proyecto){
    return proyecto.herramientas.map(
        idHerramienta => {
            const herramienta = herramientas.find(h => h.id === idHerramienta);
            if (!herramienta) return "";
            return monedasEstructuraProyectos(herramienta.urlImagen, herramienta.nombre);
        }
    ).join("");
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