// REQUISIÇÃO AJAX - PROMISSES
let minhaPromisse = function () {
    // PROMISSE
    return new Promise(function (resolve, reject) {
        // INFORMANDO OS DADOS PARA A REQUISIÇÃOS
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.github.com/users/roodneymoraes");
        xhr.send(null);

        // RECUPERANDO OS VALORES DA REQUISIÇÃO
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject("Erro na requisição");
                }
            }
        }
    });
}

// CHAMANDO A PROMISSE - TRATANDO COM THEN E CATCH
minhaPromisse().then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.warn(error);
});


