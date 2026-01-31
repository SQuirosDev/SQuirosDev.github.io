function cartasProyectos(){
    let urlImagenesProyecto = "IMAGENES/Proyectos/"
    let urlImagenesLP = "IMAGENES/LP/"
    let urlImagenesTools = "IMAGENES/Herramientas/"

    let listaImagenes = imagenes
    let listaNombres = nombres
    let listaDescripciones = descripciones
    let listaTecnologias = tecnologiasLP
    let listaHerramientas = tecnologiasTools
    let listaUrlProyectos = urlProyectos

    $('#contenedorCartasProyectos').empty()

    let cartaProyecto = ''

    for(let i = 0; i < listaNombres.length; i++){

        let monedasLP = ''

        for(let j = 0; j < listaTecnologias[i].length; j++){
            monedasLP += `
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

        let monedasTools = ''

        for(let j = 0; j < listaHerramientas[i].length; j++){
            monedasTools += `
                <div class="coin-P">
                    <div class="coin-inner-P">
                        <div class="coin-face-P front-P">
                            <img src=${urlImagenesTools + listaHerramientas[i][j] + ".png"} alt=${listaHerramientas[i][j]}>
                        </div>
                        <div class="coin-face-P back-P">
                            <span>${listaHerramientas[i][j]}</span>
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
                <!--Herramientas-->
                <div class="carta-tecnologia-P">
                    <h4>Habilidades</h4>
                    <div class="flex-padre-tecnologias-P">
                        ${monedasLP}
                    </div>
                </div>
                <!--Herramientas-->
                <div class="carta-tecnologia-P">
                    <h4>Herramientas</h4>
                    <div class="flex-padre-tecnologias-P">
                        ${monedasTools}
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