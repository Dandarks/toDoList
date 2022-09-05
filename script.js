var tarefas = [];
var text = document.getElementById("toDo");
var lista = document.getElementById("list");

onload = () => {
    let newStorage = localStorage.getItem("task");
    if (newStorage){
        tarefas = JSON.parse(newStorage);

        tarefas.forEach((tarefa) => {
            lista.innerHTML += `<li>${tarefa.conteudo}<span onclick=apagar(${tarefa.id})><i class="fa-solid fa-trash"></i></span></li>`
            document.getElementById("delet").style.display = "block";
        });
    }
}

document.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        const btn = document.querySelector("#add");
        btn.click();
    }
})

function add () {
    if (text.value == ""){
        alert("Digite uma tarefa")
    } else {
        let task = {id: Math.random(), conteudo: text.value};
        tarefas.push(task);
        let li = `<li>${task.conteudo}<span onclick=apagar(${task.id})><i class="fa-solid fa-trash"></i></span></li>`;
        lista.innerHTML += li;
        text.value = "";
        document.getElementById("delet").style.display = "block";

        localStorage.setItem("task", JSON.stringify(tarefas));
    }
}

function apagar (id) {
    var newTask = [];
    for (let i = 0; i < tarefas.length; i++){
        if (tarefas[i].id != id){
            newTask.push(tarefas[i]);
        }
        localStorage.setItem("task", JSON.stringify(newTask));
        location.reload();
    }
}

function deletar () {
    localStorage.clear();
    location.reload();
}
