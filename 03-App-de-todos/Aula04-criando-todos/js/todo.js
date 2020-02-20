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

// FUNÇOES PARA LISTAR OS ITENS
function renderTodos(todos) {
    // LIMPANDO TODO CONTEUDO DE UM ELEMENTO HTML
    listElement.innerHTML = "";
    // PERCORRENDO UM ARRAY
    for (todo of todos) {
        // CRIANDO ELEMENTOS HTML
        let todoElement = document.createElement("li");
        let todoText = document.createTextNode(todo);

        // ORDENANDO OS ELEMENTOS
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

// FUNÇÃO PARA ADICIONAR UM NOVO ITEM
function addTodo() {
    // RECUPERANDO UM ELEMENTO HTML
    let todoText = inputElement.value;
    // INSERINDO UM NOVO ITEM NO ARRAY
    todos.push(todoText);
    // LIMPANDO O INPUT
    inputElement.value = "";
    // RENDERIZANDO NOVAMENTE A LISTA
    renderTodos(todos);
}

// EVENTO ONCLICK NO BOTAO
buttonElement.onclick = () =>{
    addTodo();
}

// CHAMANDO AS FUNÇÃO
renderTodos(todos);
