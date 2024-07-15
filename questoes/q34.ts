const numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));

const numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
  const soma = numero1 + numero2;
  const diferenca = numero1 - numero2;
  const produto = numero1 * numero2;
  const quociente = Math.floor(numero1 / numero2); 

  // Exibe os resultados
  alert(`Soma: ${soma}\nDiferença: ${diferenca}\nProduto: ${produto}\nQuociente: ${quociente}`);
} else {
  alert("Por favor, digite dois números inteiros válidos.");
}
