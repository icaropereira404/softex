const raio = parseFloat(prompt("Digite o raio da circunferência:"));

const pi = Math.PI;

if (!isNaN(raio)) {
  const perimetro = 2 * pi * raio;

  alert(`O perímetro da circunferência é: ${perimetro.toFixed(2)}`);
} else {
  alert("Por favor, digite um valor numérico válido para o raio da circunferência.");
}
