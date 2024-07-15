const baseInput = prompt("Digite a base do retângulo:");

const alturaInputt = prompt("Digite a altura do retângulo:");

if (baseInput && alturaInputt) {
  const base = parseFloat(baseInput);
  const altura = parseFloat(alturaInputt);

  if (!isNaN(base) && !isNaN(altura)) {
    const area = base * altura;

    alert(`A área do retângulo é: ${area}`);
  } else {
    alert("Por favor, digite valores numéricos válidos para a base e a altura.");
  }
} else {
  alert("Por favor, digite tanto a base quanto a altura do retângulo.");
}
