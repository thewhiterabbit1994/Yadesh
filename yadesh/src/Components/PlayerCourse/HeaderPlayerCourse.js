import { useState } from "react"
import ImgPlayer from "../../assets/Img/PlayerEpisode/imgPlayer.png"
import Imgman from "../../assets/Img/PlayerEpisode/imgman.png"
import Yaddasht from "../../assets/svg/PlayerEpisode/Yaddasht"
import Cc from "../../assets/svg/PlayerEpisode/Cc"
import Dislike from "../../assets/svg/PlayerEpisode/Dislike"
import Hd from "../../assets/svg/PlayerEpisode/Hd"
import Humborger from "../../assets/svg/PlayerEpisode/Humborgrt"
import Like from "../../assets/svg/PlayerEpisode/Like"
import Resize from "../../assets/svg/PlayerEpisode/Resize"
import Nexd from "../../assets/svg/PlayerEpisode/Nexd"
import Setting from "../../assets/svg/PlayerEpisode/Setting"
import Stop from "../../assets/svg/PlayerEpisode/Stop"
import Volume from "../../assets/svg/PlayerEpisode/Volume"
import Tag from "../../assets/svg/PlayerEpisode/Tag"
import Border from "../../assets/svg/PlayerEpisode/Border"
import Book from "../../assets/svg/PlayerEpisode/Book"
import Imgmap from "../../assets/Img/PlayerEpisode/imgMap.png"
import ArrowUp from "../../assets/svg/PlayerEpisode/ArrowUp"
import ArrowDown from "../../assets/svg/PlayerEpisode/ArrowDown"

const HeaderPlayerCourse = () => {
    const [lesson, setLesson] = useState([
        {
            img: Imgmap,
            txt: "سهراب دل انگیزان - اقتصاددان",
            title: "مقدمات حسابداری کلان -تورم",
            time: "18 دقیقه"
        },
        {
            img: Imgmap,
            txt: "سهراب دل انگیزان - اقتصاددان",
            title: "مقدمات حسابداری کلان -تورم",
            time: "18 دقیقه"
        },
        {
            img: Imgmap,
            txt: "سهراب دل انگیزان - اقتصاددان",
            title: "مقدمات حسابداری کلان -تورم",
            time: "18 دقیقه"
        },
        {
            img: Imgmap,
            txt: "سهراب دل انگیزان - اقتصاددان",
            title: "مقدمات حسابداری کلان -تورم",
            time: "18 دقیقه"
        },
        {
            img: Imgmap,
            txt: "سهراب دل انگیزان - اقتصاددان",
            title: "مقدمات حسابداری کلان -تورم",
            time: "18 دقیقه"
        },
    ])
    return (
        <section className="w-full h-[1300px] bg-[#000] flex">
            <div className="w-[800px] mt-[100px] mr-[50px] relative h-[450px]">
                <img src={ImgPlayer} className="rounded-lg w-[730px] h-[450px] relative" />
                <sction className="absolute bottom-[85px] right-[20px] text-[#fff]">
                    <p className="absolute bottom-[130px] right-[110px] w-[450px] text-[14px] leading-[30px] bg-[#00121ad2]"> طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار </p>
                </sction>
                <section className="absolute bottom-[85px] right-[20px]">
                    <Border />
                </section>
                <section className=" absolute bottom-[10px] right-[20px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]">
                        <Cc />
                    </div>
                </section>
                <section className=" absolute bottom-[10px] right-[70px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]">
                        <Hd />
                    </div>
                </section>
                <section className=" absolute bottom-[10px] right-[120px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]">
                        <Resize />
                    </div>
                </section >
                <section className=" absolute bottom-[10px] right-[170px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]">
                        <Setting />
                    </div>
                </section>
                <section className=" absolute bottom-[10px] right-[220px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%] text-[#fff]">
                    <h6 className="absolute top-[8px] right-[13px]">1x</h6>
                </section>
                <section className=" absolute bg-[#00121ad2] w-[150px] h-[40px] rounded-[50px] bottom-[10px] left-[160px] text-[#fff]">
                    <p className="absolute top-[8px] right-[25px]"> 0:25/01:45.36</p>
                </section>
                <section className=" absolute bottom-[10px] left-[110px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]">
                        <Volume />
                    </div>
                </section>
                <section className=" absolute bottom-[10px] left-[60px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]">
                        <Nexd />
                    </div>
                </section>
                <section className=" absolute bottom-[10px] left-[10px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]" >
                        <Stop />
                    </div>
                </section>
                <section className="flex text-[#fff] mt-[30px]  justify-around text-[11px]">
                    <div className="bg-[#00141C]  rounded-lg w-[90px] h-[40px] flex justify-center items-center">
                        <Tag />
                        <h6 className="rounded-lg mr-[9px]">تگ ها </h6>
                    </div>
                    <div className="bg-[#00141C] rounded-lg w-[110px] h-[40px] flex justify-center items-center">
                        <h6># مقاله نویسی</h6>
                    </div>
                    <div className="bg-[#00141C] rounded-lg w-[110px] h-[40px] flex justify-center items-center">
                        <h6># انگیزشی</h6>
                    </div>
                    <div className="bg-[#00141C] rounded-lg w-[110px] h-[40px] flex justify-center items-center">
                        <h6># آداب نگارش</h6>
                    </div>
                    <div className="bg-[#00141C] rounded-lg w-[110px] h-[40px] flex justify-center items-center">
                        <h6># دوره مقاله نویسی</h6>
                    </div>
                    <div className="bg-[#00141C] rounded-lg w-[110px] h-[40px] flex justify-center items-center">
                        <h6># دوره نگارش</h6>
                    </div>
                </section>
                <hr className="bg-[#c4c4c43d] h-[2px] rounded-xl w-[52vw]  mt-[10px]"></hr>
                <section className="text-[#fff] text-[20px] mr-[15px] mt-[15px]">
                    <h6> رضا استوار</h6>
                </section>
                <section className="m-auto w-[680px] h-[80px] text-[#fff] text-[12px] leading-[30px] text-justify mt-[20px]">
                    <p className="">طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا ازنظر گرافیکی نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد.</p>
                </section>
                <div className="w-[700px] flex justify-end">
                    <section className="flex  w-[300px] justify-around mt-[25px] 	">
                        <div className="w-[140px] h-[40px] bg-[#00141C] rounded-lg flex text-[#fff] text-[12px] justify-center items-center">
                            <Humborger />
                            <h6 className="mr-[7px]">افزودن به لیست ها</h6>
                        </div>
                        <div className="w-[50px] h-[40px] bg-[#00141C] rounded-lg flex justify-center items-center">
                            <Dislike />
                        </div>
                        <div className="w-[50px] h-[40px] bg-[#00141C] rounded-lg flex justify-center items-center">
                            <Like />
                        </div>
                    </section>
                </div>
            </div>
            <div className="w-[50%] bg-[#00141C] h-fit mx-[2rem] mt-[6rem] rounded-xl">
                <section className="flex  h-[100px] items-center w-[300px] justify-around">
                    <div>
                        <img src={Imgman} className="rounded-[50%]" />
                    </div>
                    <div className="mr-[20px]">
                        <h6 className="text-[#E6FFF3] text-[16px]"> رضا استوار </h6>
                        <h6 className="text-[#C4C4C4] text-[14px] mt-[10px]"> مقاله نویس تاثیر گذار</h6>
                    </div>
                </section>
                <hr className="w-[500px] m-auto"></hr>
                <section className="flex  mr-[30px] h-[60px]  items-center w-[200px] justify-around">
                    <div className="bg-[#0d0f0f] w-[40px] h-[40px] rounded-lg mt-[10px] relative ">
                        <div className="absolute right-[10px] top-[5px]">
                            <Yaddasht />
                        </div>
                    </div>
                    <div>
                        <h6 className="mr-[15px]  text-[#fff] text-[14px]"> یادداشت های من</h6>
                    </div>
                </section>
                <section className="text-[14px] bg-[#fff] w-[450px] h-[280px] rounded-xl mx-[30px] mt-[20px]   ">
                    <section className="flex  mt-[20px] h-[50px] items-center justify-between w-[80%] m-auto text-[#00121A]">
                        <div>
                            <h6 className="">مقاله نویس تاثیر گذار</h6>
                        </div>
                        <div className="flex">
                            <h6 className="">در حال تماشا</h6>
                            <span className="w-[10px] h-[10px] rounded-[50%] bg-[#00FF85] mr-[10px] mt-[5px]"></span>
                        </div>
                    </section>
                    <section>
                        <div className="w-[100%] flex justify-center text-[13px] text-[#00121A] mt-[20px]">
                            <p className="w-[280px] text-justify">طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا باشد.</p>
                        </div>
                    </section>
                </section>
                <section>
                    <section className="mt-[20px] w-[75%] flex m-auto">
                        <div className="flex text-[#C4C4C4] text-[14px] w-[87%] m-auto mr-[-10px] ">
                            <div className="bg-[#030d11] w-[40px] h-[40px] rounded-lg relative">
                                <div className="absolute top-[10px] right-[10px]">
                                    <Book />
                                </div>
                            </div>
                            <h6 className="mr-[10px]"> همه ی در س ها</h6>
                        </div>
                        <div>
                            <ArrowUp />
                        </div>
                    </section>
                    <section>
                        {
                            lesson.map(item => {
                                return (
                                    <section className="flex w-[80%] m-auto  justify-center justify-around mt-[25px]">
                                        <img src={item.img} className="rounded-lg" />
                                        <div className="text-[#C4C4C4] text-[14px] flex flex-col justify-center">
                                            <p>{item.txt}</p>
                                            <h6>{item.title}</h6>
                                            <h6 className="text-[12px]">{item.time}</h6>
                                        </div>
                                    </section>

                                )
                            })
                        }
                    <div className="bg-[#030d11] w-[40px] h-[40px] rounded-lg relative m-auto mb-[20px]">
                        <div className="absolute top-[10px] right-[10px]">
                            <ArrowDown />
                        </div>
                    </div>
                    </section>

                </section>
            </div>

        </section>
    )
}
export default HeaderPlayerCourse