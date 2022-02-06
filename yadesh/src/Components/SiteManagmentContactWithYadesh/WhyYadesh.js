import { useState } from "react"
import Play from "../../assets/svg/AdminPanelCourses/Play"

const WhyYadesh = () => {
    const [toggle, setToggle] = useState(true)
    const [toggle2, setToggle2] = useState(true)
    const [toggle3, setToggle3] = useState(true)

    const [titleSubsidiary1, setTitleSubsidiary1] = useState("")
    const [subTitleSubsidiary1, setSubTitleSubsidiary1] = useState("")

    const [titleSubsidiary2, setTitleSubsidiary2] = useState("")
    const [subTitleSubsidiary2, setSubTitleSubsidiary2] = useState("")

    const [titleSubsidiary3, setTitleSubsidiary3] = useState("")
    const [subTitleSubsidiary3, setSubTitleSubsidiary3] = useState("")

    return (
        <section className="w-full h-[500px] bg-[#F5F5F5] mt-[10px] rounded-lg">
            <section className="w-[95%] m-auto flex justify-between">
                <section className="w-full h-[500px] text-[12px] text-[#7A7A7A] mt-[30px]">
                    <section className="w-full text-[12px] mt-[5px]  mr-[10px] text-[#7A7A7A]  h-[450px]">

                        {/* <titleSubsidiary1 .......................................................................................>  */}
                        <section className="w-[95%] relative flex justify-between ">
                            <div className="text-[12px]">
                                <label htmlFor="Title130"
                                    className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                    عنوان
                                </label>
                                <input
                                    onChange={(e) => setTitleSubsidiary1(e.target.value)}
                                    value={titleSubsidiary1}
                                    id='Title130'
                                    className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder=" تنوع موضوع و مهارت در یادش "
                                />
                            </div>
                            <div  >
                                <label htmlFor="Title131"
                                    className="text-[12px] text-[#7A7A7A]  pr-[10px]">
                                    زیر عنوان
                                </label>
                                <textarea
                                    value={subTitleSubsidiary1}
                                    onChange={(e) => setSubTitleSubsidiary1(e.target.value)}
                                    id='Title131'
                                    className="w-[400px] resize-none leading-5 px-[10px] py-[10px] h-[80px] rounded mt-[10px] placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder=" سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویيژه ای داریم "
                                />
                            </div>
                            <section className="flex absolute top-[0] right-[230px]">
                                <p>نمایش این قسمت</p>
                                <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                                    <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                                </div>
                            </section>
                        </section>

                        {/* <titleSubsidiary2 .......................................................................................>  */}
                        <section className="w-[95%] relative flex justify-between my-[30px]">
                            <div className="text-[12px]">
                                <label htmlFor="Title132"
                                    className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                    عنوان
                                </label>
                                <input
                                    onChange={(e) => setTitleSubsidiary2(e.target.value)}
                                    value={titleSubsidiary2}
                                    id='Title132'
                                    className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder=" اساتید برتر و نمونه "
                                />
                            </div>
                            <div  >
                                <label htmlFor="Title133"
                                    className="text-[12px] text-[#7A7A7A]  pr-[10px]">
                                    زیر عنوان
                                </label>
                                <textarea
                                    value={subTitleSubsidiary2}
                                    onChange={(e) => setSubTitleSubsidiary2(e.target.value)}
                                    id='Title133'
                                    className="w-[400px] resize-none leading-5 px-[10px] py-[10px] h-[80px] rounded mt-[10px] placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder=" سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویيژه ای داریم "
                                />
                            </div>
                            <section className="flex absolute top-[0] right-[230px]">
                                <p>نمایش این قسمت</p>
                                <div onClick={() => setToggle2(!toggle2)} className={`${toggle2 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                                    <div className={`${toggle2 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                                </div>
                            </section>
                        </section>

                        {/* <titleSubsidiary3 .......................................................................................>  */}
                        <section className="w-[95%] relative flex justify-between">
                            <div className="text-[12px]">
                                <label htmlFor="Title134"
                                    className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                    عنوان
                                </label>
                                <input
                                    onChange={(e) => setTitleSubsidiary3(e.target.value)}
                                    value={titleSubsidiary3}
                                    id='Title134'
                                    className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder=" ویدیو و محتوای با کیفیت "
                                />
                            </div>
                            <div  >
                                <label htmlFor="Title135"
                                    className="text-[12px] text-[#7A7A7A]  pr-[10px]">
                                    زیر عنوان
                                </label>
                                <textarea
                                    value={subTitleSubsidiary3}
                                    onChange={(e) => setSubTitleSubsidiary3(e.target.value)}
                                    id='Title135'
                                    className="w-[400px] resize-none leading-5 px-[10px] py-[10px] h-[80px] rounded mt-[10px] placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder=" سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویيژه ای داریم "
                                />
                            </div>
                            <section className="flex absolute top-[0] right-[230px]">
                                <p>نمایش این قسمت</p>
                                <div onClick={() => setToggle3(!toggle3)} className={`${toggle3 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                                    <div className={`${toggle3 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                                </div>
                            </section>
                        </section>
                    </section>

                    <section className="flex text-[#fff] mt-[30px] text-[12px] w-[350px] justify-between m-auto">
                        <div className="relative ">
                            <div className="absolute top-[18px] right-[10px]">
                                <Play />
                            </div>
                            <button className="w-[170px] h-[45px] bg-[#0050A8] rounded"> پیش نمایش صفحه </button>
                        </div>
                        <button className="w-[170px] h-[45px] bg-[#008043] rounded"> ذخیره کردن تغییرات </button>
                    </section>
                </section>
            </section>
        </section>
    )
}
export default WhyYadesh