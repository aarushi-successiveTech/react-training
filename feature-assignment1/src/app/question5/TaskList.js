const TaskList = ({title, desc }) => {
    return (
        <div>
            <br/>
            <li style={{ marginBottom: "10px", listStyleType: "none" }}>
                <div><strong>{title}</strong></div>
                <div>{desc}</div>
            </li>
        </div>
    )
}
export default TaskList ; 