import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar"
import imgSazman from "../../assets/Img/imgSazman.png"
import { useState } from "react"


const HeroYadeshForSazman = () => {
    const [titlevalue, setTitleValue] = useState("")
    const [subTitleValue, setSubTitleValue] = useState("")
    const [description, setdescription] = useState("")
    return (
        <section className="w-full h-[400px] bg-[#F5F5F5] flex justify-between rounded mt-[10px]">
            <section className="w-[45%]">
                <section className="w-[93%] h-[550px] m-auto  my-[20px] text-[12px]">

                    <div className="text-[12px]">
                        <label htmlFor="Title71"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            عنوان
                        </label>
                        <input
                            onChange={(e) => setTitleValue(e.target.value)}
                            value={titlevalue}
                            id='Title71'
                            className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder=" اپیزودهای مورد علاقه شما "
                        />
                    </div>
                    <div className="mt-[20px]" >
                        <label htmlFor="Title72"
                            className="text-[12px] text-[#7A7A7A]  pr-[10px]">
                            زیر عنوان
                        </label>
                        <textarea
                            value={subTitleValue}
                            onChange={(e) => setSubTitleValue(e.target.value)}
                            id='Title72'
                            className="w-[400px] leading-5 px-[10px] py-[10px]   resize-none h-[70px] rounded my-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder=" سازمان ها در یادش جایگاه ویژهای دارند پس م هم برای سازمان ها برنامه ویژه ای داریم "
                        />
                    </div>
                    <div >
                        <label htmlFor="Title73"
                            className="text-[12px] text-[#7A7A7A]  pr-[10px]">
                            زیر عنوان
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                            id='Title73'
                            className="w-[400px] leading-5 px-[10px] py-[10px] resize-none   h-[70px] rounded my-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder=" اشتراک ویژه سالانه برای گروه ها  همراه تخفبف 5 تا 15 درصدی "
                        />
                    </div>

                </section>
            </section>
            <section className="w-[53%] mt-[20px] text-[#7A7A7A] text-[12px] ">
                <p>تصویر</p>
                <section className="w-[480px] h-[200px] mt-[20px] relative bg-[#ff000007]">
                    <img src={imgSazman} className="rounded-lg" />
                </section>
                <div className="text-[10px] flex  px-[10px] text-[#7A7A7A]">
                    <Ekhtar />
                    <p className="mr-[10px]">حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت اتوماتیک مطابق با سایز container باشد.</p>
                </div>
                <section className="w-[170px] h-[45px] rounded bg-[#0050A8] text-[12px] m-auto  cursor-pointer mt-[30px]">
                    <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                        <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default HeroYadeshForSazman