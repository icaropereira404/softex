const alturaInput = prompt("Digite sua altura em metros (ex: 1.75):");

const pesoInput = prompt("Digite seu peso em quilogramas:");

if (alturaInput && pesoInput) {
  const altura = parseFloat(alturaInput);
  const peso = parseFloat(pesoInput);

  if (!isNaN(altura) && !isNaN(peso)) {
    const imc = peso / (altura * altura);

    alert(`Seu Índice de Massa Corporal (IMC) é: ${imc.toFixed(2)}`);
  } else {
    alert("Por favor, digite valores numéricos válidos para altura e peso.");
  }
} else {
  alert("Por favor, digite tanto a altura quanto o peso.");
}
