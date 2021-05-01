const path= require('path')
const express = require('express')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const hbs = require('hbs')
const expressPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'/views')
const partialPath = path.join(__dirname,'/partial')
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)
app.use(express.static(expressPath))
app.get('',(req,res)=>{
    res.render('index',{
        title:'weather',
        name:'achint'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about page',
        name:'achint'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help page',
        name:'achint'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'you must provide an address!'
        })
    }
    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        forecast(req.query.address,(error,forecastdata)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastdata,
                address : req.query.address,
                location : data.location,
                longitude:data.longitude,
                latitude:data.latitude
            })
        })
    })
})
app.get('*',(req,res)=>{
    res.send('my 404 page')
})
app.listen(3000,()=>{
    console.log('your server is up on port 3000')
})