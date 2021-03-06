import SupportBG from "../assets/Img/SupportBG.png";
import Navbar from "../Components/Navbar";
import Almas from "../assets/svg/questionFromYadesh/Almas";
import Achar from "../assets/svg/questionFromYadesh/Achar";
import Tick from "../assets/svg/questionFromYadesh/Tick";
import Footer from "../Components/Footer";
import Info from "../assets/svg/Info";
import Support from "../assets/svg/Support";
import { useContext } from "react";
import { MainCounter } from "../Context/Context";

const ContactSupport = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);

  const titledata = siteManagmentDatabase.ContactWithYadesh.Title;
  const subheadingsdata =
    siteManagmentDatabase.ContactWithYadesh.WhyYadesh.Subheadings;
  const fieldsdata = siteManagmentDatabase.ContactWithYadesh.ContactForm.Fields;

  return (
    <div className="h-[1000px] w-full bg-[#000405] ">
      <Navbar />
      <div className="bg-gradient-to-t from-[#000000] to-[#0004057a] h-[147vh] w-full absolute"></div>
      <div>
        <img src={SupportBG} />
      </div>
      <div className="absolute top-[-40px] right-[80px]">
        <div className="flex  mt-[130px]">
          <div className="w-[5.5px] h-[18px] bg-[#00FF85] rounded-[10px] mt-1.5 ml-2"></div>
          <p className="text-[19px]  text-[#ffffff]">{titledata.title}</p>
        </div>
        <div>
          <p className="mt-[5px] text-[#C4C4C4] text-[14px]">
            {titledata.subTitle}
          </p>
        </div>
        <div>
          <div className="bg-gradient-to-l from-[#00FF85] h-[1.5px] w-[200px]  mt-[25px] "></div>
        </div>
        <section className="h-[420px] mt-[10px] flex flex-col justify-center">
          <div className="flex">
            <p className="text-[#E6FFF3] text-[19px]">چرا یادش؟</p>
          </div>
          <div
            className={`${
              subheadingsdata.Subheading1.isDisplayed ? "" : "hidden"
            }`}
          >
            <div className="flex mt-[25px] ">
              <Achar />
              <p className="text-[#E6FFF3] text-[14px] mr-[10px] ">
                {subheadingsdata.Subheading1.title}
              </p>
            </div>
            <p className="text-[#C4C4C4] text-[12px] mt-[25px] mb-6">
              {subheadingsdata.Subheading1.subTitle}
            </p>
          </div>
          <div
            className={`${
              subheadingsdata.Subheading2.isDisplayed ? "" : "hidden"
            }`}
          >
            <div className="flex mt-[25px]">
              <Tick />
              <p className="text-[#E6FFF3] text-[14px] mr-[10px]">
                {subheadingsdata.Subheading2.title}
              </p>
            </div>
            <p className="text-[#C4C4C4] text-[12px] mt-[25px] mb-6">
              {subheadingsdata.Subheading2.subTitle}
            </p>
          </div>
          <div
            className={`${
              subheadingsdata.Subheading3.isDisplayed ? "" : "hidden"
            }`}
          >
            <div className="flex mt-[25px]">
              <Almas />
              <p className="text-[#E6FFF3] text-[14px] mr-[10px]">
                {subheadingsdata.Subheading3.title}
              </p>
            </div>
            <p className="text-[#C4C4C4] text-[12px] mt-[25px] mb-6">
              {subheadingsdata.Subheading3.subTitle}
            </p>
          </div>
        </section>
      </div>
      <div className="w-[46.875vw] h-fit absolute top-[110px]  left-[50px] mt-[20px] rounded-[10px] bg-[#ffffff]">
        <div className="flex relative top-[-45px]">
          <div className="ml-3">
            <Support />
          </div>
          <p className=" text-[#ffffff] text-[14px]">
            فرم زیر را پر کنید و تیم پشتیبانی ما در اسرع وقت پاسخگوی شما خواهند
            بود
          </p>
        </div>
        <div
          className={`${
            fieldsdata.Field1.isDisplayed ? "" : "hidden"
          } flex flex-col mr-[50px] mt-[-10px]`}
        >
          <lable className="text-[#002433] flex mt-8 mb-3 text-[12px] font-bold">
            {fieldsdata.Field1.title}
          </lable>
          <input
            placeholder="مانند کامران جمشیدی"
            className="outline-[#302f2f] pr-5 text-[10px] w-[500px] h-[40px] border-[#c2c2c2] border-[2px] rounded"
          />
        </div>
        <div
          className={`${
            fieldsdata.Field2.isDisplayed ? "" : "hidden"
          } flex flex-col mr-[50px] mt-[-10px]`}
        >
          <lable className="text-[#002433] flex mt-8 mb-3 text-[12px] font-bold">
            {fieldsdata.Field2.title}
          </lable>
          <input
            placeholder="مانند example@email.com"
            className="outline-[#302f2f] pr-5 text-[10px] w-[500px] h-[40px] border-[#c2c2c2] border-[2px] rounded"
          />
        </div>
        <div
          className={`${
            fieldsdata.Field3.isDisplayed ? "" : "hidden"
          } flex flex-col mr-[50px] mt-[-10px]`}
        >
          <lable className="text-[#002433] flex mt-8 mb-3 text-[12px] font-bold">
            {fieldsdata.Field3.title}
          </lable>
          <input
            placeholder="مانند سرپرست برنامه ریزی و بودجه"
            className="outline-[#302f2f] pr-5 text-[10px] w-[500px] h-[40px] border-[#c2c2c2] border-[2px] rounded"
          />
        </div>
        <div
          className={`${
            fieldsdata.Field4.isDisplayed ? "" : "hidden"
          } flex flex-col mr-[50px] mt-[-10px]`}
        >
          <lable className="text-[#002433] flex mt-8 mb-3 text-[12px] font-bold">
            {fieldsdata.Field4.title}
          </lable>
          <input
            placeholder="مانند شرکت اسنپ فود"
            className="outline-[#302f2f] pr-5 text-[10px] w-[500px] h-[40px] border-[#c2c2c2] border-[2px] rounded"
          />
        </div>
        <div
          className={`${
            fieldsdata.Field5.isDisplayed ? "" : "hidden"
          } flex flex-col mr-[50px] mt-[-10px]`}
        >
          <lable className="text-[#002433] flex mt-8 mb-3 text-[12px] font-bold">
            {fieldsdata.Field5.title}
          </lable>
          <textarea
            style={{ resize: "none" }}
            placeholder="پیام شما..."
            className="outline-[#302f2f] px-5 text-[12px]  pt-[10px] w-[500px] h-[130px] border-[#c2c2c2] border-[2px] rounded"
          />
        </div>
        <div className="flex mt-3 mb-2 mr-[50px]">
          <div className=" mt-[-1.5px] pl-2">
            <Info color="#464646" />
          </div>
          <p className="text-[12px]">
            اطلاعات سازمانی و شخصی شما نزد یادش در امان است
          </p>
        </div>
        <button className="bg-[#00ff85] mr-[50px] mt-3 text-[10px] w-[500px] h-[40px] mb-10 font-bold rounded">
          ارسال درخواست
        </button>
      </div>
      <Footer />
    </div>
  );
};
export default ContactSupport;
