const cidadee = prompt("Digite o nome da sua cidade:");

const estado = prompt("Digite o nome do seu estado:");

if (cidadee && estado) {
  const mensagem = `Você mora em ${cidadee}, ${estado}.`;

  alert(mensagem);
} else {
  alert("Por favor, digite o nome da cidade e do estado.");
}
