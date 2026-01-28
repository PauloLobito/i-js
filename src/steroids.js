prompt = require('prompt-sync')();
let number = parseInt(prompt('Enter a number: '));


if (number %5 === 0)
{
    console.log("Sem resto")
    console.log("Finalizando o programa!")
}
if (number !== 15) {
  console.log('The number is not 15');
}

if (number > 10 && number < 20) {
  console.log('The number is between 10 and 20');
}

console.log(number % 2 === 0 ? 'The number is even' : 'The number is odd');


if (number === 5 || number === 10 || number === 15) {
    console.log("O numero é 5 ou 10 ou 15")
    console.log("Fim de Programa")
    return;
}

