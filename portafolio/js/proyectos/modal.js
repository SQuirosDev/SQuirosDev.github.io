// ==============================================================================================

// Modal

function setupProjectModal() {
    // 2. Cachear elementos del DOM
    const modal       = document.getElementById('modal');
    const btnCerrar   = document.getElementById('modal-close');
    const titleNode   = document.getElementById('modal-title');
    const imgNode     = document.getElementById('modal-image');
    const descNode    = document.getElementById('modal-desc');
    const langsCont   = document.getElementById('modal-langs');
    const toolsCont   = document.getElementById('modal-tools');
    const buttonsCont = document.getElementById('modal-buttons');

    // 3. Función para abrir modal
    function abrirModal(proy, pushUrl = true) {

        if (pushUrl === undefined) pushUrl = true;

        titleNode.textContent = proy.nombre;
        imgNode.src = proy.urlImagen;
        imgNode.alt = proy.nombre;
        descNode.innerHTML = proy.descripcion;

        // 1) Construir las monedas de lenguajes
        const monedasLPHtml = monedasLenguagesProgramacionProyectos(proy)
        
        langsCont.innerHTML = monedasLPHtml;

        // 2) Construir las monedas de herramientas
        const monedasToolsHtml = monedasHerramientasProyectos(proy)

        toolsCont.innerHTML = monedasToolsHtml;

        // 3) Botones de acción
        buttonsCont.innerHTML = '';  // limpia botones viejos

        // lista de claves según tu estructura
        const acciones = ['github', 'demoYT1', 'demoYT12', 'despliegues'];

        for (const key of acciones) {
            const act = proy[key];
            if (act.estado) {
                const btn = document.createElement('a');
                btn.className   = 'btn-action boton btn-mediano tron-boton text-center';
                btn.href        = act.url;
                btn.target      = '_blank';
                btn.textContent = act.texto;
                buttonsCont.appendChild(btn);
            }
        }

        // Mostrar y actualizar URL
        modal.classList.add('active');
        if (pushUrl) {
            history.pushState({ modalId: proy.id }, '', `?id=${proy.id}`);
        }
    }

    // 4. Función para cerrar modal
    function cerrarModal(pushUrl = true) {
        modal.classList.remove('active');
        if (pushUrl) {
            history.pushState({}, '', window.location.pathname);
        }
    }

    // 5. Eventos de apertura
    document.querySelectorAll('.open-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id, 10);
            const proy = proyectos.find(p => p.id === id);
            if (proy) abrirModal(proy, true);
        });
    });

    // 6. Eventos de cierre
    btnCerrar.addEventListener('click', () => cerrarModal(true));
    modal.addEventListener('click', e => {
        if (e.target === modal) cerrarModal(true);
    });

    // 7. Historial (Atrás/Adelante)
    window.addEventListener('popstate', e => {
        const state = e.state;
        if (state && state.modalId) {
            const p = proyectos.find(p => p.id === state.modalId);
            if (p) abrirModal(p, false);
        } else {
            cerrarModal(false);
        }
    });

    // 8. Abrir si hay ?id=… en la URL al cargar
    const params = new URLSearchParams(window.location.search);
    const initId = params.get('id');
    if (initId) {
        const p0 = proyectos.find(p => p.id === parseInt(initId, 10));
        if (p0) abrirModal(p0, false);
    }
}

// Arrancar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', setupProjectModal);
