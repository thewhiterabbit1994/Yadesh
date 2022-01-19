import Almas from "../../assets/svg/SignUpForBusiness/Almas";
import Achar from "../../assets/svg/SignUpForBusiness/Achar";
import Tick from "../../assets/svg/SignUpForBusiness/Tick";
import AlamatTaajob from "../../assets/svg/SignUpForBusiness/AlamatTaajob";
import Drap from "../../assets/svg/SignUpForBusiness/Drap";
import { Link } from "react-router-dom";

const HeaderSignUpForBusiness = () => {
  return (
    <section className="bg-[#fff] w-full h-[900px] flex  items-center">
      <section className="w-[30%] h-[600px] bg-[#e6e9eb91] rounded-lg ml-[30px] mr-[40px] mt-[-100px] pr-[40px] flex flex-col justify-center text-[#002433]">
        <div className="text-[#002433] text-[18px] font-semibold flex">
          <div className="border-[#00FF85] opacity-80  border-r-[6px] ml-[7px] mr-[7px] rounded h-[20px]">
            {" "}
          </div>
          <p> ثبت نام شرکت شما </p>
        </div>
        <div className="text-[14px] font-medium	mt-[10px] mr-[10px]">
          <p>سازمان خود را در یادش ثبت نام کنید</p>
        </div>
        <div className="mt-[40px] text-[12px] font-semibold  mr-[10px]">
          <p>مزایای عضویت سازمانی در یادش </p>
        </div>
        <div className="flex fill-[#243c5a]">
          <div className="mt-[10px]">
            <Achar />
          </div>
          <p className="text-[15px]  font-semibold mt-[10px] mr-[10px]">
            تنوع موضوع و مهارت در یادش
          </p>
        </div>
        <div>
          <p className="w-[300px] h-[60px] text-[12px] text-[#0b1a20] mt-[20px]">
            سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها
            برنامه ویژه ای داریم
          </p>
        </div>
        <div className="bg-[#6e7274] h-[3px] rounded-lg w-[330px] mb-[20px]">
          <hr></hr>
        </div>
        <div className="flex">
          <div className="ml-[10px]">
            <Tick />
          </div>
          <p className="text-[15px]  font-semibold ">اساتید برتر ونمونه</p>
        </div>
        <div>
          <p className="w-[300px] h-[60px] text-[12px] text-[#002433] mt-[20px]">
            سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها
            برنامه ویژه ای داریم
          </p>
        </div>
        <div className="bg-[#6e7274] h-[3px] rounded-lg w-[330px] mb-[20px]">
          <hr></hr>
        </div>
        <div className="flex">
          <Almas />
          <p className="text-[15px] mr-[10px] font-semibold ">
            ویدیو و محتوای با کیفیت
          </p>
        </div>
        <div>
          <p className="w-[300px] h-[60px] text-[12px] text-[#002433] mt-[20px]">
            سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها
            برنامه ویژه ای داریم
          </p>
        </div>
      </section>

      <section className="w-[40%] leading-[40px] h-[800px] mt-[50px] flex flex-col justify-center">
        <div className="text-[#002433]">
          <p className=" text-[20px] font-semibold">سازمان شما</p>
          <p className="text-[14px] font-medium">
            برای شروع اطلاعات سازمان خود را در فرم زیر وارد کنید
          </p>
        </div>
        <div className="mt-[10px]">
          <p className="text-[#002433] text-[13px] font-medium">
            تعداد کارمندان
          </p>
          <input
            placeholder="   عددی بین 100 تا 1000 وارد کنید"
            className=" text-[13px] w-[500px] h-[40px] border-[#E5E5E5] border-[2px] rounded"
          />
        </div>
        <div className="mt-[20px] ">
          <p className="text-[#002433] text-[13px] font-medium">
            نام سازمان شما{" "}
          </p>
          <input
            placeholder=" مانند شرکت اسنپ فود"
            className="text-[#002433] font-semibold text-[12px] w-[500px] h-[40px] border-[#E5E5E5] border-[2px] rounded"
          />
        </div>
        <section className="flex mt-[20px] ">
          <div className="ml-[100px]">
            <p className="text-[#002433] text-[13px] font-medium">
              موقیت سازمانی شما
            </p>
            <section className="relative ">
              <div className="absolute left-[10px] top-[17px] ">
                <Drap />
              </div>
              <input
                placeholder="   اصفهان"
                className="text-[12px]  w-[150px] h-[40px] border-[#E5E5E5] border-[2px] rounded"
              />
            </section>
          </div>
          <div>
            <p className="text-[#002433] text-[13px] font-medium">
              مدت زمان اشتراک
            </p>
            <section className="relative">
              <div className="absolute left-[10px] top-[17px] ">
                <Drap />
              </div>
              <input
                placeholder="  شش ماه"
                className="text-[12px] w-[250px] h-[40px] border-[#E5E5E5] border-[2px] rounded"
              />
            </section>
          </div>
        </section>
        <div className="mt-[20px]">
          <p className="text-[#002433] text-[13px] font-medium">ایمیل آدرس</p>
          <input
            placeholder="   nftreact@.org"
            className="text-[12px] w-[500px] h-[40px] border-[#E5E5E5] border-[2px] rounded"
          />
        </div>
        <div className="flex mt-[20px]">
          <div className="mt-[8px]">
            <AlamatTaajob />
          </div>
          <p className="text-[#002433] text-[13px] font-medium mr-[10px]">
            اطلاعات سازمانی و شخصی شما نزد یادش در امان است
          </p>
        </div>
        <div className="w-[500px] h-[50px] bg-[#00FF85] rounded-lg flex justify-center items-center mt-[30px]">
          <p className="text-[#002433] text-[12px] font-medium">
            ارسال درخواست
          </p>
        </div>
        <div className="flex text-[#002433] text-[13px] font-medium justify-center">
          <p>به کمک احتیاج دارید ؟</p>
          <Link to={"/home/contactsupport"}>
            <p className="font-semibold mr-[10px]">تماس با پشتیبانی</p>
          </Link>
        </div>
      </section>
    </section>
  );
};
export default HeaderSignUpForBusiness;
