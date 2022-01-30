import Ticket from "../../assets/svg/AdminPanelCourses/Ticket"
import SvgTicketCompany from "../../assets/svg/AdminPanelCourses/SvgTicketCompany"
import { useState } from "react"
const Header = ({setOpenTab}) => {
    const [roll, setRoll] = useState(false)
    const [tUser, setTuser] = useState(false)
    const [tCompany, setTcompany] = useState(false)

    const fcompany = () => {
        setOpenTab(2)
        setRoll(true)
        setTuser(true)
        setTcompany(false)
    }
    const fuser = () => {
        setOpenTab(1)
        setRoll(false)
        setTuser(false)
        setTcompany(true)
    }
    return (
        <section className="w-full relative  top-[100px] ">
            <section className="w-[86%] m-auto mr-[120px]">
                <div className="flex">
                    <div className="mt-[3px]">
                        <Ticket />
                    </div>
                    <p className="mr-[10px] ">تیکت ها</p>
                </div>
                <section className="flex mt-[50px] items-center justify-between w-full ">
                    <div className="flex w-[250px] justify-between text-[12px] font-semibold text-[#00000096]">
                        <p onClick={fuser} className={`cursor-pointer ${!tCompany ? "null" : "text-[blue]"}`}>تیکت های کاربران</p>
                        <p onClick={fcompany} className={`cursor-pointer ${!tUser ? "null" : "text-[#008043]"}`}>تیکت های شرکتی</p>
                    </div>
                    <div>
                        <SvgTicketCompany />
                    </div>
                </section>
                <section className="w-full h-[4px] flex bg-[#00000034] relative rounded-lg mt-[10px]">
                    <div className={` w-[100px] h[4px] ${!roll ? "  duration-200 bg-[#007AFF] rounded" : "bg-[#008043] rounded relative duration-300 right-[150px]"
                        }`}>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default Header