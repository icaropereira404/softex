const numero = prompt("Digite um número inteiro:");

if (numero) {
  const numeroInteiro = parseInt(numero, 10);

  if (!isNaN(numeroInteiro)) {
    const numeroDecimal = parseFloat(numeroInteiro.toString());
    alert(`O número decimal é ${numeroDecimal}.`);
  } else {
    alert("Por favor, digite um número inteiro válido.");
  }
}