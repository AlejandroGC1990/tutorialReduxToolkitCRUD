import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Task1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "Task2",
        description: "Task 2 description",
        completed: false
    }

];

//actúa parecido a useState
export const taskSlice = createSlice({
    name: 'task',
    initialState, //puede ser cualquier valor inicial
    reducers: { //funciones para alterar el estado
        addTask: (state, action) => {
            state.push(action.payload) //añade la nueva tarea
        },
        editTask: (state, action) => {
            const {id, title, description} = (action.payload);
            const foundTask = state.find(task => task.id === id)
            if(foundTask){
                foundTask.title = title
                foundTask.description = description
            }
        },
        deleteTask: (state, action) => {//elimina la tarea
            const taskFound = state.find(task => task.id === action.payload)//por cada tarea que estés comparando cuyo id sea igual que el payload.id, elimínalo.
            if(taskFound) {
                state.splice(state.indexOf(taskFound), 1)
            }
        }
    }
})

export const {addTask, deleteTask, editTask} = taskSlice.actions;
export default taskSlice.reducer;