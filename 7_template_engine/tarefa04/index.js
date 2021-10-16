const express = require('express')
const expbhs = require('express-handlebars')

const app = express()

const hbs = expbhs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const produtos = [
    {
        id: 1 - 1,
        nome : "Arroz",
        valor: 19.99,
        preco_custo: 12.89
    },
    {
        id: 2 - 1,
        nome : "Milho",
        valor: 4.50,
        preco_custo: 0.80
    }
]

app.get('/home', (req,res) => {
    res.render('home', {produtos})
})

app.get('/produto/:id', (req,res) => {
    const produto = produtos[req.params.id]
    
    res.render('produto', {produto})
})

app.listen(3000, () => {console.log('Servidor rodando')})