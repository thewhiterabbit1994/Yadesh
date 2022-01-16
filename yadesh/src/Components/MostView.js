import CultureBuilding from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (1).jpg"
import CrashAnalysis from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (2).jpg"
import PsychologyOfColors from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (3).jpg"
import RealEstateInvesting from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (4).jpg"
import BigData from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (5).jpg"
import PersonalBranding from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1.jpg"
import imgPlayVideo from "../assets/Img/MostVeiw/playVideo.jpg"
import LogoPlay from "../assets/Img/MostVeiw/logoPlay.svg"
import bgLogoPlay from "../assets/Img/MostVeiw/bgLogoPlay.png"

const MostView = () => {
    return (
        <div className="w-[100%] h-[100vh] bg-[#000]">
            <section className=" w-[266px] flex flex-col items-center mr-[70px]">
                <div className="flex w-[266px]  justify-start ">
                    <div className="border-[#00FF85] opacity-80  border-r-[7px] ml-[6px] rounded h-[20px] mt-[8px] " > </div>
                    <h6 className="text-[#E6FFF3] text-[22px] w-[266px] h-[29px]">پربازدیدترین اپیزودها</h6>
                </div>
                <div className="flex w-[80%]  justify-start">
                    <h6 className="text-[#C4C4C4] mt-[1rem] text-[16px] w-[174px] h-[17px] font-extralight">اپیزودها پربازدید هفته</h6>
                </div>
            </section>
            <section className="w-[520xp] h-[557px] flex mt-[2rem] justify-center ">
                <div className="w-[520px] flex flex-col  items-end pl-[2rem] relative  h-[460px] " >
                    <img src={imgPlayVideo} className="rounded w-[459.99px] h-[275px] blur-[2px] bg-current" />
                    <img src={LogoPlay} className="absolute top-[95px] right-[315px] blur-[none] z-10 w-[30px] " />
                    <img src={bgLogoPlay} className="absolute  top-[78px] right-[300px] w-[65px] " />
                    <div className="text-[12px] text-[#E6FFF3]  mt-[20px] flex flex-col items-start ">
                        <h6 className="text-[18px] w-[319px] h-[40px]"> مقدمات حسابداری کلان -درامد وهزینه</h6>
                        <h6 className="text-[13px] w-[460px] h-[78px] text-[#C4C4C4] leading-[30px]">   در این درس به ساختار هزینه و جریان های درامد می پردازیم و مباحث حسابداری کلان رو مورد بررسی قرار می دهیم</h6>
                        <h6 className="text-[12px] w-[200px] h-[20px] text-[#C4C4C4] mt-[5px]"> 45 دقیقه و 26 ثانیه . 3652 بازدید</h6>
                    </div>
                </div>
                <div className="flex flex-wrap w-[750px] h-[460px] ">
                    <div className="text-[#E6FFF3] text-[11px] mb-[15px]  ml-[30px]">
                        <img src={CultureBuilding} className="rounded w-[216px] h-[135.52px]" />
                        <div className="leading-7 mt-[.5rem] ">
                            <h6 className="text-[14px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[12px] text-[#C4C4C4]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className=" text-[#E6FFF3] text-[11px]  ml-[30px]">
                        <img src={CrashAnalysis} className="rounded w-[216px] h-[135.52px]" />
                        <div className="leading-7 mt-[.5rem] ">
                            <h6 className="text-[14px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[12px] text-[#C4C4C4]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className=" text-[#E6FFF3] text-[11px] ">
                        <img src={PsychologyOfColors} className="rounded w-[216px] h-[135.52px]" />
                        <div className="leading-7 mt-[.5rem] ">
                            <h6 className="text-[14px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[12px] text-[#C4C4C4]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className=" text-[#E6FFF3] text-[11px]  ml-[30px]">
                        <img src={RealEstateInvesting} className="rounded w-[216px] h-[135.52px]" />
                        <div className="leading-7 mt-[.5rem] ">
                            <h6 className="text-[14px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[12px] text-[#C4C4C4]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className=" text-[#E6FFF3] text-[11px] ml-[30px]">
                        <img src={BigData} className="rounded w-[216px] h-[135.52px]" />
                        <div className="leading-7 mt-[.5rem] ">
                            <h6 className="text-[14px]"> ابر ایچمکو - تحلیل سقوط</h6>
                            <h6 className="text-[12px] text-[#C4C4C4]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className=" text-[#E6FFF3] text-[11px]  ">
                        <img src={PersonalBranding} className="w-[216px] h-[135.52px] rounded" />
                        <div className="leading-7 mt-[.5rem] ">
                            <h6  className="text-[14px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[12px] text-[#C4C4C4]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default MostView