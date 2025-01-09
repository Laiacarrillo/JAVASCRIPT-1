function crearTarea() {

    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;


    if (nuevaTareaTexto === "") {
        alert("Por favor, Ingrese una tarea");
        return;
    }

    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    let botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "&#x1F5D1;";
    botonEliminar.onclick = function() { nuevaTarea.remove();}
    nuevaTarea.appendChild(botonEliminar);
 
    let botonChulo = document.createElement("button");
    botonChulo.innerHTML = "&#x2714;"; 
    botonChulo.onclick = function() {
        nuevaTarea.style.textDecoration = "line-through";
    }
    nuevaTarea.appendChild(botonChulo);
    document.getElementById("listaTareas").appendChild(nuevaTarea);
    document.getElementById("nuevaTarea").value = "";
}

