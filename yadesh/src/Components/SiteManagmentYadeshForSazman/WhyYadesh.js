import imgWhyYadesh from "../../assets/Img/imgWhyYadesh.png"
import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar"
import { useState } from "react"
const WhyYadesh = () => {
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)

    return (
        <section className="w-full h-[700px] bg-[#F5F5F5] mt-[10px] rounded">
            <section className="w-[95%] m-auto flex justify-between">
                <section className="w-[35%] pt-[10px] ">
                    <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
                        <div>
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="مشتریان یادش"
                                />
                            </lable>
                        </div>
                        <div className="my-[20px]">
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="یادش از انتخاب شما تشکر میکند"
                                />
                            </lable>
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
                            <div>
                                <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان فرعی 1 </p>
                                <lable>
                                    <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                        placeholder="مشتریان یادش"
                                    />
                                </lable>
                            </div>
                            <div className="my-[20px]">
                                <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان فرعی 1</p>
                                <lable>
                                    <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                        placeholder="یادش از انتخاب شما تشکر میکند"
                                    />
                                </lable>
                            </div>
                            <section className="flex absolute top-[0] left-[0]">
                                <p>نمایش این قسمت</p>
                                <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                                    <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                                </div>
                            </section>
                        </section>


                        <section className="w-[400px] relative top-[20px]">
                            <div>
                                <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان فرعی 2 </p>
                                <lable>
                                    <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                        placeholder="مشتریان یادش"
                                    />
                                </lable>
                            </div>
                            <div className="my-[20px]">
                                <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"> زیر عنوان فرعی 2</p>
                                <lable>
                                    <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                        placeholder="یادش از انتخاب شما تشکر میکند"
                                    />
                                </lable>
                            </div>
                            <section className="flex absolute top-[0] left-[0]">
                                <p>نمایش این قسمت</p>
                                <div onClick={() => setToggle2(!toggle2)} className={`${toggle2 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                                    <div className={`${toggle2 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                                </div>
                            </section>
                        </section>


                        <section className="w-[400px] relative top-[40px]">
                            <div>
                                <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان فرعی 3 </p>
                                <lable>
                                    <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                        placeholder="مشتریان یادش"
                                    />
                                </lable>
                            </div>
                            <div className="my-[20px]">
                                <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"> زیر عنوان فرعی 3</p>
                                <lable>
                                    <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                        placeholder="یادش از انتخاب شما تشکر میکند"
                                    />
                                </lable>
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
    )
}
export default WhyYadesh