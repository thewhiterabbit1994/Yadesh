import classs from "../../assets/Img/imgHomeNotLogin/class.jpg";
import asnad from "../../assets/Img/imgHomeNotLogin/asnad.jpg";
import work from "../../assets/Img/imgHomeNotLogin/work.jpg";
import convetion from "../../assets/Img/imgHomeNotLogin/convertion.jpg";
import reading from "../../assets/Img/imgHomeNotLogin/reading.jpg";
import TicIcon from "../../assets/svg/HomePageNotLogin/TikIcon";
const HeaderHomeNotLogin = () => {
  return (
    <section className="w-[100%] bg-black h-[700px] flex mt-[-2rem] ">
      <div className="  w-[414px] h-[405px]  mt-[160px] mr-[80px] ">
        <div>
          <h1 className="text-[#E6FFF3] font-medium text-[32px] w-[414px] h-[50px] leading-[50px] ">
            {" "}
            یادگیری به فاصله چند کلیک
          </h1>
          <p className=" w-[414px] h-[85px] twxt-[18px] mt-[1rem] text-[#C4C4C4] text-[15px] leading-[40px]">
            {" "}
            بیش از هزاران ویدیوی آموزشی برای شما از بروزترین منابع آموزشی دنیا{" "}
          </p>
        </div>

        <div className="flex mt-[20px]">
          <button className="text-[12px] text-[#E6FFF3] w-[150px] h-[46px] rounded border-solid border-[#00FF85] border-2 ml-[7px] ">
            {" "}
            بیشتر بدانید
          </button>
          <button className="text-[12px] text-[#000] bg-[#00FF85] w-[150px] h-[46px] rounded">
            {" "}
            ثبت نام کنید
          </button>
        </div>

        <div className="text-white  font-normal ">
          <div className="flex mt-[50px]">
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

      <div className="w-[900px] h-[562px] mt-[100px] relative ">
        <img
          src={classs}
          className="w-[348px] h-[175px] absolute  left-[105px] top-[0] rounded"
        />
        <img
          src={reading}
          className="w-[357px] h-[348px] absolute left-[470px] top-[0] rounded"
        />
        <img
          src={convetion}
          className="w-[163px] h-[153px] absolute left-[290px] top-[194px] rounded"
        />
        <img
          src={asnad}
          className="w-[165px] h-[308px] absolute left-[105px] top-[193px] rounded"
        />
        <img
          src={work}
          className="w-[540px] h-[135px] absolute left-[286px] top-[366px] rounded"
        />
      </div>
    </section>
  );
};
export default HeaderHomeNotLogin;
