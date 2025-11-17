// ==============================================================================================

// Modal

async function setupProjectModal() {
    const proyectos = await cargarJSON('json/proyectos.json'); // obtenemos los datos

    // 2. Cachear elementos del DOM
    const modal = document.getElementById('modal');
    const btnCerrar = document.getElementById('modal-close');
    const titleNode = document.getElementById('modal-title');
    const imgNode = document.getElementById('modal-image');
    const descNode = document.getElementById('modal-desc');
    const contlp = document.getElementById('modal-lp');
    const contfi = document.getElementById('modal-fl');
    const conthi = document.getElementById('modal-hi');
    const contdic = document.getElementById('modal-dic');
    const buttonsCont = document.getElementById('modal-buttons');

    // 3. Función para abrir modal
    async function abrirModal(proy, pushUrl = true) {

        if (pushUrl === undefined) pushUrl = true;

        titleNode.textContent = proy.nombre;
        imgNode.src = proy.urlImagen;
        imgNode.alt = proy.nombre;
        descNode.innerHTML = proy.descripcion;

        // 1) Construir las monedas tecnologias
        let monedasLPHtml = ""
        let monedasfiHtml = ""
        let monedashiHtml = ""
        let monedasdicHtml = ""

        if (proy.lenguajesProgrmacion.length > 0){
            const titulo = document.getElementById('modal-lp-titulo')
            titulo.innerText = "Lenguajes de Programacion"
            monedasLPHtml = await mostrarMonedasLenguagesProgramacionProyectos(proy)
        }

        if (proy.frameworkLibreria.length > 0){
            const titulo = document.getElementById('modal-fl-titulo')
            titulo.innerText = "Frameworks y Librerias"
            monedasfiHtml = await mostrarMonedasFrameworksLibreriasProyectos(proy);
        }

        if (proy.herramientas.length > 0){
            const titulo = document.getElementById('modal-hi-titulo')
            titulo.innerText = "Herramientas y IDEs"
            monedashiHtml = await mostrarMonedasHerramientasIDEsProyectos(proy);
        }

        if (proy.devopsInfraestructuraCloud.length > 0){
            const titulo = document.getElementById('modal-dic-titulo');
            titulo.innerText = "DevOps e Infraestructura Cloud";
            monedasdicHtml = await mostrarMonedasDevOpsInfraestructuraCloudProyectos(proy);
        }
        
        contlp.innerHTML = monedasLPHtml;
        contfi.innerHTML = monedasfiHtml;
        conthi.innerHTML = monedashiHtml;
        contdic.innerHTML = monedasdicHtml;

        // 3) Botones de acción
        buttonsCont.innerHTML = '';  // limpia botones viejos

        // lista de claves según tu estructura
        const acciones = ['github', 'demoYT1', 'demoYT2', 'despliegues'];

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
        const titulolp = document.getElementById('modal-lp-titulo')
        const titulofi = document.getElementById('modal-fl-titulo')
        const titulohi = document.getElementById('modal-hi-titulo')
        const titulodic = document.getElementById('modal-dic-titulo');
        
        titulolp.innerText = ""
        titulofi.innerText = ""
        titulohi.innerText = ""
        titulodic.innerText = ""
        

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
