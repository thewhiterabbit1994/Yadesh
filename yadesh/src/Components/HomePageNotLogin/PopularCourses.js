import FinancialManagement from "../../assets/Img/papoularCourses/Rectangle 850.jpg";
import PsychologyOfColors from "../../assets/Img/papoularCourses/Rectangle 853.jpg";
import investment from "../../assets/Img/papoularCourses/Rectangle 855.jpg";
import AccountingBasics from "../../assets/Img/papoularCourses/Rectangle 857.jpg";
import "../../Css/PopularCourses.css";

const PopularCourses = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-[black] ">
      <div className="mr-[4rem] mb-[1.5rem]">
        <div className="flex mb-[1.5rem] mr-[2rem]">
          <div className="border-[#00FF85] opacity-80  border-r-[4px] ml-[7px] rounded"></div>
          <h2 className="text-[#E6FFF3]">دوره های پرطرفدار</h2>
        </div>
        <h5 className="text-[#E6FFF3] text-[12px] mr-[2rem] opacity-80">
          به انتخاب یادش
        </h5>
      </div>

      <div className="flex justify-center w-[99%] h-[100%] mr-[6px] ">
        <div className="relative h-[57%] w-[12%]">
          <img
            className="rounded w-[100%] h-[100%] opacity-70"
            src={FinancialManagement}
          />
          <div className="absolute top-[81%] left-[23%] text-[#E6FFF3] flex flex-col text-center ">
            <h6 className="text-[14px]"> مدیریت مالی</h6>
            <h6 className="text-[13px]"> 26 اپیزود</h6>
          </div>
        </div>

        <div className="relative h-[57%] w-[12%] mr-[6px]">
          <img
            className=" rounded w-[100%] h-[100%] opacity-70"
            src={PsychologyOfColors}
          />
          <div className="absolute top-[81%] left-[30%] text-[#E6FFF3] flex flex-col text-center  ">
            <h6 className="text-[15px]">رنگ ها </h6>
            <h6 className="text-[13px]"> روانشناسی</h6>
            <h6 className="text-[11px] opacity-80 mt-[.3rem]"> 27 اپیزود</h6>
          </div>
        </div>

        <div className="relative h-[57%] w-[12%] mr-[6px]">
          <img
            className=" rounded  w-[100%] h-[100%] opacity-70"
            src={investment}
          />
          <div className="absolute top-[81%] left-[23%] text-[#E6FFF3] flex flex-col text-center  ">
            <h6 className="text-[14px]"> سرمایه گذاری </h6>
            <h6 className="text-[12px] opacity-80 mt-[.3rem]"> 20 اپیزود</h6>
          </div>
        </div>

        <div className="relative  w-[50%] h-[57%] mr-[6px]">
          <img
            className=" rounded w-[100%] h-[357px] opacity-70"
            src={AccountingBasics}
          />
          <div className="absolute top-[0] left[0] flex w-[100%] h-[11%] text-[#E6FFF3] justify-between mt-[.6rem]">
            <h6 className=" text-[12px] w-[20%] mr-[1rem] mt-[.5rem] bg-[#002433] rounded text-center leading-6 opacity-80">
              3 ساعت و 46 دقیقه
            </h6>
            <h6 className=" text-[12px] w-[10%] ml-[1rem] mt-[.5rem] bg-[#002433] rounded text-center leading-6 opacity-80">
              {" "}
              631
            </h6>
          </div>
          <div className="absolute top-[73%] right-[5%] text-[#E6FFF3] flex">
            <div className="border-[#00FF85] opacity-80  border-r-[4px] ml-[7px] mr-[7px] rounded">
              {" "}
            </div>
            <h6 className="opacity-90 text-[15px]"> مقدمات حسابداری کلان . </h6>
            <h6 className="mr-[1rem] text-[12px] opacity-90"> 11 اپیزود</h6>
          </div>
          <div className="absolute right-[5%] bottom-[8%] text-[#E6FFF3] w-[100%]  ">
            <p className="text-[13px]">
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
