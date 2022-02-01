import SliderSiteManagment from "../../Components/SiteManagmentLogin/SliderSiteManagment"
import Play from "../../assets/svg/AdminPanelCourses/Play"

import { useState } from "react"

const Login = () => {
    const [openTab, setOpenTab] = useState(1)

    return(
        <section className="w-full h-[1300px] ">
        <section className="flex justify-between">
            <section className="w-[10%]">
                <div className="text-[11px] w-[160px] text-center opacity-90">
                    <p onClick={() => setOpenTab(1)} className=" hover:bg-[#e2e0e0]  p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> اسلایدر</p>
                </div>
            </section>
            <section className={`w-[84%]`}>
                <div className={`${openTab === 1 ? "block" : "hidden"}`}>
                    <SliderSiteManagment />
                </div>
            </section>
        </section>
       
    </section>
    )
}
export default Login