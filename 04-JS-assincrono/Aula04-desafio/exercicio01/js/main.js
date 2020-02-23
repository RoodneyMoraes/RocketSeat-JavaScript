// RECUPERANDO ELEMENTOS HTML
let inputElement = document.getElementById("idade");
let buttonElement = document.getElementById("consultar");

// FAZENDO A AÇÃO DE QUANDO FOI CLICADO  PARA BUSCAR AS INFORMAÇÕES
buttonElement.onclick = function () {

    // RECUPERANDO O QUE FOI DIGITADO NO INPUT
    let idade = inputElement.value;

    // CHAMANDO A PROMISSE - TRATANDO COM THEN E CATCH
    maiorIdade(idade).then(function (response) {
        alert(response);
        inputElement.value = "";
    }).catch(function (error) {
        alert(error);
        inputElement.value = "";
    });
}

// UTILIZANDO PROMISSES
let maiorIdade = function (idade) {
    // PROMISSE
    return new Promise(function (resolve, reject) {
        // VALIDANDO SE É MAIOR DE IDADE
        if (idade >= 18) {
            setTimeout(() => {
                resolve("Maior de 18");
            }, 2000);
        } else {
            setTimeout(() => {
                reject("Menor de 18");
            }, 2000);
        }
    });
}