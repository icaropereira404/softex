const idadeAnos = parseInt(prompt("Digite sua idade em anos:"));

if (!isNaN(idadeAnos)) {
  const meses = idadeAnos * 12;
  const dias = idadeAnos * 365;

  alert(`Você já viveu aproximadamente ${meses} meses e ${dias} dias.`);
} else {
  alert("Por favor, digite uma idade válida em anos.");
}
