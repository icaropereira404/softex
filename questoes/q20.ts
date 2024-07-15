const nomee = prompt("Digite seu nome:");

if (nomee) {
  if (nomee.length > 5) {
    alert(`O nome "${nomee}" contém mais de 5 caracteres.`);
  } else {
    alert(`O nome "${nomee}" não contém mais de 5 caracteres.`);
  }
} else {
  alert("Por favor, digite seu nome.");
}
