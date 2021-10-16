const fs = require('fs')

console.log('Inicio')

fs.writeFile('arquivo.txt', 'oi', (err) => {
    setTimeout(() => {
        console.log('Arquivo Criado!')
    }, 2000)
})

console.log('fim')