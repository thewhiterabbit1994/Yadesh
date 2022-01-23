import MiddlwSection from "../../Components/AdminPanelUser/MiddleSection"
import Table from "../../Components/AdminPanelUser/Table"
import { Outlet } from "react-router-dom";
const AdminPanelUser = () => {
    return (
        <section className="w-full h-[100vh]">
            <MiddlwSection />
            <Table />
            <Outlet />
        </section>
    )
}
export default AdminPanelUser