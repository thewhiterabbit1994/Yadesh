import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TodaySpecialCourses from "../Components/HomePageLoggedIn/TodaySpecialCourses";
import ContinueLearning from "../Components/HomePageLoggedIn/ContinueLearning";
import MostView from "../Components/MostView";
import TodayMostViewLessons from "../Components/HomePageLoggedIn/TodayMostViewLessons";
import PersonalManagement from "../Components/HomePageLoggedIn/PersonalManagement";

const HomePageLoggedIn = () => {
  return (
    <div className="bg-[#000506]">
      <Navbar />
      <TodaySpecialCourses />
      <ContinueLearning />
      <div className=" mt-[100px] ">
        <MostView />
      </div>
      <TodayMostViewLessons />
      <PersonalManagement />
      <Footer />
    </div>
  );
};
export default HomePageLoggedIn;
