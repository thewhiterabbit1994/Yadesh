import classs from "../../assets/Img/imgHomeNotLogin/class.jpg";
import asnad from "../../assets/Img/imgHomeNotLogin/asnad.jpg";
import work from "../../assets/Img/imgHomeNotLogin/work.jpg";
import convetion from "../../assets/Img/imgHomeNotLogin/convertion.jpg";
import reading from "../../assets/Img/imgHomeNotLogin/reading.jpg";
import TicIcon from "../../assets/svg/HomePageNotLogin/TikIcon";
const HeaderHomeNotLogin = () => {
  return (
    <section className="w-full bg-black  h-[700px] flex justify-center mt-[-2rem] ">
      <div className="w-[725px] h-[562px] mt-[100px] relative -mr-[80px] ">
        <img
          src={classs}
          className="w-[300px] h-[150px] absolute  left-[0px] top-[0] rounded-lg"
        />
        <img
          src={reading}
          className="w-[300px] h-[300px] absolute left-[320px] top-[0] rounded-lg"
        />
        <img
          src={convetion}
          className="w-[145px] h-[140px] absolute left-[155px] top-[170px] rounded-lg"
        />
        <img
          src={asnad}
          className="w-[140px] h-[270px] absolute left-[0] top-[170px] rounded-lg"
        />
        <img
          src={work}
          className="w-[460px] h-[120px] absolute left-[160px] top-[320px] rounded-lg"
        />
      </div>

      <div className="   w-[414px] h-[405px]  mt-[140px] mr-[60px] ">
        <div>
          <h1 className="text-[#E6FFF3] font-medium text-[28px] w-[414px] h-[50px] leading-[50px] ">
            {" "}
            یادگیری به فاصله چند کلیک
          </h1>
          <p className=" w-[414px] h-[85px] text-[14px] mt-[1rem] text-[#C4C4C4] leading-[40px]">
            {" "}
            بیش از هزاران ویدیوی آموزشی برای شما از بروزترین منابع آموزشی دنیا{" "}
          </p>
        </div>

        <div className="flex mt-[20px]">
          <button className="text-[12px] text-[#E6FFF3] w-[140px] h-[43px] rounded-[6px] border-solid border-[#80ffc2] border-[1.5px] ml-[20px] ">
            {" "}
            بیشتر بدانید
          </button>
          <button className="text-[12px] text-[#000] bg-[#00ff85] w-[140px] h-[43px] rounded-[6px]">
            {" "}
            ثبت نام
          </button>
        </div>

        <div className="text-white  font-normal ">
          <div className="flex mt-[30px]">
            <div className="border-[#00FF85] opacity-80  border-r-[6px] ml-[7px] mr-[7px] rounded ">
              {" "}
            </div>
            <p className=" w-[155px] h-[20px] text-[14px]">
              مزایای ثبت نام در یادش
            </p>
          </div>
          <div className="flex  mt-[20px] text-[12px] text-[#C4C4C4]">
            <TicIcon />
            <p className=" opacity-80 mr-[7px]  w-[207px] h-[19px]">
              {" "}
              دسترسی به بیش از هزاران ویدیو
            </p>
          </div>
          <div className="flex  mt-[20px] text-[12px] text-[#C4C4C4]">
            <TicIcon />
            <p className=" opacity-90  mr-[7px] w-[167px] h-[20px]">
              {" "}
              پنل کاربری مامل و کاربردی{" "}
            </p>
          </div>
          <div className="flex  mt-[20px] text-[12px] text-[#C4C4C4]">
            <TicIcon />
            <p className=" opacity-80  mr-[7px] w-[225px] h-[18px]">
              {" "}
              امکان کامل ویدیو بدون محدودیت
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeaderHomeNotLogin;
