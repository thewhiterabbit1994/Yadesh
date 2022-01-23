import MiddlwSection from "../../Components/AdminPanelCourses/MiddleSection"
import Table from "../../Components/AdminPanelCourses/Table"
import { Outlet } from "react-router-dom";
const AdminPanelCourses = () => {
    return (
        <section className="w-full h-[100vh]">
            <MiddlwSection />
            <Table />
            <Outlet />
        </section>
    )
}
export default AdminPanelCourses