const numeroDecimal = parseFloat(prompt("Digite um número decimal:"));

if (!isNaN(numeroDecimal)) {
  const numeroArredondado = Math.round(numeroDecimal);

  alert(`O número arredondado mais próximo é: ${numeroArredondado}`);
} else {
  alert("Por favor, digite um número decimal válido.");
}
