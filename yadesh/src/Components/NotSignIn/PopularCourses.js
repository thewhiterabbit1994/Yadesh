const PopularCourses = () => {
    return (
        <section className="w-full h-[280px] flex justify-between bg-[#F5F5F5] mt-[10px]">
            <section className="w-[95%] m-auto flex justify-between">
                <section className="w-[45%] h-[260px] flex items-center  ">
                    <section >
                        <div>
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="دوره های پرطرفدار"
                                />
                            </lable>
                        </div>
                        <div className="my-[30px]">
                            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                            <lable>
                                <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                    placeholder="بیش از هزاران ویدبوی آموزش برای شما از بروزترین منابع آموزشی دنیا"
                                />
                            </lable>
                        </div>
                    </section>
                </section>
                <section className="w-[45%] h-[100px] mt-[7px]">
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">دسته بندی</p>
                        <form>
                            <select className="w-[400px] text-[12px] h-[38px] rounded ">
                                <option className="text-[10px]"> دوره های پرطرفدار</option>
                                <option className="text-[10px]">دوره های پرطرفدار</option>
                                <option className="text-[10px]"> دوره های پرطرفدار</option>
                                <option className="text-[10px]">دوره های پرطرفدار</option>
                            </select>
                        </form>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default PopularCourses