import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePageLoggedIn from "./Pages/HomePageLoggedIn";
import HomePageNotLogin from "./Pages/HomePageNotLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageNotLogin />} /> 
        <Route path="home" element={<HomePageLoggedIn />} />
      </Routes>
    </div>
  );
}

export default App;
