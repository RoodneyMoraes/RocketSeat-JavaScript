
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

// FUNÇÃO PARA CRIAR UM LOAD NA LISTA 
function loadLi() {
    // RECUPERANDO E CRIANDO ELEMENTOS HTML
    let ulElement = document.getElementById("lista");
    let liElement = document.createElement("li");
    let textElement = document.createTextNode("Carregando...");

    // POSICIONANDO ELEMENTOS HTML
    ulElement.appendChild(liElement);
    liElement.appendChild(textElement);
}

// FUNÇÃO DE CLICK NO BOTAO
buttonElement.onclick = () => {
    
    // LIMPANDO ELEMENTO HTML
    document.getElementById("lista").innerHTML = "";

    // RECUPERANDO VALOR DIGITADO NO INPUT
    let nomeGitHub = inputElement.value;

    // LOAD DO LI
    loadLi();

    // VALIDANDO SE FOI PREENCHIDO O CAMPO
    if (nomeGitHub != "") {
        // USANDO A BIBLIOTECA AXIOS PARA RETORNAR VALORES DA API
        axios.get("https://api.github.com/users/" + nomeGitHub + "/repos")
            .then(function (response) {
                // VERIFICANDO SE FOI COM SUCESSO A REQUISIÇÃO
                if (response.status === 200) {
                
                    // LIMPANDO ELEMENTO HTML
                    document.getElementById("lista").innerHTML = "";

                    // CRIANDO UMA VARIAVEL PARA ARMAZENAR A RESPOSTA
                    let data = response.data;

                    // VALIDANDO SE EXISTE REPOSITORIO NA CONTA
                    if (response.data.length > 0) {
                        // PERCORRENDO O ARRAY
                        data.map((item) => {
                            createLi(item.name, item.html_url);
                        });
                    }else{
                        alert("Não existe repositorios com essa conta.")
                    }
                    
                    // LIMPANDO O INPUT
                    inputElement.value = "";

                }else{
                    console.warn("Status diferente de 200!");
                    alert("Status diferente de 200!");
                }

            }).catch(function (error) {
                // MOSTRANDO UMA MENSAGEM PARA O USUARIO
                alert("Erro na requisição.");
                // LIMPANDO O INPUT
                inputElement.value = "";
                // LIMPANDO ELEMENTO HTML
                document.getElementById("lista").innerHTML = "";
                console.warn(error);
            });
    } else {
        // LIMPANDO ELEMENTO HTML
        document.getElementById("lista").innerHTML = "";
        alert("Campo vazio preencha com um nome do GitHub!");
    }
}


