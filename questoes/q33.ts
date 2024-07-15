const email = prompt("Digite seu endereço de e-mail:");

if (email) {
  const mensagem = `Obrigado por fornecer seu endereço de e-mail: ${email}.`;

  alert(mensagem);
} else {
  alert("Por favor, digite seu endereço de e-mail.");
}
