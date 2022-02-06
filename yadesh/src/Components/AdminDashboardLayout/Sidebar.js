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
import Tooltip from "../../assets/svg/AdminLogin/Tooltip";
import { useState } from "react";
import { Link } from "react-router-dom";
import SidebarCollapsed from "../../Components/AdminDashboardLayout/SidebarCollapsed";
import SidebarBtn from "../../assets/svg/AdminLogin/SidebarBtn";
import Settings from "../../Components/SettingsModal/Settings";

export default () => {
  const [showTooltip1, setshowTooltip1] = useState(false);
  const [showTooltip2, setshowTooltip2] = useState(false);
  const [showTooltip3, setshowTooltip3] = useState(false);
  const [showTooltip4, setshowTooltip4] = useState(false);
  const [showTooltip5, setshowTooltip5] = useState(false);
  const [showTooltip6, setshowTooltip6] = useState(false);
  const [showTooltip7, setshowTooltip7] = useState(false);
  const [showTooltip8, setshowTooltip8] = useState(false);
  const [showTooltip9, setshowTooltip9] = useState(false);
  const [showSidebarCollapsed, setshowSidebarCollapsed] = useState(false);
  const [settingsModal, setSettingsModal] = useState(false)

  return (
    <div className=" fixed right-0 w-[70px] z-40 h-screen bg-[#f5f5f5]">
      <div
        onClick={() => setshowSidebarCollapsed(true)}
        className="absolute cursor-pointer top-[20px] left-[-10px] "
      >
        <SidebarBtn arrow=">" />
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-5">
          <YadeshLogo color="#a5a4a4" />
        </div>
        <div className="mt-12">
          <div
            onMouseEnter={() => setshowTooltip1(true)}
            onMouseLeave={() => setshowTooltip1(false)}
            className="cursor-pointer mb-4"
          >
            <Link to="adminpanel">
              <AdminPanelLogo />
            </Link>
            <div
              className={`absolute right-16 top-[84px] transform transition-opacity duration-300 scale-0 ${showTooltip1 ? "scale-100 opacity-100" : "opacity-0 "
                }`}
            >
              <Tooltip x={"80px"} text={"پنل کاربری"} />
            </div>
          </div>
          <div
            onMouseEnter={() => setshowTooltip2(true)}
            onMouseLeave={() => setshowTooltip2(false)}
            className="cursor-pointer my-8"
          >
            <Link to="courses">
              <CoursesIcon />
            </Link>
            <div
              className={`absolute right-16 top-[132px] transform transition-opacity duration-300 scale-0 ${showTooltip2 ? "scale-100 opacity-100" : "opacity-0 "
                }`}
            >
              <Tooltip x={"70px"} text={"دوره ها"} />
            </div>
          </div>
          <div
            onMouseEnter={() => setshowTooltip3(true)}
            onMouseLeave={() => setshowTooltip3(false)}
            className="cursor-pointer my-8"
          >
            <Link to="elepisode">
              <EpisodeIcon />
            </Link>
            <div
              className={`absolute right-16 top-[182px] transform transition-opacity duration-300 scale-0 ${showTooltip3 ? "scale-100 opacity-100" : "opacity-0 "
                }`}
            >
              <Tooltip x={"75px"} text={"اپیزود ها"} />
            </div>
          </div>
          <div
            onMouseEnter={() => setshowTooltip4(true)}
            onMouseLeave={() => setshowTooltip4(false)}
            className="cursor-pointer my-8"
          >
            <Link to="company">
              <UserControlIcon />
            </Link>
            <div
              className={`absolute right-16 top-[234px] transform transition-opacity duration-300 scale-0 ${showTooltip4 ? "scale-100 opacity-100" : "opacity-0 "
                }`}
            >
              <Tooltip x={"75px"} text={"شرکت ها"} />
            </div>
          </div>
          <div
            onMouseEnter={() => setshowTooltip5(true)}
            onMouseLeave={() => setshowTooltip5(false)}
            className="cursor-pointer my-8"
          >
            <Link to="factor">
              <FactorIcon />
            </Link>
            <div
              className={`absolute right-16 top-[289px] transform transition-opacity duration-300 scale-0 ${showTooltip5 ? "scale-100 opacity-100" : "opacity-0 "
                }`}
            >
              <Tooltip x={"75px"} text={"فاکتور ها"} />
            </div>
          </div>
          <div
            onMouseEnter={() => setshowTooltip6(true)}
            onMouseLeave={() => setshowTooltip6(false)}
            className="cursor-pointer my-8"
          >
            <Link to="ticketscompany">
              <TicketIcon />
            </Link>
            <div
              className={`absolute right-16 top-[340px] transform transition-opacity duration-300 scale-0 ${showTooltip6 ? "scale-100 opacity-100" : "opacity-0 "
                }`}
            >
              <Tooltip x={"75px"} text={"تیکت ها"} />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div
            onMouseEnter={() => setshowTooltip7(true)}
            onMouseLeave={() => setshowTooltip7(false)}
            className="cursor-pointer mb-6"
          >
            <Link to="sitemanagment">
              <SiteManagmentIcon />
            </Link>
            <div
              className={`absolute right-16 top-[423px] transform transition-opacity duration-300 scale-0 ${showTooltip7 ? "scale-100 opacity-100" : "opacity-0 "
                }`}
            >
              <Tooltip x={"92px"} text={"مدیریت سایت"} />
            </div>
          </div>
          <div
            onClick={() => setSettingsModal(!settingsModal)}
            onMouseEnter={() => setshowTooltip8(true)}
            onMouseLeave={() => setshowTooltip8(false)}
            className="cursor-pointer mb-6"
          >
            <div >
              <SettingIcon />
            </div>

            <div
              className={`absolute right-16 top-[466px] transform transition-opacity duration-300 scale-0 ${showTooltip8 ? "scale-100 opacity-100" : "opacity-0 "
                }`}
            >
              <Tooltip x={"73px"} text={"تنظیمات"} />
            </div>
          </div>

          <div className={`absolute w-[1200px] h-[500px] left-[-1270px] top-10 `}>
            {
              settingsModal ? <Settings /> : ""
            }
          </div>

          <div
            onMouseEnter={() => setshowTooltip9(true)}
            onMouseLeave={() => setshowTooltip9(false)}
            className="cursor-pointer mb-6"
          >
            <ExitIcon />
            <div
              className={`absolute right-16 top-[510px] transform transition-opacity duration-300 scale-0 ${showTooltip9 ? "scale-100 opacity-100" : "opacity-0 "
                }`}
            >
              <Tooltip x={"85px"} text={"خروج از پنل"} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <SidebarCollapsed
          setshowSidebarCollapsed={setshowSidebarCollapsed}
          showSidebarCollapsed={showSidebarCollapsed}
        />
      </div>
    </div>
  );
};
