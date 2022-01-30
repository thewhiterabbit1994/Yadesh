import img from "../../assets/Img/AboutYadesh/Rectangle 857.jpg"
import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar"
const AboutYadesh = () => {
    return (
        <section className="w-full h-[600px] bg-[#F5F5F5] rounded  ">
            <section className="w-[95%] m-auto flex justify-between">
                <section className="w-[40%] pt-[10px]">
                    <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
                        <div>
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="یادگیری به فاصله چند کلیک"
                                />
                            </lable>
                        </div>
                        <div className="my-[30px]">
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[80px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="بیش از هزاران ویدبوی آموزش برای شما از بروزترین منابع آموزشی دنیا"
                                />
                            </lable>
                        </div>
                        <div className="my-[30px]">
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">توضیحات</p>
                            <lable>
                                <input className="w-[400px] h-[200px] rounded placeholder:w-[200px]  placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder=" یادگیری دغدغه همیشگی افراد است ولی بستر مناسبی برای آن وجود ندارد.
                                    یادش یک پلتفرم آموزش برای شرکت هااساتید مدیران تولید محتواواراد است
                                    که دسترسی دسرسی به ویدیوهای آموزشی را برای کاربران آسان کرده است."
                                />
                            </lable>
                        </div>
                    </section>
                </section>
                <section className="w-[50%] h-[00px] text-[12px]  text-[#7A7A7A] pt-[30px]">
                    <p className="mb-[15px]"> تصویر</p>
                    <img src={img} className="w-[500px] h-[300px]" />
                    <div className="text-[10px] flex mt-[20px] px-[10px] text-[#7A7A7A]">
                        <Ekhtar />
                        <p className="mr-[10px]">حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت اتوماتیک مطابق با سایز container باشد.</p>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default AboutYadesh