import { useState } from "react"
const ContactForm = () => {
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(true)
    const [toggle3, setToggle3] = useState(true)
    const [toggle4, setToggle4] = useState(false)
    const [toggle5, setToggle5] = useState(true)
    return (
        <section className="w-full  mt-[10px] bg-[#F5F5F5] rounded-lg">
            <section className="w-[90%] h-[400px] text-[12px]  pt-[30px] pr-[20px]  text-[#7A7A7A] flex justify-between flex-wrap ">
                <section className="w-[400px] relative flex justify-between  ">
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"> فیلد ورودی 1 </p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="نام و نام خانوادگی "
                            />
                        </lable>
                    </div>
                    <section className="flex absolute top-[0] right-[230px]">
                        <p>نمایش این قسمت</p>
                        <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>


                <section className="w-[400px] relative flex justify-between ">
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">فیلد ورودی 2  </p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="ایمیل آدرس"
                            />
                        </lable>
                    </div>
                    <section className="flex absolute top-[0] right-[230px]">
                        <p>نمایش این قسمت</p>
                        <div onClick={() => setToggle2(!toggle2)} className={`${toggle2 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle2 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>


                <section className="w-[400px] relative flex justify-between my-[40px] ">
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">فیلد ورودی 3 </p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="عنوان شما در سازمان "
                            />
                        </lable>
                    </div>
                    <section className="flex absolute top-[0] right-[230px]">
                        <p>نمایش این قسمت</p>
                        <div onClick={() => setToggle3(!toggle3)} className={`${toggle3 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle3 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>
                

                <section className="w-[400px] relative flex justify-between my-[40px]">
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">فیلد ورودی 4 </p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder=" نام سازمان شما   "
                            />
                        </lable>
                    </div>
                    <section className="flex absolute top-[0] right-[230px]">
                        <p>نمایش این قسمت</p>
                        <div onClick={() => setToggle4(!toggle4)} className={`${toggle4 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle4 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>


                <section className="w-[400px] relative flex justify-between ">
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">فیلد ورودی 5 </p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder=" متن پیام "
                            />
                        </lable>
                    </div>
                    <section className="flex absolute top-[0] right-[230px]">
                        <p>نمایش این قسمت</p>
                        <div onClick={() => setToggle5(!toggle5)} className={`${toggle5 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle5 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>

            </section>
        </section>
    )
}
export default ContactForm