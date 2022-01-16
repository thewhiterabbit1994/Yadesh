import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TodaySpecialCourses from "../Components/HomePageLoggedIn/TodaySpecialCourses";
import ContinueLearning from "../Components/HomePageLoggedIn/ContinueLearning";
import MostView from "../Components/MostView";
import TodayMostViewLessons from "../Components/HomePageLoggedIn/TodayMostViewLessons";
import PersonalManagement from "../Components/HomePageLoggedIn/PersonalManagement";

const HomePageLoggedIn = () => {
  return (
    <div>
      <Navbar />
      <TodaySpecialCourses />
      <ContinueLearning />
      <MostView />
      <TodayMostViewLessons />
      <PersonalManagement />
      <Footer />
    </div>
  );
};
export default HomePageLoggedIn;
