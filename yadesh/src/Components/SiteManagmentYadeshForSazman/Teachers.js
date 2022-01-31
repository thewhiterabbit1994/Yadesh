
const Teachers = () => {
    return (
        <section className="w-full h-[300px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
            <section className="w-[47%] ">
                <section className="w-[93%] h-[300px] m-auto  my-[20px] ">
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="تجربه ی اساتید یادش را به کارمندان خود بدهید "
                            />
                        </lable>
                    </div>
                    <div className="my-[30px]">
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="اساتید یادش در حرفه ی خود بهترینند"
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
                            <option className="text-[10px]">1</option>
                            <option className="text-[10px]">2</option>
                            <option className="text-[10px]">3</option>
                            <option className="text-[10px]">4</option>
                        </select>
                    </form>
                </div>
            </section>
        </section>
    )
}
export default Teachers