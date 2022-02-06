import { useState } from "react"
import Company from "../../assets/svg/AdminPanelCourses/Company"
import Trash from "../../assets/svg/AdminPanelCourses/Trash"

const AddCompany = () => {
    const [nymber, setNymber] = useState("")
    const [nameCompany, setNameCompany] = useState("")

    return (
        <section className="w-[450px] text-[12px] h-[540px] m-auto rounded-lg  bg-[#d5d5d556]">
            <section className="flex w-[85%]  justify-between m-auto pt-[20px]">
                <div className="flex w-[130px]  justify-between  ">
                    <Company />
                    <p> افزودن شرکت جدید</p>
                </div>
                <div className=" relative cursor-pointer w-[25px] h-[25px] bg-[#d5d5d5c9] rounded">
                    <p className=" right-[8px] absolute text-[18px]">x</p>
                </div>
            </section>
            <section className=" mt-[20px] flex justify-center ">
                <div className=" flex flex-col">
                    <label htmlFor="nameCompany"
                        className=" text-[#000] mr-[10px] ">
                        نام شرکت
                    </label>
                    <input
                        onChange={(e) => setNameCompany(e.target.value)}
                        value={nameCompany}
                        id='nameCompany'
                        className="w-[380px] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                        placeholder=" سازمان فناوری و اطلاعات ایران "
                    />
                </div>
            </section>

            <section>
                <div className=" flex flex-col mt-[20px] m-auto w-[380px]">
                    <p htmlFor="nameCompany"
                        className=" text-[#000] mr-[10px] ">
                        کارشناس آموزش
                    </p>
                    <section className="w-[380px] h-[60px] flex items-center bg-[#fff]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]">
                        <div className="w-[150px] flex justify-center items-center h-[40px] mr-3  bg-[#d5d5d5c9] rounded-lg">
                            <p>رها تمدن</p>
                            <div className=" cursor-pointer mr-3 mt-[2px]"> 
                                <Trash />
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section className=" mt-[20px] flex justify-center ">
                <div className=" flex flex-col">
                    <label htmlFor="lastname11"
                        className=" text-[#000] mr-[10px] ">
                        تعداد کارمندان
                    </label>
                    <input
                        onChange={(e) => setNymber(e.target.value)}
                        value={nymber}
                        id='lastname11'
                        className="w-[380px] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                        placeholder="1200 "
                        type="number"
                    />
                </div>
            </section>
            <section className=" mt-[20px] flex justify-center ">
                <div className="  flex flex-col">
                    <label htmlFor="company"
                        className=" text-[#000] mr-[10px] ">
                        موقعیت شرکت
                    </label>
                    <select className="w-[380px] pr-[15px]  mt-[10px] h-[40px]">
                        <option
                            id='company'
                        >
                            خوزستان - اهواز
                        </option>
                    </select>
                </div>
            </section>
            <section className="flex justify-center text-[#fff] mt-[40px]">
                <button className="w-[380px] h-[40px] rounded bg-[#008043]"> افزودن به لیست </button>
            </section>
        </section>
    )
}
export default AddCompany