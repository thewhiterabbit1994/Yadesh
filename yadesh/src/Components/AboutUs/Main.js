import Tick from "../../assets/svg/AboutUs/Tick"
import Person from "../../assets/svg/AboutUs/Person"
import Dart from "../../assets/svg/AboutUs/Dart"
import GoogleLocation from "../../assets/svg/AboutUs/GoogleLocation"
import Letter from "../../assets/svg/AboutUs/Letter"
import Location from "../../assets/svg/AboutUs/Location"
import Phone from "../../assets/svg/AboutUs/Phone"
import map from "../../assets/Img/AboutUs/map.png"


const Main = () => {
    return (
        <section className="w-full h-[1700px] bg-[#000]">
            <section className="w-[600px] m-auto text-center leading-[30px] ">
                <div className="mb-[20px] m-auto flex justify-center">
                    <Dart />
                </div>
                <h6 className="text-[#E6FFF3] mb-[20px] text-[18px]"> چشم انداز یادش</h6>
                <p className="text-[#C4C4C4] text-[14px]">طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن .</p>
            </section>
            <div className="bg-gradient-to-r mt-[50px] h-[2px] w-[70%] m-auto from-[#0004052d] via-[#E6E9EB] to-[#0004052a]"></div>
            <section className="w-[600px]   m-auto text-center leading-[30px]">
                <div className=" m-auto flex justify-center my-[50px] ">
                    <Tick />
                </div>
                <h6 className="text-[#E6FFF3] mb-[20px] text-[18px]"> ماموریت یادش</h6>
                <p className="text-[#C4C4C4] text-[14px]">طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر   .</p>
            </section>
            <div className="bg-gradient-to-r mt-[50px] h-[2px] w-[70%] m-auto from-[#0004052d] via-[#E6E9EB] to-[#0004052a]"></div>
            <section className="w-[600px]   m-auto text-center leading-[30px]">
                <div className=" m-auto flex justify-center my-[50px] ">
                    <Person />
                </div>
                <h6 className="text-[#E6FFF3] mb-[20px] text-[18px]">هویت یادش</h6>
                <p className="text-[#C4C4C4] text-[14px]">طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا ازنظر گرافیکی نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد. </p>
            </section>
            <section className="w-[80vw] flex h-[500px] mt-[100px] justify-end ">
                <div className="w-[40vw] h-[350px] text-[#E6FFF3] flex flex-col justify-center text-[14px]">
                    <div className="flex">
                        <div className="border-[#00FF85] opacity-80 h-[20px]  border-r-[6px] ml-[7px] mr-[7px] rounded mt-[3px]"></div>
                        <p className="text-[#E6FFF3] text-[20px]">با یادش در تماس باشید</p>
                    </div>
                    <div className="text-[#C4C4C4] mt-[10px]">
                        <p>اطلاعات تماس و موقعیت ما بر روی نقشه</p>
                    </div>
                    <section className="text-[#C4C4C4] flex mt-[30px] justify-between w-[350px] ">
                        <div className="flex">
                            <Phone />
                            <p className="mr-[10px]">021-77268360</p>
                        </div>
                        <div className="border-r-2 rounded border-[#c4c4c4ab]"></div>
                        <div className="flex">
                            <Letter />
                            <p className="mr-[10px]">info@yadesh.org</p>
                        </div>
                    </section>
                    <div className="text-[#C4C4C4] flex mt-[30px]">
                        <Location />
                        <p className="mr-[10px]">  تهران - میدان انقلاب اسلامی - خ گارکر شمالی - پلاک 42 واحد 2  </p>
                    </div>
                    <div className="flex mt-[30px]">
                        <GoogleLocation />
                        <p className="mr-[10px]">مشاهده بر روی گوگل مپ</p>
                    </div>
                </div>
                <div className="w-[380px] ">
                    <img src={map} className="rounded-xl" />
                </div>
            </section>
            <section className="w-full bg-[#000E14] h-[270px] flex flex-col justify-center items-center leading-[40px]">
                <div >
                    <p className="text-[#E6FFF3] text-[20px]">سوال خاصی دارید ؟</p>
                    <p className="text-[#C4C4C4] text-[14px]">با تیم پشتیبانی تماس بگیرید</p>
                </div>
                <div className="border-b-4 border-[#00FF85] w-[15px] rounded-xl mt-[10px]"></div>
                <div>
                    <button className=" mt-[30px] text-[12px] text-[#E6FFF3] w-[130px] h-[40px] rounded-[6px] border-solid border-[#80ffc2] border-[1.5px]  ">
                        {" "}
                        تماس با پشتیبانی
                    </button>
                </div>

            </section>
        </section>
    )
}
export default Main