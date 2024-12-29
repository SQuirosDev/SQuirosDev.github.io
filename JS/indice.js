function copiarCorreo() {
    const correo = 'se13.quiros@gmail.com'; // Reemplaza con tu correo
    navigator.clipboard.writeText(correo)
        .then(() => alert('Correo copiado al portapapeles'))
        .catch(err => alert('Error al copiar el correo'));
}

function copiarTelefono() {
    const telefono = '84441313'; // Reemplaza con tu número de teléfono
    navigator.clipboard.writeText(telefono)
        .then(() => alert('Teléfono copiado al portapapeles'))
        .catch(err => alert('Error al copiar el teléfono'));
}

function descargarCV() {
    const link = document.createElement('a');
    link.href = 'https://squirosdev.github.io/DOCUMENTOS/CV.pdf'; // URL del archivo PDF
    link.download = 'CV.pdf'; // Nombre del archivo al descargar
    link.click();
    alert('CV descargado correctamente');
}

function monedasLP(){
    let urlImagenesLP = "IMAGENES/LP/"

    let listaLP = lenguajesProgrmacion

    $('#contenedorMonedasLP').empty()

    let monedaLP = ''

    for(let i = 0; i < listaLP.length; i++){

        monedaLP += `
            <div class="coin">
                <div class="coin-inner">
                    <div class="coin-face front">
                        <img src=${urlImagenesLP + listaLP[i] + ".png"} alt=${listaLP[i]}>
                    </div>
                    <div class="coin-face back">
                        <span>${listaLP[i]}</span>
                    </div>
                </div>
            </div>
        `
    }

    $('#contenedorMonedasLP').append(monedaLP)
}

function cartasProyectos(){
    let urlImagenesProyecto = "IMAGENES/Proyectos/"
    let urlImagenesLP = "IMAGENES/LP/"

    let listaImagenes = imagenes
    let listaNombres = nombres
    let listaDescripciones = descripciones
    let listaTecnologias = tecnologias
    let listaUrlProyectos = urlProyectos

    $('#contenedorCartasProyectos').empty()

    let cartaProyecto = ''

    for(let i = 0; i < listaNombres.length; i++){

        let monedas = ''

        for(let j = 0; j < listaTecnologias[i].length; j++){
            monedas += `
                <div class="coin-P">
                    <div class="coin-inner-P">
                        <div class="coin-face-P front-P">
                            <img src=${urlImagenesLP + listaTecnologias[i][j] + ".png"} alt=${listaTecnologias[i][j]}>
                        </div>
                        <div class="coin-face-P back-P">
                            <span>${listaTecnologias[i][j]}</span>
                        </div>
                    </div>
                </div>
            `
        }

        cartaProyecto += `
            <div class="carta">
                <!--imagen-->
                <div>
                    <img class="carta-imagen-P" src=${urlImagenesProyecto + listaImagenes[i] + ".png"} alt=${listaNombres[i]}>
                </div>
                <!--descripcion-->
                <div class="carta-descripcion-P"> 
                    <h3>${listaNombres[i]}</h3>
                    <p>
                        ${listaDescripciones[i]}
                    </p>
                </div>
                <!--Tecnologias-->
                <div class="carta-tecnologia-P">
                    <div class="flex-padre-tecnologias-P">
                        ${monedas}
                    </div>
                </div>
                <!--Boton-->
                <div class="carta-boton-P">
                    <a href=${listaUrlProyectos[i]} target="_blank">
                        <button>
                            <i class="bi bi-github fs-3"></i>
                            Codigo
                        </button>
                    </a>
                </div>
            </div>
        `
    }

    $('#contenedorCartasProyectos').append(cartaProyecto)
}