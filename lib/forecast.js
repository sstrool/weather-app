const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/2140fc87b0dc7a105465336f7da3eaa6/' + latitude + ',' + longitude //37.8267,-122.4233'

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Error, Cannot reach weather service!', undefined)
        } else if (response.body.error) {
            callback('Error, unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: latitude,
                longitude: longitude
            })
        }
    })
};

module.exports = forecast