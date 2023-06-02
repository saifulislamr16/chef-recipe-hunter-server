const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000;
 
app.use(cors())

const chefs = require('./chefData.json')

app.get('/', (req, res) =>{
    res.send('Chef hunter server is running')
})

app.get('/chefs', (req, res) =>{
    res.send(chefs)
})

app.listen(port, () => {
    console.log(`Chef Hunter API is listening on port: ${port}`)
})