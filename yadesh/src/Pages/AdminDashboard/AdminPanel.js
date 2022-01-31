import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import AdminPanelLogo from "../../assets/svg/AdminLogin/AdminPanelLogo";
import ExportCharts from "../../assets/svg/AdminLogin/ExportCharts";
import Sort1 from "../../assets/svg/AdminLogin/Sort1";
import ExportChartModal from "../../Components/AdminPanel/ExportChartModal";
import ShowAdminComponentModal from "../../Components/AdminPanel/ShowAdminComponentModal";
import YourUsers from "../../Components/AdminPanel/YourUsers";
import YourCoursesSeen from "../../Components/AdminPanel/YourCoursesSeen";
import YourEpisodesSeen from "../../Components/AdminPanel/YourEpisodesSeen";
import NewTickets from "../../Components/AdminPanel/NewTickets";

const AdminPanel = () => {
  const [exportChartModal, setexportChartModal] = useState(false);
  const [showAdminComponentModal, setshowAdminComponentModal] = useState(false);
  const [showYourUsers, setshowYourUsers] = useState(true);
  const [showYourCoursesSeen, setshowYourCoursesSeen] = useState(true);
  const [showYourEpisodesSeen, setshowYourEpisodesSeen] = useState(true);
  const [showNewTickets, setshowNewTickets] = useState(true);

  return (
    <div className="relative top-[80px] right-[110px] w-[1130px] h-fit">
      <div className="flex justify-between">
        <div className=" flex mt-2">
          <AdminPanelLogo />
          <p className="text-[12px] font-bold pr-3 text-[#000]">پنل کاربری</p>
        </div>
        <div className="flex ">
          <div
            onClick={() => setexportChartModal(!exportChartModal)}
            className="cursor-pointer"
          >
            <ExportCharts />
          </div>
          <ExportChartModal
            exportChartModal={exportChartModal}
            setexportChartModal={setexportChartModal}
          />

          <div
            onClick={() => setshowAdminComponentModal(!showAdminComponentModal)}
            className="cursor-pointer mt-2 mr-5"
          >
            <Sort1 />
          </div>
          <ShowAdminComponentModal
            showYourUsers={showYourUsers}
            showYourCoursesSeen={showYourCoursesSeen}
            showYourEpisodesSeen={showYourEpisodesSeen}
            showNewTickets={showNewTickets}
            setshowYourUsers={setshowYourUsers}
            setshowYourCoursesSeen={setshowYourCoursesSeen}
            setshowYourEpisodesSeen={setshowYourEpisodesSeen}
            setshowNewTickets={setshowNewTickets}
            showAdminComponentModal={showAdminComponentModal}
            setshowAdminComponentModal={setshowAdminComponentModal}
          />
        </div>
      </div>
      <YourUsers
        showYourUsers={showYourUsers}
        setshowYourUsers={setshowYourUsers}
      />
      <YourCoursesSeen
        showYourUsers={showYourUsers}
        showYourCoursesSeen={showYourCoursesSeen}
        setshowYourCoursesSeen={setshowYourCoursesSeen}
      />
      <YourEpisodesSeen
        showYourEpisodesSeen={showYourEpisodesSeen}
        setshowYourEpisodesSeen={setshowYourEpisodesSeen}
      />
      <NewTickets
        showNewTickets={showNewTickets}
        showYourEpisodesSeen={showYourEpisodesSeen}
        setshowNewTickets={setshowNewTickets}
      />
    </div>
  );
};
export default AdminPanel;
