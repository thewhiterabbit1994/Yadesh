import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar"
const Hero = () => {
    return (
        <section className="w-full h-[600px] bg-[#F5F5F5] flex justify-between rounded mt-[10px]">
            <section className="w-[35%] text-[12px] text-[#7A7A7A]">
                <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
                    <div className="">
                        <label className="" htmlFor="titleSlide1">
                            (اسلاید 1عنوان )
                        </label>
                        <input
                            className="w-[390px] h-[40px] bg-[#fff] pr-[15px] rounded mt-[20px]"
                            id="titleSlide1"
                            placeholder="مهارت های خود را افزایش دهید "
                        />
                    </div>
                    <div className="my-[30px]">
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                        <lable>
                            <input className="w-[350px] h-[80px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="بیش از هزاران ویدبوی آموزش برای شما از بروزترین منابع آموزشی دنیا"
                            />
                        </lable>
                    </div>
                    <div className="my-[30px]">
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">توضیحات</p>
                        <lable>
                            <input className="w-[350px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="مزایای ثبت نام در یادش"
                            />
                        </lable>
                    </div>
                    <div className="my-[30px]">
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"> ویژگی ها (حد اقل 3 اکثر مورد) </p>
                        <lable>
                            <input className="w-[350px] h-[150px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="دسترسی بیش از هزاران ویدیو "
                            />
                        </lable>
                    </div>
                </section>
            </section>
            <section className="w-[55%] ">
                <section className="w-[500px] h-[400px] mt-[20px] relative bg-[#ff000007]">
                    <img className="rounded-lg w-[260px] h-[240px] bg-[red] absolute top-[10px] right-[10px] left-0 bottom-0" />
                    <img className="rounded-lg w-[210px] h-[125px] bg-[blue] absolute top-[10px]  left-[10px] bottom-0" />
                    <img className="rounded-lg w-[95px] h-[238px] bg-[yellow] absolute left-[10px] bottom-[15px]" />
                    <img className="rounded-lg w-[375px] h-[120px] bg-[green]  absolute right-[10px]  bottom-[15px]" />
                    <img className="rounded-lg w-[105px] h-[100px] bg-[#441515] absolute top-[149px] left-[115px]" />
                </section>
                <div className="text-[10px] flex mt-[20px] px-[10px] text-[#7A7A7A]">
                    <Ekhtar />
                    <p className="mr-[10px]">حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت اتوماتیک مطابق با سایز container باشد.</p>
                </div>
            </section>
        </section>
    )
}
export default Hero