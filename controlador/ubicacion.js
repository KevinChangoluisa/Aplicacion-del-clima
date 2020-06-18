const NodeGeocoder = require('node-geocoder');
const options = {
    provider: 'google',
    apiKey: 'AIzaSyC8evj4MvNICoFHxWZzM3E7mMBOQA34h4Y',
    formatter: null
};
const geocoder = NodeGeocoder(options);
const getCiudadLatLon = async(nombre) => {
    const res = await geocoder.geocode(nombre);
    const data = res[0];
    const name = data.formattedAddress;
    const lat = data.latitude;
    const lon = data.longitude;
    return {
        name,
        lat,
        lon,
    };
}

module.exports = {
    getCiudadLatLon,
};