const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log("Conectado ao banco")
}catch(error){
    console.log(`Não foi possível conectar ${error}`)
}

exports.default = sequelize