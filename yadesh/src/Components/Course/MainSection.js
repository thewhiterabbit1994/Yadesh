import { useState } from "react"
import ImgMain from "../../assets/Img/course/imgMain.png"
import Bookmark from "../../assets/svg/course/Bookmark"

const MainSection = () => {
    const [box, setBox] = useState([
        {
            txtTitle: "مقدماتی بر بازار و بازار های مالی ",
            txt: "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند،",
            img: ImgMain,
            svg: Bookmark,
            txtSvg: "ذخیره کن",
        },
        {
            txtTitle: "مقدماتی بر بازار و بازار های مالی ",
            txt: "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند،",
            img: ImgMain,
            svg: Bookmark,
            txtSvg: "ذخیره کن"
        },
        {
            txtTitle: "مقدماتی بر بازار و بازار های مالی ",
            txt: "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند،",
            img: ImgMain,
            svg: Bookmark,
            txtSvg: "ذخیره کن"
        },
        {
            txtTitle: "مقدماتی بر بازار و بازار های مالی ",
            txt: "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند،",
            img: ImgMain,
            svg: Bookmark,
            txtSvg: "ذخیره کن"
        },
        {
            txtTitle: "مقدماتی بر بازار و بازار های مالی ",
            txt: "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند،",
            img: ImgMain,
            svg: Bookmark,
            txtSvg: "ذخیره کن"
        }
    ])
    return (
        <section className="bg-[#000] w-full h-[1350px] ">
            <div className=" mr-[100px]">
                <section className="flex">
                    <div className="border-[#00FF85] h-[15px] mt-[5px] border-r-[6px] ml-[7px] mr-[7px] rounded ">  </div>
                    <h6 className="text-[#E6FFF3] text-[17px] mb-[10px]"> درس های سرمایه گذاری</h6>
                </section>
                <div >
                    <h6 className="text-[#C4C4C4] text-[14px] mr-[10px] mb-[20px]"> درس های این دوره</h6>
                </div>
            </div>
            <section >
                {
                    box.map(item => {
                        return (
                            <section className="  bg-[#000E14] w-full flex justify-center mb-[25px]">
                                <div className="flex  w-[80%] h-[230px] justify-around items-center  ">
                                    <img src={item.img} className="rounded-lg w-[230px] h-[150px] mt-[5px] border-b-4 border-[#80FFC2]" />
                                    <div>
                                        <p className="text-[16px] text-[#E6FFF3] mb-[1rem]">{item.txtTitle}</p>
                                        <p className="w-[550px] h-[80px] text-[12px] text-[#C4C4C4] leading-[25px]">{item.txt}</p>
                                    </div>
                                    <div className="flex border border-[#80FFC2] w-[89px] h-[40px] rounded ">
                                        <div className="m-auto">
                                            <Bookmark />
                                        </div>
                                        <h5 className="text-[#fff] text-[11px] m-auto">{item.txtSvg}</h5>
                                    </div>
                                </div>
                               
                            </section>
                        )
                    })
                }
            </section>
        </section>
    )
}
export default MainSection