import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePageLoggedIn from "./Pages/HomePageLoggedIn";
import HomePageNotLogin from "./Pages/HomePageNotLogin";
import MyProgress from "./Pages/MyProgress";
import UserProfile from "./Pages/UserProfile";
import ForBusiness from "./Pages/YadgiriDarSatheJahani";
import Login from "./Pages/Login";
import Course from "./Pages/Course";
import SignUpForBusiness from "./Pages/SignUpForBusiness";
import PlayerEpisode from "./Pages/PlayerEpisode";
import ContactSupport from "./Pages/ContactSupport";
import Page404 from "./Pages/Page404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<HomePageNotLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePageLoggedIn />} />
        <Route path="/home/myprogress" element={<MyProgress />} />
        <Route path="/home/userprofile" element={<UserProfile />} />
        <Route path="home/ForBusiness" element={<ForBusiness />} />
        <Route path="/home/course" element={<Course />} />
        <Route path="/home/signUpForBusiness" element={<SignUpForBusiness />} />
        <Route path="/home/PlayerEpisode" element={<PlayerEpisode />} />
        <Route path="/home/contactsupport" element={<ContactSupport />} />
      </Routes>
    </div>
  );
}

export default App;
