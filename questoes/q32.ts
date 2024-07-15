const numero = parseInt(prompt("Digite um número inteiro:"));

if (!isNaN(numero)) {
  const dobro = numero * 2;

  const mensagem = `O número ${numero} tem o dobro igual a ${dobro}.`;

  alert(mensagem);
} else {
  alert("Por favor, digite um número inteiro válido.");
}
