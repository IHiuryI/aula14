function gerarTabuada() {
    const numero = 
    document.getElementById('numero').value;
    const resultado = 
    document.getElementById('resultado');
   
    if (numero === '') {
        resultado.innerHTML = `Por favor, digite um número.`;
        
    }
       
    for (let i = 0; i <= 10; i++) {
        resultado.innerHTML+= `<p>${numero} x ${i} = ${numero * i} </p>`
    }
}

