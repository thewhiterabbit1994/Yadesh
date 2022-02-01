import { Outlet } from "react-router-dom";
import Managment from "../../assets/svg/AdminPanelCourses/Managment";
import NotSignIn from "../../Components/SiteManagment/NotSignIn"
import SignIn from "../../Components/SiteManagment/SignIn"
import PishrafteMan from "../../Components/SiteManagment/PishrafteMan"
import AboutYadesh from "../../Components/SiteManagment/AboutYadesh"
import UserProfile from "../../Components/SiteManagment/UserProfile"
import YadeshForSazman from "../../Components/SiteManagment/YadeshForSazman"
import Course from "../../Components/SiteManagment/Course"
import Episode from "../../Components/SiteManagment/Episode"
import ContactWithYadesh from "../../Components/SiteManagment/ContactWithYadesh"
import Footer from "../../Components/SiteManagment/Footer";
import Login from "../../Components/SiteManagment/Login";

import { useState } from "react"
const SiteManagment = () => {
    const [openTab, setOpenTab] = useState(1)
    return (
        <section className="relative top-[100px] w-full">
            <section className="w-[85%] m-auto mr-[130px]">
                <div className="text-[14px] flex py-[30px]">
                    <Managment />
                    <p className="mr-[12px] font-semibold "> مدیریت سایت</p>
                </div>
                <div className="flex text-[0.85vw] w-full justify-between">
                    <p className={`${openTab === 1 ? "bg-[#fff] border-[#00B35D] border-2 rounded p-3  cursor-pointer" : " rounded p-3  cursor-pointer bg-[#D5D5D5]"} `} onClick={() => setOpenTab(1)}>صفحه اول (not sign in)</p>
                    <p className={`${openTab === 2 ? "bg-[#fff] border-[#00B35D] border-2 rounded p-3  cursor-pointer" : " rounded p-3  cursor-pointer bg-[#D5D5D5]"}`} onClick={() => setOpenTab(2)}>صفحه اول (sign in)</p>
                    <p className={`${openTab === 3 ? "bg-[#fff] border-[#00B35D] border-2 rounded p-3  cursor-pointer" : " rounded p-3  cursor-pointer bg-[#D5D5D5]"}`} onClick={() => setOpenTab(3)}>پیشرفت من </p>
                    <p className={`${openTab === 4 ? "bg-[#fff] border-[#00B35D] border-2 rounded p-3  cursor-pointer" : " rounded p-3  cursor-pointer bg-[#D5D5D5]"}`} onClick={() => setOpenTab(4)}>درباره یادش</p>
                    <p className={`${openTab === 5 ? "bg-[#fff] border-[#00B35D] border-2 rounded p-3  cursor-pointer" : " rounded p-3  cursor-pointer bg-[#D5D5D5]"}`} onClick={() => setOpenTab(5)}>پروفایل کاربری</p>
                    <p className={`${openTab === 6 ? "bg-[#fff] border-[#00B35D] border-2 rounded p-3  cursor-pointer" : " rounded p-3  cursor-pointer bg-[#D5D5D5]"}`} onClick={() => setOpenTab(6)}>یادش برای سازمان ها</p>
                    <p className={`${openTab === 7 ? "bg-[#fff] border-[#00B35D] border-2 rounded p-3  cursor-pointer" : " rounded p-3  cursor-pointer bg-[#D5D5D5]"}`} onClick={() => setOpenTab(7)}>دوره</p>
                    <p className={`${openTab === 8 ? "bg-[#fff] border-[#00B35D] border-2 rounded p-3  cursor-pointer" : " rounded p-3  cursor-pointer bg-[#D5D5D5]"}`} onClick={() => setOpenTab(8)}>پلیر - اپیزود</p>
                    <p className={`${openTab === 12 ? "bg-[#fff] border-[#00B35D] border-2 rounded p-3  cursor-pointer" : " rounded p-3  cursor-pointer bg-[#D5D5D5]"}`} onClick={() => setOpenTab(12)}> پلیر - دوره </p>
                    <p className={`${openTab === 9 ? "bg-[#fff] border-[#00B35D] border-2 rounded p-3  cursor-pointer" : " rounded p-3  cursor-pointer bg-[#D5D5D5]"}`} onClick={() => setOpenTab(9)}>تماس با یادش</p>
                    <p className={`${openTab === 10 ? "bg-[#fff] border-[#00B35D] border-2 rounded p-3  cursor-pointer" : " rounded p-3  cursor-pointer bg-[#D5D5D5]"}`} onClick={() => setOpenTab(10)}> لاگین </p>
                    <p className={`${openTab === 11 ? "bg-[#fff] border-[#00B35D] border-2 rounded p-3  cursor-pointer" : " rounded p-3  cursor-pointer bg-[#D5D5D5]"}`} onClick={() => setOpenTab(11)}> فوتر </p>


                </div>
                <section className="mt-[30px]" >
                    <div className={`${openTab === 1 ? "block" : "hidden"}`}>
                        <NotSignIn />
                    </div>
                    <div className={`${openTab === 2 ? "block" : "hidden"}`}>
                        <SignIn />
                    </div>
                    <div className={`${openTab === 3 ? "block" : "hidden"}`}>
                        <PishrafteMan />
                    </div>
                    <div className={`${openTab === 4 ? "block" : "hidden"}`}>
                        <AboutYadesh />
                    </div>
                    <div className={`${openTab === 5 ? "block" : "hidden"}`}>
                        <UserProfile />
                    </div>
                    <div className={`${openTab === 6 ? "block" : "hidden"}`}>
                        <YadeshForSazman />
                    </div>
                    <div className={`${openTab === 7 ? "block" : "hidden"}`}>
                        <Course />
                    </div>
                    <div className={`${openTab === 8 ? "block" : "hidden"}`}>
                        <Episode />
                    </div>
                    <div className={`${openTab === 9 ? "block" : "hidden"}`}>
                        <ContactWithYadesh />
                    </div>
                    <div className={`${openTab === 10 ? "block" : "hidden"}`}>
                        <Login />
                    </div>
                    <div className={`${openTab === 11 ? "block" : "hidden"}`}>
                        <Footer />
                    </div>
                    <div className={`${openTab === 12 ? "block" : "hidden"}`}>
                        <ContactWithYadesh />
                    </div>

                </section>
            </section>
            <Outlet />
        </section>
    )
}
export default SiteManagment