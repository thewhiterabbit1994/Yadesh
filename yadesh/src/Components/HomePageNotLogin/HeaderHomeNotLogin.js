import Christin from "../../assets/Img/imgHomeNotLogin/christin-hume-Hcfwew744z4-unsplash 1.jpg";
import cole from "../../assets/Img/imgHomeNotLogin/cole-keister-SRs7zDrj150-unsplash 1.jpg";
import ed from "../../assets/Img/imgHomeNotLogin/ed-robertson-eeSdJfLfx1A-unsplash 1.jpg";
import lucas from "../../assets/Img//imgHomeNotLogin/lucas-george-wendt-B-WavFzUtiA-unsplash 1.jpg";
import trnava from "../../assets/Img/imgHomeNotLogin/trnava-university-WGG4eD0rQmo-unsplash 1.jpg";
import TicIcon from "../../assets/svg/HomePageNotLogin/TikIcon";
const HeaderHomeNotLogin = () => {
  return (
    <section className="w-[1366px] bg-black h-[100vh] flex mt-[-2rem] ">
      <div className=" w-2/5  mt-[10%] mr-[5%]">
        <div>
          <h1 className="text-[#E6FFF3] font-medium text-[27px]  ">
            {" "}
            یادگیری به فاصله چند کلیک
          </h1>
          <p className=" w-[414px]  twxt-[18px] mt-[1rem] text-[#E6FFF3] text-[13px] ">
            {" "}
            بیش از هزاران ویدیوی آموزشی برای شما از بروزترین منابع آموزشی دنیا{" "}
          </p>
        </div>

        <div className="flex mb-[1rem] mt-[2rem] ">
          <button className="text-[12px] text-[#E6FFF3] w-[7rem] h-[3rem] rounded border-solid border-[#00FF85] border-2 ml-[7px] ">
            {" "}
            بیشتر بدانید
          </button>
          <button className="text-[12px] text-[#000] bg-[#00FF85] w-[7rem] h-[3rem] rounded">
            {" "}
            ثبت نام کنید
          </button>
        </div>

        <div className="text-white w-[50%] mt-[2rem]  ">
          <div className="flex">
            <div className="border-[#00FF85] opacity-80  border-r-[4px] ml-[7px] mr-[7px] rounded">
              {" "}
            </div>
            <p className="text-[12px] ">مزایای ثبت نام در یادش</p>
          </div>
          <div className="flex mt-[1rem]  ">
            <TicIcon />
            <p className="text-[12px] opacity-80 mr-[7px] ">
              {" "}
              دسترسی به بیش از هزاران ویدیو
            </p>
          </div>
          <div className="flex mt-[1rem]">
            <TicIcon />
            <p className="text-[12px] opacity-90  mr-[7px]">
              {" "}
              پنل کاربری مامل و کاربردی{" "}
            </p>
          </div>
          <div className="flex mt-[1rem]">
            <TicIcon />
            <p className="text-[12px] opacity-80  mr-[7px]">
              {" "}
              امکان کامل ویدیو بدون محدودیت
            </p>
          </div>
        </div>
      </div>

      <div className="w-[60%] h-[80vh] mt-[3rem] relative top-[2rem]">
        <img
          src={Christin}
          className="w-[43%] h-[31%] absolute  left-[13.5%] top-[0] rounded"
        />
        <img
          src={trnava}
          className="w-[41%] h-[61%] absolute left-[58%] top-[0] rounded"
        />
        <img
          src={lucas}
          className="w-[22.5%] h-[29%] absolute left-[34%] top-[33%] rounded"
        />
        <img
          src={cole}
          className="w-[20%] h-[53%] absolute left-[13%] top-[33%] rounded"
        />
        <img
          src={ed}
          className="w-[65%] h-[22%] absolute left-[34%] top-[63%] rounded"
        />
      </div>
    </section>
  );
};
export default HeaderHomeNotLogin;
