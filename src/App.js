import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";;
function App() {
  return (
    <div className="w-full h-auto bg-slate-100">
      <Routes>
        <Route element={<MainPage />} path="/"></Route>
        <Route element={<SearchPage/>} path="/Search"></Route>
      </Routes>
    </div>
  );
}

export default App;
