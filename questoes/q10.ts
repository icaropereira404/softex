const anoNascimentoInput = prompt("Digite o seu ano de nascimento:");

const anoAtual = new Date().getFullYear();

if (anoNascimentoInput) {
  const anoNascimento = parseInt(anoNascimentoInput, 10);

  if (!isNaN(anoNascimento)) {
    const idade = anoAtual - anoNascimento;
    alert(`Você tem ${idade} anos.`);
  } else {
    alert("Por favor, digite um ano de nascimento válido.");
  }
}
