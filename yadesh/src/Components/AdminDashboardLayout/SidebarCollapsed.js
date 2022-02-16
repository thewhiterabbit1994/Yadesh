import YadeshLightLogo from "../../assets/svg/AdminLogin/YadeshLightLogo";
import AdminPanelLogo from "../../assets/svg/AdminLogin/AdminPanelLogo";
import YadeshLogo from "../../assets/svg/YadeshLogo";
import CoursesIcon from "../../assets/svg/AdminLogin/CoursesIcon";
import EpisodeIcon from "../../assets/svg/AdminLogin/EpisodeIcon";
import UserControlIcon from "../../assets/svg/AdminLogin/UserControlIcon";
import FactorIcon from "../../assets/svg/AdminLogin/FactorIcon";
import TicketIcon from "../../assets/svg/AdminLogin/TicketIcon";
import SiteManagmentIcon from "../../assets/svg/AdminLogin/SiteManagmentIcon";
import SettingIcon from "../../assets/svg/AdminLogin/SettingIcon";
import ExitIcon from "../../assets/svg/AdminLogin/ExitIcon";
import SidebarBtn from "../../assets/svg/AdminLogin/SidebarBtn";

import { Link } from "react-router-dom";

export default ({
  showSidebarCollapsed,
  setshowSidebarCollapsed,
  settingsModal,
  setSettingsModal,
  setlogoutModal,
}) => {
  return (
    <div
      style={{
        right: showSidebarCollapsed ? "0" : "-50vh",
        scale: showSidebarCollapsed ? "0" : "1",
        transition: "0.4s",
      }}
      className="absolute shadow-2xl top-0 bg-[#f5f5f5] w-[200px] h-screen"
    >
      <div
        onClick={() => setshowSidebarCollapsed(false)}
        className="absolute cursor-pointer top-[20px] left-[-10px] "
      >
        <SidebarBtn arrow="<" />
      </div>
      <div className="flex flex-col mr-5 items-start">
        <div className="mt-5  mr-[2.5vw] ">
          <YadeshLightLogo color2="#00FF85" color1="#a6a6a6" />
        </div>
        <div className="mt-12">
          <Link to="adminpanel">
            <div className="cursor-pointer flex mb-4">
              <AdminPanelLogo />
              <p className="text-[12px] pr-3 text-[#4a5e67]">پنل کاربری</p>
            </div>
          </Link>

          <div className="cursor-pointer flex my-8">
            <Link className="flex" to="courses">
              <CoursesIcon />
              <p className="text-[12px] pr-3 text-[#4a5e67]">دوره ها</p>
            </Link>
          </div>
          <div className="cursor-pointer flex my-8">
            <Link className="flex" to="episode">
              <EpisodeIcon />
              <p className="text-[12px] pr-3 text-[#4a5e67]">اپیزود ها</p>
            </Link>
          </div>
          <Link to="adminpanelcompany">
            <div className="cursor-pointer flex my-8">
              <Link className="flex" to="listofcompanies">
                <UserControlIcon />
                <p className="text-[12px] pr-3 text-[#4a5e67]">شرکت ها</p>
              </Link>
            </div>
          </Link>
          <div className="cursor-pointer flex my-8">
            <Link className="flex" to="factor">
              <FactorIcon />
              <p className="text-[12px] pr-3 text-[#4a5e67]">فاکتور ها</p>
            </Link>
          </div>
          <div className="cursor-pointer flex my-8">
            <Link className="flex" to="ticketscompany">
              <TicketIcon />
              <p className="text-[12px] pr-3 text-[#4a5e67]">تیکت ها</p>
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <div className="cursor-pointer flex mb-6">
            <Link className="flex" to="sitemanagment">
              <SiteManagmentIcon />
              <p className="text-[12px] pr-3 text-[#4a5e67]">مدیریت سایت</p>
            </Link>
          </div>
          <div
            onClick={() => setSettingsModal(!settingsModal)}
            className="cursor-pointer flex mb-6"
          >
            <SettingIcon />
            <p className="text-[12px] pr-3 text-[#4a5e67]">تنظیمات</p>
          </div>
          <div
            onClick={() => setlogoutModal(true)}
            className="cursor-pointer flex mb-6"
          >
            <ExitIcon />
            <p className="text-[12px] pr-3 text-[#4a5e67]">خروج از پنل</p>
          </div>
        </div>
      </div>
    </div>
  );
};
