async function mostrarTextos(){
    const textos = await cargarJSON('../json/textos.json'); // obtenemos los datos

    for (let texto of textos){

        if(document.getElementById("contenedorTexto1")){
            if (texto.id == 1){
                $('#contenedorTexto1').append(`<p>${texto.info}</p>`)
            }
        }
        
        if(document.getElementById("contenedorTexto2")){
            if (texto.id == 2){
                $('#contenedorTexto2').append(`<p>${texto.info}</p>`)
            }
        }
        
        if(document.getElementById("contenedorTexto3")){
            if (texto.id == 3){
                $('#contenedorTexto3').append(`<p>${texto.info}</p>`)
            }
        }
        
        if(document.getElementById("contenedorTexto4")){
            if (texto.id == 4){
                $('#contenedorTexto4').append(`<p>${texto.info}</p>`)
            }
        }
    }
}