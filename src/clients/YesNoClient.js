import axios from "axios";

const consultarRespuesta = async () => {
    const respuesta = axios.get('https://yesno.wtf/api').then(respuesta => respuesta.data)
    console.log();
    return respuesta;
}

// función fachada
export const consultarRespuestaFachada = async () => {
    return await consultarRespuesta();
}

