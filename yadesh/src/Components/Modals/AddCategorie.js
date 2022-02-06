import { useState } from "react"
import AddCategories from "../../assets/svg/Modals/AddCategories"
const AddCategorie = () => {
    const [categories, setCategoreis] = useState("")
    return (
        <section className="w-[350px] h-[280px] m-auto rounded-lg  bg-[#d5d5d556]">
            <section className="flex w-[85%]  justify-between m-auto pt-[20px]">
                <div className="flex w-[130px] text-[12px] justify-between  ">
                    <AddCategories />
                    <p>افزودن دسته بندی</p>
                </div>
                <div className=" relative cursor-pointer w-[25px] h-[25px] bg-[#d5d5d5c9] rounded">
                    <p className=" right-[8px] absolute text-[18px]">x</p>
                </div>
            </section>
            <section className=" mt-[40px] h-[100px]  flex justify-center">
                <div className="text-[12px] flex flex-col">
                    <label htmlFor="name10"
                        className=" text-[#000] text-[12px] font-semibold mr-[10px] ">
                        نام دسته بندی
                    </label>
                    <input
                        onChange={(e) => setCategoreis(e.target.value)}
                        value={categories}
                        id='name10'
                        className="w-[250px] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                        placeholder=" اقتصاد- مدیریت "
                    />
                </div>
            </section>
            <section className="flex justify-center text-[#fff] text-[12px] mt-[20px]">
                <button className="w-[250px] h-[40px] rounded bg-[#008043]">افزودن دسته بندی </button>
            </section>
        </section>
    )
}
export default AddCategorie