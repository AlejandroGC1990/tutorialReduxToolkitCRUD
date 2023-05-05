import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from '../features/task/taskSlice';
import { Link } from "react-router-dom";

function TaskList() {
    const tasks = useSelector(state => state.task); //traigo el estado de las tareas. //Esta linea junto con el console.log actúan parecido 
    console.log(tasks);                              //a un useState, pero a diferencia de que si creo otro componente, voy a poder controlarlo.

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div>
            <header>
                <h1>Task {tasks.length}</h1>
                <Link to='/create-task'>
                    Create Task
                </Link>
            </header>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                    <Link to={`/edit-task/${task.id}`}>Edit</Link>
                </div>
            ))}
        </div>
    )
}

export default TaskList;
