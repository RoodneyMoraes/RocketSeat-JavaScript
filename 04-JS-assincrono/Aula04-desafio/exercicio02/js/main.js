
// RECUPERANDO ELEMENTOS HTML
let inputElement = document.getElementById("nome")
let buttonElement = document.getElementById("buscar");

// FUNÇÃO PARA CRIAR UMA LISTA DE LI
function createLi(name, url) {
    // RECUPERANDO E CRIANDO ELEMENTOS HTML
    let ulElement = document.getElementById("lista");
    let liElement = document.createElement("li");
    let linkElement = document.createElement("a");
    let textElement = document.createTextNode(name);

    // ATRIBUINDO INFORMAÇÕES A MAIS NAS TAGS HTML
    linkElement.setAttribute("href", url)
    linkElement.setAttribute("target", "_blank")

    // POSICIONANDO ELEMENTOS HTML
    ulElement.appendChild(liElement);
    liElement.appendChild(linkElement);
    linkElement.appendChild(textElement);
}

// FUNÇÃO DE CLICK NO BOTAO
buttonElement.onclick = () => {

    // LIMPANDO ELEMENTO HTML
    document.getElementById("lista").innerHTML = "";

    // RECUPERANDO VALOR DIGITADO NO INPUT
    let nomeGitHub = inputElement.value;

    // VALIDANDO SE FOI PREENCHIDO O CAMPO
    if (nomeGitHub != "") {
        // USANDO A BIBLIOTECA AXIOS PARA RETORNAR VALORES DA API
        axios.get("https://api.github.com/users/" + nomeGitHub + "/repos")
            .then(function (response) {
                // CRIANDO UMA VARIAVEL PARA ARMAZENAR A RESPOSTA
                let data = response.data;

                // PERCORRENDO O ARRAY
                data.map((item) => {
                    createLi(item.name, item.html_url);
                });

                // LIMPANDO O INPUT
                inputElement.value = "";

            }).catch(function (error) {
                // MOSTRANDO UMA MENSAGEM PARA O USUARIO
                alert("Erro na requisição.");
                // LIMPANDO O INPUT
                inputElement.value = "";
                console.warn(error);
            });
    } else {
        alert("Campo vazio preencha com um nome do GitHub!");
    }
}


