import checkComplete from "./components/checkComplete.js";
import trash from "./components/trash.js";

( () => {
    const btn = document.querySelector("[data-form-btn]")

    const createTask = (evento) => {
        evento.preventDefault(); // evita que se recargue la página
        const input = document.querySelector("[data-form-input]"); 
        const value = input.value; // obtiene lo que se ha escrito en el input
        input.value = ''; // limpia el input

        const lista = document.querySelector('[data-list]'); // obtiene el data de la etiqueta <ul>

        const task = document.createElement('li');
        task.classList.add('card'); // crea la etiqueta <li> que contendra la tarea y se agrega el nombre de clase card
        
        const taskContent = document.createElement('div');
        
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);

        task.appendChild(taskContent);
        task.appendChild(trash());
        lista.appendChild(task);

    };

    // Arrow functions o funciones anónimas
    btn.addEventListener('click', createTask);

})(); // los últimos () hacen que se mande llamar la función createTask inmediatamente que se de click en agregar tarea
