import MiddlwSection from "../../Components/AdminPanelSubscription/MiddleSection"
import Table from "../../Components/AdminPanelSubscription/Table"
import { Outlet } from "react-router-dom";
const AdminPanelSubscription = () => {
    return (
        <section className="w-full h-[100vh]">
            <MiddlwSection />
            <Table />
            <Outlet />
        </section>
    )
}
export default AdminPanelSubscription