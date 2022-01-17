import PopularCourses from "../Components/HomePageNotLogin/PopularCourses";
import Navbar from "../Components/Navbar";
import AboutYadesh from "../Components/HomePageNotLogin/AboutYadesh";
import MostView from "../Components/MostView";
import CustomerYadesh from "../Components/HomePageNotLogin/CustomerYadesh";
import PelaneSazmani from "../Components/HomePageNotLogin/PelaneSazmani";
import Footer from "../Components/Footer";
import HeaderHomePageNotLogin from "../Components/HomePageNotLogin/HeaderHomeNotLogin";
import YadgiriDarSatheJahani from "../Pages/YadgiriDarSatheJahani";

const HomePageNotLogin = () => {
  return (
    <div>
      <Navbar />ّ
      <HeaderHomePageNotLogin />
      <PopularCourses />
      <AboutYadesh />
      <MostView />
      <CustomerYadesh />
      <PelaneSazmani />
      <Footer />
      
    </div>
  );
};
export default HomePageNotLogin;
