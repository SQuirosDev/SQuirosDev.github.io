async function mostrarCertificados(){
    const certificados = await cargarJSON('json/certificados.json'); // obtenemos los datos

    for (let certificado of certificados){
        $('#contenedorCertificaciones').append(`<a href="${certificado.urlImagen}" target="_blank"><img src="${certificado.urlImagen}" alt="certificado"></a>`)
    }
}