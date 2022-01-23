import Header from "../../Components/AdminPanelCourses/Header"
import MiddlwSection from "../../Components/AdminPanelCourses/MiddlwSection"
import Table from "../../Components/AdminPanelCourses/Table"
// import AdminDashboardLayout from "../../Pages/AdminDashboard"
const AdminPanelCompany = () => {
    return (
        <section className="w-full h-[100vh]">
            <Header />
            <MiddlwSection/>
            <Table/>
        </section>
    )
}
export default AdminPanelCompany