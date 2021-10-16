const express = require('express')
const router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates/')

router.get('/home', (req,res) => {
    res.sendFile(`${basePath}/index.html`)
    console.log('Usuário logado na pagina principal')
})

router.get('/sobre', (req,res) => {
    res.sendFile(`${basePath}/sobre.html`)
    console.log('Usuario esta na pagina sobre')
})

module.exports = router