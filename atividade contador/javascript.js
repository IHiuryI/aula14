function contar() {
  let inicio = Number(document.getElementById("inicio").value);
  let fim = Number(document.getElementById("fim").value);
  let passo = Number(document.getElementById("passo").value);
if (passo <= 0){
    resultado.innerHTML = "O passo não pode ser zero ou negativo"
} else {
  for (let i = inicio; i <= fim; i += passo) {
    if (i + passo <= fim) {
      resultado.innerHTML += `${i} → `;
    } else {
        resultado.innerHTML += `${i} 👌`;
    }
  }
}
}
