import { useState } from "react";
import Hero from "../../Components/NotSignIn/Hero";
import PopularCourses from "../../Components/NotSignIn/PopularCourses";
import AboutYadesh from "../../Components/NotSignIn/AboutYadesh";
import MostViewedEpisodes from "../../Components/NotSignIn/MostViewedEpisodes";
import CostomerYadesh from "../../Components/NotSignIn/CostomerYadesh";
import PanelSazmani from "../../Components/NotSignIn/PanelSazmani";
import Footer from "../../Components/SiteManagment/Footer";

const NotSignIn = () => {
    const [openTab, setOpenTab] = useState(1)
    return (
        <section className="w-full h-[600px] flex justify-between">
            <section className="w-[10%]">
                <div className="text-[11px] w-[160px] text-center opacity-90">
                    <p onClick={() => setOpenTab(1)} className=" hover:bg-[#e2e0e0]  p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">قسمت hero</p>
                    <p onClick={() => setOpenTab(2)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">دوره های پرطرفدار </p>
                    <p onClick={() => setOpenTab(3)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">درباره ی یادش</p>
                    <p onClick={() => setOpenTab(4)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">پربازدیدترین اپیزودها</p>
                    <p onClick={() => setOpenTab(5)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">مشتریان یادش</p>
                    <p onClick={() => setOpenTab(6)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">پنل سازمانی</p>
                </div>
            </section>
            <section className={`w-[84%]`}>
                <div className={`${openTab === 1 ? "block" : "hidden"}`}>
                    <Hero />
                </div>
                <div className={`${openTab === 2 ? "block" : "hidden"}`}>
                    <PopularCourses />
                </div>
                <div className={`${openTab === 3 ? "block" : "hidden"}`}>
                    <AboutYadesh />
                </div>
                <div className={`${openTab === 4 ? "block" : "hidden"}`}>
                    <MostViewedEpisodes />
                </div>
                <div className={`${openTab === 5 ? "block" : "hidden"}`}>
                    <CostomerYadesh />
                </div>
                <div className={`${openTab === 6 ? "block" : "hidden"}`}>
                    <PanelSazmani />
                </div>
               
            </section>
        </section>
    )
}
export default NotSignIn
