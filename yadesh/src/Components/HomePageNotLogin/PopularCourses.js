import ModiriyateMali from "../../assets/Img/papoularCourses/modiriyateMali.png";
import RavanshenasiRangha from "../../assets/Img/papoularCourses/ravanshenasirangha.png";
import Hesabdari from "../../assets/Img/papoularCourses/hesabdari.png";
import SarmayeGozari from "../../assets/Img/papoularCourses/sarmayegozari.png";
import Ellipse from "../../assets/svg/HomePageNotLogin/Ellipse";

const PopularCourses = () => {
  return (
    <div className="w-full h-[600px] bg-[black] ">
      <div className="mr-[135px] mb-[20px] ">
        <div className="flex mb-[20px] h-[20px] w-[219px]">
          <div className="border-[#00FF85] border-r-[7px] ml-[7px] rounded "></div>
          <h2 className="text-[#E6FFF3] w-[219px]  text-[22px] font-medium mt-[-10px]">
            دوره های پرطرفدار
          </h2>
        </div>
        <h5 className="text-[#C4C4C4] text-[16px] font-normal	">
          به انتخاب یادش
        </h5>
      </div>

      <div className="flex justify-center ml-[50px] ">
        <div className="relative ">
          <img className="rounded w-[150px] h-[350px] " src={ModiriyateMali} />
          <div className="absolute top-[280px] left-[30px] text-[#E6FFF3] flex flex-col text-center leading-[30px]">
            <h6 className="text-[16px] "> مدیریت مالی</h6>
            <h6 className="text-[12px] text-[#C4C4C4]"> 26 اپیزود</h6>
          </div>
        </div>

        <div className="relative mr-[15px]">
          <img
            className=" rounded w-[150px] h-[350px] "
            src={RavanshenasiRangha}
          />
          <div className="absolute top-[250px] left-[40px] text-[#E6FFF3] flex flex-col text-center leading-[30px]">
            <h6 className="text-[16px]">رنگ ها </h6>
            <h6 className="text-[16px]"> روانشناسی</h6>
            <h6 className="text-[12px] text-[#C4C4C4]"> 27 اپیزود</h6>
          </div>
        </div>

        <div className="relative  mr-[15px]">
          <img className=" rounded  w-[150px] h-[350px] " src={SarmayeGozari} />
          <div className="absolute top-[280px] left-[30px] text-[#E6FFF3] flex flex-col text-center leading-[30px]">
            <h6 className="text-[16px]"> سرمایه گذاری </h6>
            <h6 className="text-[12px]"> 20 اپیزود</h6>
          </div>
        </div>

        <div className="relative mr-[15px] z-20">
          <div className="absolute top-[-100px] right-[-170px] -z-10 ">
            <Ellipse />
          </div>
          <img className=" rounded w-[550px] h-[350px]  " src={Hesabdari} />
          <div className=" absolute top-[0] left[0] flex w-[100%] h-[35px] text-[#E6FFF3] justify-between mt-[.6rem] ">
            <div className="bg-gradient-to-t from-[#000000] to-[#00040511] h-[345px] w-full absolute"></div>
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

          <div className="absolute bottom-[95px] right-[30px] text-[#E6FFF3] flex font-medium">
            <div className="border-[#00FF85]  border-r-[7px] ml-[10px] mr-[7px] rounded h-[18px] mt-[5px]">
              {" "}
            </div>
            <h6 className=" text-[20px]"> مقدمات حسابداری کلان . </h6>
            <h6 className="mr-[10px] mt-[5px] text-[13px] font-black">
              {" "}
              11 اپیزود
            </h6>
          </div>
          <div className="absolute right-[30px] top-[280px] text-[#C4C4C4] w-[570px] h-[62px] leading-[30px]">
            <p className="text-[13px] w-[500px] h-[55px]">
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
