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

app.get('/receipe/:id', (req, res)=>{
    const search = req.params.id
    data = chefs.find(chef => chef.id == search)
    if(data){
        res.send(data)
    }else{
        res.send({})
    }
    
})

app.listen(port, () => {
    console.log(`Chef Hunter API is listening on port: ${port}`)
})