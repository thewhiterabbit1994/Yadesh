
import Danger from "../../assets/svg/AdminPanelCourses/Danger"
import { useState } from "react"
const HeroSighin = () => {
    const [titlevalue, setTitleValue] = useState("")
    const [subTitleValue, setSubTitleValue] = useState("")
    return (
        <section className="w-full h-[350px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
            <section className="w-[47%] ">
                <section className="w-[93%] h-[300px] m-auto  my-[20px] ">


                    <div >
                        <label htmlFor="title1"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            عنوان
                        </label>
                        <input
                            onChange={(e) => setTitleValue(e.target.value)}
                            value={titlevalue}
                            id='title1'
                            className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder="درس های ویژه امروز"
                        />
                        <div className="flex text-[#AA0029] text-[10px] mt-[15px]">
                            <Danger />
                            <p className="mr-[10px]"> فیلد عنوان نمی تواند خالی باشد</p>
                        </div>
                    </div>

                    <div className="mt-[30px]" >
                        <label htmlFor="title2"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            زیر عنوان
                        </label>
                        <input
                            value={subTitleValue}
                            onChange={(e) => setSubTitleValue(e.target.value)}
                            id='title2'
                            className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder="برای شما"
                        />
                    </div>

                    <section className="w-[170px] h-[45px] rounded bg-[#0050A8] text-[12px] m-auto cursor-pointer mt-[40px]">
                        <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                            <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                        </div>
                    </section>

                </section>
            </section>
        </section>
    )
}
export default HeroSighin