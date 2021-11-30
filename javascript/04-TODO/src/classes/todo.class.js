export class Todo {

    static fromJson({id, tarea, completado, fechaCreado}){
        const tempTodo = new Todo(tarea);
    
        tempTodo.id=id;
        tempTodo.completado = completado;
        tempTodo.fechaCreado = fechaCreado;

        return tempTodo;
    }


    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.fechaCreado = new Date();
    }

    imprimirClase() {
        console.log(`${ this.tarea } - ${ this.id }`);
    }
}
