
import './App.css';
import Login from "./login/login"
import Main from './main/main';
import Navbar from './navbar/navbar';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      {/* <Login/> */}
      <Main/>
    </div>
  );
}

export default App;
