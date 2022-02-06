import AddTeacher from "../../assets/svg/Modals/AddTeacher"
import ArrowTop from "../../assets/svg/Modals/ArrowTop"
import imgMan from "../../assets/Img/PlayerEpisode/imgman.png"
import { useState } from "react"
const AddUser = () => {
    const [name, setName] = useState("")
    const [lastName, setlastName] = useState("")
    return (
        <section className="w-[350px] h-[430px] m-auto rounded-lg  bg-[#d5d5d556]">
            <section className="flex w-[90%]  justify-between m-auto pt-[20px]">
                <div className="flex w-[115px] text-[10px] justify-between  ">
                    <AddTeacher />
                    <p>افزودن مدرس جدید</p>
                </div>
                <div className=" relative cursor-pointer w-[25px] h-[25px] bg-[#d5d5d5c9] rounded">
                    <p className=" right-[8px] absolute text-[18px]">x</p>
                </div>
            </section>
            <section className="text-[10px] mt-[25px] justify-center flex items-center">
                <img
                    className="w-[70px] h-[70px] rounded-[50%]"
                    src={imgMan} />
                <section className="mr-[30px] mt-[10px] text-[8px]">
                    <div className="relative flex justify-center items-center  text-[#fff] bg-[#008043] w-[100px] h-[32px] rounded">
                        <p>آپلود عکس جدید</p>
                        <div className="absolute right-[5px] bottom-[10px]">
                            <ArrowTop />
                        </div>
                    </div>
                    <div className="w-[100px] h-[32px] mt-[12px] flex justify-center border-[2px] rounded border-[#7cc4a1]">
                        <p className="text-[15px] ml-[5px] mt-[2px]">x</p>
                        <button>حذف عکس فعلی</button>
                    </div>
                </section>
            </section>
            <section className=" mt-[10px] flex justify-center">
                <div className="text-[10px] flex flex-col">
                    <label htmlFor="name10"
                        className=" text-[#000] text-[9px] font-semibold mr-[10px] ">
                        نام
                    </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        id='name10'
                        className="w-[250px] h-[40px]  rounded mt-[15px] placeholder:text-[8px] placeholder:pr-[10px]"
                        placeholder=" رها "
                    />
                </div>
            </section>
            <section className=" mt-[20px] flex justify-center ">
            <div className="text-[9px] font-semibold flex flex-col">
                    <label htmlFor="lastname10"
                        className=" text-[#000] mr-[10px] ">
                        نام خانوادگی
                    </label>
                    <input
                        onChange={(e) => setlastName(e.target.value)}
                        value={lastName}
                        id='lastname10'
                        className="w-[250px] h-[40px]  rounded mt-[15px] placeholder:text-[8px] placeholder:pr-[10px]"
                        placeholder=" تمدن "
                    />
                </div>
            </section>
            <section className="flex justify-center text-[#fff] text-[10px] mt-[30px]">
                <button className="w-[250px] h-[40px] rounded bg-[#008043]">افزودن مدرس </button>
            </section>
        </section>
    )
}
export default AddUser