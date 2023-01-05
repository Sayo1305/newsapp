import './App.css';
import HeroPage from './components/HeroPage';
import Navbar from './components/Navbar';
import TrendingPage from './components/TrendingPage';

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar/>
      <HeroPage/>
      <TrendingPage/>
    </div>
  );
}

export default App;
