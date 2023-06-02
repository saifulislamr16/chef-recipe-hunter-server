const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000;
 
app.use(cors())

app.get('/', (req, res) =>{
    res.send('Chef hunter server is running')
})



app.listen(port, () => {
    console.log(`Chef Hunter API is listening on port: ${port}`)
})