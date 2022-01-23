import MiddlwSection from "../../Components/AdminPanelCompany/MiddlwSection";
import Table from "../../Components/AdminPanelCompany/Table";
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
