import { useState } from "react";
import Question from "../../assets/svg/YouAsk/Question"
import Lamp from "../../assets/svg/YouAsk/Lamp"

const YouAsk = () => {
    const [Ask, setAsk] = useState([
        {
            txt: "چگونه میتوانیم به محتوای یادش دسترسی داشته باشیم؟",
        },
        {
            txt: "آیا میتوانم از یادش تقاضای محتوای مورد نظر خود را بنمایم؟",
        },
        {
            txt: "آیا به عنوان استاد میتوانم محتوای خود را آپلود کنم؟",
        },
        {
            txt: "آیا یادش دوره های ویژه ی دانشجویان را نیز دارد؟",
        }
    ])
    return (
        <div className="bg-[#000]">
            <section className=" mr-[135px] ">
                <div className="border-[#00FF85]  border-r-[6px] pr-[10px]  rounded "><div />
                    <h5 className="text-[#E6FFF3] ">شما پرسیده اید</h5>
                </div>
                <div className="pt-[10px]">
                    <h5 className="text-[#C4C4C4]"> سوالات متداول کاربران یادش </h5>
                </div>
            </section>
            <div className="w-full h-[80vh]  flex items-center justify-around">
                <section className="w-[22%] ">
                    {

                        Ask.map((item) => {
                            return (
                                <div className="bg-[#011E29] text-[#fff] flex mt-[20px] w-[500px] h-[80px] rounded-lg  items-center text-[15px] ">
                                    <div className="ml-[10px] bg-[#000E14] w-[30px] h-[30px] flex justify-center items-center rounded mr-[10px]">{<Question />}</div>
                                    <p classNam="text-[#C4C4C4] w-[350px] h-[100px] ">{item.txt}</p>
                                </div>
                            )
                        })
                    }
                </section>
                <section className="w-[40%]  bg-[#ffff] rounded-lg h-[370px] mt-[20px] flex flex-col items-center justify-center ">
                    <div className="flex justify-start w-[75%]">
                        <Lamp />
                        <h6 className="font-semibold pr-[10px] text-[14px]">پاسخ یادش</h6>
                    </div>
                    <div>
                        <hr className="bg-[#35393b5b] w-[400px] h-[4px] rounded-lg my-[1.5rem]"></hr>
                    </div>
                    <div>
                        <p className="text-[#000405] text-[14px] font-semibold leading-[30px] w-[400px] text-justify opacity-90">
                            طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و.چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا ازنظر گرافیکی نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد.
                        </p>
                    </div>
                </section>
            </div>
        </div>

    )
}
export default YouAsk