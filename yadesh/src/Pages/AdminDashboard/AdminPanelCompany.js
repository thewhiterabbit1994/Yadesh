import MiddlwSection from "../../Components/AdminPanelCourses/MiddlwSection";
import Table from "../../Components/AdminPanelCourses/Table";
import { Outlet } from "react-router-dom";

const AdminPanelCompany = () => {
  return (
    <section className="w-full h-[100vh]">
      <MiddlwSection />
      <Table />
      <Outlet />
    </section>
  );
};
export default AdminPanelCompany;
