import { useState } from "react"
const MyNotes = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <section className="w-full ">

            <section className=" flex text-[12px] text-[#7A7A7A] bg-[#F5F5F5] h-[67px] rounded items-center pr-[20px] mt-[10px] ">
                <p className="ml-[50px]"> نمایش یادداشت ها  </p>
                <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                    <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                </div>
            </section>

            <section className="w-[170px] h-[45px] rounded bg-[#0050A8] text-[12px] mt-[20px] m-auto cursor-pointer">
                <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                    <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                </div>
            </section>
        </section>
    )

}
export default MyNotes