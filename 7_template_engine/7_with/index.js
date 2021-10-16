const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req,res) => {

    const items = ['item a', 'item b', 'item c']

    res.render('dashboard', {items})
})

app.get('/post', (req,res) => {
    const post = {
        title: 'Aprender node.js',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender Node.js',
        comments: 4
    }

    res.render('blogPost', {post})
})

app.get('/', (req,res) => {

    const user =  { name: 'Alan', lastname: 'Barcelos'}

    const auth = false

    const approved = false

    res.render('home', {user: user, auth, approved})
})

app.listen(3000, () =>{
    console.log('app funcionando!')
})