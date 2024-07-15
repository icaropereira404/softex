const nomeProduto = prompt("Digite o nome do produto:");

const precoProduto = prompt("Digite o preço do produto:");

const simboloMoeda = "R$"; 

if (nomeProduto && precoProduto) {
  const mensagem = `${nomeProduto} - ${simboloMoeda} ${precoProduto}`;

  alert(mensagem);
} else {
  alert("Por favor, digite o nome e o preço do produto.");
}
