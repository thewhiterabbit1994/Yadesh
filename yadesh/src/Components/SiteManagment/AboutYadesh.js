import {useState} from "react"
import HeroAboutYadesh from "../../Components/SiteManagMentAboutYadesh.js/HeroAboutYadesh"
import VsionYadesh from "../../Components/SiteManagMentAboutYadesh.js/VsionYadesh"
import MissionYadesh from "../../Components/SiteManagMentAboutYadesh.js/MissionYadesh"
import ContactYadesh from "../../Components/SiteManagMentAboutYadesh.js/ContactYadesh"
const AboutYadesh =()=>{
    const [openTab, setOpenTab] = useState(7)
    return (
        <section className="w-full h-[100vh] flex justify-between">
            <section className="w-[10%]">
                <div className="text-[11px] w-[160px] text-center opacity-90">
                    <p onClick={() => setOpenTab(1)} className=" hover:bg-[#e2e0e0]  p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">قسمت hero</p>
                    <p onClick={() => setOpenTab(2)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> چشم انداز یادش </p>
                    <p onClick={() => setOpenTab(3)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> ماموریت یادش </p>
                    <p onClick={() => setOpenTab(4)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> هویت یادش  </p>
                    <p onClick={() => setOpenTab(5)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer" > تماس با یادش </p>
                    <p onClick={() => setOpenTab(6)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> پشتیبانی </p>
                    <p onClick={() => setOpenTab(7)} className=" hover:bg-[#e2e0e0] p-3 w-[140px] m-auto py-[15px] bg-[#C4C4C4] rounded-lg cursor-pointer">فوتر</p>
                </div>
            </section>
            <section className={`w-[84%]`}>
                <div className={`${openTab === 1 ? "block" : "hidden"}`}>
                    <HeroAboutYadesh />
                </div>
                <div className={`${openTab === 2 ? "block" : "hidden"}`}>
                    <VsionYadesh />
                </div>
                <div className={`${openTab === 3 ? "block" : "hidden"}`}>
                    <MissionYadesh />
                </div>
                <div className={`${openTab === 4 ? "block" : "hidden"}`}>
                    <HeroAboutYadesh />
                </div>
                <div className={`${openTab === 5 ? "block" : "hidden"}`}>
                    <ContactYadesh />
                </div>
                <div className={`${openTab === 6 ? "block" : "hidden"}`}>
                    <HeroAboutYadesh />
                </div>
            </section>
        </section>
    )
}
export default AboutYadesh