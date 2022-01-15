import PopularCourses from "../Components/PopularCourses";
import Navbar from "../Components/Navbar";
import AboutYadesh from "../Components/AboutYadesh";
import MostView from "../Components/MostView";
import CustomerYadesh from "../Components/CustomerYadesh";
import PelaneSazmani from "../Components/PelaneSazmani";
import Footer from "../Components/Footer";
import HeaderHomePageNotLogin from "../Components/HeaderHomeNotLogin";

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
