import { useState } from "react"
import Play from "../../assets/svg/AdminPanelCourses/Play"

const RelateEpisode = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <section className="w-full ">
            <section className="bg-[#F5F5F5] h-[280px] flex justify-between rounded mt-[10px]">
                <section className="w-[47%] ">
                    <section className="w-[93%] h-[280px] m-auto  my-[20px] ">
                        <div>
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="درس های مرتبط "
                                />
                            </lable>
                        </div>
                        <div className="my-[30px]">
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="درس های مرتبط با این درس"
                                />
                            </lable>
                        </div>
                    </section>
                </section>
                <section className="w-[50%]  mt-[60px]  ">
                    <section className="flex text-[12px] text-[#7A7A7A]">
                        <p>تعداد دوره های تکمیل شده نمایش داده شود</p>
                        <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>
            </section>

            <section className="flex text-[#fff] mt-[] text-[12px] w-[350px] justify-between m-auto">
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
export default RelateEpisode