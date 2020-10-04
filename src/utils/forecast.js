const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=79607faa302cada245318d23839b17df&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Cannot connect to weather service. Try again.', undefined)
        } else if (body.error) {
            callback('Unsuccessful search. Try another location.', undefined)
        } else {
            callback(undefined, {
                temp: body.current.temperature,
                'feels-like': body.current.feelslike,
                precip: body.current.precip,
                weather: body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = forecast