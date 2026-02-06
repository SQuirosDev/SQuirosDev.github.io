// ==============================================================================================
// Modal de Proyectos (versión estable y sin bloqueos)
// ==============================================================================================

document.addEventListener('DOMContentLoaded', async () => {

    const proyectos = await cargarJSON('json/proyectos.json');

    const modal        = document.getElementById('modal');
    const btnCerrar    = document.getElementById('modal-close');
    const titleNode    = document.getElementById('modal-title');
    const imgNode      = document.getElementById('modal-image');
    const descNode     = document.getElementById('modal-desc');
    const contlp       = document.getElementById('modal-lp');
    const contfi       = document.getElementById('modal-fl');
    const conthi       = document.getElementById('modal-hi');
    const contdic      = document.getElementById('modal-dic');
    const buttonsCont  = document.getElementById('modal-buttons');

    let modalAbierto = false;

    // --------------------------------------------------
    // Abrir modal
    // --------------------------------------------------
    async function abrirModal(proy, pushUrl = true) {
        if (modalAbierto) return;
        modalAbierto = true;

        titleNode.textContent = proy.nombre;
        imgNode.src = proy.urlImagen.replace(/^\.\.\//, "");
        imgNode.alt = proy.nombre;
        descNode.innerHTML = proy.descripcion;

        limpiarTecnologias();

        if (proy.lenguajesProgrmacion?.length) {
            setTitulo('lp', 'Lenguajes de Programación');
            contlp.innerHTML = await mostrarMonedasLenguagesProgramacionProyectos(proy);
        }

        if (proy.frameworkLibreria?.length) {
            setTitulo('fl', 'Frameworks');
            contfi.innerHTML = await mostrarMonedasFrameworksLibreriasProyectos(proy);
        }

        if (proy.herramientas?.length) {
            setTitulo('hi', 'Herramientas');
            conthi.innerHTML = await mostrarMonedasHerramientasIDEsProyectos(proy);
        }

        if (proy.devopsInfraestructuraCloud?.length) {
            setTitulo('dic', 'DevOps');
            contdic.innerHTML = await mostrarMonedasDevOpsInfraestructuraCloudProyectos(proy);
        }

        buttonsCont.innerHTML = '';

        ['github', 'demoYT1', 'despliegues'].forEach(key => {
            const act = proy[key];
            if (act?.estado) {
                const btn = document.createElement('a');
                btn.className = 'btn-action boton btn-mediano tron-boton text-center';
                btn.href = act.url;
                btn.target = '_blank';
                btn.textContent = act.texto;
                buttonsCont.appendChild(btn);
            }
        });

        modal.classList.add('active');

        if (pushUrl) {
            history.pushState({ modalId: proy.id }, '', `?id=${proy.id}`);
        }
    }

    // --------------------------------------------------
    // Cerrar modal
    // --------------------------------------------------
    function cerrarModal(pushUrl = true) {
        if (!modalAbierto) return;

        modal.classList.remove('active');
        modalAbierto = false;

        if (pushUrl) {
            history.pushState({}, '', window.location.pathname);
        }
    }

    // --------------------------------------------------
    // Helpers
    // --------------------------------------------------
    function limpiarTecnologias() {
        ['lp', 'fl', 'hi', 'dic'].forEach(k => {
            const titulo = document.getElementById(`modal-${k}-titulo`);
            const cont   = document.getElementById(`modal-${k}`);
            if (titulo) titulo.textContent = '';
            if (cont) cont.innerHTML = '';
        });
    }

    function setTitulo(key, texto) {
        const t = document.getElementById(`modal-${key}-titulo`);
        if (t) t.textContent = texto;
    }

    // --------------------------------------------------
    // Abrir desde proyectos
    // --------------------------------------------------
    document.addEventListener('click', e => {
        const btn = e.target.closest('.open-modal');
        if (!btn) return;

        e.preventDefault();
        const id = Number(btn.dataset.id);
        const proy = proyectos.find(p => p.id === id);
        if (proy) abrirModal(proy, true);
    });

    // --------------------------------------------------
    // Cerrar eventos
    // --------------------------------------------------
    btnCerrar.addEventListener('click', () => cerrarModal(true));

    modal.addEventListener('click', e => {
        if (e.target === modal) cerrarModal(true);
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') cerrarModal(true);
    });

    // --------------------------------------------------
    // Historial
    // --------------------------------------------------
    window.addEventListener('popstate', e => {
        const state = e.state;
        if (state?.modalId) {
            const p = proyectos.find(pr => pr.id === state.modalId);
            if (p) abrirModal(p, false);
        } else {
            cerrarModal(false);
        }
    });

    // --------------------------------------------------
    // Abrir por URL
    // --------------------------------------------------
    const initId = new URLSearchParams(window.location.search).get('id');
    if (initId) {
        const p0 = proyectos.find(p => p.id === Number(initId));
        if (p0) abrirModal(p0, false);
    }
});
