import CultureBuilding from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (1).jpg"
import CrashAnalysis from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (2).jpg"
import PsychologyOfColors from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (3).jpg"
import RealEstateInvesting from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (4).jpg"
import BigData from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1 (5).jpg"
import PersonalBranding from "../assets/Img/MostVeiw/fly-d-art-photographer-WvCyR1gTDoA-unsplash 1.jpg"
import Smart from "../assets/Img/MostVeiw/Subtract.jpg"
import vector from "../assets/Img/MostVeiw/Rectangle 875.svg"
import play from "../assets/Img/MostVeiw/Vector.svg"

const MostView = () => {
    return (
        <div className="w-[100%] h-[90vh] bg-[#000]">
            <section className="mr-[11rem]">
                <div className="flex">
                    <div className="border-[#00FF85] opacity-80  border-r-[3.5px] ml-[7px] " > .</div>
                    <h6 className="text-[#E6FFF3]">پربازدیدترین اپیزودها</h6>
                </div>
                <h6 className="text-[#E6FFF3] mt-[1rem] text-[13px] opacity-80">اپیزودها پربازدید هفته</h6>
            </section>
            <section className="w-[100%] flex mt-[2rem] justify-center">
                <div className="w-[30%] flex flex-col items-center relative ">
                    <img src={Smart} className="rounded w-[80%] " />
                    <img src={vector} className="absolute top-[16%] right-[42.5%] blur " />
                    <img src={play} className="absolute  top-[22%] right-[46.5%] " />
                    <div className="text-[12px] text-[#E6FFF3]  mt-[2rem]  leading-7 opacity-80 mr-[-3rem] ">
                        <h6> مقدمات حسابداری کلان -درامد وهزینه</h6>
                        <h6 className="text-[10px]"> در این درس به ساختار هزینه و جریان های درامد می پردازیم</h6>
                        <h6 className="text-[10px]"> 45 دقیقه و 26 ثانیه . 3652 بازدید</h6>
                    </div>
                </div>
                <div className="flex flex-wrap w-[50%] ">
                    <div className="text-[#E6FFF3] text-[11px] mb-[1rem]">
                        <img src={CultureBuilding} className="rounded w-[80%]" />
                        <div className="leading-7 mt-[.5rem] opacity-75">
                            <h6> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className="mr-[5px] text-[#E6FFF3] text-[11px]">
                        <img src={CrashAnalysis} className="rounded w-[80%]" />
                        <div className="leading-7 mt-[.5rem] opacity-75">
                            <h6> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className="mr-[5px] text-[#E6FFF3] text-[11px]">
                        <img src={PsychologyOfColors} className="rounded w-[80%]" />
                        <div className="leading-7 mt-[.5rem] opacity-75">
                            <h6> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className="ml-[5px] text-[#E6FFF3] text-[11px]">
                        <img src={RealEstateInvesting} className="rounded w-[80%]" />
                        <div className="leading-7 mt-[.5rem] opacity-75">
                            <h6> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className="ml-[5px] text-[#E6FFF3] text-[11px]">
                        <img src={BigData} className="rounded w-[80%]" />
                        <div className="leading-7 mt-[.5rem] opacity-75">
                            <h6> ابر ایچمکو - تحلیل سقوط</h6>
                            <h6> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                    <div className="mr-[5px] text-[#E6FFF3] text-[11px]">
                        <img src={PersonalBranding} className="w-[80%] rounded" />
                        <div className="leading-7 mt-[.5rem] opacity-75">
                            <h6> فرهنگ سازمانی - مدیریت محیط</h6>
                            <h6> 20 دقیقه و 12 ثانیه  . 2330 بازدید</h6>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default MostView