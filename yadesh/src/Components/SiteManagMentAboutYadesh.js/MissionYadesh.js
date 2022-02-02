import { useState } from "react"

const MissionYadesh = () => {
    const [toggle, setToggle] = useState(false)
    const [titlevalue, setTitleValue] = useState("")
    const [subTitleValue, setSubTitleValue] = useState("")

    return (
        <section className="w-full h-[300px]  mt-[10px] ">
            <section className="bg-[#F5F5F5] rounded flex justify-between h-[300px]">
                <section className="w-[35%] pt-[10px]">
                    <section className="w-[93%] h-[550px] m-auto  my-[20px] ">

                        <div className="text-[12px]">
                            <label htmlFor="Title27"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                عنوان
                            </label>
                            <input
                                onChange={(e) => setTitleValue(e.target.value)}
                                value={titlevalue}
                                id='Title27'
                                className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder=" ماموریت یادش "
                            />
                        </div>
                        <div className="mt-[30px]" >
                            <label htmlFor="Title28"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                زیر عنوان
                            </label>
                            <textarea
                                value={subTitleValue}
                                onChange={(e) => setSubTitleValue(e.target.value)}
                                id='Title28'
                                className="w-[400px] px-[10px] py-[10px] leading-6 resize-none h-[80px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="هدف ما در یادش بالا بردن سطح کیفیت تجربه ی کاربری در استفاده از پلتفرم های آموزشی است."
                            />
                        </div>


                    </section>
                </section>
                <section className="w-[50%]">
                    <div className="my-[30px]">
                        <p className="text-[12px] w-[400px] text-[#7A7A7A] mb-[15px] pr-[10px]">لوگوی مشتری (فرمت مورد نظر png یا svg  می باشد )</p>
                        <section className="flex w-[500px]">
                            <lable>
                                <input className="w-[300px] h-[40px] rounded placeholder:w-[200px]  placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="melat-bank-logo.png "
                                />
                            </lable>
                            <button className="w-[100px] rounded text-[#fff]  text-[10px] bg-[#008043]">جستجو فایل</button>
                        </section>
                    </div>
                    <section className="w-[400px] text-[12px] flex pt-[20px] text-[#7A7A7A]">
                        <p className="w-[150px] ml-[50px]">لوگو (نمایش داده شود)</p>
                        <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>

                    <section className="w-[170px] h-[45px] rounded bg-[#0050A8] text-[12px] m-auto  cursor-pointer mt-[50px]">
                        <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                            <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                        </div>
                    </section>
                    
                </section>
            </section>
            <section className="w-[200px] h-[45px] rounded bg-[#008043] text-[12px] mt-[40px] m-auto cursor-pointer">
                <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                    <p className="text-[15px]"> + </p>
                    <p className="mr-[5px]">افزودن بخش های جدید</p>
                </div>
            </section>

        </section>
    )
}
export default MissionYadesh
