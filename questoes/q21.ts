const estadoCivil = prompt("Digite seu estado civil:");

if (estadoCivil) {
  const estadoCivilLowerCase = estadoCivil.toLowerCase().trim();

  switch (estadoCivilLowerCase) {
    case "casado":
      alert("Você é casado(a).");
      break;
    case "solteiro":
      alert("Você é solteiro(a).");
      break;
    case "divorciado":
      alert("Você é divorciado(a).");
      break;
    case "viúvo":
      alert("Você é viúvo(a).");
      break;
    default:
      alert("Estado civil não reconhecido. Por favor, digite um estado civil válido.");
      break;
  }
} else {
  alert("Por favor, digite seu estado civil.");
}
