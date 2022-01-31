import { useState } from "react"
import LessonCourses from "../SiteManagmentCourses/LessonCourses"
const Course = () => {
    const [openTab, setOpenTab] = useState(2)

    return (
        <section className="w-full h-[100vh] bg-[#837070]">
            <section className="w-[10%]">
                <div className="text-[11px] w-[160px] text-center opacity-90">
                    <p onClick={() => setOpenTab(1)} className=" hover:bg-[#e2e0e0]  p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">درس های دوره </p>
                    <p onClick={() => setOpenTab(2)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> فوتر  </p>
                </div>
            </section>
            <div>
                <LessonCourses />
            </div>
        </section>
    )
}
export default Course