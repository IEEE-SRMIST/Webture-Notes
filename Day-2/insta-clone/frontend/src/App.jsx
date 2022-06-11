import './App.css';
import Auth from "./auth/auth"
import Main from './main/main';
import Navbar from './navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  const Home = () => {
    return (
      <>
        <Navbar />
        <Main />
      </>
    )
  }

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
