const request = require('request')
const geocode = require('./geocode')
const forecast = require('./forecast')
const address = process.argv[2]
if(!address){
    console.log('please provide an address')
}
else{
    forecast(address,(error,forecastdata)=>{
        console.log(error)
        console.log(forecastdata)
    })
    geocode(address,(error,data)=> {
        console.log(error)
        console.log(data)
    })
}


