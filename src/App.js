import './App.css';
//import { useDispatch } from 'react-redux'; //llama a las funciones para alterar el estado
//import { useSelector } from 'react-redux'; //aclara como va a traer los datos desde el estado
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/create-task' element={<TaskForm />} />
          <Route path='/edit-task/:id' element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
