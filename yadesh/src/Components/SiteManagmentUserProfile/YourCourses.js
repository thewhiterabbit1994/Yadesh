import { useState } from "react"
const YourCourses = () => {
    const [toggle, setToggle] = useState(false)
    const [titlevalue, setTitleValue] = useState("")
    const [subTitleValue, setSubTitleValue] = useState("")

    return (
        <section className="w-full h-[250px] text-[12px] ">
            <section className="w-full h-[250px] flex justify-around mt-[10px] bg-[#F5F5F5] rounded">
                <section className="w-[47%] ">
                    <section className="w-[93%] h-[280px] m-auto  my-[20px] ">

                        <div className="text-[12px]">
                            <label htmlFor="Title50"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                عنوان
                            </label>
                            <input
                                onChange={(e) => setTitleValue(e.target.value)}
                                value={titlevalue}
                                id='Title50'
                                className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder=" دوره های شما "
                            />
                        </div>
                        <div className="mt-[30px]" >
                            <label htmlFor="Title51"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                زیر عنوان
                            </label>
                            <input
                                value={subTitleValue}
                                onChange={(e) => setSubTitleValue(e.target.value)}
                                id='Title51'
                                className="w-[400px] px-[10px] py-[10px] leading-6  h-[40px] rounded my-[25px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="  لیست دوره های در حال تماشا "
                            />
                        </div>

                    </section>
                </section>
                <section className="w-[35%]">
                    <section className=" text-[12px] mt-[70px] flex text-[#7A7A7A]">
                        <p>تصویر کاربری ( نمایش داده شود )</p>
                        <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                    <section className="w-[170px] h-[45px] rounded bg-[#0050A8] text-[12px] m-auto  cursor-pointer mt-[70px]">
                        <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                            <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    )

}
export default YourCourses