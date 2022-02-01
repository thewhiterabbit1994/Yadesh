import { useState } from "react"
import LessonCourses from "../SiteManagmentCourses/LessonCourses"
import Footer from "../../Components/SiteManagment/Footer"
const Course = () => {
    const [openTab, setOpenTab] = useState(2)

    return (
        <section className="w-full h-[400px] flex justify-between">
            <section className="w-[10%]">
                <div className="text-[11px] w-[160px] text-center opacity-90">
                    <p onClick={() => setOpenTab(1)} className=" hover:bg-[#e2e0e0]  p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">درس های دوره </p>
                    <p onClick={() => setOpenTab(2)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> فوتر  </p>
                </div>
            </section>
            <section className="mt-[5px] w-[85%]" >
                <div className={`${openTab === 1 ? "block" : "hidden"}`}>
                    <LessonCourses />
                </div>
                <div className={`${openTab === 2 ? "block" : "hidden"}`}>
                    <Footer />
                </div>
            </section>
        </section>
    )
}
export default Course