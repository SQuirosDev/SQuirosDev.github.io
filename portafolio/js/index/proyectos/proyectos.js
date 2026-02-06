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
        <button class="open-modal project-card-btn" data-id="${proyecto.id}">
            <article class="project-card">
                
                <div class="project-image">
                    <img src="${proyecto.urlImagen}" alt="${proyecto.nombre}">
                </div>

                <div class="project-content">
                    <h3 class="tron-text-x-small">${proyecto.nombre}</h3>

                    <div class="project-tech">
                        ${monedasLP}
                        ${monedasFL}
                        ${monedasHI}
                        ${monedasDIC}
                    </div>
                </div>

            </article>
        </button>
    `;
}