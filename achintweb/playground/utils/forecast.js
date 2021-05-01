const request = require('request')
const forecast = (address,callback) => {
    const url='http://api.openweathermap.org/data/2.5/weather?q='+address+'&appid=70a616c7e95a8eb78d7d38001ac25195'
    request({url:url , json:true},(error,response)=>{
        if(error){
            callback('unable to connect to weather services',undefined)
        }
        else if(response.body.error){
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined, 'it is currently '+ response.body.main.temp + ' degrees out. there is a wind speed of ' + response.body.wind.speed)
        }
    })
}
module.exports = forecast
