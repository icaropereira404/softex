const base = parseFloat(prompt("Digite a base do triângulo:"));

const altura = parseFloat(prompt("Digite a altura do triângulo:"));

if (!isNaN(base) && !isNaN(altura)) {
  const area = (base * altura) / 2;

  alert(`A área do triângulo é: ${area}`);
} else {
  alert("Por favor, digite valores numéricos válidos para base e altura do triângulo.");
}
