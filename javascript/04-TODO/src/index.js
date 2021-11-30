// import { TodoList } from './classes/todo-list.class.js';
// import { Todo } from './classes/todo.class.js';
import './styles.css';
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// console.log(todoList.todos);

// todoList.todos.forEach(todo => {
//     crearTodoHtml(todo);
// });

todoList.todos.forEach(crearTodoHtml);

// const tarea = new Todo("Aprender JS");

// todoList.nuevoTodo(tarea);
// tarea.completado = true;


// console.log(todoList);

//crearTodoHtml(tarea);

// localStorage.setItem('myKey', "1035BC");
// sessionStorage.setItem('myKey', "1035BC");


//Eliminar valor
// setTimeout( () => {
//     localStorage.removeItem("myKey");
// },1500);

