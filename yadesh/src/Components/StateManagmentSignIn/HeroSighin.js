
const HeroSighin = () => {
    return (
        <section className="w-full h-[300px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
            <section className="w-[47%] ">
                <section className="w-[93%] h-[300px] m-auto  my-[20px] ">
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="درس های ویژه امروز"
                            />
                        </lable>
                    </div>
                    <div className="my-[30px]">
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="برای شما"
                            />
                        </lable>
                    </div>
                </section>
            </section>
            <section className="w-[50%] mt-[20px]">
                <div>
                    <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">دسته بندی</p>
                    <form>
                        <select className="w-[400px] text-[11px] pr-[15px] h-[38px] rounded ">
                            <option className="text-[10px]"> پربازدیدترین دوره ها</option>
                            <option className="text-[10px]">پربازدیدترین دوره ها</option>
                            <option className="text-[10px]"> پربازدیدترین دوره ها</option>
                            <option className="text-[10px]">پربازدیدترین دوره ها</option>
                        </select>
                    </form>
                </div>
            </section>
        </section>
    )
}
export default HeroSighin