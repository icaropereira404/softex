const idade = prompt("Digite sua idade:");

if (idade) {
  const idadeInteiro = parseInt(idade, 10);

  if (!isNaN(idadeInteiro)) {
    alert(`Sua idade é ${idadeInteiro} anos.`);
  } else {
    alert("Por favor, digite uma idade válida.");
  }
}