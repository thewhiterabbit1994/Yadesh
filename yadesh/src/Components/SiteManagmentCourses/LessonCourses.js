import Play from "../../assets/svg/AdminPanelCourses/Play"
import { useState } from "react"

const LessonCourses = () => {
    const [titlevalue, setTitleValue] = useState("")

    return (
        <section className="bg-[#F5F5F5] w-full h-[200px] mt-[5px] ">
            <section className="w-[90%] m-auto pt-[20px]">
                <div className="text-[12px] flex flex-col">
                    <label htmlFor="Title120"
                        className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                        عنوان
                    </label>
                    <input
                        onChange={(e) => setTitleValue(e.target.value)}
                        value={titlevalue}
                        id='Title120'
                        className="w-[400px] h-[40px]  rounded mt-[10px] placeholder:text-[11px] placeholder:pr-[10px]"
                        placeholder=" درس های این دوره "
                    />
                </div>
                <section className="flex text-[#fff] text-[12px] w-[350px] justify-between m-auto mt-[30px]">
                    <div className="relative ">
                        <div className="absolute top-[18px] right-[10px]">
                            <Play />
                        </div>
                        <button className="w-[170px] h-[45px] bg-[#0050A8] rounded"> پیش نمایش صفحه </button>
                    </div>
                    <button className="w-[170px] h-[45px] bg-[#008043] rounded"> ذخیره کردن تغییرات </button>
                </section>
            </section>
        </section>
    )
}
export default LessonCourses