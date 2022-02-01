import { useState } from "react"
const Footer = () => {
    const [toggle, setToggle] = useState(true)
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(true)
    const [toggle3, setToggle3] = useState(false)

    return (
        <section className="w-full h-[500px]  ">
            <section className=" flex text-[12px] text-[#7A7A7A] bg-[#F5F5F5] h-[67px] rounded items-center pr-[20px] mt-[10px] ">
                <p className="ml-[50px]">گردش در یادش ( نمایش داده شود )</p>
                <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                    <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                </div>
            </section>
            <section className=" flex text-[12px] text-[#7A7A7A] bg-[#F5F5F5] h-[67px] rounded items-center pr-[20px] my-[20px] ">
                <p className="ml-[50px]">گردش در یادش ( نمایش داده شود )</p>
                <div onClick={() => setToggle1(!toggle1)} className={`${toggle1 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                    <div className={`${toggle1 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                </div>
            </section>
            <section className=" flex text-[12px] text-[#7A7A7A] bg-[#F5F5F5] h-[67px] rounded items-center pr-[20px] my-[20px] ">
                <p className="ml-[50px]">گردش در یادش ( نمایش داده شود )</p>
                <div onClick={() => setToggle2(!toggle2)} className={`${toggle2 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                    <div className={`${toggle2 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                </div>
            </section>
            <section className=" flex text-[12px] text-[#7A7A7A] bg-[#F5F5F5] h-[67px] rounded items-center pr-[20px] mt-[10px] ">
                <p className="ml-[50px]">گردش در یادش ( نمایش داده شود )</p>
                <div onClick={() => setToggle3(!toggle3)} className={`${toggle3 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                    <div className={`${toggle3 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                </div>
            </section>
        </section>
    )
}
export default Footer