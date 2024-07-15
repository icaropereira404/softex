const numero1 = parseFloat(prompt("Digite o primeiro número decimal:"));

const numero2 = parseFloat(prompt("Digite o segundo número decimal:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
  const inteiro1 = Math.round(numero1 * 100);
  const inteiro2 = Math.round(numero2 * 100);
  
  const resto = inteiro1 % inteiro2;

  alert(`O resto da divisão entre ${numero1} e ${numero2} é: ${resto / 100}`);
} else {
  alert("Por favor, digite números decimais válidos.");
}
