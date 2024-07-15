const numeroDecimal = prompt("Digite um número decimal:");

if (numeroDecimal) {
  const numeroFloat = parseFloat(numeroDecimal);

  if (!isNaN(numeroFloat)) {
    const numeroInteiro = parseInt(numeroDecimal);

    alert(`O número decimal ${numeroDecimal} convertido para inteiro é: ${numeroInteiro}`);
  } else {
    alert("Por favor, digite um número decimal válido.");
  }
} else {
  alert("Por favor, digite um número decimal.");
}
