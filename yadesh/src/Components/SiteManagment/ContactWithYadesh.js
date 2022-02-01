import { useState } from "react"
import Title from "../SiteManagmentContactWithYadesh/Title"
import WhyYadesh from "../SiteManagmentContactWithYadesh/WhyYadesh"
import ContactForm from "../SiteManagmentContactWithYadesh/ContactForm"
import Play from "../../assets/svg/AdminPanelCourses/Play"


const ContactWithYadesh = () => {
    const [openTab, setOpenTab] = useState(1)
    return (
        <section className="w-full h-[400vh]">
            <section className="flex justify-between">
                <section className="w-[10%]">
                    <div className="text-[11px] w-[160px] text-center opacity-90">
                        <p onClick={() => setOpenTab(1)} className=" hover:bg-[#e2e0e0]  p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> عنوان</p>
                        <p onClick={() => setOpenTab(2)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> جرا یادش </p>
                        <p onClick={() => setOpenTab(3)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">فرم تماس  </p>
                    </div>
                </section>
                <section className={`w-[84%]`}>
                    <div className={`${openTab === 1 ? "block" : "hidden"}`}>
                        <Title />
                    </div>
                    <div className={`${openTab === 2 ? "block" : "hidden"}`}>
                        <WhyYadesh />
                    </div>
                    <div className={`${openTab === 3 ? "block" : "hidden"}`}>
                        <ContactForm />
                    </div>
                </section>
            </section>
            <section className="flex text-[#fff] mt-[20px] text-[12px] w-[350px] justify-between m-auto">
                <div className="relative ">
                    <div className="absolute top-[18px] right-[10px]">
                        <Play />
                    </div>
                    <button className="w-[170px] h-[45px] bg-[#0050A8] rounded"> پیش نمایش صفحه </button>
                </div>
                <button className="w-[170px] h-[45px] bg-[#008043] rounded"> ذخیره کردن تغییرات </button>
            </section>
        </section>
    )
}
export default ContactWithYadesh