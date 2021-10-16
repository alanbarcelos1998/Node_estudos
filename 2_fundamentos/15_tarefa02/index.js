const inquirer = require('inquirer')
const chalk = require('chalk')


inquirer.prompt([
    {
        name : 'usNome',
        message: 'Qual o seu nome? '
    },
    {
        name: 'usIdade',
        message: 'Qual a sua idade? '
    }
]).then((answer) => {
    console.log(chalk.bgYellow.black(`Nome do usuário é: ${answer.usNome}, tem ${answer.usIdade} anos de idade`))
}).catch((err) => console.log(err))
