// RECUPERANDO E REFERENCIAS OS ELEMENTOS HTML
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

// CRIANDO UM ARRAY DE LIST
let todos = [
    "Fazer café",
    "Estudar JavaScript",
    "Acessar comunidade da Rockeatseat"
];

// CRIANDO FUNÇOES
function renderTodos(todos) {
    for (todo of todos) {
        // CRIANDO ELEMENTOS HTML
        let todoElement = document.createElement("li");
        let todoText = document.createTextNode(todo);

        // ORDENANDO OS ELEMENTOS
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

// CHAMANDO AS FUNÇÃO
renderTodos(todos);
