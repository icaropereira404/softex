const celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

if (!isNaN(celsius)) {
  const fahrenheit = (celsius * 9/5) + 32;

  alert(`A temperatura de ${celsius.toFixed(2)} graus Celsius equivale a ${fahrenheit.toFixed(2)} graus Fahrenheit.`);
} else {
  alert("Por favor, digite uma temperatura válida em graus Celsius.");
}
