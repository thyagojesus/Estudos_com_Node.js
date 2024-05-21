import chalk from 'chalk'; 
import inquirer from 'inquirer'; 

async function main() {
  const respostas = await inquirer.prompt([
    {
      type: 'input',
      name: 'p1',
      message: 'Qual seu nome?'
    },
    {
      type: 'input',
      name: 'p2',
      message: 'idade'
    }
  ]);

  respostas.p2 = parseInt(respostas.p2)
  console.log(chalk.black.bgYellow(`Olá, ${respostas.p1}, você tem ${respostas.p2} anos!`));
}
console.log(chalk.blue("teste"))

try{
//Para ocasionar o erro, tente chamar um funcão que não existe
  main();

}catch(err){
console.log(chalk.bgRed.black(err))
}