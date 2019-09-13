require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')
const app = express()

app.use(express.json())

const apiUrl = '/api/inventory/'
//endpoints 
app.get(apiUrl, ctrl.getAll)



massive(CONNECTION_STRING).then(db => {
    app.set('db' , db )
    console.log('db running')
})
app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} SP running`))



