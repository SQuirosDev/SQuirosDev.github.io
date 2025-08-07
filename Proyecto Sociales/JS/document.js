function adaptarPantalla() {
    const esDispositivoMovil = $(window).width() <= 1024;
    const divContenedor = document.getElementById('contenedor');
    const divContenedorMovil = document.getElementById('contenedorMovil');

    if (esDispositivoMovil) {
        divContenedor.innerHTML = '';

        let botones = `
            <div>
            <a class="boton_movil" href="../Imagenes/Imagen 10.jpg" target="_blank">
                <img src="../Imagenes/Imagen 10.jpg" alt="Botón 1">
                <span>Tratado Del Atlántico Norte</span>
            </a>
            </div>
            <div>
            <a class="boton_movil" href="../Imagenes/Imagen 11.jpg" target="_blank">
                <img src="../Imagenes/Imagen 11.jpg" alt="Botón 2">
                <span>Pacto De Varsovia</span>
            </a>
            </div>
            <div>
            <a class="boton_movil" href="../Imagenes/Imagen 12.jpg" target="_blank">
                <img src="../Imagenes/Imagen 12.jpg" alt="Botón 3">
                <span>Acta Final De Helsinki</span>
            </a>
            </div>
            <div>
            <a class="boton_movil" href="../Imagenes/Imagen 13.jpg" target="_blank">
                <img src="../Imagenes/Imagen 13.jpg" alt="Botón 4">
                <span>Tratado ABM</span>
            </a>
            </div>
            <div>
            <a class="boton_movil" href="../Imagenes/Imagen 14.jpg" target="_blank">
                <img src="../Imagenes/Imagen 14.jpg" alt="Botón 5">
                <span>Saltiy I y II</span>
            </a>
            </div>
            <div>
            <a class="boton_movil" href="../Imagenes/Imagen 15.jpg" target="_blank">
                <img src="../Imagenes/Imagen 15.jpg" alt="Botón 6">
                <span>Tratado INF</span>
            </a>
            </div>
        `

        divContenedorMovil.innerHTML = botones;
    }
}

// Ejecutar al cargar y redimensionar

window.addEventListener('DOMContentLoaded', adaptarPantalla);
window.addEventListener('resize', adaptarPantalla);