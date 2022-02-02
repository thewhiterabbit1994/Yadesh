import { useState } from "react"
import LogoGoogleMap from "../../assets/svg/AdminPanelCourses/LogoGoogleMap"

const ContactYadesh = () => {
    const [toggle, setToggle] = useState(false)
    const [titlevalue, setTitleValue] = useState("")
    const [subTitleValue, setSubTitleValue] = useState("")
    const [phoneValue, setphoneValue] = useState("")
    const [addresValue, setaddresValue] = useState("")

    return (
        <section className="w-full h-[500px]  mt-[10px] ">
            <section className="bg-[#F5F5F5] rounded flex justify-between h-[500px]">
                <section className="w-[35%] pt-[10px]">
                    <section className="w-[93%] h-[550px] m-auto  my-[20px]  text-[12px]">

                        <div className="text-[12px]">
                            <label htmlFor="Title29"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                عنوان
                            </label>
                            <input
                                onChange={(e) => setTitleValue(e.target.value)}
                                value={titlevalue}
                                id='Title29'
                                className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="تماس با یادش "
                            />
                        </div>
                        <div className="mt-[30px]" >
                            <label htmlFor="Title30"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                زیر عنوان
                            </label>
                            <input
                                value={subTitleValue}
                                onChange={(e) => setSubTitleValue(e.target.value)}
                                id='Title30'
                                className="w-[400px] px-[10px] py-[10px] leading-6  h-[40px] rounded my-[25px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="  اطلاعات تماس و موقعیت ما بر روی نقشه "
                            />
                        </div>

                        <div className="text-[12px]">
                            <label htmlFor="Title31"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                شماره تلفن (به صورت کامل وارد کنید)
                            </label>
                            <input
                                onChange={(e) => setphoneValue(e.target.value)}
                                value={phoneValue}
                                id='Title31'
                                className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="021-775566644 "
                            />
                        </div>
                        <div className="mt-[30px]" >
                            <label htmlFor="Title33"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                زیر عنوان
                            </label>
                            <textarea
                                value={addresValue}
                                onChange={(e) => setaddresValue(e.target.value)}
                                id='Title33'
                                className="w-[400px] px-[10px] py-[10px] leading-6 resize-none h-[80px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder=" تهران - میدان انقلاب - خ فخر رازی - روبروی دانشگاه تهران - پلاک 20  "
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
                    <section className="w-[170px] h-[45px] rounded bg-[#0050A8] text-[12px] m-auto  cursor-pointer mt-[50px]">
                        <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                            <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    )
}
export default ContactYadesh
