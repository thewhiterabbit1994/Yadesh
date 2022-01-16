import Navbar from "../Components/Navbar";
import YourProgressInYadesh from "../Components/MyProgress/YourProgressInYadesh";
import KeepLearning from "../Components/MyProgress/KeepLearning";
import MyNotes from "../Components/MyProgress/MyNotes";
import MyList from "../Components/MyProgress/MyList";
import SeenBefore from "../Components/MyProgress/SeenBefore";
import DoneCourses from "../Components/MyProgress/DoneCourses";
import Footer from "../Components/Footer";

const MyProgress = () => {
  return (
    <div>
      <Navbar />
      <YourProgressInYadesh />
      <KeepLearning />
      <MyNotes />
      <MyList />
      <SeenBefore />
      <DoneCourses />
      <Footer />
    </div>
  );
};
export default MyProgress;
