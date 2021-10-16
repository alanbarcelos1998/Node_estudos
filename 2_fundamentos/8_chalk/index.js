const chalk = require('chalk')

const nota = 5

if (nota >= 7){
    console.log(chalk.green('Parabés! Você está aprovado!'))
} else {
    console.log(chalk.bgRed.black.bold("Está de recuperação"))
}
