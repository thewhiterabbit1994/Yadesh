import Play from "../../assets/svg/AdminPanelCourses/Play"
const LessonCourses = () => {
    return (
        <section className="bg-[#F5F5F5] w-full h-[140px]">
            <div className="my-[10px] pr-[30px] pt-[20px]">
                <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                <lable>
                    <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                        placeholder="درس های این دوره"
                    />
                </lable>
            </div>
            <section className="flex text-[#fff] text-[12px] w-[350px] justify-between m-auto">
                <div className="relative ">
                    <div className="absolute top-[18px] right-[10px]">
                        <Play />
                    </div>
                    <button className="w-[170px] h-[45px] bg-[#0050A8] rounded"> پیش نمایش صفحه </button>
                </div>
                <button className="w-[170px] h-[45px] bg-[#008043] rounded"> ذخیره کردن تغییرات </button> 
            </section>
        </section>
    )
}
export default LessonCourses