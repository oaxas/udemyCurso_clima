const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para obtener el clima',
        demand: true

    }
}).argv;


const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(console.log);


// clima.getClima(19.99, -102.279)
//     .then(console.log)
//     .catch(console.log);

//salida
//el clima de XXXXX es de XX
//no se pudo determinar el clima de  XXXX

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${direccion} es de ${temp}.`;


    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });