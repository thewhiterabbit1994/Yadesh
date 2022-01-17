import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePageLoggedIn from "./Pages/HomePageLoggedIn";
import HomePageNotLogin from "./Pages/HomePageNotLogin";
import MyProgress from "./Pages/MyProgress";
import UserProfile from "./Pages/UserProfile";
import YadgiriDarSatheJahani from "./Pages/YadgiriDarSatheJahani";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageNotLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePageLoggedIn />} />
        <Route path="/home/myprogress" element={<MyProgress />} />
        <Route path="/home/userprofile" element={<UserProfile />} />
        <Route path="yadgiridarsathejahani" element={<YadgiriDarSatheJahani/>}/>
      </Routes>
    </div>
  );
}

export default App;
