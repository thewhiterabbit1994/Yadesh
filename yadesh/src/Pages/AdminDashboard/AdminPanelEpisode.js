import MiddlwSection from "../../Components/AdminPanelEpisode/MiddleSection"
import Table from "../../Components/AdminPanelEpisode/Table"
import { Outlet } from "react-router-dom";

const AdminPanelEpisode = () => {
    return (
        <section className="w-full h-[100vh]">
            <MiddlwSection />
            <Table />
            <Outlet />
        </section>
    )
}
export default AdminPanelEpisode