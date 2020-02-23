// RECUPERANDO E REFERENCIAS OS ELEMENTOS HTML
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

// CRIANDO UM ARRAY DE LIST - COM DADOS DO LOCALSTORAGE
let todos = JSON.parse(localStorage.getItem("List_todos")) || [];

// FUNÇOES PARA LISTAR OS ITENS
function renderTodos(todos) {
    // LIMPANDO TODO CONTEUDO DE UM ELEMENTO HTML
    listElement.innerHTML = "";
    // PERCORRENDO UM ARRAY
    for (todo of todos) {
        // CRIANDO ELEMENTOS HTML
        let todoElement = document.createElement("li");
        let todoText = document.createTextNode(todo);
        let linkElement = document.createElement("a");
        let linkText = document.createTextNode(" Excluir");

        // DETERMINANDO ATRIBUTOS AOS ELEMENTOS
        linkElement.setAttribute("href", "#");

        // RECUPERANDO O INDICE QUE ESTA O TODO
        let pos = todos.indexOf(todo);

        // ATRIBUINDO UM ONCLICK
        linkElement.setAttribute("onclick", "deleteTodo("+pos+")");
        
        // ORDENANDO OS ELEMENTOS
        todoElement.appendChild(todoText);
        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement);
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
    // CHAMANDO A FUNÇÃO PARA GUARDA NO LOCALSTORAGE
    saveToStorage();
}

// EVENTO ONCLICK NO BOTAO
buttonElement.onclick = () =>{
    addTodo();
}

// APAGANDO UM ITEM DO ARRAY
function deleteTodo(pos) {
    // REMOVENDO UM ITEM DO ARRAY
    todos.splice(pos, 1);
    // CHAMANDO A FUNÇÃO PARA REENDERIZAR NOVAMENTE
    renderTodos(todos);
    // CHAMANDO A FUNÇÃO PARA GUARDA NO LOCALSTORAGE
    saveToStorage();
}

// SALVANDO NO LOCALSTORAGE
function saveToStorage() {
    localStorage.setItem("List_todos", JSON.stringify(todos));
}

// CHAMANDO AS FUNÇÃO
renderTodos(todos);
