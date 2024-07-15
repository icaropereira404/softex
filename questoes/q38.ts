const numero1 = parseFloat(prompt("Digite o primeiro número decimal:"));

const numero2 = parseFloat(prompt("Digite o segundo número decimal:"));

const numero3 = parseFloat(prompt("Digite o terceiro número decimal:"));

if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
  const media = (numero1 + numero2 + numero3) / 3;

  alert(`A média aritmética dos números é: ${media}`);
} else {
  alert("Por favor, digite valores numéricos válidos para os três números decimais.");
}
