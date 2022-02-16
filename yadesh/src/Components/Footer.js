import YadeshLogo from "../assets/svg/YadeshLogo";
import YadeshNameLogo from "../assets/svg/YadeshNameLogo";
import Call from "../assets/svg/Call";
import Email from "../assets/svg/Email";
import Location from "../assets/svg/Location";
import GoogleMap from "../assets/svg/GoogleMap";
import RasaneMelliLogo from "../assets/Img/RasaneMelliLogo.png";
import ELogo from "../assets/Img/ELogo.png";
import EtemadLogo from "../assets/Img/EtemadLogo.png";
import InstaLogo from "../assets/svg/InstaLogo";
import WhatsAppLogo from "../assets/svg/WhatsAppLogo";
import TwiterLogo from "../assets/svg/TwiterLogo";
import LinkedinLogo from "../assets/svg/LinkedinLogo";
import IranFlag from "../assets/svg/IranFlag";
import EnFlag from "../assets/svg/EnFlag";
import ArabFlag from "../assets/svg/ArabFlag";
import Langdropivon from "../assets/svg/langdropivon";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { MainCounter } from "../Context/Context";

const Footer = () => {
  const [isSelectMenuOpen, setisSelectMenuOpen] = useState(false);
  const [flagshow, setflagshow] = useState(0);

  const { siteManagmentDatabase } = useContext(MainCounter);

  const data = siteManagmentDatabase.Footer;
  let allEpisode = [];
  const allEpisodedata = siteManagmentDatabase.Courses.forEach((Course) => {
    Course.Episodes.forEach((Episode) => {
      allEpisode.push(Episode);
    });
  });
  const fiveOfEpisodes = [];
  for (let i = 0; i < 5; i++) {
    fiveOfEpisodes.push(allEpisode[i]);
  }
  const allCourses = siteManagmentDatabase.Courses;
  const fiveOfCourses = [];
  for (let i = 0; i < 5; i++) {
    fiveOfCourses.push(allCourses[i]);
  }

  console.log("fiveOfCourses", fiveOfCourses);
  return (
    <div className=" w-full h-[567px] bg-[#000405] ">
      <div className="flex justify-between mr-[65px] pt-[30px] ">
        <div className="flex flex-row">
          <div className="">
            <YadeshLogo />
          </div>
          <div className="mr-[10.68px]">
            <YadeshNameLogo />
          </div>
        </div>

        <div className="flex  ml-[80px]">
          <button className="border-[1.5px] border-[#80FFC2] flex mt-[11px] w-[72px] h-[33px] rounded-[6px] text-[#E6E9EB]">
            <Link to={"/login"}>
              <p className="mt-[7px] w-[80px] h-[25px] -mr-1.5 text-[11px] ">
                وارد شوید
              </p>
            </Link>
          </button>
          <div
            onClick={() => setisSelectMenuOpen(!isSelectMenuOpen)}
            className="bg-[#001d29] w-[45px] cursor-pointer h-[35px] rounded-[4px] mt-[11px] mr-[15px] text-[#E6E9EB]"
          >
            <div className="flex justify-end ml-[5px] mt-[16px]">
              <div className="mt-[-5px] ml-[5px]">
                {flagshow === 0 ? (
                  <IranFlag />
                ) : flagshow === 1 ? (
                  <ArabFlag />
                ) : flagshow === 2 ? (
                  <EnFlag />
                ) : null}
              </div>
              <Langdropivon />
            </div>
          </div>
          <div
            className={`translate transition-all duration-700 
          ${
            isSelectMenuOpen
              ? "absolute mr-[87px] mt-[47px]  bg-[#001d29] w-[45px] h-[85px] rounded-[4px] text-[#E6E9EB]"
              : "absolute mr-[87px] mt-[47px] bg-[#001d29] w-[45px] h-[0px] rounded-[4px] text-[#E6E9EB]"
          }
          `}
          >
            <div
              onClick={() => {
                setflagshow(0);
                setisSelectMenuOpen(false);
              }}
              className={`translate transition-all duration-700 cursor-pointer
            ${
              isSelectMenuOpen
                ? "flex justify-center  h-[20px] mt-[5px]"
                : "flex justify-center relative z-[-10] mt-[-30px]"
            }
            `}
            >
              <IranFlag />
              <p className="text-[10px] mr-1">FA</p>
            </div>
            <div
              onClick={() => {
                setflagshow(1);
                setisSelectMenuOpen(false);
              }}
              className={`translate transition-all duration-700 cursor-pointer
            ${
              isSelectMenuOpen
                ? "flex justify-center  h-[20px] mt-[10px]"
                : "flex justify-center relative z-[-10] mt-[-10px]"
            }
            `}
            >
              <ArabFlag />
              <p className="text-[10px] mr-1">AR</p>
            </div>
            <div
              onClick={() => {
                setflagshow(2);
                setisSelectMenuOpen(false);
              }}
              className={`translate transition-all duration-700 cursor-pointer
            ${
              isSelectMenuOpen
                ? "flex justify-center  h-[20px] mt-[10px]"
                : "flex justify-center relative z-[-10] mt-[-10px]"
            }
            `}
            >
              <EnFlag />
              <p className="text-[10px] mr-1">EN</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-[10px] -mt-[10px] mr-[65px] text-[#B3BDC2] ">
          پلتفرم آموزش ویدیویی آنلاین
        </p>
      </div>
      <div className="flex ">
        <div
          className={`${
            data.exploreInYadesh
              ? " w-[208px]  h-[300px] mr-[65px] mt-[40px] divide-y divide-[#373b3c]"
              : "hidden"
          }`}
        >
          <p className="text-[13px] mb-3 text-[#E6FFF3] ">گردش در یادش</p>
          <div className="flex flex-row text-[13px] text-[#626464] ">
            <div className="flex flex-col leading-[51px]">
              <Link to={"/home"}>
                <p className="">صفحه اصلی</p>
              </Link>
              <Link to="/home/userprofile">
                <a className="">پنل کاربری</a>
              </Link>
              <Link to={"/home/userprofile"}>
                <p className="">پروفایل کاربری</p>
              </Link>
              <Link to="/home/myprogress">
                <a className="">کلاس ها</a>
              </Link>
              <Link to="/home/myprogress">
                <a className="">پلی لیست های من</a>
              </Link>
            </div>
            <div className="flex flex-col mt-[17px] ">
              <Link to="/aboutus">
                <a className="my-4">درباره ما</a>
              </Link>
              <Link to={"/home/contactsupport"}>
                <p className="my-8">پشتیبانی</p>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            data.FavoriteEpisodes
              ? "w-[120px] h-[300px] mr-[40px]  mt-[40px] divide-y divide-[#373b3c]"
              : "hidden"
          } `}
        >
          <p className="text-[13px]  mb-3 text-[#E6FFF3]">اپیزود های محبوب</p>
          <div className="flex flex-row text-[13px] text-[#626464] ">
            <div className="flex flex-col">
              {fiveOfEpisodes.map((item) => {
                return (
                  <Link
                    className="my-4"
                    to={`/home/PlayerEpisode/${item.EpisodeID}`}
                  >
                    <a className="my-4">{item.NameOfEpisode}</a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className={`${
            data.bestCourses
              ? "w-[150px] h-[300px] mr-[40px] mt-[40px] divide-y divide-[#373b3c]"
              : "hidden"
          } `}
        >
          <p className="text-[13px] mb-3 text-[#E6FFF3]">دوره های برتر</p>
          <div className="flex flex-row text-[13px] text-[#626464] ">
            <div className="flex flex-col">
              {fiveOfCourses.map((item) => {
                return (
                  <Link className="my-4" to={`/home/course/${item.CourseID}`}>
                    <a className="my-4">{item.CourseCategory}</a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className={`${
            data.contactInfo ? "mt-12 w-[400px] mr-[205px]" : "hidden"
          } `}
        >
          <div className="flex">
            <div className="w-[6px] h-[15px] bg-[#00FF85] rounded-[10px] mt-1 ml-2"></div>
            <p className="text-[#E6FFF3] text-[15px] ml-[90px] ">
              با ما در تماس باشید
            </p>
            <a
              href="tel:09904848665"
              className="text-[#a1b4ac] text-[14px] flex mr-[21px]"
            >
              ۶۵۲۳۶۵۲۶۵۲
              <div className="mr-[10.5px] opacity-50">
                <Call />
              </div>
            </a>
          </div>
          <div className="my-7">
            <a
              href="mailto:ho3einzarrabi@gmail.com"
              className="flex text-[#a1b4ac] text-[13px]"
            >
              <div className="ml-[10.5px] opacity-50">
                <Email />
              </div>
              info@yadesh.com
            </a>
          </div>
          <a
            href="https://goo.gl/maps/wWS2ioiFMViaooZX8"
            target="_blank"
            className="flex w-[380px]"
          >
            <div className="ml-[10.5px] opacity-50">
              <Location />
            </div>

            <p className="text-[#a1b4ac] text-[13px]">
              تهران، خیابان انقلاب اسلامی، خیابان کارگر شمالی، پلاک ۴۲،واحد۲
            </p>
            <GoogleMap />
          </a>
          <div className="w-[380px] flex justify-between mt-[24px]">
            <div className="w-[120px] h-[120px] bg-[#000a0e] rounded-[10px]">
              <img
                className="w-[75px] h-[75px] my-6 m-auto"
                src={RasaneMelliLogo}
              />
            </div>
            <div className="w-[120px] h-[120px] bg-[#000a0e] rounded-[10px]">
              <img className="w-[75px] h-[75px] my-6 m-auto" src={ELogo} />
            </div>
            <div className="w-[120px] h-[120px] bg-[#000a0e] rounded-[10px]">
              <img className="w-[75px] h-[75px] my-6 m-auto" src={EtemadLogo} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[70px] mt-3 bg-[#000e14]">
        <div className="flex mr-16 ">
          <p className="my-6 pl-7 text-[#fff] text-[13px]">حریم شخصی</p>
          <p className="my-6 pl-7 text-[#2e3a3f] text-[13px]">شرایط استفاده</p>
          <p className="my-6 pl-7 text-[#2e3a3f] text-[13px]">نقشه سایت</p>
          <p className="my-6 pl-7 text-[#2e3a3f] text-[13px]">
            پرسش های متداول
          </p>
          <div className="flex absolute  left-[85px] text-[12px] text-[#939FA5]">
            <a
              href="https://www.instagram.com/realzarrabi"
              target="_blank"
              className="opacity-20 mt-[26px] px-4"
            >
              <InstaLogo />
            </a>
            <a
              href="https://wa.me/989904848665"
              target="_blank"
              className="opacity-20 mt-[26px] px-4"
            >
              <WhatsAppLogo />
            </a>
            <a
              href="https://twitter.com/hoseinzarrabi"
              target="_blank"
              className=" bg-[#00202e] rounded-[10px] mt-[16px] h-[40px] w-[40px] mx-4"
            >
              <div className="mx-3 mt-3">
                <TwiterLogo />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/hoseinzarrabi"
              target="_blank"
              className="opacity-20 mt-[26px] px-4"
            >
              <LinkedinLogo />
            </a>
          </div>
        </div>
      </div>
      <div className="flex">
        <p className="my-6 mr-16 text-[#2e3a3f] text-[13px]">
          تمام حق و حقوق این سایت محفوظ است
        </p>
        <a
          href="tel:09904848665"
          className="absolute left-20 my-6 mr-16 text-[#2e3a3f] text-[13px]"
        >
          توسعه توسط تیم AlfaDevs
        </a>
      </div>
    </div>
  );
};
export default Footer;
