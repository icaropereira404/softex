const userInput = prompt("Digite um número decimal:");

if (userInput) {
  const decimalNumber = parseFloat(userInput);

  if (!isNaN(decimalNumber)) {
    const Number = decimalNumber * decimalNumber;
    alert(`O quadrado do número é: ${Number}`);
  } else {
    alert("Por favor, digite um número decimal válido.");
  }
}