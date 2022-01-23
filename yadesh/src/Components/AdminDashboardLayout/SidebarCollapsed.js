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

export default ({ showSidebarCollapsed, setshowSidebarCollapsed }) => {
  return (
    <div
      style={{
        right: showSidebarCollapsed ? "0" : "-50vh",
        transition: "0.4s",
      }}
      className="absolute top-0 bg-[#f5f5f5] w-[200px] h-screen"
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
          <div className="cursor-pointer flex mb-4">
            <AdminPanelLogo />
            <p className="text-[12px] pr-3 text-[#4a5e67]">پنل کاربری</p>
          </div>
          <div className="cursor-pointer flex my-8">
            <CoursesIcon />
            <p className="text-[12px] pr-3 text-[#4a5e67]">دوره ها</p>
          </div>
          <div className="cursor-pointer flex my-8">
            <EpisodeIcon />
            <p className="text-[12px] pr-3 text-[#4a5e67]">اپیزود ها</p>
          </div>
          <Link to="adminpanelcompany">
            <div className="cursor-pointer flex my-8">
              <UserControlIcon />
              <p className="text-[12px] pr-3 text-[#4a5e67]">شرکت ها</p>
            </div>
          </Link>
          <div className="cursor-pointer flex my-8">
            <FactorIcon />
            <p className="text-[12px] pr-3 text-[#4a5e67]">فاکتور ها</p>
          </div>
          <div className="cursor-pointer flex my-8">
            <TicketIcon />
            <p className="text-[12px] pr-3 text-[#4a5e67]">تیکت ها</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="cursor-pointer flex mb-6">
            <SiteManagmentIcon />
            <p className="text-[12px] pr-3 text-[#4a5e67]">مدیریت سایت</p>
          </div>
          <div className="cursor-pointer flex mb-6">
            <SettingIcon />
            <p className="text-[12px] pr-3 text-[#4a5e67]">تنظیمات</p>
          </div>
          <div className="cursor-pointer flex mb-6">
            <ExitIcon />
            <p className="text-[12px] pr-3 text-[#4a5e67]">خروج از پنل</p>
          </div>
        </div>
      </div>
    </div>
  );
};
