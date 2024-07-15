// Solicita ao usuário que digite um número inteiro
const NumeroInput = prompt("Digite um número inteiro:");

if (NumeroInput) {
  const numero = parseInt(NumeroInput, 10);

  if (!isNaN(numero)) {
    if (numero > 0) {
      alert(`${numero} é um número positivo.`);
    } else if (numero < 0) {
      alert(`${numero} é um número negativo.`);
    } else {
      alert(`${numero} é zero.`);
    }
  } else {
    alert("Por favor, digite um número inteiro válido.");
  }
} else {
  alert("Por favor, digite um número.");
}
