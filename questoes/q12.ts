const sequenciaNumeros = prompt("Digite uma sequência de números separados por espaço:");

if (sequenciaNumeros) {
  const numerosArray = sequenciaNumeros.split(" ");

  const numerosFiltrados = numerosArray.filter(num => num.trim() !== "");

  const quantidadeNumeros = numerosFiltrados.length;

  alert(`Foram digitados ${quantidadeNumeros} números.`);
} else {
  alert("Por favor, digite uma sequência de números válida.");
}
