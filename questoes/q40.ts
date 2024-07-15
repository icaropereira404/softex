const valorReais = parseFloat(prompt("Digite o valor em reais:"));

const cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar:"));

if (!isNaN(valorReais) && !isNaN(cotacaoDolar)) {
  const valorDolares = valorReais / cotacaoDolar;

  alert(`O valor de R$ ${valorReais.toFixed(2)} é equivalente a $ ${valorDolares.toFixed(2)} dólares.`);
} else {
  alert("Por favor, digite valores numéricos válidos para o valor em reais e a cotação do dólar.");
}
