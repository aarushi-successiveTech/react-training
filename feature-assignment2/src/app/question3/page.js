/* Create a functional component called ToDoList.
Use the useState hook to manage a state variable named todos, initialized as an empty array.
Render a list of todos using the map function.
Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
Use the useState hook to manage the state of each todo item (completed or not). */
'use client'
const { useState } = require("react")

const ToDoList = () =>{
    let [todos , setToDos] = useState([]);
    let [newitem , setNewItem] = useState('')

    const addTodo = () =>{
        const newTodo = {
            id : Date.now() , 
            title : newitem.trim()
        }
        setToDos([...todos , newTodo])
        setNewItem(''); 

    }

    const deleteTodo = (id) =>{
        setToDos(todos.filter(todo => todo.id !== id))
    };

    return(
        <div>
            <h1>ToDo Items</h1>

            <input 
            type = 'text'
            placeholder="enter new todo"
            value = {newitem}
            onChange = {(e) => setNewItem(e.target.value)}/>

            <button onClick={addTodo}>Add Todo</button>

            <ul>
                {todos.map(todo => (
                    <li key = {todo.id}>
                        {todo.title}{''}
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}
export default ToDoList; 