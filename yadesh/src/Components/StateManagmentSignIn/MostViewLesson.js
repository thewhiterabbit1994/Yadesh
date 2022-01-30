const MostViewLesson = () => {
    return(
        <section className="w-full h-[280px] flex justify-between bg-[#F5F5F5] mt-[10px]">
        <section className="w-[95%] m-auto flex justify-between">
            <section className="w-[45%] h-[260px] flex items-center  ">
                <section >
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                               placeholder="درس های پربازدید امروز"
                            />
                        </lable>
                    </div>
                    <div className="my-[30px]">
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="یادشی ها این ویدیو را بیشتز ببینند"
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
                            <option className="text-[10px]"> پربازدیدترین اپیزودها</option>
                            <option className="text-[10px]">پربازدیدترین اپیزودها</option>
                            <option className="text-[10px]"> پربازدیدترین اپیزودها</option>
                            <option className="text-[10px]">پربازدیدترین اپیزودها</option>
                        </select>
                    </form>
                </div>
            </section>
        </section>
    </section>
    )
}
export default MostViewLesson