import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/task/taskSlice';
import { v4 as uuid } from 'uuid'; //para darle un id aleatorio a cada tarea
import { useNavigate, useParams } from 'react-router-dom';

function TaskForm() {
    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const tasks = useSelector((state) => state.tasks);

    const handleChange = (e) => {
        setTask({
            ...task, //va a coger todos los datos anteriores que había
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //para evitar que se refresque la pagina al dar al botón 'save'

        if (params.id) {
            dispatch(editTask({ ...task, id: params.id }));
        } else {
            dispatch(addTask({
                ...task,
                id: uuid(),
            }));
        }
        navigate('/'); //una vez de al boton save, te reenvia a esta pagina
    }

    useEffect(() => {
        if (params.id && tasks) {
            setTask(tasks.find((task) => task.id === params.id))
        }

    }, [params, tasks]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='title'
                type='text'
                placeholder='Write a title'
                onChange={handleChange}
                value={task.title}
                autoFocus />
            <textarea
                name='description'
                type='text'
                placeholder="Write adescription"
                onChange={handleChange}
                value={task.description} />
            <button type='submit'>Save</button>
        </form>
    )
}

export default TaskForm;