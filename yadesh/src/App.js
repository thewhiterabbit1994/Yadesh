import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
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
import AdminDashboardLayout from "./Pages/AdminDashboard/AdminDashboardLayout";
import ContactSupport from "./Pages/ContactSupport";
import Page404 from "./Pages/Page404";
import AdminLogin from "./Pages/AdminDashboard/AdminLogin";
import RequireAuth from "./Components/RequireAuth/index";
import EnterCode from "./Pages/AdminDashboard/EnterCode";
import ForgotPassword from "./Pages/AdminDashboard/ForgotPassword";
import FailureModal from "./Pages/AdminDashboard/FailureModal";
import Succses from "./Pages/AdminDashboard/SuccsessModal";
import ChangPassword from "./Pages/AdminDashboard/ChangPassword";
import AdminPanelCompany from "./Pages/AdminDashboard/AdminPanelCompany";
import AdminPanelEpisode from "./Pages/AdminDashboard/AdminPanelEpisode";
import AdminPanelCourses from "./Pages/AdminDashboard/AdminPanelCourses";
import AdminPanelFactor from "./Pages/AdminDashboard/AdminPanelFactor";
import AdminPanelSubscription from "./Pages/AdminDashboard/AdminPanelSubscription";
import AdminPanelUser from "./Pages/AdminDashboard/AdminPanelUser";
import AdminPanel from "./Pages/AdminDashboard/AdminPanel";
import TicketsCompany from "./Pages/AdminDashboard/TicketsCompany";
import SiteManagment from "./Pages/AdminDashboard/SiteManagment";
import AddCategories from "./Components/Modals/AddCategorie";
import LogOut from "./Components/Modals/LogOut";
import AddUser from "./Components/Modals/AddUser";
import AddNewUser from "./Components/Modals/AddNewUser";
import EditSubscription from "./Components/Modals/EditSubscription";
import AddCompany from "./Components/Modals/AddCompany";
import ConfirmCourse from "./Components/Modals/ConfirmCourse";
import AddCourse from "./Components/Modals/AddCourse";
import AddEpisode from "./Components/Modals/AddEpisode";
import AddNewSubscription from "./Components/Modals/AddNewSubscription";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<HomePageNotLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePageLoggedIn />} />
          <Route path="/home/myprogress" element={<MyProgress />} />
          <Route path="/home/userprofile" element={<UserProfile />} />
          <Route path="home/forbusiness" element={<ForBusiness />} />
          <Route path="/home/course" element={<Course />} />
          <Route
            path="/home/signupforbusiness"
            element={<SignUpForBusiness />}
          />
          <Route path="/home/playerepisode" element={<PlayerEpisode />} />
          <Route path="/home/playercourse" element={<PlayerCourse />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/home/PlayerEpisode" element={<PlayerEpisode />} />
          <Route path="/home/contactsupport" element={<ContactSupport />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route
            path="/adminlogin/forgotpassword"
            element={<ForgotPassword />}
          />
          <Route path="/adminlogin/entercode" element={<EnterCode />} />
          <Route path="/adminlogin/failuremodal" element={<FailureModal />} />
          <Route path="/adminlogin/succsess" element={<Succses />} />
          <Route path="/adminlogin/changpassword" element={<ChangPassword />} />
          <Route path="/AddCourse" element={<AddCourse />} />

          <Route path="admindashboard" element={<AdminDashboardLayout />}>
            <Route path="adminpanel" element={<AdminPanel />} />
            <Route path="company" element={<AdminPanelCompany />} />
            <Route path="adminpaneluser" element={<AdminPanelUser />} />
            <Route path="elepisode" element={<AdminPanelEpisode />} />
            <Route path="courses" element={<AdminPanelCourses />} />
            <Route path="factor" element={<AdminPanelFactor />} />
            <Route
              path="adminPanelsubscription"
              element={<AdminPanelSubscription />}
            />
            <Route path="ticketscompany" element={<TicketsCompany />} />
            <Route path="sitemanagment" element={<SiteManagment />} />
          </Route>

          {/* <RequireAuth>
          <Route
            path="admindashboard"
            element={<AdminDashboardLayout />}
          ></Route>
        </RequireAuth> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
