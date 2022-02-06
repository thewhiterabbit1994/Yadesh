import { useState } from "react"
import Play from "../../assets/svg/AdminPanelCourses/Play"

const Title = () => {
    const [titlevalue, setTitleValue] = useState("")
    const [subTitleValue, setSubTitleValue] = useState("")
    return (
        <section className="w-full h-[140px] bg-[#F5F5F5] rounded-lg mt-[10px] ">
            <section className="w-[90%]  h-[140px] flex justify-between  m-auto pr-[20px]">

                <section className=" m-auto w-full  my-[20px] text-[12px]  flex justify-between ">
                    <div className="text-[12px]">
                        <label htmlFor="Title127"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            عنوان
                        </label>
                        <input
                            onChange={(e) => setTitleValue(e.target.value)}
                            value={titlevalue}
                            id='Title127'
                            className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder=" با یادش در تماس باشید "
                        />
                    </div>
                    <div  >
                        <label htmlFor="Title128"
                            className="text-[12px] text-[#7A7A7A]  pr-[10px]">
                            زیر عنوان
                        </label>
                        <input
                            value={subTitleValue}
                            onChange={(e) => setSubTitleValue(e.target.value)}
                            id='Title128'
                            className="w-[400px] leading-5 px-[10px] py-[10px] h-[45px] rounded my-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder=" از طریق فرم روبرو با ما در تماس باشید "
                        />
                    </div>
                </section>

            </section>
            <section className="flex text-[#fff] mt-[30px] text-[12px] w-[350px] justify-between m-auto">
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
export default Title