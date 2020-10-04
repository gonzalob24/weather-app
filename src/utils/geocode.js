const request = require('request')

// encodeURIComponent returns a string and encodes special characters
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ29uemFsb2IyNCIsImEiOiJja2Ftd29ycmUwNWRoMnFvZ3RzMjk4c2tqIn0.WeH65rNMRniePSdGsXtDfw&limit=1'
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Cannot connect to location services. Try again.', undefined)
        } else if (body.features.length === 0) {
            callback('Unsuccessful search. Try another location.', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode