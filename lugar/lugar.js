const axios = require("axios");


const getLugarLatLng = async(dir) => {

    const encodedParam = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedParam}`,
        headers: { 'x-rapidapi-key': '5dcd5f5fa2msh23605ee3d0e6205p14f90bjsn24f23742ec9d' }
    });

    const resp = await instance.get();



    if (resp.data.Results.length === 0) {
        throw new Error(`No hay Resultados para ${dir}`);
    }

    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }


}

module.exports = {
    getLugarLatLng
}