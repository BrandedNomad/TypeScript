import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

//interfaces define the structure and types of an object
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((response)=>{


    const todo = response.data as Todo //todo implements the interface Todo
    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed

    logTodo(id, title, finished)



}).catch(e=>console.log(e))

const logTodo = (id: number,title: string,finished: boolean) => { //variable types has to be specified
    console.log(`
    The todo with Id: ${id}
    Has a title of: ${title}
    Is it finished? ${finished}
    `)

}


