import { Todo } from "../classes";
import { todoList } from '../index';

//Referencias en HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li> `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    //Inserta el primer hijo
    divTodoList.append(div.firstElementChild);
    
    return div.firstElementChild;

}

///Eventos 
txtInput.addEventListener('keyup', (event) => {

    if(event.keyCode === 13 && txtInput.value.length > 0){
        const nuevoTodo = new Todo(txtInput.value);
       
        todoList.nuevoTodo(nuevoTodo);
        
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
    
});

divTodoList.addEventListener('click', (event)=>{
    const nombreElemento = event.target.localName; // input, button, label
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    
    if(nombreElemento.includes('input')){ //click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }else if(nombreElemento.includes){
        todoList.eliminarTodo();
        divTodoList.removeChild(todoElemento);
    }

});

btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length-1; i>=0; i--){
        const elemento = divTodoList.children[i];
        console.log(elemento);
        if(elemento.classList.contains('completed')){
           divTodoList.removeChild(elemento) ;
        }
    }

    
});

ulFiltros.addEventListener('click', (event)=>{
    const filtro = event.target.text;
    if(!filtro){return ; }

    anchorFiltros.forEach(element => {
        element.classList.remove('selected');
    });
    event.target.classList.add('selected');

    for(const element of divTodoList.children){
        element.classList.remove('hidden');
        const completado = element.classList.contains('completed');

        switch(filtro){
            case 'Pendientes':
                if(completado)    {
                    element.classList.add('hidden');
                }
            break;

            case 'Completados':
                if(!completado)    {
                    element.classList.add('hidden');
                }
            break;
            
        }
    }
});