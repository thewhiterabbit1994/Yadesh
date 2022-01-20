import { Outlet, Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <div>
        <p>Hi im admin dashboard</p>
      </div>
      <Outlet />
    </div>
  );
};
export default AdminDashboard;
