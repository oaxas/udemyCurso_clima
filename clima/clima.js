const axios = require("axios");

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=48f15ff9bdbf0af874eaa0416cf887c2&units=metric&lat=${lat}&lon=${lng}`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}