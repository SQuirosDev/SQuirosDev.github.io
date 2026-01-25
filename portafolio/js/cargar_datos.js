async function cargarJSON(url) {
    try {
        const respuesta = await axios.get(url);
        return respuesta.data;
    } catch (error) {
        console.error("Error al cargar el JSON:", error);
        return []; // Retorna un arreglo vacío si hay error
    }
}