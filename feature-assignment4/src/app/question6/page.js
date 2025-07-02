'use client'

import { useState } from "react"

const ToDo = () => {
    const [newTodo, setNewToDo] = useState('');
    const [task , setTask] = useState([]);

    const handleNewtodo = (e) =>{
        setNewToDo(e.target.value);
    }

    const formSubmit =(e) =>{
        e.preventDefault();
        setTask([...task, newTodo]);
        setNewToDo('')
    };


    return (
        <div>
            <h2>ToDo List</h2>
            <form onSubmit={formSubmit}>
                <input 
                type="text"
                value={newTodo || ''}
                onChange={handleNewtodo}
                placeholder="enter new task"
                />
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {task.map((value,index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>

        </div>
    );
}

export default ToDo; 