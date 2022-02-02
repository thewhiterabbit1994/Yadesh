import img from "../../assets/Img/AboutUs/imgAbouUs.png"
import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar"
import { useState } from "react"
const HeroAboutYadesh = () => {
    const [toggle, setToggle] = useState(false)
    const [titlevalue, setTitleValue] = useState("")
    const [subTitleValue, setSubTitleValue] = useState("")

    return (
        <section className="w-full h-[390px] bg-[#F5F5F5] rounded mt-[10px] ">
            <section className="w-[95%] m-auto flex justify-between">
                <section className="w-[40%] pt-[30px]">
                    <section className="w-[400px] text-[12px] mt-[10px] flex mr-[20px] text-[#7A7A7A]">
                        <p className="w-[150px] ml-[50px]">لوگو (نمایش داده شود)</p>
                        <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                    <section className="w-[93%] h-[550px] m-auto  my-[20px] ">

                        <div >
                            <label htmlFor="Title22"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                عنوان
                            </label>
                            <input
                                onChange={(e) => setTitleValue(e.target.value)}
                                value={titlevalue}
                                id='Title22'
                                className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="درس های پربازدید امروز"
                            />
                        </div>
                        <div className="mt-[30px]" >
                            <label htmlFor="Title23"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                زیر عنوان
                            </label>
                            <input
                                value={subTitleValue}
                                onChange={(e) => setSubTitleValue(e.target.value)}
                                id='Title23'
                                className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="یادشی ها این ویدیو را بیشتر دیده اند"
                            />
                        </div>

                        <section className="w-[170px] h-[45px] rounded bg-[#0050A8] text-[12px] m-auto  cursor-pointer mt-[50px]">
                            <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                                <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                            </div>
                        </section>

                    </section>
                </section>
                <section className="w-[50%] h-[00px] text-[12px]  text-[#7A7A7A] pt-[30px]">
                    <p className="mb-[15px]"> تصویر</p>
                    <img src={img} className="w-[500px] h-[200px] rounded-lg" />
                    <div className="text-[10px] flex mt-[20px] px-[10px] text-[#7A7A7A]">
                        <Ekhtar />
                        <p className="mr-[10px]">حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت اتوماتیک مطابق با سایز container باشد.</p>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default HeroAboutYadesh