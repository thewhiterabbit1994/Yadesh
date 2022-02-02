import Remove from "../../assets/svg/AdminPanelCourses/Remove"
import { useState } from 'react'
const SelfManagMent = () => {
    const [titlevalue, setTitleValue] = useState("")
    const [subTitleValue, setSubTitleValue] = useState("")
    return (
        <section className="w-full h-[330px] flex justify-between bg-[#F5F5F5] mt-[10px]">
            <section className="w-[95%] m-auto flex justify-between">
                <section className="w-[45%] h-[260px] flex items-center  ">
                    <section >
                        <div >
                            <label htmlFor="Title7"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                عنوان
                            </label>
                            <input
                                onChange={(e) => setTitleValue(e.target.value)}
                                value={titlevalue}
                                id='Title7'
                                className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="مدیریت شخصی"
                            />
                        </div>
                        <div className="mt-[30px]" >
                            <label htmlFor="Title8"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                زیر عنوان
                            </label>
                            <input
                                value={subTitleValue}
                                onChange={(e) => setSubTitleValue(e.target.value)}
                                id='Title8'
                                className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="پربازدیدترین های مدیریت شخصی"
                            />
                        </div>

                        <section className="w-[170px] h-[45px] rounded bg-[#0050A8] text-[12px] m-auto cursor-pointer mt-[40px]">
                            <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                                <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                            </div>
                        </section>

                    </section>
                </section>
                <section className="w-[45%] h-[100px] mt-[7px]">
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">دسته بندی</p>
                        <select className="w-[400px] text-[12px] h-[38px] rounded ">
                            <option className="text-[10px]"> مدیریت شخصی</option>
                            <option className="text-[10px]">مدیریت شخصی</option>
                            <option className="text-[10px]"> مدیریت شخصی</option>
                            <option className="text-[10px]">مدیریت شخصی</option>
                        </select>
                    </div>
                    <div className=" cursor-pointer flex mt-[20px] text-[#BA0B22] text-[10px]">
                        <Remove />
                        <p className="mr-[10px]">حذف این قسمت</p>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default SelfManagMent