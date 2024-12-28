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

    let listaNombres = nombres
    let listaDescripciones = descripciones
    let listaTecnologias = tecnologias

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
                    <img class="carta-imagen-P" src=${urlImagenesProyecto + listaNombres[i] + ".png"} alt=${listaNombres[i]}>
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
                    <button>
                        <i class="bi bi-github fs-3"></i>
                        <a href="#">Codigo</a>
                    </button>
                </div>
            </div>
        `
    }

    $('#contenedorCartasProyectos').append(cartaProyecto)
}