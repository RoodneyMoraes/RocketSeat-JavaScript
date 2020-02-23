// REQUISIÇÃO AJAX
let xhr = new XMLHttpRequest();

// INFORMANDO OS DADOS PARA A REQUISIÇÃOS
xhr.open("GET", "https://api.github.com/users/roodneymoraes");
xhr.send(null);

// RECUPERANDO OS VALORES DA REQUISIÇÃO
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
} 

