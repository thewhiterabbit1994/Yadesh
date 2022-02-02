import { useState } from "react"
import HeroUserProfile from "../SiteManagmentUserProfile/HeroUserProfile"
import FaivoriteEpisode from "../SiteManagmentUserProfile/FaivoriteEpisode"
import YourCourses from "../SiteManagmentUserProfile/YourCourses"
import Footer from "../../Components/SiteManagment/Footer"


const UserProfile =()=>{
    const [openTab, setOpenTab] = useState(1)
    
    return (
        <section className="w-full h-[100vh] flex justify-between">
            <section className="w-[10%]">
                <div className="text-[11px] w-[160px] text-center opacity-90">
                    <p onClick={() => setOpenTab(1)} className=" hover:bg-[#e2e0e0]  p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">قسمت hero</p>
                    <p onClick={() => setOpenTab(2)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> اپیزودها </p>
                    <p onClick={() => setOpenTab(3)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> دوره های شما </p>
                </div>
            </section>
            <section className={`w-[84%]`}>
                <div className={`${openTab === 1 ? "block" : "hidden"}`}>
                    <HeroUserProfile />
                </div>
                <div className={`${openTab === 2 ? "block" : "hidden"}`}>
                    <FaivoriteEpisode />
                </div>
                <div className={`${openTab === 3 ? "block" : "hidden"}`}>
                    <YourCourses />
                </div>
            </section>
        </section>
    )
}
export default UserProfile