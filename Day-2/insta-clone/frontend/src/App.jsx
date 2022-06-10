import './App.css';
import Login from "./login/login"
import Main from './main/main';
import Navbar from './navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<><Navbar /><Main /></>} />
          <Route path='/auth' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
