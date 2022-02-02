import { useState } from "react"

const YourProgres = () => {
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(true)
    const [titlevalue, setTitleValue] = useState("")
    const [subTitleValue, setSubTitleValue] = useState("")

    return (
        <section className="w-full h-[330px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
            <section className="w-[47%] ">
                <section className="w-[93%] h-[280px] m-auto  my-[20px] ">

                    <div >
                        <label htmlFor="Title10"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            عنوان
                        </label>
                        <input
                            onChange={(e) => setTitleValue(e.target.value)}
                            value={titlevalue}
                            id='Title10'
                            className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder="پیشرفت شما در یادش"
                        />
                    </div>
                    <div className="mt-[30px]" >
                        <label htmlFor="Title11"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            زیر عنوان
                        </label>
                        <input
                            value={subTitleValue}
                            onChange={(e) => setSubTitleValue(e.target.value)}
                            id='Title11'
                            className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder="لیست ویدیو ها و دوره های  شما "
                        />
                    </div>

                    <section className="w-[170px] h-[45px] rounded bg-[#0050A8] text-[12px] m-auto  cursor-pointer mt-[40px]">
                        <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                            <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                        </div>
                    </section>

                </section>
            </section>
            <section className="w-[50%]  mt-[60px]  ">
                <section className="flex text-[12px] text-[#7A7A7A]">
                    <p>تعداد دوره های تکمیل شده نمایش داده شود</p>
                    <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                        <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                    </div>
                </section>
                <section className="flex text-[12px] text-[#7A7A7A] mt-[40px]">
                    <p>تعداد ویدیو های دیده شده نمایش داده شود</p>
                    <div onClick={() => setToggle1(!toggle1)} className={`${toggle1 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                        <div className={`${toggle1 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                    </div>
                </section>

            </section>
        </section>
    )
}
export default YourProgres