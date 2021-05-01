const fs = require('fs')
const buffer = fs.readFileSync('1-json.json')
const databuffer = buffer.toString()
const user = JSON.parse(databuffer)
user.name='achint'
user.age= 19
const JSONuser = JSON.stringify(user)
const newdata = fs.writeFileSync('1-json.json',JSONuser)