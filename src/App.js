
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './Routes/Dashboard/AddStudent';
import AddTeacher from './Routes/Dashboard/AddTeacher';
import Dashboard from './Routes/Dashboard/Dashboard';
import Todo from './Routes/Dashboard/Todo';
import ViewStudent from './Routes/Dashboard/ViewStudent';
import ViewTeacher from './Routes/Dashboard/ViewTeacher';
import Header from './Routes/Header/Header';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<ViewStudent/>}/>
          <Route path='addStudent' element={<AddStudent/>} />
          <Route path='addTeacher' element={<AddTeacher/>}/>
          <Route path='viewTeacher' element={<ViewTeacher/>}/>
          <Route path='todo' element={<Todo/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
