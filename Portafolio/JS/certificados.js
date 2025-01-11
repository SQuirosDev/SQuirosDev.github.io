function certificados(){
    let urlImagenesCertificados = "IMAGENES/Certificaciones/"

    let listaCertificaciones = certificaciones
    
    $('#contenedorCertificaciones').empty()

    let titulos = ''

    for(let i = 0; i < listaCertificaciones.length; i++){
        titulos += `
            <img src="${urlImagenesCertificados + listaCertificaciones[i] + ".png"}" alt="certificado">
        `
    }

    $('#contenedorCertificaciones').append(titulos)
}