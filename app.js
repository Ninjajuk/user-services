

const express= require('express')
const cors = require('cors')

const app=express()


//Middleware

app.use(express.json())
app.use(cors())

const port=9000

app.get('/', async(req,res) => {
    res.json({data:'Hi there!,'})
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})