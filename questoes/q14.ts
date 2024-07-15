const Nome = prompt("Digite seu nome:");

const Sobrenome = prompt("Digite seu sobrenome:");

if (nome && sobrenome) {
  const nomeInvertido = `${Sobrenome}, ${Nome}`;
  
  alert(`Nome completo invertido: ${nomeInvertido}`);
} else {
  alert("Por favor, digite tanto o nome quanto o sobrenome.");
}
