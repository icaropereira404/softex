const numeroInput = prompt("Digite um número inteiro:");

if (numeroInput) {
  const numero = parseInt(numeroInput, 10);

  if (!isNaN(numero)) {
    if (numero % 2 === 0) {
      alert(`${numero} é um número par.`);
    } else {
      alert(`${numero} é um número ímpar.`);
    }
  } else {
    alert("Por favor, digite um número inteiro válido.");
  }
} else {
  alert("Por favor, digite um número.");
}
