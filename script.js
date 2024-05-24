const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7";  //Adiciona um "X"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Marcar como feito e deletar
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){  //Se clicar no li
        e.target.classList.toggle("checked"); //O elemento sera marcado com checked
        saveData();
    }else if(e.target.tagName === "SPAN"){  //Se clicar no span (que é o "X")
        e.target.parentElement.remove(); //Apaga a task
        saveData();
    }
}, false);

// Salva no navegador
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Mostra as Tasks quando recarregarmos o navegador
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();