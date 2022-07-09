
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Routes/Dashboard/Dashboard';


function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
