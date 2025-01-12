const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000;

app.use(cors());

app.get("/greet",(req,res) => {
    res.send({
        message : "Hello From AWS"
    })
})

app.listen(PORT, ()=> {
    console.log(`Server Serted........ PORT=> ${PORT}`)
})