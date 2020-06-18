const axios = require("axios");
const ubicacion = require("./controlador/ubicacion");
const clima = require("./controlador/clima");
const argv = require("yargs").options({
    nombre: {
        alias: "n",
        desc: "Nombre de la ciudad para obtener el clima",
        demand: true,
    },
    opc: {
        alias: "o",
        desc: "Presion atmosferica/Humedad ",
    }
}).argv;

const getInfo = async(ciudad) => {
    try {
        const coords = await ubicacion.getCiudadLatLon(ciudad);
        const temp = await clima.getClimaHumedadPrecion(coords.lat, coords.lon);
        const nombreUbicacion = coords.name;
        const temperatura = temp.temperatura;
        const humedad = temp.humedad;
        const presion = temp.presion;
        return {
            nombreUbicacion,
            temperatura,
            presion,
            humedad
        }
    } catch (e) {
        return `No se pudo determinar el clima de ${ciudad} ${e}`;
    }
};

if (argv.opc == 'h') {
    getInfo(argv.nombre).then((dato) => {
        console.log(`\n La temperatura de ${dato.nombreUbicacion} es: ${dato.temperatura} °C\n Su humedad es: ${dato.humedad} %.\n`);
    })
} else if (argv.opc == 'p') {
    getInfo(argv.nombre).then((dato) => {
        console.log(`\n La temperatura de ${dato.nombreUbicacion} es: ${dato.temperatura} °C\n Su Presion atmosferica es: ${dato.presion}.\n`);
    })
} else {
    getInfo(argv.nombre).then((dato) => {
        console.log(`\n La temperatura de ${dato.nombreUbicacion} es: ${dato.temperatura} °C.\n`);
    })


}