const http = require('http')

const port = 3000

const server = http.createServer((req,res) => {
    res,statusCoode = 200
    res.setHeader('content-Type', 'text/html') 
    res.end('<h1> Olá, testando servidor </h1>')
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})