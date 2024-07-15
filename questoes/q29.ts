const anoNascimento = prompt("Digite seu ano de nascimento:");

if (anoNascimento) {
  const mensagem = `Bem-vindo ao nosso programa, nascido em ${anoNascimento}!`;

  alert(mensagem);
} else {
  alert("Por favor, digite seu ano de nascimento.");
}
