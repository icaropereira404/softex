const cidade = prompt("Digite o nome da sua cidade:");

if (cidade) {
  const primeiraLetra = cidade.charAt(0).toLowerCase();

  if (primeiraLetra === 's') {
    alert(`O nome da sua cidade, ${cidade}, começa com a letra "S".`);
  } else {
    alert(`O nome da sua cidade, ${cidade}, não começa com a letra "S".`);
  }
} else {
  alert("Por favor, digite o nome da sua cidade.");
}
