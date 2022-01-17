import CultureBuilding from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (1).jpg"
import CrashAnalysis from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (2).jpg"
import PsychologyOfColors from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (3).jpg"
import RealEstateInvesting from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (4).jpg"
import BigData from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (5).jpg"
import PersonalBranding from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1.jpg"
import imgPlayVideo from "../assets/Img/MostVeiw/imgLogoPlay.png"
import LogoPlay from "../assets/Img/MostVeiw/logoPlay.svg"
import bgLogoPlay from "../assets/Img/MostVeiw/bgLogoPlay.png"

const MostView = () => {
    return (
        <div className="w-full h-[100vh] bg-[#000]">
            <section className=" w-[266px] flex flex-col items-center mr-[120px] ">
                <div className="flex w-[266px]  justify-start ">
                    <div className="border-[#00FF85]   border-r-[7px] ml-[6px] rounded h-[20px] mt-[8px] " > </div>
                    <h6 className="text-[#E6FFF3] text-[22px] w-[266px] h-[29px]">پربازدیدترین اپیزودها</h6>
                </div>
                <div className="flex w-[266px]  justify-start">
                    <h6 className="text-[#C4C4C4] mt-[1rem] text-[16px] w-[174px] h-[17px] font-extralight">اپیزودها پربازدید هفته</h6>
                </div>
            </section>
            <section className="w-full h-[557px] flex mt-[2rem] justify-center ">
                <div className="w-[470px] flex flex-col  items-end pl-[2rem] relative  h-[460px]  mr-[120px]" >
                    <img src={imgPlayVideo} className="rounded w-[420px] h-[260px] blur-[2px] bg-current" />
                    <img src={LogoPlay} className="absolute top-[115px] right-[205px] blur-[none] z-10 w-[35px] " />
                    <img src={bgLogoPlay} className="absolute  top-[83px] right-[180px] w-[95px] " />
                    <div className="text-[12px] text-[#E6FFF3]  mt-[20px] w-[420px]  ">
                        <h6 className="text-[16px] w-[319px] h-[40px]"> مقدمات حسابداری کلان -درامد وهزینه</h6>
                        <h6 className="text-[12px] w-[430px] h-[78px] text-[#C4C4C4] leading-[30px]">   در این درس به ساختار هزینه و جریان های درامد می پردازیم و مباحث حسابداری کلان رو مورد بررسی قرار می دهیم</h6>
                        <h6 className="text-[10px] w-[200px] h-[20px] text-[#C4C4C4] mt-[5px]"> 45 دقیقه و 26 ثانیه . 3652 بازدید</h6>
                    </div>
                </div>
                <div className="flex flex-wrap w-[700px] h-[460px] ml-[115px] ">
                    <div className="text-[#E6FFF3] ml-[25px] ">
                        <img src={CultureBuilding} className="rounded w-[190px] h-[120px]" />
                        <div className="leading-7 mt-[.5rem] ">
                            <h6 className="text-[12px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[10px] text-[#C4C4C4]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className=" text-[#E6FFF3] text-[11px] ml-[25px]">
                        <img src={CrashAnalysis} className="rounded w-[190px] h-[120px]" />
                        <div className="leading-7 mt-[.5rem] ">
                            <h6 className="text-[12px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[10px] text-[#C4C4C4]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className=" text-[#E6FFF3] text-[11px] ml-[25px]">
                        <img src={PsychologyOfColors} className="rounded w-[190px] h-[120px]" />
                        <div className="leading-7 mt-[.5rem] ">
                            <h6 className="text-[12px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[10px] text-[#C4C4C4]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className=" text-[#E6FFF3] text-[11px] ml-[25px] ">
                        <img src={RealEstateInvesting} className="rounded w-[190px] h-[120px]" />
                        <div className="leading-7 mt-[.5rem] ">
                            <h6 className="text-[12px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[10px] text-[#C4C4C4]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className=" text-[#E6FFF3] text-[11px] ml-[25px]">
                        <img src={BigData} className="rounded w-[190px] h-[120px]" />
                        <div className="leading-7 mt-[.5rem] ">
                            <h6 className="text-[12px]"> ابر ایچمکو - تحلیل سقوط</h6>
                            <h6 className="text-[10px] text-[#C4C4C4]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className=" text-[#E6FFF3] text-[11px] ">
                        <img src={PersonalBranding} className="w-[190px] h-[120px] rounded  " />
                        <div className="leading-7 mt-[.5rem] ">
                            <h6  className="text-[12px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[10px] text-[#C4C4C4]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default MostView