const formularioTarefa = document.getElementById('formularioTarefa');
const inputTarefa = document.getElementById('inputTarefa');
const listaTarefas = document.getElementById('listaTarefas');

// Recupera a lista de tarefas do LocalStorage, se existir
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

// Função para adicionar uma tarefa
function adicionarTarefa(tarefa) {
    tarefas.push(tarefa);
    salvarTarefasNoLocalStorage();
    renderizarTarefas();
}
  
  // Função para salvar a lista de tarefas no LocalStorage
function salvarTarefasNoLocalStorage() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
  