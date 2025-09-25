function certificados(){
    for (let certificado of certificaciones){
        $('#contenedorCertificaciones').append(`<a href="${certificado.urlImagen}" target="_blank"><img src="${certificado.urlImagen}" alt="certificado"></a>`)
    }

}