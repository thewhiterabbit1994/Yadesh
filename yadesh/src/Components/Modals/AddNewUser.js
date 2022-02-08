import { useState } from "react"
import AddCategories from "../../assets/svg/Modals/AddCategories"


const AddNewUser = ({AddUserModal , setAddUserModal}) => {
    const [name, setName] = useState("")
    const [lastName, setlastName] = useState("")
    const [phone, setPhone] = useState("")
    return (
        <section
            className={`fixed transform transition-opacity duration-300 scale-0 z-50 w-full h-screen mt-[-100px] bg-[#00000071]  ${AddUserModal ? "scale-100 opacity-100" : "opacity-0 "
                }`}
        >
            <section
                className={` w-fit h-fit fixed inset-x-[35%] mt-[20px] rounded-[10px] bg-[#fff]`}
            >
                <section className="w-[400px] text-[12px] h-[520px] m-auto rounded-lg  bg-[#d5d5d556]">
                    <section className="flex w-[85%]  justify-between m-auto pt-[20px]">
                        <div className="flex w-[120px]  justify-between  ">
                            <AddCategories />
                            <p>افزودن کاربر جدید</p>
                        </div>
                        <div className=" relative cursor-pointer w-[25px] h-[25px] bg-[#d5d5d5c9] rounded">
                            <p 
                            onClick={()=>setAddUserModal(false)}
                            className=" right-[8px] cursor-pointer absolute text-[18px]">x</p>
                        </div>
                    </section>
                    <section className=" mt-[20px] flex justify-center">
                        <div className=" flex flex-col">
                            <label htmlFor="name11"
                                className=" text-[#000]  mr-[10px] ">
                                نام
                            </label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                id='name11'
                                className="w-[300px] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                                placeholder=" رها "
                            />
                        </div>
                    </section>
                    <section className=" mt-[20px] flex justify-center ">
                        <div className=" flex flex-col">
                            <label htmlFor="lastname11"
                                className=" text-[#000] mr-[10px] ">
                                نام خانوادگی
                            </label>
                            <input
                                onChange={(e) => setlastName(e.target.value)}
                                value={lastName}
                                id='lastname11'
                                className="w-[300px] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                                placeholder=" تمدن "
                            />
                        </div>
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
        </section>
    )
}
export default AddNewUser