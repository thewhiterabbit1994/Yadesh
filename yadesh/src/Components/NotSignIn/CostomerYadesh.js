import Snap from "../../assets/svg/CustomerYadesh/snap.svg"
import Hamraheaval from "../../assets/svg/CustomerYadesh/hamraheaval.svg"
import LogoBanafsh from "../../assets/svg/CustomerYadesh/logo-banafsh.svg"
import MelatBank from "../../assets/svg/CustomerYadesh/melatBank.svg"
import Shape from "../../assets/svg/CustomerYadesh/shape.svg"
import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar"
const CostomerYadesh = () => {
    return (
        <section className="w-full h-[500px] bg-[#F5F5F5] mt-[10px] rounded">
            <section className="w-[95%] m-auto flex justify-between">
                <section className="w-[35%] pt-[10px]">
                    <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
                        <div>
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="مشتریان یادش"
                                />
                            </lable>
                        </div>
                        <div className="my-[30px]">
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="یادش از انتخاب شما تشکر میکند"
                                />
                            </lable>
                        </div>
                        <div className="my-[30px]">
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">نام مشتری (این قسمت نمایش داده نمیشود)</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:w-[200px]  placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="بانک ملت"
                                />
                            </lable>
                        </div>
                        <div className="my-[30px]">
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
                    </section>
                </section>
                <section className="w-[50%] h-[500px] text-[12px] text-[#7A7A7A] mt-[30px]">
                    <p>مشتریان</p>
                    <div className="flex  justify-between flex-wrap  ">
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={Snap}  className="h-[30px] m-auto "/>
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center  my-[15px] ml-[15px]">
                            <img src={MelatBank}  className=" h-[40px]"/>
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={Hamraheaval}  className=" h-[40px]"/>
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={LogoBanafsh}  className=" h-[40px]"/>
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={MelatBank}  className=" h-[40px]"/>
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={Shape}  className=" h-[40px]"/>
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={LogoBanafsh} className=" h-[40px]" />
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                            <img src={Hamraheaval}  className=" h-[40px]"/>
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center ml-[15px] my-[15px]">
                            <img src={MelatBank}  className=" h-[40px]"/>
                        </div>
                        <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center  my-[15px] ml-[15px]">
                            <img src={LogoBanafsh} className=" h-[40px]" />
                        </div>
                        <div className="cursor-pointer w-[70px] h-[70px] text-[9px] text-[#000] font-semibold bg-[#fff] rounded-lg p-1 flex-col flex justify-center items-center ml-[15px] my-[20px]">
                            <p className="text-[15px]">+</p>
                            <p className="w-[70px] pr-[5px]"> افزودن مشتری</p>
                        </div>
                    </div>
                    <div className="flex mt-[20px]">
                        <Ekhtar/>
                        <p className="mr-[10px]">حداکثر تعداد مشتریان 15 و حداقل 10 می باشد</p>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default CostomerYadesh