import AboutYadesh from "../assets/Img/AboutYadesh/Rectangle 857.jpg"
const Aboutyadesh = () => {
    return (
        <div className="w-[100%] h-[100%] bg-[#000] flex pb-[7rem]">
            <section className="w-[50%] h-[100%]  flex justify-center ">
                <img src={AboutYadesh} className="w-[70%] h-[50%] rounded mr-[7rem] " />ّ
            </section>
            <section className="w-[50%] opacity-80 flex flex-col justify-center h-[50vh] ">
                <div className="mr-[5.5rem]">
                    <div className="flex text-[#E6FFF3] ">
                        <div className="border-[#00FF85] opacity-80  border-r-[3.5px] ml-[7px] " > </div>
                        <h6 className="">درباره یادش</h6>
                    </div>
                    <h6 className="text-[#E6FFF3] mt-[1rem] text-[13px]"> درباره ما بیشتر بدانید</h6>
                </div>
                <div className="text-[#E6FFF3] text-[13px] mt-[1rem] leading-8 flex justify-center">
                    <p className="w-[500px] text-justify">یادگیری دغدغه همیشگی افراد است ولی بستر مناسبی برای آن وجود ندارد. یادش یک پلتفرم آموزش برای شرکت هااساتید مدیران تولید محتواواراد است که دسترسی دسرسی به ویدیوهای آموزشی را برای کاربران آسان کرده است.</p>
                </div>
                <div className="mt-[1rem] mr-[5rem]">
                    <button className="text-[12px] text-[#E6FFF3] w-[7.5rem] h-[2.5rem] rounded border-solid border-[#00FF85] border-2 ml-[7px] "> بیشتر بدانید</button>
                </div>
            </section>
        </div>
    )
}
export default Aboutyadesh