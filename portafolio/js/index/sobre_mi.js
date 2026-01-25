async function mostrarTextos(){
    const textos = await cargarJSON('json/textos.json'); // obtenemos los datos

    for (let texto of textos){

        if(document.getElementById("contenedorTexto1")){
            if (texto.id == 1){
                $('#contenedorTexto1').append(`<p>${texto.info}</p>`)
            }
        }
    }
}