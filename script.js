var a = [];
var text = document.getElementById("toDo"); var lista = document.getElementById("list"); 

onload = () => {
    let storage = localStorage.getItem("tasks");
    if (storage){
        a = JSON.parse(storage);
    }
    a.forEach ((task) => {
        lista.innerHTML += `<li>${task.conteudo}<span onclick="apagar(${task.id})"><i class="fa-solid fa-trash"></i></span></li>`;    
        document.getElementById("delet").style.display = "block";
    });
}

function add () {
    if (text.value == ""){
        alert("Insira algum texto no campo!")
    } else {
        let task = {id: Math.random(), conteudo: text.value};
        a.push(task);
        let li = `<li>${task.conteudo}<span onclick="apagar(${task.id})"><i class="fa-solid fa-trash"></i></span></li>`;
        lista.innerHTML += li;
        text.value = "";
        localStorage.setItem("tasks", JSON.stringify(a));
        document.getElementById("delet").style.display = "block";
    };
 
}

function apagar (id) {
    let no_delet = [];
    for (let i = 0; i < a.length; i++){
        if (a[i].id != id){
            no_delet.push(a[i]);
        };
        
        localStorage.setItem("tasks", JSON.stringify(no_delet));
        location.reload();
    }
}

function deletar () {
    localStorage.clear();
    location.reload();
}
