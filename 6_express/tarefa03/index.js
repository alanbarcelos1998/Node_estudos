const express = require('express')
const app = express()
const port = 5000
const router = require('./router')

const path = require('path')

const basePath = path.join(__dirname, '/templates')

app.use(express.static('public'))

app.use('/', router)

app.use((req,res,next) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => { console.log(`Servidor na porta ${port}`)})