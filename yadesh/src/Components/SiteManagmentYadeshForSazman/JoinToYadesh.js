import { useState } from "react"
import joinToYadesh from "../../assets/Img/joinToYadesh.png"
import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar"

const JoinToYadesh = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <section className="w-full h-[350px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
            <section className="w-[47%] ">
                <section className="w-[93%] h-[300px] m-auto  my-[20px] ">
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="همین امروز یادش را انتخاب کنید "
                            />
                        </lable>
                    </div>
                    <div className="my-[30px]">
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="با انتخاب یادش به جمع سازمان های حرفه ای بپیوندید"
                            />
                        </lable>
                    </div>
                    <section className=" w-[300px] flex text-[12px] text-[#7A7A7A] justify-between ">
                        <p>این قسمت نمایش داده شود</p>
                        <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>
            </section>
            <section className="w-[55%] mt-[20px] text-[12px] text-[#7A7A7A]">
                <p>تصویر</p>
                <img className="w-[500px] h-[200px] rounded-lg mt-[15px]" src={joinToYadesh} />
                <div className="text-[10px] flex mt-[20px] px-[10px] text-[#7A7A7A]">
                    <Ekhtar />
                    <p className="mr-[10px] w-[500px]">حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت اتوماتیک مطابق با سایز container باشد.</p>
                </div>
            </section>
        </section>
    )
}
export default JoinToYadesh