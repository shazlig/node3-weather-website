const request = require('request')

const forecast= (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7cff823bf2b1ad05c77f822f2e791e9d&query=' + longitude + ',' + latitude + '&units=f'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error ){
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, 'The weather is ' + body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The visibility is ' + body.current.visibility ) 
        }
    })
}

module.exports = forecast