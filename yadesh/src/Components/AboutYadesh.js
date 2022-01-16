import AboutYadesh from "../assets/Img/AboutYadesh/Rectangle 857.jpg"
const Aboutyadesh = () => {
    return (
        <div className="w-[100%] h-[100%] bg-[#000] flex pb-[7rem]">
            <section className="w-[606.86px] h-[360px]  flex justify-center mr-[18px] ">
                <img src={AboutYadesh} className="w-[606.86px] h-[360px] rounded mr-[7rem] " />ّ
            </section>
            <section className="w-[590px] h-[360px] flex flex-col justify-center  mr-[30px]  ">
                <div className="mr-[85px]">
                    <div className="flex text-[#E6FFF3] w-[178px] h-[22px] text-[22px]">
                        <div className="border-[#00FF85]  border-r-[7px] ml-[7px] rounded h-[22px] mt-[8px]" > </div>
                        <h6 className="font-medium">درباره یادش</h6>
                    </div>
                    <h6 className="text-[#C4C4C4] text-[15px] w-[189px] h-[18px] mt-[23px]"> درباره ما بیشتر بدانید</h6>
                </div>
                <div className="text-[#C4C4C4] text-[13px] pt-[30px] leading-[40px] flex justify-center mr-[80px]">
                    <p className="w-[521px] h-[120px] text-justify">یادگیری دغدغه همیشگی افراد است ولی بستر مناسبی برای آن وجود ندارد. یادش یک پلتفرم آموزش برای شرکت هااساتید مدیران تولید محتواواراد است که دسترسی دسرسی به ویدیوهای آموزشی را برای کاربران آسان کرده است.</p>
                </div>
                <div className="mt-[30px] mr-[83px]">
                    <button className=" font-extralight text-[12px] text-[#E6FFF3] w-[160px] h-[46px] rounded border-solid border-[#00FF85] border-2 ml-[7px] "> بیشتر بدانید</button>
                </div>
            </section>
        </div>
    )
}
export default Aboutyadesh