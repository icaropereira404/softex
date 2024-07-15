const primeiroNumeroInput = prompt("Digite o primeiro número:");

const segundoNumeroInput = prompt("Digite o segundo número:");

if (primeiroNumeroInput && segundoNumeroInput) {
  const primeiroNumero = parseFloat(primeiroNumeroInput);
  const segundoNumero = parseFloat(segundoNumeroInput);

  if (!isNaN(primeiroNumero) && !isNaN(segundoNumero)) {
    const maiorNumero = Math.max(primeiroNumero, segundoNumero);
    alert(`O maior número é: ${maiorNumero}`);
  } else {
    alert("Por favor, digite números válidos.");
  }
} else {
  alert("Por favor, digite ambos os números.");
}
