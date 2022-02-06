import { useState } from "react"
import joinToYadesh from "../../assets/Img/joinToYadesh.png"
import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar"

const JoinToYadesh = () => {
    const [toggle, setToggle] = useState(true)

    const [titlevalue, setTitleValue] = useState("")
    const [subTitleValue, setSubTitleValue] = useState("")

    return (
        <section className="w-full h-[350px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
            <section className="w-[47%] ">

                <section className="w-[93%] h-[300px] m-auto  my-[20px] ">
                    <div >
                        <label htmlFor="Title150"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            عنوان
                        </label>
                        <input
                            onChange={(e) => setTitleValue(e.target.value)}
                            value={titlevalue}
                            id='Title150'
                            className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder="همین امروز یادش را انتخاب کنید"
                        />
                    </div>
                    <div className="my-[15px]" >
                        <label htmlFor="Title151"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            زیر عنوان
                        </label>
                        <input
                            value={subTitleValue}
                            onChange={(e) => setSubTitleValue(e.target.value)}
                            id='Title151'
                            className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder=" با انتخاب یادش به جمع سازمان های حرفه ای بپیوندید "
                        />
                    </div>
                    <section className=" w-[300px] flex text-[12px] text-[#7A7A7A] justify-between ">
                        <p>این قسمت نمایش داده شود</p>
                        <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                            <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                        </div>
                    </section>
                </section>

                <section className="w-[170px] h-[45px] rounded bg-[#0050A8] mt-[-60px] text-[12px] m-auto cursor-pointer">
                    <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                        <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                    </div>
                </section>
                
            </section>

            <section className="w-[55%] mt-[20px] text-[12px] text-[#7A7A7A]">
                <p>تصویر</p>
                <img className="w-[500px] h-[200px] rounded-lg mt-[15px]" src={joinToYadesh} />
                <div className="text-[10px] flex mt-[20px] px-[10px] text-[#7A7A7A]">
                    <Ekhtar />
                    <p className="mr-[10px] w-[500px]">حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت اتوماتیک مطابق با سایز container باشد.</p>
                </div>
            </section>
        </section>
    )
}
export default JoinToYadesh