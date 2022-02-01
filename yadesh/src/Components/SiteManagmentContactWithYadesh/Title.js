const Title = () => {
    return (
        <section className="w-full h-[140px] bg-[#F5F5F5] rounded-lg mt-[10px] ">
            <section className="w-[87%]  h-[140px] flex justify-between items-center   pr-[20px]">
                <section className=" my-[20px] ">
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">عنوان</p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="با یادش در تماس باشید "
                            />
                        </lable>
                    </div>
                </section>
                <section  className="my-[20px]">
                    <div>
                        <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">زیر عنوان</p>
                        <lable>
                            <input className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="از طریق فرم روبرو با ما در تماس باشید"
                            />
                        </lable>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default Title