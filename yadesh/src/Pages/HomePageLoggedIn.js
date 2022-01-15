import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TodaySpecialCourses from "../Components/TodaySpecialCourses";
const HomePageLoggedIn = () => {
  return (
    <div>
      <Navbar />
      <TodaySpecialCourses />
      <Footer />
    </div>
  );
};
export default HomePageLoggedIn;
