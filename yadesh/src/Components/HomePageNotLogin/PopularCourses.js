import FinancialManagement from "../../assets/Img/papoularCourses/Rectangle 850.jpg";
import PsychologyOfColors from "../../assets/Img/papoularCourses/Rectangle 853.jpg";
import investment from "../../assets/Img/papoularCourses/Rectangle 855.jpg";
import AccountingBasics from "../../assets/Img/papoularCourses/Rectangle 857.jpg";
import "../../Css/PopularCourses.css";

const PopularCourses = () => {
  return (
    <div className="w-[100%] h-[600px] bg-[black] ">
      <div className="mr-[80px] mb-[20px]">
        <div className="flex mb-[20px] h-[20px] w-[219px]">
          <div className="border-[#00FF85] opacity-80  border-r-[7px] ml-[7px] rounded "></div>
          <h2 className="text-[#E6FFF3] w-[219px]  text-[22px] font-medium mt-[-10px]">
            دوره های پرطرفدار
          </h2>
        </div>
        <h5 className="text-[#C4C4C4] text-[16px] font-normal	">
          به انتخاب یادش
        </h5>
      </div>

      <div className="flex justify-center w-[100%] h-[100%] ">
        <div className="relative h-[180px] w-[180px]">
          <img
            className="rounded w-[200px] h-[400px] "
            src={FinancialManagement}
          />
          <div className="absolute top-[320px] left-[40px] text-[#E6FFF3] flex flex-col text-center leading-[30px]">
            <h6 className="text-[18px] "> مدیریت مالی</h6>
            <h6 className="text-[12px] text-[#C4C4C4]"> 26 اپیزود</h6>
          </div>
        </div>

        <div className="relative h-[180px] w-[180px] mr-[15px]">
          <img
            className=" rounded w-[200px] h-[400px] "
            src={PsychologyOfColors}
          />
          <div className="absolute top-[290px] left-[52px] text-[#E6FFF3] flex flex-col text-center leading-[30px]">
            <h6 className="text-[18px]">رنگ ها </h6>
            <h6 className="text-[18px]"> روانشناسی</h6>
            <h6 className="text-[12px] text-[#C4C4C4]"> 27 اپیزود</h6>
          </div>
        </div>

        <div className="relative h-[180px] w-[180px] mr-[15px]">
          <img className=" rounded  w-[220px] h-[400px] " src={investment} />
          <div className="absolute top-[320px] left-[40px] text-[#E6FFF3] flex flex-col text-center leading-[30px]">
            <h6 className="text-[18px]"> سرمایه گذاری </h6>
            <h6 className="text-[12px]"> 20 اپیزود</h6>
          </div>
        </div>

        <div className="relative  w-[609px] h-[57%] mr-[15px]">
          <img
            className=" rounded w-[609px] h-[400px] "
            src={AccountingBasics}
          />
          <div className="absolute top-[0] left[0] flex w-[100%] h-[35px] text-[#E6FFF3] justify-between mt-[.6rem] ">
            <div>
              <h6 className=" text-[12px] w-[160px] h-[35px] mr-[1rem] mt-[.5rem] bg-[#394a4f] rounded text-center leading-[35px]">
                3 ساعت و 46 دقیقه
              </h6>
            </div>
            <div>
              <h6 className=" text-[12px] w-[70px] h-[35px] ml-[1rem] mt-[.5rem] bg-[#394a4f] rounded text-center leading-[35px]">
                {" "}
                631
              </h6>
            </div>
          </div>

          <div className="absolute bottom-[60px] right-[30px] text-[#06160e] flex font-extrabold">
            <div className="border-[#00FF85] opacity-80  border-r-[7px] ml-[10px] mr-[7px] rounded h-[25px] mt-[5px]">
              {" "}
            </div>
            <h6 className=" text-[22px]"> مقدمات حسابداری کلان . </h6>
            <h6 className="mr-[10px] mt-[10px] text-[13px] font-black">
              {" "}
              11 اپیزود
            </h6>
          </div>
          <div className="absolute right-[30px] bottom-[-28px] text-[#C4C4C4] w-[570px] h-[62px] leading-[30px]">
            <p className="text-[14px]">
              {" "}
              دراین کلاس در مورد اصول حسابداری در مقیاس های صنعتی و اصول کلی
              حسابداری یاد خواهید گرفت{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopularCourses;
