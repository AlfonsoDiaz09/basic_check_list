const deleteTask = (evento) => {
    const element = evento.target;
    element.parentElement.remove(); // elimina la tiqueta padre que es li
};

const trash = () => { // botón de eliminar que remueve la tarea de la lista
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteTask);

    return i;
};

export default trash;