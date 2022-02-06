import { useState } from "react"
import Company from "../../assets/svg/AdminPanelCourses/Company"

const AddNewSubscription = () => {
    const [price, setPrice] = useState("")
    const [CompanyName, setCompanyName] = useState("")
    const [coursetoggle, setcoursetoggle] = useState(true);

    return (
        <section className="w-[450px] text-[12px] h-[510px] m-auto rounded-lg  bg-[#d5d5d556]">
            <section className="flex w-[85%]  justify-between m-auto pt-[20px]">
                <div className="flex w-[110px]  justify-between  ">
                    <Company />
                    <p> ویرایش اشتراک</p>
                </div>
                <div className=" relative cursor-pointer w-[25px] h-[25px] bg-[#d5d5d5c9] rounded">
                    <p className=" right-[8px] absolute text-[18px]">x</p>
                </div>
            </section>
            <section className="mt-[20px] m-auto w-[400px] pr-[10px]">
                <div className=" flex flex-col">
                    <label htmlFor="CompanyName1"
                        className=" text-[#000] mr-[10px] ">
                        نام شرکت
                    </label>
                    <input
                        onChange={(e) => setCompanyName(e.target.value)}
                        value={CompanyName}
                        id='CompanyName1'
                        className="w-[380px] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                        placeholder=" سازمان فناوری اطلاعات و ارتباطات ایران "
                    />
                </div>
            </section>
            <section className=" mt-[20px] flex justify-center ">
                <div className="  flex flex-col">
                    <label htmlFor="company"
                        className=" text-[#000] mr-[10px] ">
                        مدت اشتراک
                    </label>
                    <select className="w-[380px] pr-[15px]  mt-[10px] h-[40px]">
                        <option
                            id='company'
                        >
                            6 ماه
                        </option>
                    </select>
                </div>
            </section>

            <section className=" mt-[40px] h-[40px] w-[380px] m-auto flex justify-between">
                <p>هزینه اشتراک</p>
                <section className="flex">
                    <p className={`ml-[-10px] font-semibold text-[10px] ${!coursetoggle ? "text-[#000]" : "text-[#7A7A7A]"} `}>ماهیانه</p>
                    <div
                        onClick={() => setcoursetoggle(!coursetoggle)}
                        className={`${coursetoggle
                            ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                            : "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                            }`}
                    >
                        <div
                            className={`${coursetoggle
                                ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                                : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                                }`}
                        ></div>
                    </div>
                    <p className={`mr-[10px] text-[10px] font-semibold ${coursetoggle ? "text-[#000]" : "text-[#7A7A7A]"} `}>سالانه</p>
                </section>
            </section>

            <section className=" mt-[20px] flex justify-center ">
                <div className=" flex flex-col">
                    <label htmlFor="lastname11"
                        className=" text-[#000] mr-[10px] ">
                        هزینه اشتراک
                    </label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        id='lastname11'
                        className="w-[380px] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                        placeholder=" 12/500/000 ریال "
                    />
                </div>
            </section>
            <section className="flex justify-center text-[#fff] mt-[40px]">
                <button className="w-[380px] h-[40px] rounded bg-[#008043]"> صدور فاکتور </button>
            </section>
        </section>
    )
}
export default AddNewSubscription