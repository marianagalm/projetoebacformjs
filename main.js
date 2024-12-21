const form = document.getElementById('form-desposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function (e) {
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficario = document.getElementById("nome-beneficario");
    const numeroContaBeneficario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficario.value} - conta: ${numeroContaBeneficiario.value}`;
    
    formEValido = validaNome(nomeBeneficario.value)
    if (formEValido) {
        alert("Tudo certo");
    } else {
        alert("O nome não está completo");
    }
})

console.log(form);