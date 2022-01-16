import { Link } from "react-router-dom";
import YadeshLogo from "../assets/svg/YadeshLogo";
import YadeshNameLogo from "../assets/svg/YadeshNameLogo";
import MenuImg from "../assets/Img/MenuImg.png";
import UserPannel from "../assets/svg/UserPannel";
import MyProgressRocket from "../assets/svg/MyProgressRocket";
import Info from "../assets/svg/Info";
import Profile from "../assets/svg/Profile";
import Support from "../assets/svg/Support";
import Call from "../assets/svg/Call";
import Email from "../assets/svg/Email";
import InstaLogo from "../assets/svg/InstaLogo";
import WhatsAppLogo from "../assets/svg/WhatsAppLogo";
import TwiterLogo from "../assets/svg/TwiterLogo";
import LinkedinLogo from "../assets/svg/LinkedinLogo";

export default ({ menuDisplay }) => {
  return (
    <div
      className={` w-full h-[460px] rounded-b-[10px] bg-[#17313c] ${
        menuDisplay ? null : "hidden"
      }`}
    >
      <div className="absolute left-[70px] mt-[20px]">
        <img className="h-[420px] rounded-[10px]  " src={MenuImg} />
      </div>
      <div className="pt-[30px] pr-[80px]">
        <div className="flex flex-row">
          <div className="">
            <YadeshLogo />
          </div>
          <div className="mr-[10.68px]">
            <YadeshNameLogo />
          </div>
        </div>
        <p className="text-[12px] mt-[10px] text-[#B3BDC2] ">
          پلتفرم آموزش ویدیویی آنلاین
        </p>
        <div className="">
          <p className="text-[18px] mt-[50px] text-[#ffffff]">منوی سایت</p>
          <div className="bg-gradient-to-l from-[#00FF85] h-[1.5px] w-[400px] relative -top-3 right-28"></div>
        </div>
        <div className="flex justify-between mt-[20px] w-[300px]">
          <div>
            <button className=" flex  mt-[11px] w-[118px] h-[35px] rounded-[4px] text-[#B3BDC2]">
              <div className=" text-[#7e8d93] mt-[9px] opacity-80">
                <UserPannel />
              </div>
              <p className="my-[9px] w-[70px] h-[19px] mr-[10px] text-[12.5px] ">
                پنل کاربری
              </p>
            </button>
          </div>
          <div>
            <button className=" flex  mt-[11px] w-[150px] h-[35px] rounded-[4px] text-[#B3BDC2]">
              <div className="mr-[10px] text-[#939fa5] mt-[9px] opacity-80">
                <Profile />
              </div>
              <p className="my-[9px] w-[92px] h-[19px] mr-[10px] text-[12.5px] ">
                پروفایل کاربری
              </p>
            </button>
          </div>
          <div className="bg-[#0c2028] flex mr-[40px] mt-[7px] w-[124px] h-[46px] rounded-[4px] text-[#B3BDC2]">
            <button className="flex">
              <div className="mr-[10px] text-[#939fa5] mt-[14px] opacity-80">
                <MyProgressRocket />
              </div>
              <Link to={"/home/myprogress"}>
                <p className="my-[13px] w-[92px] h-[19px] text-[12.5px] ">
                  پیشرفت من
                </p>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-[15px] w-[10px]">
          <div>
            <button className=" flex  mt-[11px] w-[150px] h-[35px] rounded-[4px] text-[#B3BDC2]">
              <div className=" text-[#939fa5] mt-[9px] opacity-80">
                <Info />
              </div>
              <p className="my-[9px] w-[74px] h-[19px] text-[12.5px] ">
                درباره ما
              </p>
            </button>
          </div>
          <div>
            <button className=" flex -mr-[30px] mt-[11px] w-[150px] h-[35px] rounded-[4px] text-[#B3BDC2]">
              <div className="mr-[10px] text-[#939fa5] mt-[9px] opacity-80">
                <Support />
              </div>
              <p className="my-[9px] w-[74px] h-[19px] text-[12.5px] ">
                پشتیبانی
              </p>
            </button>
          </div>
        </div>
        <div className="flex w-[770px] justify-between">
          <div className="flex mt-[100px] text-[12px] text-[#5f7179] ">
            <p className="text-[#939FA5]">تماس با ما</p>
            <p className="flex mr-[21px]">
              <div className="ml-[10.5px] -mt-1 opacity-30">
                <Call />
              </div>
              ۶۵۲۳۶۵۲۶۵۲
            </p>
            <p className="flex mr-[21px]">
              <div className="ml-[10.5px] opacity-30">
                <Email />
              </div>
              info@yadesh.com
            </p>
          </div>
          <div className="flex mt-[100px] text-[12px] text-[#939FA5]">
            <p className="px-4">شبکه های اجتماعی</p>
            <div className="opacity-30 px-2">
              <InstaLogo />
            </div>
            <div className="opacity-30 px-2">
              <WhatsAppLogo />
            </div>
            <div className=" px-2">
              <TwiterLogo />
            </div>
            <div className="opacity-30 px-2">
              <LinkedinLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
