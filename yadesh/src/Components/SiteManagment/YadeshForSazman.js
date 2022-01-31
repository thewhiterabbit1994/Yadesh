import { useState } from "react"
import HeroYadeshForSazman from "../../Components/SiteManagmentYadeshForSazman/HeroYadeshForSazman"
import Teachers from "../../Components/SiteManagmentYadeshForSazman/Teachers"
import Costomers from "../../Components/SiteManagmentYadeshForSazman/Costomers"
import WhyYadesh from "../../Components/SiteManagmentYadeshForSazman/WhyYadesh"
import JoinToYadesh from "../../Components/SiteManagmentYadeshForSazman/JoinToYadesh"
import Footer from "../../Components/SiteManagment/Footer"


const YadeshForSazman = () => {
    const [openTab, setOpenTab] = useState(7)
    return (
        <section className="w-full h-[100vh] flex justify-between">
            <section className="w-[10%]">
                <div className="text-[11px] w-[160px] text-center opacity-90">
                    <p onClick={() => setOpenTab(1)} className=" hover:bg-[#e2e0e0]  p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">قسمت hero</p>
                    <p onClick={() => setOpenTab(2)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">  اساتید </p>
                    <p onClick={() => setOpenTab(3)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> مشتریان </p>
                    <p onClick={() => setOpenTab(4)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> چرا یادش ؟</p>
                    <p onClick={() => setOpenTab(5)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> به یادش بپیوندید </p>
                    <p onClick={() => setOpenTab(6)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> سوالات متداول</p>
                    <p onClick={() => setOpenTab(7)} className=" hover:bg-[#e2e0e0] p-3 w-[140px] m-auto py-[15px] bg-[#C4C4C4] rounded-lg cursor-pointer">فوتر</p>
                </div>
            </section>
            <section className={`w-[84%]`}>
                <div className={`${openTab === 1 ? "block" : "hidden"}`}>
                    <HeroYadeshForSazman />
                </div>
                <div className={`${openTab === 2 ? "block" : "hidden"}`}>
                    <Teachers />
                </div>
                <div className={`${openTab === 3 ? "block" : "hidden"}`}>
                    <Costomers />
                </div>
                <div className={`${openTab === 4 ? "block" : "hidden"}`}>
                    <WhyYadesh />
                </div>
                <div className={`${openTab === 5 ? "block" : "hidden"}`}>
                    <JoinToYadesh />
                </div>
                <div className={`${openTab === 6 ? "block" : "hidden"}`}>
                    <HeroYadeshForSazman />
                </div>
                <div className={`${openTab === 7 ? "block" : "hidden"}`}>
                    <Footer />
                </div>
            </section>
        </section>
    )
}
export default YadeshForSazman