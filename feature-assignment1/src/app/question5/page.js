/*Create a functional component named TaskList that accepts an array of task names as a prop.
Use the map function to render each task name as a list item.
Import and render the TaskList component in the App component with an array of tasks.*/
import TaskList from "./TaskList";
const tasks = [
    {
        title : 'Task1',
        desc : 'Groceries' 
    },
    {
        title : 'Task2',
        desc : 'assignment completion'
    },
    {
        title : 'Task3',
        desc : 'presentation'
    },
];


const Taskfunction = () =>{
    return(
        <div>
            <h2>To Do List</h2>
            {tasks.map((tasks , index) => (
                <TaskList key = {index} title = {tasks.title} desc = {tasks.desc}></TaskList>
            ))}
        </div>
    )
}
export default Taskfunction; 