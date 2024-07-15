const numeroString = prompt("Digite uma string contendo um número inteiro:");

if (numeroString) {
  const numeroInteiro = parseInt(numeroString, 10);

  if (!isNaN(numeroInteiro)) {
    const resultado = numeroInteiro + 10;

    const resultadoString = resultado.toString();

    alert(`O número original + 10 é: ${resultadoString}`);
  } else {
    alert("Por favor, digite uma string contendo um número inteiro válido.");
  }
} else {
  alert("Por favor, digite uma string contendo um número inteiro.");
}
