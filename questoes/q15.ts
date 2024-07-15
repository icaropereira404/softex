const inputString = prompt("Digite uma string:");

if (inputString) {
  const tamanhoString = inputString.length;
  
  alert(`A string digitada tem ${tamanhoString} caracteres.`);
} else {
  alert("Por favor, digite uma string válida.");
}
