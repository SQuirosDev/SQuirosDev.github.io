function copiarCorreo() {
    const correo = 'se13.quiros@gmail.com';
    navigator.clipboard.writeText(correo)
        .then(() => alert('Correo copiado al portapapeles'))
        .catch(err => alert('Error al copiar el correo'));
}

function copiarTelefono() {
    const telefono = '84441313';
    navigator.clipboard.writeText(telefono)
        .then(() => alert('Teléfono copiado al portapapeles'))
        .catch(err => alert('Error al copiar el teléfono'));
}

function descargarCV() {
    const link = document.createElement('a');
    link.href = 'https://squirosdev.github.io/documentos/cv.pdf'; 
    link.download = 'cv.pdf';
    link.click();
    alert('CV descargado correctamente');
}
// ==============================================================================================

/*
    // 1) Defino el throttle
    function fnThrottle(fn, delay) {
        let lastCall = 0;
        return function(...args) {
            const now = Date.now();
            if (now - lastCall < delay) return;
            lastCall = now;
            return fn.apply(this, args);
        };
    }

    // 2) Defino el handler “throttled”
    const throttledWheel = fnThrottle(handleWheel, 500);

    // 3) Siempre escucho la rueda, pero dentro descarto en pantallas pequeñas
    document.addEventListener('wheel', throttledWheel, { passive: false });

    function handleWheel(e) {
    if (window.innerWidth < 768) return;     // abortar en móvil
        e.preventDefault();                       // anular scroll nativo

        const delta    = Math.sign(e.deltaY);
        const sections = Array.from(document.querySelectorAll('.contenedor-seccion'));
        const current  = Math.round(window.scrollY / window.innerHeight);
        let target     = current + delta;
        target = Math.max(0, Math.min(sections.length - 1, target));

        sections[target].scrollIntoView({
            behavior: 'smooth',
            block:    'center'
        });
    }
*/