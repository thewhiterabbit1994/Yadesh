import imgWhyYadesh from "../../assets/Img/imgWhyYadesh.png"
import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar"
import { useState } from "react"
const WhyYadesh = () => {
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    const [titlevalue, setTitleValue] = useState("")
    const [subTitleValue, setSubTitleValue] = useState("")

    const [Subsidiarytitle1value, setSubsidiarytitle1value] = useState("")
    const [SubsidiarysubTitle1Value, setSubsidiarysubTitle1Value] = useState("")

    const [Subsidiarytitle2value, setSubsidiarytitle2value] = useState("")
    const [SubsidiarysubTitle2Value, setSubsidiarysubTitle2Value] = useState("")

    const [Subsidiarytitle3value, setSubsidiarytitle3value] = useState("")
    const [SubsidiarysubTitle3Value, setSubsidiarysubTitle3Value] = useState("")


    return (
        <section className="w-full h-[830px] bg-[#F5F5F5] mt-[10px] rounded">
            <section className="w-[95%] m-auto flex justify-between">
                <section className="w-[35%] pt-[10px] ">
                    <section className="w-[93%] h-[550px] m-auto  my-[15px] text-[12px]">

                        {/* maineTitle .................................................................. */}
                        <div >
                            <label htmlFor="Title100"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                عنوان
                            </label>
                            <input
                                onChange={(e) => setTitleValue(e.target.value)}
                                value={titlevalue}
                                id='Title100'
                                className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder=" چرا ما از بقیه متفاوت هستیم ؟"
                            />
                        </div>
                        <div className="my-[15px]" >
                            <label htmlFor="Title101"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                زیر عنوان
                            </label>
                            <input
                                value={subTitleValue}
                                onChange={(e) => setSubTitleValue(e.target.value)}
                                id='Title101'
                                className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder=" دلیل تفاوت یادش با دیگران "
                            />
                        </div>

                        <div className="text-[12px] text-[#7A7A7A] w-[500px]">
                            <p>تصویر</p>
                            <img className="w-[400px] h-[380px] rounded-lg mt-[10px]" src={imgWhyYadesh} />
                            <div className="text-[10px] flex mt-[20px] px-[10px] text-[#7A7A7A]">
                                <Ekhtar />
                                <p className="mr-[10px] w-[375px]">حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت اتوماتیک مطابق با سایز container باشد.</p>
                            </div>
                        </div>

                    </section>
                </section>
                <section className="w-[50%] h-[500px] text-[12px] text-[#7A7A7A] mt-[30px]">
                    <section className="w-[500px] text-[12px] mt-[5px]  mr-[10px] text-[#7A7A7A]  h-[450px]">
                        <section className="w-[400px] relative">

                            {/* Subsidiarytitle1 ............................................................... */}
                            <div >
                                <label htmlFor="Title103"
                                    className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                    عنوان فرعی 1
                                </label>
                                <input
                                    onChange={(e) => setSubsidiarytitle1value(e.target.value)}
                                    value={Subsidiarytitle1value}
                                    id='Title103'
                                    className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder=" تنوع موضوع و مهارت در یادش"
                                />
                            </div>
                            <div className="mt-[15px]" >
                                <label htmlFor="Title104"
                                    className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                    زیر عنوان فرعی 1
                                </label>
                                <textarea
                                    value={SubsidiarysubTitle1Value}
                                    onChange={(e) => setSubsidiarysubTitle1Value(e.target.value)}
                                    id='Title104'
                                    className="w-[400px] resize-none h-[75px] leading-6 rounded mt-[15px] placeholder:text-[11px] placeholder:px-[10px] placeholder:py-[10px]"
                                    placeholder=" سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویژه ای داریم "
                                />
                            </div>

                            <section className="flex absolute top-[0] left-[0]">
                                <p>نمایش این قسمت</p>
                                <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                                    <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                                </div>

                            </section>
                        </section>
                        <section className="w-[400px] relative top-[20px]">

                            {/* Subsidiarytitle2 ................................................... */}
                            <div >
                                <label htmlFor="Title110"
                                    className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                    عنوان فرعی 2
                                </label>
                                <input
                                    onChange={(e) => setSubsidiarytitle2value(e.target.value)}
                                    value={Subsidiarytitle2value}
                                    id='Title110'
                                    className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="اساتید برتر و نمونه"
                                />
                            </div>
                            <div className="my-[15px]" >
                                <label htmlFor="Title111"
                                    className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                    زیر عنوان فرعی 2
                                </label>
                                <textarea
                                    value={SubsidiarysubTitle2Value}
                                    onChange={(e) => setSubsidiarysubTitle2Value(e.target.value)}
                                    id='Title111'
                                    className="w-[400px] resize-none h-[75px] leading-6 rounded mt-[15px] placeholder:text-[11px] placeholder:px-[10px] placeholder:py-[10px]"
                                    placeholder=" سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویژه ای داریم "
                                />
                            </div>

                            <section className="flex absolute top-[0] left-[0]">
                                <p>نمایش این قسمت</p>
                                <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                                    <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                                </div>

                                <section className="flex absolute top-[0] left-[0]">
                                    <p>نمایش این قسمت</p>
                                    <div onClick={() => setToggle2(!toggle2)} className={`${toggle2 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                                        <div className={`${toggle2 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                                    </div>
                                </section>
                            </section>


                            <section className="w-[400px] relative top-[10px]">

                                {/* Subsidiarytitle3.............................................................. */}
                                <div >
                                    <label htmlFor="Title112"
                                        className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                        عنوان فرعی 3
                                    </label>
                                    <input
                                        onChange={(e) => setSubsidiarytitle3value(e.target.value)}
                                        value={Subsidiarytitle3value}
                                        id='Title112'
                                        className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                        placeholder="ویدیو و محتوای با کیفیت"
                                    />
                                </div>
                                <div className="my-[15px]" >
                                    <label htmlFor="Title113"
                                        className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                        زیر عنوان فرعی 3
                                    </label>
                                    <textarea
                                        value={SubsidiarysubTitle3Value}
                                        onChange={(e) => setSubsidiarysubTitle3Value(e.target.value)}
                                        id='Title113'
                                        className="w-[400px] resize-none h-[75px] leading-6 rounded mt-[15px] placeholder:text-[11px] placeholder:px-[10px] placeholder:py-[10px]"
                                        placeholder=" سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویژه ای داریم "
                                    />
                                </div>

                                <section className="flex absolute top-[0] left-[0]">
                                    <p>نمایش این قسمت</p>
                                    <div onClick={() => setToggle3(!toggle3)} className={`${toggle3 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                                        <div className={`${toggle3 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                                    </div>
                                </section>
                            </section>


                        </section>
                    </section>
                </section>
            </section>
            <section className="w-[170px] h-[45px] rounded bg-[#0050A8] text-[12px] m-auto cursor-pointer mt-[130px]">
                <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                    <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                </div>
            </section>
        </section>
    )
}
export default WhyYadesh