import imgPelaneSazmani from "../assets/Img/PelaneSazmani/imgPelaneSazmani.jpg"
import bgGradiant from "../assets/Img/PelaneSazmani/bgGradiant.png"
const PelaneSazmani = () => {
    return (
        <div className="bg-[#000] w-[100%] flex justify-center" >
            <section className="w-[80%] bg-[#000E14] h-[41vh] flex rounded mb-[2rem]">
                <section className="w-[65%] flex flex-col  h-[100%] items-center justify-center ">
                    <div className="text-[#E6FFF3] text-[14px] flex w-[75%] mb-[2rem]">
                        <div className="border-[#00FF85] opacity-80  border-r-[4px] ml-[7px] rounded-[6px] " >  </div>
                        <h6> پلن سازمانی</h6>
                    </div>
                    <div className="text-[#E6FFF3] text-[14px] leading-10 opacity-70">
                        <h6 className="w-[500px]">سازمان ها و شرگت ها به جهت ارتقای سطح کیفی نیروی انسانی خود می توانند از پلن ویژه آموزشی یادش برای آموزش مهارت ها استفاده کنند.</h6>
                    </div>
                    <div className="mt-[2rem]  w-[75%]">
                        <button className="text-[12px] text-[#E6FFF3] w-[7.5rem] h-[2.5rem] rounded border-solid border-[#00FF85] border-2 ml-[7px] "> بیشتر بدانید</button>
                    </div>
                </section>
                <section className="w-[30%] relative flex">
                    <div>
                        <img src={imgPelaneSazmani} className="w-[300px] h-[250px] rounded absolute top-[-26px]" />
                    </div>
                </section>
            </section>
        </div>
    )
}
export default PelaneSazmani