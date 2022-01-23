import MiddlwSection from "../../Components/AdminPanelFactor/MiddleSection"
import Table from "../../Components/AdminPanelFactor/Table"
import { Outlet } from "react-router-dom";
const AdminPanelFactor = () => {
    return (
        <section className="w-full h-[100vh]">
            <MiddlwSection />
            <Table />
            <Outlet />
        </section>
    )
}
export default AdminPanelFactor