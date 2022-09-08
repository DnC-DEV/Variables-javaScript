const prompt = require('prompt-sync')();

const nome = prompt('Digite o seu nome: ');
const sobrenome = prompt('Digite o seu sobrenome: ');
const peso = prompt('Digite seu Peso: ');
const altura = prompt('Digite sua altura: ');
const dataDeInterncao = prompt('Digite a data de Internção: ');
const diabetico = prompt('Voce é diabetico ? ');

console.log(`\nSeu nome é: ${nome} \nSeu sobrenome é: ${sobrenome} \nSeu peso é: ${peso} \nSua altura é: ${altura} \nA data de Internação é: ${dataDeInterncao} \nÉ ou não diabetico ${diabetico}`)