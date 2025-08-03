const botones = document.querySelectorAll('.boton');
const espacioSolapado = 20;
const anchoNormal = 80;
const anchoExpandido = 800;

function obtenerBotonInicial() {
    return document.querySelector('.boton.expandido');
}

function actualizarPosiciones() {
    let posicionActual = 30;
    let expandidoIndex = -1;

    botones.forEach((boton, index) => {
        if (boton.classList.contains('expandido')) {
            expandidoIndex = index;
        }
    });

    botones.forEach((boton, index) => {
        const esExpandido = index === expandidoIndex;
        const ancho = esExpandido ? anchoExpandido : anchoNormal;

        boton.style.position = 'absolute';
        boton.style.left = `${posicionActual}px`;
        posicionActual += ancho - espacioSolapado;

        if (expandidoIndex >= 0 && index > expandidoIndex) {
            boton.style.zIndex = 5;
        } else if (esExpandido) {
            boton.style.zIndex = 10;
        } else {
            boton.style.zIndex = 1;
        }

        // También ajustamos el tamaño visual (ancho)
        boton.style.width = `${ancho}px`;
    });
}

// Asignar eventos de hover para expandir/colapsar
botones.forEach((boton) => {
    boton.addEventListener('mouseenter', () => {
        const botonInicial = obtenerBotonInicial();
        if (boton !== botonInicial) {
            botones.forEach((b) => b.classList.remove('expandido'));
        }
        boton.classList.add('expandido');
        actualizarPosiciones();
    });

    boton.addEventListener('mouseleave', () => {
        const botonInicial = obtenerBotonInicial();
        if (boton !== botonInicial) {
            botones.forEach((b) => b.classList.remove('expandido'));
            if (botonInicial) botonInicial.classList.add('expandido');
            else botones[0].classList.add('expandido');
            actualizarPosiciones();
        }
    });
});

// Inicializar
actualizarPosiciones();


function adaptarPantalla() {
    const esDispositivoMovil = $(window).width() <= 1024;
    const divContenedor = document.getElementById('contenedor');
    const divContenedorMovil = document.getElementById('contenedorMovil');

    if (esDispositivoMovil) {
        divContenedor.innerHTML = '';

        let botones = `
            <div>
            <a class="boton_movil" href="../Imagenes/Imagen 1.jpg" target="_blank">
                <img src="../Imagenes/Imagen 1.jpg" alt="Botón 1">
                <span>Documento 1</span>
            </a>
            </div>
            <div>
            <a class="boton_movil" href="../Imagenes/Imagen 2.jpg" target="_blank">
                <img src="../Imagenes/Imagen 2.jpg" alt="Botón 2">
                <span>Documento 2</span>
            </a>
            </div>
            <div>
            <a class="boton_movil" href="../Imagenes/Imagen 3.jpg" target="_blank">
                <img src="../Imagenes/Imagen 3.jpg" alt="Botón 3">
                <span>Documento 3</span>
            </a>
            </div>
            <div>
            <a class="boton_movil" href="../Imagenes/Imagen 4.jpg" target="_blank">
                <img src="../Imagenes/Imagen 4.jpg" alt="Botón 4">
                <span>Documento 4</span>
            </a>
            </div>
            <div>
            <a class="boton_movil" href="../Imagenes/Imagen 5.jpg" target="_blank">
                <img src="../Imagenes/Imagen 5.jpg" alt="Botón 5">
                <span>Documento 5</span>
            </a>
            </div>
            <div>
            <a class="boton_movil" href="../Imagenes/Imagen 6.jpg" target="_blank">
                <img src="../Imagenes/Imagen 6.jpg" alt="Botón 6">
                <span>Documento 6</span>
            </a>
            </div>
        `

        divContenedorMovil.innerHTML = botones;
    }
}

// Ejecutar al cargar y redimensionar
window.addEventListener('DOMContentLoaded', adaptarPantalla);
window.addEventListener('resize', adaptarPantalla);