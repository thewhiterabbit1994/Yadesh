import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar"
import imgSazman from "../../assets/Img/imgSazman.png"

const HeroYadeshForSazman = () => {
    return (
        <section className="w-full h-[400px] bg-[#F5F5F5] flex justify-between rounded mt-[10px]">
            <section className="w-[45%]">
                <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="یادگیری در سطح جهانی "
                            />
                        </lable>
                    </div>
                    <div className="my-[30px]">
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                        <lable>
                            <input className="w-[400px] h-[80px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="سازمان ها در یادش جایگاه ویژه ای دارند ... "
                            />
                        </lable>
                    </div>
                    <div className="my-[30px]">
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">توضیحات</p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="اشتراک ویژه سالانه برای گروه ها به همراه تخفبف 5 تا 15 درصدی  "
                            />
                        </lable>
                    </div>
                </section>
            </section>
            <section className="w-[53%] mt-[20px] text-[#7A7A7A] text-[12px] ">
                <p>تصویر</p>
                <section className="w-[480px] h-[200px] mt-[20px] relative bg-[#ff000007]">
                    <img src={imgSazman} className="rounded-lg" />
                </section>
                <div className="text-[10px] flex  px-[10px] text-[#7A7A7A]">
                    <Ekhtar />
                    <p className="mr-[10px]">حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت اتوماتیک مطابق با سایز container باشد.</p>
                </div>
            </section>
        </section>
    )
}
export default HeroYadeshForSazman