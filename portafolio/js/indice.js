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
    link.href = 'https://squirosdev.github.io/doc/doc/CV Sebastian Quiros.pdf'; 
    link.download = 'cv.pdf';
    link.click();
    alert('CV descargado correctamente');
}
