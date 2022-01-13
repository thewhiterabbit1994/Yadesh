import Christin from "../Image/imgHomeNotLogin/christin-hume-Hcfwew744z4-unsplash 1.jpg"
import cole from "../Image/imgHomeNotLogin/cole-keister-SRs7zDrj150-unsplash 1.jpg"
import ed from "../Image/imgHomeNotLogin/ed-robertson-eeSdJfLfx1A-unsplash 1.jpg"
import lucas from "../Image/imgHomeNotLogin/lucas-george-wendt-B-WavFzUtiA-unsplash 1.jpg"
import trnava from "../Image/imgHomeNotLogin/trnava-university-WGG4eD0rQmo-unsplash 1.jpg"
import TicIcon from "../Svg/svgHomeNotLogin/TikIcon"
const HomePageNotLogin = () => {
    return (
        <div>
            <section className="w-[100%] bg-black h-[200vh] flex">

                <div className="sideLeft pr-[2rem] ">
                    <div>
                        <h1 className="text-[#E6FFF3] font-medium text-[35px]  "> یادگیری به فاصله چند کلیک</h1>
                        <p className=" w-[414px]  twxt-[18px] mt-[1rem] "> بیش از هزاران ویدیوی آموزشی برای شما از بروزترین منابع آموزشی دنیا </p>
                    </div>

                    <div className="flex mb-[1rem] ">
                        <button className="text-[14px] bg-black text-white "> بیشتر بدانید</button>
                        <button className="text-[14px] "> ثبت نام کنید</button>
                    </div>

                    <div className="text-white w-[50%] ">
                        <p className="pHomepage" >مزایای ثبت نام در یادش</p>
                        <div className="flex">
                            <TicIcon />
                            <p className="opacity-80" > دسترسی به بیش از هزاران ویدیو</p>
                        </div>
                        <div className="flex">
                            <TicIcon />
                            <p className="opacity-90" > پنل کاربری مامل و کاربردی </p>
                        </div>
                        <div className="flex">
                            <TicIcon />
                            <p className="opacity-80"> امکان کامل ویدیو بدون محدودیت</p>
                        </div>
                    </div>
                </div>

                <div className="w-[65%] mt-[2rem] ">
                    <div className="container">
<img src={Christin} className="w-[46%] h-[20%] relative left-[0] top-[0]" />
<img src={trnava} className="w-[45%] h-[21rem] relative left-[49%] top-[-9.5rem]" />
<img src={lucas} className="w-[20%] h-[9rem] relative  left-[26%] top-[-19.5rem]" />
<img src={cole} className="w-[21%] h-[16rem] relative left-[0] top-[-28.5rem]" />
<img src={ed} className="w-[71%] h-[19rerm] relative left-[10.5rem] top-[-34rem]" />
                    </div>
                </div>

            </section>
        </div>
    )
}
export default HomePageNotLogin