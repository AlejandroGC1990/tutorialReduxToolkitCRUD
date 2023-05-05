import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/task/taskSlice';

export const store = configureStore({
    //agrupa todos los datos en uno
    reducer: {
        task: taskReducer //taskReducer es un objeto creado por lña función createSlice con propiedades a exportar
    }
})
