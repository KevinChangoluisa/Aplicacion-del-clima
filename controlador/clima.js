/*
cargamos la libreria
 */
const axios = require("axios");

/*
 Se crea una funcion asincrona, por el tiempo de respuesta de la app al servidor
 se envia la latitud y longitud como parametros, para obtener una mejor respuesta por parte del servidor
 Se nos retorna un objeto por parte del servidor, y accedemos a las propiedades del objeto data.main.temp
 Devolvemos solo el valor de la temperatura en grados celsius

 */
const getClimaHumedadPrecion = async(lat, lon) => {
    key = 'accesToken'
    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    );
    const temperatura = resp.data.main.temp
    const humedad = resp.data.main.humidity
    const presion = resp.data.main.pressure
    return { temperatura, humedad, presion }
};

module.exports = {
    getClimaHumedadPrecion
};