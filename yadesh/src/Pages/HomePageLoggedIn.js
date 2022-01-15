import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TodaySpecialCourses from "../Components/TodaySpecialCourses";
import ContinueLearning from "../Components/ContinueLearning";
import MostView from "../Components/MostView";
import TodayMostViewLessons from "../Components/TodayMostViewLessons";
import PersonalManagement from "../Components/PersonalManagement";

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
