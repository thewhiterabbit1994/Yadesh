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
import PlayerCourse from "./Pages/PlayerCourse";
import AboutUs from "./Pages/AboutUs";
import AdminDashboardLayout from "./Pages/AdminDashboardLayout";
import ContactSupport from "./Pages/ContactSupport";
import Page404 from "./Pages/Page404";
import AdminLogin from "./Pages/AdminLogin";
import RequireAuth from "./Components/RequireAuth/index";
import ForgotPassword from "./Pages/ForgotPassword";

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
        <Route path="home/forbusiness" element={<ForBusiness />} />
        <Route path="/home/course" element={<Course />} />
        <Route path="/home/signupforbusiness" element={<SignUpForBusiness />} />
        <Route path="/home/playerepisode" element={<PlayerEpisode />} />
        <Route path="/home/playercourse" element={<PlayerCourse />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="/home/PlayerEpisode" element={<PlayerEpisode />} />
        <Route path="/home/contactsupport" element={<ContactSupport />} />
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="admindashboard" element={<AdminDashboardLayout />}></Route>
        <Route path="forgotpassword" element={<ForgotPassword />} />

        {/* <RequireAuth>
          <Route
            path="admindashboard"
            element={<AdminDashboardLayout />}
          ></Route>
        </RequireAuth> */}
      </Routes>
    </div>
  );
}

export default App;
