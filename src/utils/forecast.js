const request = require('request')
const forcast = (longitude,latitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/828c0751c2c936d0ad20d8d3fb06dc53/'+latitude+','+longitude
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback( undefined, body.daily.data[0].summary + " It is currently "+ body.currently.temperature + " degrees. There is a "+ body.currently.precipProbability +'%'+ ' chance of rain. '+'The high today is '+ body.daily.data[0].temperatureHigh +' degrees and the low is '+ body.daily.data[0].temperatureLow +  " degrees."
            )
        }
    })
}

  module.exports = forcast