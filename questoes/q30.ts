const numeroInteiro = parseInt(prompt("Digite um número inteiro:"));

const texto = prompt("Digite uma string:");

if (!isNaN(numeroInteiro) && texto) {
  const mensagem = `${numeroInteiro} ${texto}`;

  alert(`A string resultante é: ${mensagem}`);
} else {
  alert("Por favor, digite um número inteiro e uma string.");
}
