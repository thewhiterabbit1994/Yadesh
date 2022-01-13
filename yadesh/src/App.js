import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePageLoggedIn from "./Pages/HomePageLoggedIn";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<HomePageNotLoggedIn />} /> */}
        <Route path="home" element={<HomePageLoggedIn />} />
      </Routes>
    </div>
  );
}

export default App;
