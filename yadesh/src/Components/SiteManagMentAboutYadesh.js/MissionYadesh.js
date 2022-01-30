import { useState } from "react"

const MissionYadesh = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <section className="w-full h-[300px]  mt-[10px] ">
            <section className="bg-[#F5F5F5] rounded flex justify-between h-[300px]">
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
                                <input className="w-[400px] h-[70px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="روز برای یادگیری در سطح است . هدف ما در یادش بالا بردن .. ..."
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
                </section>
            </section>
            <section className="w-[200px] h-[45px] rounded bg-[#008043] text-[12px] mt-[20px] m-auto cursor-pointer">
                <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                    <p className="text-[15px]"> + </p>
                    <p className="mr-[5px]">افزودن بخش های جدید</p>
                </div>
            </section>

        </section>
    )
}
export default MissionYadesh
