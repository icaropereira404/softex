const data = prompt("Digite uma data no formato dd/mm/aaaa:");

if (data) {
  const partes = data.split('/');

  if (partes.length === 3) {
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const ano = parseInt(partes[2], 10);

    if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
      alert(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`);
    } else {
      alert("Por favor, digite uma data válida no formato dd/mm/aaaa.");
    }
  } else {
    alert("Por favor, digite a data no formato correto dd/mm/aaaa.");
  }
} else {
  alert("Por favor, digite uma data no formato dd/mm/aaaa.");
}
