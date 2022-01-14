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

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full h-[567px] bg-[#000405] ">
      <div className=" pt-[30px] pr-[60px]">
        <div className="flex flex-row">
          <div className="">
            <YadeshLogo />
          </div>
          <div className="mr-[10.68px]">
            <YadeshNameLogo />
          </div>
        </div>
        <p className="text-[10px] mt-[10px] text-[#B3BDC2] ">
          پلتفرم آموزش ویدیویی آنلاین
        </p>
        <div className="flex absolute top-7 left-24">
          <button className="border-[1.5px] border-[#80FFC2] flex mr-[15px] mt-[11px] w-[72px] h-[33px] rounded-[6px] text-[#E6E9EB]">
            <p className="mt-[7px] w-[80px] h-[25px]  text-[11px] ">
              وارد شوید
            </p>
          </button>
          <select className="bg-[#001d29] w-[40px] h-[32px] rounded-[4px] mt-[11px] mr-[15px] text-[#E6E9EB]">
            <option value="1"></option>
            <option value="2">EN</option>
          </select>
        </div>
      </div>
      <div className="flex ">
        <div className="w-[208px] h-[300px] mr-[65px] mt-[40px] divide-y divide-[#373b3c]">
          <p className="text-[13px] mb-3 text-[#E6FFF3] ">گردش در یادش</p>
          <div className="flex flex-row text-[13px] text-[#626464] ">
            <div className="flex flex-col">
              <a className="my-4">صفحه اصلی</a>
              <a className="my-4">پنل کاربری</a>
              <a className="my-4">پروفایل کاربری</a>
              <a className="my-4">کلاس ها</a>
              <a className="my-4">پلی لیست های من</a>
            </div>
            <div className="flex flex-col">
              <a className="my-4">درباره ما</a>
              <a className="my-4">پشتیبانی</a>
            </div>
          </div>
        </div>
        <div className="w-[120px] h-[300px] mr-[40px]  mt-[40px] divide-y divide-[#373b3c]">
          <p className="text-[13px]  mb-3 text-[#E6FFF3]">اپیزود های محبوب</p>
          <div className="flex flex-row text-[13px] text-[#626464] ">
            <div className="flex flex-col">
              <a className="my-4">اقتصاد الکترونیک</a>
              <a className="my-4">مبانی تجارت</a>
              <a className="my-4">حسابداری صنعتی</a>
              <a className="my-4">اصول سرمایه گذاری</a>
              <a className="my-4">اقتصاد کلان</a>
            </div>
          </div>
        </div>
        <div className="w-[130px] h-[300px] mr-[40px] mt-[40px] divide-y divide-[#373b3c]">
          <p className="text-[13px] mb-3 text-[#E6FFF3]">دوره های برتر</p>
          <div className="flex flex-row text-[13px] text-[#626464] ">
            <div className="flex flex-col">
              <a className="my-4">سواد بصری</a>
              <a className="my-4">مبانی تجارت</a>
              <a className="my-4">اقتصاد الکترونیک</a>
              <a className="my-4">اصول سخنوری</a>
              <a className="my-4">برنامه نویسی اندروید</a>
            </div>
          </div>
        </div>
        <div className="mt-12 w-[400px] mr-[205px]">
          <div className="flex">
            <div className="w-[6px] h-[15px] bg-[#00FF85] rounded-[10px] mt-1 ml-2"></div>
            <p className="text-[#E6FFF3] text-[15px] ml-[90px] ">
              با ما در تماس باشید
            </p>
            <p className="text-[#a1b4ac] text-[14px] flex mr-[21px]">
              ۶۵۲۳۶۵۲۶۵۲
              <div className="mr-[10.5px] opacity-50">
                <Call />
              </div>
            </p>
          </div>
          <div className="my-7">
            <p className="flex text-[#a1b4ac] text-[13px]">
              <div className="ml-[10.5px] opacity-50">
                <Email />
              </div>
              info@yadesh.com
            </p>
          </div>
          <div className="flex w-[380px]">
            <div className="ml-[10.5px] opacity-50">
              <Location />
            </div>

            <p className="text-[#a1b4ac] text-[13px]">
              تهران، خیابان انقلاب اسلامی، خیابان کارگر شمالی، پلاک ۴۲،واحد۲
            </p>
            <GoogleMap />
          </div>
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
            <div className="opacity-20 mt-[26px] px-4">
              <InstaLogo />
            </div>
            <div className="opacity-20 mt-[26px] px-4">
              <WhatsAppLogo />
            </div>
            <div className=" bg-[#00202e] rounded-[10px] mt-[16px] h-[40px] w-[40px] mx-4">
              <div className="mx-3 mt-3">
                <TwiterLogo />
              </div>
            </div>
            <div className="opacity-20 mt-[26px] px-4">
              <LinkedinLogo />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <p className="my-6 mr-16 text-[#2e3a3f] text-[13px]">
          تمام حق و حقوق این سایت محفوظ است
        </p>
        <p className="absolute left-20 my-6 mr-16 text-[#2e3a3f] text-[13px]">
          توسعه توسط تیم AlfaDevs
        </p>
      </div>
    </div>
  );
};
export default Footer;
