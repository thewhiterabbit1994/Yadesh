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
            <section className=" w-[80%] flex flex-col items-center ">
                <div className="flex w-[80%]  justify-start">
                    <div className="border-[#00FF85] opacity-80  border-r-[4px] ml-[6px] rounded " > .</div>
                    <h6 className="text-[#E6FFF3] text-[24px]">پربازدیدترین اپیزودها</h6>
                </div>
                <div className="flex w-[80%]  justify-start">
                    <h6 className="text-[#E6FFF3] mt-[1rem] text-[18px] opacity-80">اپیزودها پربازدید هفته</h6>
                </div>
            </section>
            <section className="w-[100%] h-[557px] flex mt-[2rem] justify-center">
                <div className="w-[600px] flex flex-col  items-end pl-[2rem] relative">
                    <img src={imgPlayVideo} className="rounded w-[459.99px] h-[275px] blur-[2px] bg-current" />
                    <img src={LogoPlay} className="absolute top-[95px] right-[315px] blur-[none] z-10 w-[30px] " />
                    <img src={bgLogoPlay} className="absolute  top-[78px] right-[300px] w-[65px] " />
                    <div className="text-[12px] text-[#E6FFF3]  mt-[2rem] flex flex-col items-start w-[80%] leading-8">
                        <h6 className="text-[18px]"> مقدمات حسابداری کلان -درامد وهزینه</h6>
                        <h6 className="text-[14px]"> در این درس به ساختار هزینه و جریان های درامد می پردازیم</h6>
                        <h6 className="text-[12px]"> 45 دقیقه و 26 ثانیه . 3652 بازدید</h6>
                    </div>
                </div>
                <div className="flex flex-wrap w-[750px] ">
                    <div className="text-[#E6FFF3] text-[11px] mb-[1rem]">
                        <img src={CultureBuilding} className="rounded w-[216px] h-[135.52px]" />
                        <div className="leading-7 mt-[.5rem] opacity-75">
                            <h6 className="text-[14px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[12px]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className="mr-[5px] text-[#E6FFF3] text-[11px]">
                        <img src={CrashAnalysis} className="rounded w-[216px] h-[135.52px]" />
                        <div className="leading-7 mt-[.5rem] opacity-75">
                            <h6 className="text-[14px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[12px]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className="mr-[5px] text-[#E6FFF3] text-[11px]">
                        <img src={PsychologyOfColors} className="rounded w-[216px] h-[135.52px]" />
                        <div className="leading-7 mt-[.5rem] opacity-75">
                            <h6 className="text-[14px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[12px]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className="ml-[5px] text-[#E6FFF3] text-[11px]">
                        <img src={RealEstateInvesting} className="rounded w-[216px] h-[135.52px]" />
                        <div className="leading-7 mt-[.5rem] opacity-75">
                            <h6 className="text-[14px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[12px]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className="ml-[5px] text-[#E6FFF3] text-[11px]">
                        <img src={BigData} className="rounded w-[216px] h-[135.52px]" />
                        <div className="leading-7 mt-[.5rem] opacity-75">
                            <h6 className="text-[14px]"> ابر ایچمکو - تحلیل سقوط</h6>
                            <h6 className="text-[12px]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className="mr-[5px] text-[#E6FFF3] text-[11px]">
                        <img src={PersonalBranding} className="w-[216px] h-[135.52px] rounded" />
                        <div className="leading-7 mt-[.5rem] opacity-75">
                            <h6  className="text-[14px]"> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6 className="text-[12px]"> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default MostView