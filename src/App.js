import { Routes,Route } from 'react-router-dom';
import './App.css';
import HeroPage from './components/HeroPage';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import TrendingPage from './components/TrendingPage';
import MainPage from './MainPage';
import Login from './components/Login'
function App() {
  return (
    <div className="w-full h-screen">
     
      <Routes >
        <Route element ={<Signup/>} path="/">

        </Route>
        <Route element={<MainPage/>} path="/home">

        </Route>
        <Route element={<Login/>} path="/login">
          </Route>
      </Routes>

  
    </div>
  );
}

export default App;
