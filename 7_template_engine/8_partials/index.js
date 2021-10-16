const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
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

app.get('/blog',(req,res) => {
    const posts = [
    {
        title: 'Aprender node.js',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender Node.js',
        comments: 4
    },
    {
        title: 'Aprender php',
        category: 'php',
        body: 'Este artigo vai te ajudar a aprender php',
        comments: 4
    }
    ]

    res.render('blog', {posts})
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