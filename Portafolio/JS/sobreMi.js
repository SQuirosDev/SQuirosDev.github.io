function mostrarTextos(){
    let listaTextos = textos

    //-----------------------------------------------------------------------------------------
    /*0*/

    $('#contenedorTexto0').empty()

    let texto0 = `<p>${listaTextos[0]}</p>`

    $('#contenedorTexto0').append(texto0) 

    /*1*/

    $('#contenedorTexto1').empty()

    let texto1 = `<p>${listaTextos[1]}</p>`

    $('#contenedorTexto1').append(texto1) 

    /*2*/

    $('#contenedorTexto2').empty()

    let texto2 = `<p>${listaTextos[2]}</p>`

    $('#contenedorTexto2').append(texto2) 

    /*3*/

    $('#contenedorTexto3').empty()

    let texto3 = `<p>${listaTextos[3]}</p>`

    $('#contenedorTexto3').append(texto3) 
}