const primeiroNome = prompt("Digite o seu primeiro nome:");

const sobrenome = prompt("Digite o seu sobrenome:");

if (primeiroNome && sobrenome) {
  const nomeCompleto = `${primeiroNome} ${sobrenome}`;
  
  alert(`Seu nome completo é: ${nomeCompleto}`);
} else {
  alert("Por favor, digite tanto o primeiro nome quanto o sobrenome.");
}
