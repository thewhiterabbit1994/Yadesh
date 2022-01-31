import UserProfileImg from "../../assets/Img/UserProfileBackground.png"
import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar"
import { useState } from "react"

const HeroUserProfile = () => {
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(true)

    return (
        <section className="w-full h-[350px] text-[12px] ">
            <section className="w-full h-[350px] flex justify-around bg-[#F5F5F5] rounded">
                <section className="mt-[15px] w-[58%] text-[#7A7A7A]">
                    <p>تصویر</p>
                    <img className="w-[600px] h-[200px] rounded-lg mt-[20px]" src={UserProfileImg} />
                    <div className="text-[10px] flex mt-[20px] px-[10px] text-[#7A7A7A]">
                        <Ekhtar />
                        <p className="mr-[10px]">حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت اتوماتیک مطابق با سایز container باشد.</p>
                    </div>
                </section>
                <section className="w-[35%]">
                    <section className=" text-[12px] mt-[70px] flex text-[#7A7A7A]">
                        <p>تصویر کاربری ( نمایش داده شود )</p>
                        <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                    <section className=" text-[12px] mt-[50px] flex text-[#7A7A7A]">
                        <p>تصویر کاربری ( نمایش داده شود )</p>
                        <div onClick={() => setToggle1(!toggle1)} className={`${toggle1 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle1 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                    <section className=" text-[12px] mt-[50px] flex text-[#7A7A7A]">
                        <p>تصویر کاربری ( نمایش داده شود )</p>
                        <div onClick={() => setToggle2(!toggle2)} className={`${toggle2 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle2 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    )
}
export default HeroUserProfile