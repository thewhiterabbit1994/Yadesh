import Snap from "../../assets/svg/CustomerYadesh/snap.svg"
import Hamraheaval from "../../assets/svg/CustomerYadesh/hamraheaval.svg"
import LogoBanafsh from "../../assets/svg/CustomerYadesh/logo-banafsh.svg"
import MelatBank from "../../assets/svg/CustomerYadesh/melatBank.svg"
import Shape from "../../assets/svg/CustomerYadesh/shape.svg"
import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar"
import { useState } from "react"
const Costomers = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <section className="w-full h-[450px] bg-[#F5F5F5] mt-[10px] rounded">
            <section className="w-[95%] m-auto flex justify-between">
                <section className="w-[35%] pt-[10px] ">
                    <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
                        <div>
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="مشتریان یادش"
                                />
                            </lable>
                        </div>
                        <div className="my-[20px]">
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="یادش از انتخاب شما تشکر میکند"
                                />
                            </lable>
                        </div>
                        <div className="my-[20px]">
                            <p className="text-[12px] w-[400px] text-[#7A7A7A] mb-[15px] pr-[10px]">لوگوی مشتری (فرمت مورد نظر png یا svg  می باشد )</p>
                            <section className="flex w-[500px]">
                                <lable>
                                    <input className="w-[300px] h-[40px] rounded placeholder:w-[200px]  placeholder:text-[11px] placeholder:pr-[10px]"
                                        placeholder="melat-bank-logo.png "
                                    />
                                </lable>
                                <button className="w-[100px] rounded text-[#fff]  text-[10px] bg-[#008043]">جستجو فایل</button>
                            </section>
                        </div>
                        <div className="flex w-[450px] items-center">
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px] ml-[17px]">مشتریان (تعداد مشتریان در حال نمایش )</p>
                            <form>
                                <select className="w-[142px] text-[11px] pr-[15px] h-[38px] rounded ">
                                    <option className="text-[10px]">1</option>
                                    <option className="text-[10px]">2</option>
                                    <option className="text-[10px]">3</option>
                                    <option className="text-[10px]">4</option>
                                </select>
                            </form>
                        </div>
                        <section className="w-[500px] text-[12px] mt-[20px] flex mr-[10px] text-[#7A7A7A]">
                            <p>این قسمت نمایش داده شود</p>
                            <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                                <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                            </div>
                        </section>
                    </section>

                </section>
                <section className="w-[50%] h-[500px] text-[12px] text-[#7A7A7A] mt-[30px]">
                    <p>مشتریان</p>
                    <div className="flex  justify-between flex-wrap  ">
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={Snap} className="h-[30px] m-auto " />
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center  my-[15px] ml-[15px]">
                            <img src={MelatBank} className=" h-[40px]" />
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={Hamraheaval} className=" h-[40px]" />
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={LogoBanafsh} className=" h-[40px]" />
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={MelatBank} className=" h-[40px]" />
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={Shape} className=" h-[40px]" />
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={LogoBanafsh} className=" h-[40px]" />
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={Hamraheaval} className=" h-[40px]" />
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center ml-[15px] my-[15px]">
                            <img src={MelatBank} className=" h-[40px]" />
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center  my-[15px] ml-[15px]">
                            <img src={LogoBanafsh} className=" h-[40px]" />
                        </div>
                    </div>
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">نظر مشتری</p>
                        <lable>
                            <input className="w-[440px] h-[70px] rounded-lg placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="با وجود یادش بخش بزرگی از این خلا آموزشی ...."
                            />
                        </lable>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default Costomers