async function mostrarCartasProyectos() {
    const proyectos = await cargarJSON('json/proyectos.json'); // obtenemos los datos

    const contCP = document.getElementById('contenedorCartasProyectos');

    const filtrarCP = contCP.classList.contains('filtrado');

    let cartasProyectos = "";

    // Recorremos cada objeto 'proyecto'
    for (let proyecto of proyectos) {
        // Si estamos filtrando y este proyecto NO tiene prioridad, lo saltamos
        if (filtrarCP && !proyecto.prioridad) {
            continue;
        }

        // Construimos las monedas y la carta en un solo lugar
        const monedasLP = await mostrarMonedasLenguagesProgramacionProyectos(proyecto);
        const monedasFL = await mostrarMonedasFrameworksLibreriasProyectos(proyecto);
        const monedasHI = await mostrarMonedasHerramientasIDEsProyectos(proyecto);
        const monedasDIC = await mostrarMonedasDevOpsInfraestructuraCloudProyectos(proyecto);
        cartasProyectos += await cartasEstructura(proyecto, monedasLP, monedasFL, monedasHI, monedasDIC);
    }

    contCP.innerHTML = cartasProyectos
}

function cartasEstructura(proyecto, monedasLP, monedasFL, monedasHI, monedasDIC){
    return `
        <button class="open-modal carta-boton-P" data-id="${proyecto.id}" onclick="setupProjectModal()">
            <div class="carta">
                <div>
                    <img class="carta-imagen-P" src="${proyecto.urlImagen.replace(/^\.\.\//, "")}" alt="${proyecto.nombre}">
                </div>
                <div class="carta-descripcion-P">
                    <p class="titulo-p tron-text">${proyecto.nombre}</p>
                </div>
                <div class="carta-tecnologia-P">
                    <div class="barra-scroll flex-padre-tecnologias-P">
                        ${monedasLP}
                    </div>
                </div>
                <div class="carta-tecnologia-P">
                    <div class="barra-scroll flex-padre-tecnologias-P">
                        ${monedasFL}
                    </div>
                </div>
                <div class="carta-tecnologia-P">
                    <div class="barra-scroll flex-padre-tecnologias-P">
                        ${monedasHI}
                    </div>
                </div>
                <div class="carta-tecnologia-P">
                    <div class="barra-scroll flex-padre-tecnologias-P">
                        ${monedasDIC}
                    </div>
                </div>
            </div>
        </button>
    `;
}