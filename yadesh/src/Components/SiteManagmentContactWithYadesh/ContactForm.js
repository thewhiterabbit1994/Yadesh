import { useState } from "react"
import Play from "../../assets/svg/AdminPanelCourses/Play"

const ContactForm = () => {
    const [toggle, setToggle] = useState(true)
    const [toggle2, setToggle2] = useState(true)
    const [toggle3, setToggle3] = useState(true)
    const [toggle4, setToggle4] = useState(true)
    const [toggle5, setToggle5] = useState(true)

    const [fullName, setFullName] = useState("")
    const [nameInSazman, setNameInSazman] = useState("")
    const [email, setEmail] = useState("")
    const [MessageText, setMessageText] = useState("")
    const [YourTitleInSazman, setYourTitleInSazman] = useState("")

    return (
        <section className="w-full  mt-[10px] bg-[#F5F5F5] rounded-lg">
            <section className="w-full h-[430px] text-[12px]  pt-[30px] pr-[20px]  text-[#7A7A7A] flex justify-around flex-wrap  ">

                <section className="w-[400px] relative flex justify-between  ">
                    <div className="text-[12px]">
                        <label htmlFor="Title140"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            فیلد ورودی 1
                        </label>
                        <input
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullName}
                            id='Title140'
                            className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder=" نام و نام خانوادگی "
                        />
                    </div>
                    <section className="flex absolute top-[0] right-[230px]">
                        <p>نمایش این قسمت</p>
                        <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>


                <section className="w-[400px] relative flex justify-between ">
                    <div className="text-[12px]">
                        <label htmlFor="Title143"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            فیلد ورودی 4
                        </label>
                        <input
                            onChange={(e) => setMessageText(e.target.value)}
                            value={MessageText}
                            id='Title143'
                            className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder=" متن پیام"
                        />
                    </div>
                    <section className="flex absolute top-[0] right-[230px]">
                        <p>نمایش این قسمت</p>
                        <div onClick={() => setToggle4(!toggle4)} className={`${toggle4 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle4 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>



                <section className="w-[400px] relative flex justify-between my-[40px] ">
                    <div className="text-[12px]">
                        <label htmlFor="Title141"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            فیلد ورودی 2
                        </label>
                        <input
                            onChange={(e) => setNameInSazman(e.target.value)}
                            value={nameInSazman}
                            id='Title141'
                            className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder="نام شما در سازمان"
                        />
                    </div>
                    <section className="flex absolute top-[0] right-[230px]">
                        <p>نمایش این قسمت</p>
                        <div onClick={() => setToggle2(!toggle2)} className={`${toggle2 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle2 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>


                <section className="w-[400px] relative flex justify-between my-[40px] ">
                    <div className="text-[12px]">
                        <label htmlFor="Title144"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            فیلد ورودی 5
                        </label>
                        <input
                            onChange={(e) => setYourTitleInSazman(e.target.value)}
                            value={YourTitleInSazman}
                            id='Title144'
                            className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder=" عنوان شما در سازمان"
                        />
                    </div>
                    <section className="flex absolute top-[0] right-[230px]">
                        <p>نمایش این قسمت</p>
                        <div onClick={() => setToggle5(!toggle5)} className={`${toggle5 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle5 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>


                <section className="w-[400px] relative flex justify-between  ">
                    <div className="text-[12px]">
                        <label htmlFor="Title142"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            فیلد ورودی 3
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            id='Title142'
                            className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder=" ایمیل آدرس"
                        />
                    </div>
                    <section className="flex absolute top-[0] right-[230px]">
                        <p>نمایش این قسمت</p>
                        <div onClick={() => setToggle3(!toggle3)} className={`${toggle3 ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle3 ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
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
    )
}
export default ContactForm