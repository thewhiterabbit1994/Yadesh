import { useState } from "react"
import AddCategories from "../../assets/svg/Modals/AddCategories"
const EditUser = ({ setEditUserModal, EditUserModal }) => {
    const [name, setName] = useState("")
    const [lastName, setlastName] = useState("")
    const [phone, setPhone] = useState("")
    return (
        <section
            className={`fixed transform transition-opacity duration-300 scale-0 z-50 w-full h-screen mt-[-200px] bg-[#00000071]  ${EditUserModal ? "scale-100 opacity-100" : "opacity-0 "
                }`}
        >
            <section
                className={` w-fit h-fit fixed inset-x-[35%] mt-[50px] rounded-[10px] bg-[#fff]`}
            >
                <section className="w-[400px] text-[12px] h-[450px] m-auto rounded-lg  bg-[#d5d5d556]">
                    <section className="flex w-[85%]  justify-between m-auto pt-[20px]">
                        <div className="flex w-[140px]  justify-between  ">
                            <AddCategories />
                            <p>ویرایش اطلاعات کاربر </p>
                        </div>
                        <div
                            onClick={() => setEditUserModal(false)}
                            className=" relative cursor-pointer w-[25px] h-[25px] bg-[#d5d5d5c9] rounded">
                            <p className=" right-[8px] cursor-pointer absolute text-[18px]">x</p>
                        </div>
                    </section>
                    <section className=" my-[30px] pr-[50px] w-[230px] flex justify-between">
                        <p>نام و نام خانوادگی</p>
                        <p>رها تمدن</p>
                    </section>
                    <section className="pr-[55px] mt-[15px] h-[30px]">
                        <p>ویرایش عکس کاربر</p>
                    </section>
                    <section className=" mt-[20px] flex justify-center ">
                        <div className="  flex flex-col">
                            <label htmlFor="company"
                                className=" text-[#000] mr-[10px] ">
                                شرکت
                            </label>
                            <select className="w-[300px]  mt-[10px] h-[40px]">
                                <option
                                    id='company'
                                >
                                    مخابرات ایران
                                </option>
                            </select>
                        </div>
                    </section>
                    <section className=" mt-[20px] flex justify-center ">
                        <div className="  flex flex-col">
                            <label htmlFor="phone1"
                                className=" text-[#000] mr-[10px] ">
                                شماره تلفن
                            </label>
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                id='phone1'
                                className="w-[300px] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                                placeholder=" 02188779966 "
                            />
                        </div>
                    </section>
                    <section className="flex justify-center text-[#fff] mt-[30px]">
                        <button className="w-[300px] h-[40px] rounded bg-[#008043]">افزودن به لیست </button>
                    </section>
                </section>
            </section>
        </section >
    )
}
export default EditUser