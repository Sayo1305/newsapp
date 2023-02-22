import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";;
function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route element={<Signup />} path="/"></Route>
        <Route element={<MainPage />} path="/home"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<SearchPage/>} path="/Search"></Route>
      </Routes>
    </div>
  );
}

export default App;
