//Criar uma função que exibe "Olá, mundo!" no console.

function ola() {
  console.log("Ola Mundo");
}

ola();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function nome(nm) {
  console.log(`Ola ${nm}`);
}

nome("Eduardo");

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function multiplica(num) {
  return num * 2;
}

console.log(multiplica(6));

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(valor1, valor2, valor3) {
  return (valor1 + valor2 + valor3) * 3;
}

console.log(media(2, 4, 6));

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function j(num1, num2) {
  let maior;
  if (num1 > num2) {
    return (maior = num1);
  }

  return (maior = num2);
}
console.log(j(5, 10));

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function eleMesmo(numero) {
  return numero * numero;
}

console.log(eleMesmo(10));
