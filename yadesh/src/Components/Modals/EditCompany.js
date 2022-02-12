import { useState } from "react"
import Company from "../../assets/svg/AdminPanelCourses/Company"
import Trash from "../../assets/svg/AdminPanelCourses/Trash"

const EditCompany = ({ EditComponyModal, setEditComponyModal }) => {
    const [nymber, setNymber] = useState("")
    const [nameCompany, setNameCompany] = useState("")

    return (

        <section
            className={`fixed transform transition-opacity duration-300 scale-0 z-50 w-full h-screen mt-[-200px] bg-[#00000071]  ${EditComponyModal ? "scale-100 opacity-100" : "opacity-0 "
                }`}
        >
            <section
                className={` w-fit h-fit fixed inset-x-[35%] mt-[20px] rounded-[10px] bg-[#fff]`}
            >
                <section className="w-[450px] text-[12px] h-[540px] m-auto rounded-lg  bg-[#d5d5d556]">
                    <section className="flex w-[85%]  justify-between m-auto pt-[20px]">
                        <div className="flex w-[100px]  justify-between  ">
                            <Company />
                            <p> ویرایش شرکت </p>
                        </div>
                        <div className=" relative cursor-pointer w-[25px] h-[25px] bg-[#d5d5d5c9] rounded">
                            <p
                                onClick={() => setEditComponyModal(false)}
                                className=" right-[8px] cursor-pointer absolute text-[18px]">x</p>
                        </div>
                    </section>
                    <section className=" mt-[20px] pr-[35px] ">
                        <div className=" flex flex-col">
                            <label htmlFor="nameCompany"
                                className=" text-[#000] mr-[10px] ">
                                نام شرکت
                            </label>
                            <p className="mt-[10px]">سازمان فناوری و اطلاعات ایران</p>
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
            </section>
        </section>

    )
}
export default EditCompany