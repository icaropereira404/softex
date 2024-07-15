const base = parseFloat(prompt("Digite a base do retângulo:"));

const altura = parseFloat(prompt("Digite a altura do retângulo:"));

if (!isNaN(base) && !isNaN(altura)) {
  const perimetro = 2 * (base + altura);

  alert(`O perímetro do retângulo é: ${perimetro}`);
} else {
  alert("Por favor, digite valores numéricos válidos para a base e altura do retângulo.");
}
