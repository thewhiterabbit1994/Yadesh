import Exele from "../../assets/svg/AdminPanelCourses/Exele";
import Create from "../../assets/svg/AdminPanelCourses/Create";
import Player from "../../assets/svg/adminPanelEpisode/Player";
import Statistics from "../../assets/svg/AdminPanelCourses/statistics";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddCourseForEpisodeComponent from "../../Components/Modals/AddCourseForEpisodeComponent";

const MiddleSection = () => {
  const [ModalEpisode, setModalEpisode] = useState(false);

  return (
    <section className="w-[97vw] h-[200px] relative top-[100px] ">
      <AddCourseForEpisodeComponent
        ModalEpisode={ModalEpisode}
        setModalEpisode={setModalEpisode}
      />
      <section className=" w-[90%] mr-[130px] flex text-[12px] m-auto justify-between font-semibold items-center">
        <section className="flex w-[50%]">
          <div className=" ml-[10px]">
            <Player />
          </div>
          <p>اپیزود ها</p>
        </section>
        <section className="w-[430px] justify-between flex text-[10px] text-[#001D29]">
          <section className="w-[270px] rounded h-[50px] bg-[#008043] flex justify-around items-center">
            <section className="flex">
              <Create />
              <p className="text-[10px] mr-[10px] text-[#fff]">
                آپلود اپیزود جدید
              </p>
            </section>
            <div
              onClick={() => setModalEpisode(!ModalEpisode)}
              className="tetx-[#001D29] cursor-pointer text-[10px] font-semibold bg-[#fff] w-[110px] h-[35px] rounded flex justify-center items-center"
            >
              {" "}
              آپلود کنید
            </div>
          </section>
          <section className="flex items-center w-[140px]">
            <div className="mx-[10px]">
              <Statistics />
            </div>
            <Link className="flex" to="/admindashboard/adminpanel">
              <p>آمار بازدید اپیزودها</p>
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
};
export default MiddleSection;
