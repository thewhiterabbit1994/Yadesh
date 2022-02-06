import { useState } from "react"

const Notifications = () => {
    const [toggle, setToggle] = useState(true)
    const [toggle2, setToggle2] = useState(true)
    const [toggle3, setToggle3] = useState(true)

    return (
        <section className="w-full">
            <section className="w-[90%] mt-[55px] text-[12px]  text-[#7A7A7A]">
                <div className="mb-7">
                    <p>اعلان ها</p>
                </div>
                <section className="flex w-[90%] justify-between">
                    <p>دریافت push notification از طرف پنل</p>
                    <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                        <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                    </div>
                </section>
                <div className="w-[92%]  bg-[#4e50501c] rounded-lg h-[2.5px] mb-7 mt-[30px] ml-[170px]"> </div>
                <section  className="flex w-[90%] justify-between">
                    <p>دریافت اعلان برای تیکت</p>
                    <div onClick={() => setToggle2(!toggle2)} className={`${toggle2 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                        <div className={`${toggle2 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                    </div>
                </section>
                <div className="w-[92%]  bg-[#4e50501c] rounded-lg h-[3px] mb-7 mt-[30px] ml-[170px]"> </div>
                <section  className="flex w-[90%] justify-between">
                    <p>دریافت اعلان برای پیغام از طرف ادمین سیستم</p>
                    <div onClick={() => setToggle3(!toggle3)} className={`${toggle3 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                        <div className={`${toggle3 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                    </div>
                </section>
                <div className="w-[92%]  bg-[#4e50501c] rounded-lg h-[3px] mt-[170px]  ml-[170px]"> </div>
                <section className="text-[12px] text-[#fff] w-[210px] flex justify-between mt-[20px] absolute left-[140px]">
                    <button
                        className="w-[100px] h-[35px] rounded bg-[#4e50505d] text-[#000]">لغو </button>
                    <button className="w-[100px] h-[35px] rounded bg-[#008043]">ذخیره کردن</button>
                </section>
            </section>
        </section>
    )
}
export default Notifications