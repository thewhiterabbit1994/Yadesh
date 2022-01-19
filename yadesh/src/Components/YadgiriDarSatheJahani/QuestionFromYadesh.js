import img from "../../assets/Img/qustionFromYadesh/img-auestion.png";
import Almas from "../../assets/svg/questionFromYadesh/Almas";
import Achar from "../../assets/svg/questionFromYadesh/Achar";
import Tick from "../../assets/svg/questionFromYadesh/Tick";
import Ellipse from "../../assets/svg/HomePageNotLogin/Ellipse";
const QuestionFromYadesh = () => {
  return (
    <div>
      <section className="w-full h-[700px] flex bg-[#000] justify-around relative z-20">
        <div className="absolute top-[0] right-[50px] z-10">
          <Ellipse />
        </div>
        <div className="w-[32%] mt-[120px]  flex justify-end relative">
          <img src={img} className="rounded-lg w-[350px] h-[420px] z-30" />
        </div>
        <section className="w-[50%]  h-[420px] mt-[120px] flex flex-col justify-center">
          <div className="flex ">
            <h6 className="text-[#E6FFF3] text-[18px]">
              چرا ما از بقیه متفاوت هستیم
            </h6>
          </div>
          <h6 className="text-[#C4C4C4] text-[14px] mt-[15px]">
            {" "}
            دلیل تفاوت یادش از دیگران
          </h6>
          <div className="flex mt-[25px] ">
            <Almas />
            <h6 className="text-[#E6FFF3] text-[18px] mr-[10px] ">
              تنوع موضوع و مهارت در یادش{" "}
            </h6>
          </div>
          <h6 className="text-[#C4C4C4] text-[14px] mt-[15px]">
            سازمان ها در یادش جایکاه ویيه ای دارند پس ما هم برای سازمان ها
            برنامه ویژه ای داریم.{" "}
          </h6>
          <div className="flex mt-[25px]">
            <Achar />
            <h6 className="text-[#E6FFF3] text-[18px] mr-[10px]">
              اساتید برتر و نمونه
            </h6>
          </div>
          <h6 className="text-[#C4C4C4] text-[14px] mt-[15px]">
            سازمان ها در یادش جایکاه ویيه ای دارند پس ما هم برای سازمان ها
            برنامه ویژه ای داریم
          </h6>
          <div className="flex mt-[25px]">
            <Tick />
            <h6 className="text-[#E6FFF3] text-[18px] mr-[10px]">
              ویدئو و محتوای با کیفیت
            </h6>
          </div>
          <h6 className="text-[#C4C4C4] text-[14px] mt-[15px]">
            سازمان ها در یادش جایکاه ویيه ای دارند پس ما هم برای سازمان ها
            برنامه ویژه ای داریم
          </h6>
        </section>
      </section>
    </div>
  );
};
export default QuestionFromYadesh;
