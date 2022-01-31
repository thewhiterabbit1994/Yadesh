import { useState } from "react"
import LogoGoogleMap from "../../assets/svg/AdminPanelCourses/LogoGoogleMap"

const ContactYadesh = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <section className="w-full h-[500px]  mt-[10px] ">
            <section className="bg-[#F5F5F5] rounded flex justify-between h-[500px]">
                <section className="w-[35%] pt-[10px]">
                    <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
                        <div>
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="ماموریت یادش"
                                />
                            </lable>
                        </div>
                        <div className="my-[30px]">
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">توضیحات</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="روز برای یادگیری در سطح است . هدف ما در یادش بالا بردن .. ..."
                                />
                            </lable>
                        </div>
                        <div className="my-[30px]">
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"> شماره تلفن (به صورت کامل وارد کنید ) </p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="روز برای یادگیری در سطح است . هدف ما در یادش بالا بردن .. ..."
                                />
                            </lable>
                        </div>
                        <div className="my-[30px]">
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"> آدرس </p>
                            <lable>
                                <input className="w-[400px] h-[70px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="تهران - میدان انقلاب - خ کارگر شمالی - خ اعتمادی - ک رها "
                                />
                            </lable>
                        </div>
                    </section>
                </section>
                <section className="w-[50%]">
                    <div className="my-[30px]">
                        <p className="text-[12px] w-[400px] text-[#7A7A7A] mb-[15px] pr-[10px]">لوگوی مشتری (فرمت مورد نظر png یا svg  می باشد )</p>
                        <section className="flex w-[500px]">
                            <lable>
                                <input className="w-[300px] h-[40px] rounded placeholder:w-[200px]  placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="@35456.987426461z"
                                />
                            </lable>
                            <div className=" flex items-center justify-around relative w-[150px] h-[36px] rounded text-[#000]  text-[8px] bg-[#E6E9EB] font-semibold ">
                                <p>انتخاب موقعیت در گوگل مپ</p>
                                <div className="absolute left-[10px] ">
                                    <LogoGoogleMap />
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="w-[400px] text-[12px] flex pt-[20px] text-[#7A7A7A]">
                        <p className="w-[150px] ml-[50px]">لوگو (نمایش داده شود)</p>
                        <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    )
}
export default ContactYadesh
