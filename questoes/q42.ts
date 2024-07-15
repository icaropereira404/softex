const n1 = parseInt(prompt("Digite o primeiro número inteiro:"));

const n2 = parseInt(prompt("Digite o segundo número inteiro:"));

const n3 = parseInt(prompt("Digite o terceiro número inteiro:"));

if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
  const resultado = (n1 + n2) * n3;

  alert(`O resultado da operação (${n1} + ${n2}) * ${n3} é: ${resultado}`);
} else {
  alert("Por favor, digite valores numéricos válidos para os três números inteiros.");
}
