import { useState } from "react"
const YourCourses = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <section className="w-full h-[350px] text-[12px] ">
            <section className="w-full h-[350px] flex justify-around bg-[#F5F5F5] rounded">
                <section className="w-[47%] ">
                    <section className="w-[93%] h-[280px] m-auto  my-[20px] ">
                        <div>
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder=" دوره های شما "
                                />
                            </lable>
                        </div>
                        <div className="my-[30px]">
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder=" لیست دوره های شما"
                                />
                            </lable>
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
                </section>
            </section>
        </section>
    )

}
export default YourCourses