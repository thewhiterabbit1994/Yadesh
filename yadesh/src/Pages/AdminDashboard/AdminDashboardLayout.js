import { Outlet, Link } from "react-router-dom";
import Sidebar from "../../Components/AdminDashboardLayout/Sidebar";
import Header from "../../Components/AdminDashboardLayout/Header";

const AdminDashboardLayout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};
export default AdminDashboardLayout;
