// Inmediately invoked function expression IIFE
const completeTask = (event) => {
    const element = event.target; // target es el que indica que elemento esta dando click como un indice
    element.classList.toggle('fas'); // toggle valida si ya existe la clase la remueve si no la agrega cada vez que se haga click
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};

const checkComplete = () => { // botón de check para marcar la tarea completada
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);

    return i;
};

export default checkComplete;