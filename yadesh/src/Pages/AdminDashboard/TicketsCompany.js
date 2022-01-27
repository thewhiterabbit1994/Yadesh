import { Outlet } from "react-router-dom";
import Header from "../../Components/TicketsCompany/Header";
import MainSection from "../../Components/TicketsCompany/MainSection";
const TicketsCompany = () => {
    return (
        <>
            <MainSection/>
            <Outlet />
        </>
    )
}
export default TicketsCompany