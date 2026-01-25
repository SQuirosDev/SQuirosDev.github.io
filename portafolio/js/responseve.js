function quitarClaseSiPantallaPequena() {
    const anchoPantalla = window.innerWidth;
    const claseAEliminar = 'contenedor-seccion'; // Cambiá esto por el nombre de la clase
    const elementos = document.querySelectorAll('.' + claseAEliminar);

    if (anchoPantalla < 768) { // Cambiá 768 por el tamaño que quieras
        for(let elemento of elementos){
            elemento.classList.remove(claseAEliminar);
        }
    }
}

// Llamar al cargar la página
window.addEventListener('load', quitarClaseSiPantallaPequena);

// Llamar al redimensionar la ventana
window.addEventListener('resize', quitarClaseSiPantallaPequena);
