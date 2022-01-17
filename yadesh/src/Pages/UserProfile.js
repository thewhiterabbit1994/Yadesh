import Navbar from "../Components/Navbar";
import UserInfo from "../Components/UserProfile/UserInfo";
import FavoriteEpisodes from "../Components/UserProfile/FavoriteEpisodes";
import UserCourses from "../Components/UserProfile/UserCourses";
import Footer from "../Components/Footer";

const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <UserInfo />
      <FavoriteEpisodes />
      <UserCourses />
      <Footer />
    </div>
  );
};
export default UserProfile;
