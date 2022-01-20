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

export default () => (
  <div className="w-[80px] h-screen bg-[#f5f5f5]">
    <div>
      <YadeshLogo color="#a5a4a4" />
      <AdminPanelLogo />
      <CoursesIcon />
      <EpisodeIcon />
      <UserControlIcon />
      <FactorIcon />
      <TicketIcon />
      <SiteManagmentIcon />
      <SettingIcon />
      <ExitIcon />
    </div>
  </div>
);
