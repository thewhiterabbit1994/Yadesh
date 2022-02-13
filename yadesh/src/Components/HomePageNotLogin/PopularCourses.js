import ModiriyateMali from "../../assets/Img/papoularCourses/modiriyateMali.png";
import RavanshenasiRangha from "../../assets/Img/papoularCourses/ravanshenasirangha.png";
import Hesabdari from "../../assets/Img/papoularCourses/hesabdari.png";
import SarmayeGozari from "../../assets/Img/papoularCourses/sarmayegozari.png";
import Ellipse from "../../assets/svg/HomePageNotLogin/Ellipse";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { MainCounter } from "../../Context/Context";

const PopularCourses = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);
  const data = siteManagmentDatabase.HomePageNotLogin.popularCourses;
  const coursedata = siteManagmentDatabase.Courses;

  let [index, setindex] = useState(0);
  const changeindex = () => {
    index === 3 ? setindex(0) : setindex(index + 1);
  };
  setTimeout(() => {
    changeindex();
  }, 5000);
  console.log(index);

  return (
    <div className="w-full h-[600px] bg-[black]">
      <div className="mr-[135px] mb-[20px] ">
        <div className="flex mb-[20px] h-[20px] w-[219px]">
          <div className="border-[#00FF85] border-r-[7px] ml-[7px] rounded "></div>
          <h2 className="text-[#E6FFF3] w-[219px]  text-[22px] font-medium mt-[-10px]">
            {data.title}
          </h2>
        </div>
        <h5 className="text-[#C4C4C4] text-[16px] font-normal	">
          {data.subTitle}
        </h5>
      </div>

      <div className="flex  justify-center mr-[50px] overflow-hidden">
        <div className="absolute ">
          <Ellipse />
        </div>
        <div className="relative">
          <Link to={`/home/course/${coursedata[0].CourseID}`} className="">
            <img
              className={`transform transition-all duration-1000 w-[150px] object-cover object-right  ${
                index === 0
                  ? "rounded  w-[550px] h-[350px]"
                  : "rounded  h-[350px] object-cover object-right"
              }  `}
              src={coursedata[0].CourseImg}
            />
            <div className=" bg-gradient-to-t from-[#000000] to-[#00040511] rounded h-[350px] w-full relative mt-[-350px]"></div>
            <div className="absolute w-fit top-[-330px]   text-[#E6FFF3] flex flex-col text-center leading-[30px]">
              <div
                className={`transform transition-opacity duration-[2000ms]  ${
                  index === 0
                    ? "relative mt-[340px] opacity-100 flex w-fit h-[35px] text-[#E6FFF3]  justify-between "
                    : "scale-0 opacity-0"
                }`}
              >
                <div>
                  <h6 className=" text-[12px] w-fit px-5 h-[35px] mr-[1rem] mt-[.5rem] bg-[#394a4f] rounded text-center leading-[35px]">
                    {coursedata[0].CourseDurationTime}
                  </h6>
                </div>
                <div className="absolute right-[470px]">
                  <h6 className=" text-[12px] w-[70px] h-[35px] ml-[1rem] mt-[.5rem] bg-[#394a4f] rounded text-center leading-[35px]">
                    {" "}
                    631
                  </h6>
                </div>
              </div>

              <div
                className={`transform transition-opacity duration-[2000ms] ${
                  index === 0
                    ? "relative mt-[190px] opacity-100 flex flex-col w-fit  text-[#E6FFF3]  justify-between "
                    : "scale-0 opacity-0"
                }`}
              >
                <div className="relative  right-[30px] text-[#E6FFF3] flex font-medium">
                  <div className="border-[#00FF85]  border-r-[7px] ml-[10px] mr-[7px] rounded h-[18px] mt-[5px]">
                    {" "}
                  </div>
                  <h6 className=" text-[20px]">
                    {coursedata[0].CourseCategory}
                  </h6>
                  <h6 className="mr-[10px] mt-[5px] text-[13px] font-black">
                    {coursedata[0].NumberOfEpisodes}
                  </h6>
                </div>
                <div className="relative right-[30px] text-right  text-[#C4C4C4] w-fit h-[62px] leading-[30px]">
                  <p className="text-[13px] w-fit h-[55px]">
                    {" "}
                    دراین کلاس در مورد اصول حسابداری در مقیاس های صنعتی و اصول
                    کلی حسابداری یاد خواهید گرفت{" "}
                  </p>
                </div>
              </div>
              <div
                className={`transform transition-opacity duration-[3000ms] ${
                  index === 0
                    ? " scale-0 opacity-0"
                    : " absolute  mt-[600px] w-[150px] opacity-100 text-[#E6FFF3] flex flex-col text-center leading-[30px]"
                }`}
              >
                <h6 className="text-base ">{coursedata[0].CourseCategory}</h6>
                <h6 className="text-[12px] text-[#C4C4C4]">
                  {coursedata[0].NumberOfEpisodes}
                </h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="relative mr-[15px]">
          <Link to={`/home/course/${coursedata[1].CourseID}`} className="">
            <img
              className={`transform transition-all duration-1000 w-[150px] object-cover object-right  ${
                index === 1
                  ? "rounded  w-[550px] h-[350px]"
                  : "rounded  h-[350px] object-cover object-right"
              }  `}
              src={coursedata[1].CourseImg}
            />
            <div className=" bg-gradient-to-t from-[#000000] to-[#00040511] rounded h-[350px] w-full relative mt-[-350px]"></div>
            <div className="absolute w-fit top-[-330px]   text-[#E6FFF3] flex flex-col text-center leading-[30px]">
              <div
                className={`transform transition-opacity duration-[2000ms]  ${
                  index === 1
                    ? "relative mt-[340px] opacity-100 flex w-fit h-[35px] text-[#E6FFF3]  justify-between "
                    : "scale-0 opacity-0"
                }`}
              >
                <div>
                  <h6 className=" text-[12px] w-fit px-5 h-[35px] mr-[1rem] mt-[.5rem] bg-[#394a4f] rounded text-center leading-[35px]">
                    {coursedata[1].CourseDurationTime}
                  </h6>
                </div>
                <div className="absolute right-[470px]">
                  <h6 className=" text-[12px] w-[70px] h-[35px] ml-[1rem] mt-[.5rem] bg-[#394a4f] rounded text-center leading-[35px]">
                    {" "}
                    631
                  </h6>
                </div>
              </div>

              <div
                className={`transform transition-opacity duration-[2000ms] ${
                  index === 1
                    ? "relative mt-[190px] opacity-100 flex flex-col w-fit  text-[#E6FFF3]  justify-between "
                    : "scale-0 opacity-0"
                }`}
              >
                <div className="relative  right-[30px] text-[#E6FFF3] flex font-medium">
                  <div className="border-[#00FF85]  border-r-[7px] ml-[10px] mr-[7px] rounded h-[18px] mt-[5px]">
                    {" "}
                  </div>
                  <h6 className=" text-[20px]">
                    {coursedata[1].CourseCategory}
                  </h6>
                  <h6 className="mr-[10px] mt-[5px] text-[13px] font-black">
                    {coursedata[1].NumberOfEpisodes}
                  </h6>
                </div>
                <div className="relative right-[30px] text-right  text-[#C4C4C4] w-fit h-[62px] leading-[30px]">
                  <p className="text-[13px] w-fit h-[55px]">
                    {" "}
                    دراین کلاس در مورد اصول حسابداری در مقیاس های صنعتی و اصول
                    کلی حسابداری یاد خواهید گرفت{" "}
                  </p>
                </div>
              </div>
              <div
                className={`transform transition-opacity duration-[2000ms] ${
                  index === 1
                    ? " scale-0 opacity-0"
                    : "  absolute  mt-[600px] w-[150px] opacity-100 text-[#E6FFF3] flex flex-col text-center leading-[30px]"
                }`}
              >
                <h6 className="text-base ">{coursedata[1].CourseCategory}</h6>
                <h6 className="text-[12px] text-[#C4C4C4]">
                  {coursedata[1].NumberOfEpisodes}
                </h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="relative mr-[15px]">
          <Link to={`/home/course/${coursedata[2].CourseID}`} className="">
            <img
              className={`transform transition-all duration-1000 w-[150px] object-cover object-right  ${
                index === 2
                  ? "rounded  w-[550px] h-[350px]"
                  : "rounded  h-[350px] object-cover object-right"
              }  `}
              src={coursedata[2].CourseImg}
            />
            <div className=" bg-gradient-to-t from-[#000000] to-[#00040511] rounded h-[350px] w-full relative mt-[-350px]"></div>
            <div className="absolute w-fit top-[-330px]   text-[#E6FFF3] flex flex-col text-center leading-[30px]">
              <div
                className={`transform transition-opacity duration-[2000ms]  ${
                  index === 2
                    ? "relative mt-[340px] opacity-100 flex w-fit h-[35px] text-[#E6FFF3]  justify-between "
                    : "scale-0 opacity-0"
                }`}
              >
                <div>
                  <h6 className=" text-[12px] w-fit px-5 h-[35px] mr-[1rem] mt-[.5rem] bg-[#394a4f] rounded text-center leading-[35px]">
                    {coursedata[2].CourseDurationTime}
                  </h6>
                </div>
                <div className="absolute right-[470px]">
                  <h6 className=" text-[12px] w-[70px] h-[35px] ml-[1rem] mt-[.5rem] bg-[#394a4f] rounded text-center leading-[35px]">
                    {" "}
                    631
                  </h6>
                </div>
              </div>

              <div
                className={`transform transition-opacity duration-[2000ms] ${
                  index === 2
                    ? "relative mt-[190px] opacity-100 flex flex-col w-fit  text-[#E6FFF3]  justify-between "
                    : "scale-0 opacity-0"
                }`}
              >
                <div className="relative  right-[30px] text-[#E6FFF3] flex font-medium">
                  <div className="border-[#00FF85]  border-r-[7px] ml-[10px] mr-[7px] rounded h-[18px] mt-[5px]">
                    {" "}
                  </div>
                  <h6 className=" text-[20px]">
                    {coursedata[2].CourseCategory}
                  </h6>
                  <h6 className="mr-[10px] mt-[5px] text-[13px] font-black">
                    {coursedata[2].NumberOfEpisodes}
                  </h6>
                </div>
                <div className="relative right-[30px] text-right  text-[#C4C4C4] w-fit h-[62px] leading-[30px]">
                  <p className="text-[13px] w-fit h-[55px]">
                    {" "}
                    دراین کلاس در مورد اصول حسابداری در مقیاس های صنعتی و اصول
                    کلی حسابداری یاد خواهید گرفت{" "}
                  </p>
                </div>
              </div>
              <div
                className={`transform transition-opacity duration-[2000ms] ${
                  index === 2
                    ? " scale-0 opacity-0"
                    : "  absolute  mt-[600px] w-[150px] opacity-100 text-[#E6FFF3] flex flex-col text-center leading-[30px]"
                }`}
              >
                <h6 className="text-base ">{coursedata[2].CourseCategory}</h6>
                <h6 className="text-[12px] text-[#C4C4C4]">
                  {coursedata[2].NumberOfEpisodes}
                </h6>
              </div>
            </div>
          </Link>
        </div>

        <div className=" relative mr-[15px] ">
          <Link to={`/home/course/${coursedata[3].CourseID}`} className="">
            <img
              className={`transform transition-all duration-1000 w-[150px] object-cover object-right  ${
                index === 3
                  ? "rounded  w-[550px] h-[350px]"
                  : "rounded  h-[350px] object-cover object-right"
              }  `}
              src={coursedata[3].CourseImg}
            />
            <div className=" bg-gradient-to-t from-[#000000] to-[#00040511] rounded h-[350px] w-full relative mt-[-350px]"></div>
            <div className="absolute w-fit top-[-330px]   text-[#E6FFF3] flex flex-col text-center leading-[30px]">
              <div
                className={`transform transition-opacity duration-[2000ms]  ${
                  index === 3
                    ? "relative mt-[340px] opacity-100 flex w-fit h-[35px] text-[#E6FFF3]  justify-between "
                    : "scale-0 opacity-0"
                }`}
              >
                <div>
                  <h6 className=" text-[12px] w-fit px-5 h-[35px] mr-[1rem] mt-[.5rem] bg-[#394a4f] rounded text-center leading-[35px]">
                    {coursedata[3].CourseDurationTime}
                  </h6>
                </div>
                <div className="absolute right-[470px]">
                  <h6 className=" text-[12px] w-[70px] h-[35px] ml-[1rem] mt-[.5rem] bg-[#394a4f] rounded text-center leading-[35px]">
                    {" "}
                    631
                  </h6>
                </div>
              </div>

              <div
                className={`transform transition-opacity duration-[2000ms] ${
                  index === 3
                    ? "relative mt-[190px] opacity-100 flex flex-col w-fit  text-[#E6FFF3]  justify-between "
                    : "scale-0 opacity-0"
                }`}
              >
                <div className="relative  right-[30px] text-[#E6FFF3] flex font-medium">
                  <div className="border-[#00FF85]  border-r-[7px] ml-[10px] mr-[7px] rounded h-[18px] mt-[5px]">
                    {" "}
                  </div>
                  <h6 className=" text-[20px]">
                    {coursedata[3].CourseCategory}
                  </h6>
                  <h6 className="mr-[10px] mt-[5px] text-[13px] font-black">
                    {coursedata[3].NumberOfEpisodes}
                  </h6>
                </div>
                <div className="relative right-[30px] text-right  text-[#C4C4C4] w-fit h-[62px] leading-[30px]">
                  <p className="text-[13px] w-fit h-[55px]">
                    {" "}
                    دراین کلاس در مورد اصول حسابداری در مقیاس های صنعتی و اصول
                    کلی حسابداری یاد خواهید گرفت{" "}
                  </p>
                </div>
              </div>
              <div
                className={`transform transition-opacity duration-[2000ms] ${
                  index === 3
                    ? " scale-0 opacity-0"
                    : "absolute  mt-[600px] w-[150px] opacity-100 text-[#E6FFF3] flex flex-col text-center leading-[30px]"
                }`}
              >
                <h6 className="text-base ">{coursedata[3].CourseCategory}</h6>
                <h6 className="text-[12px] text-[#C4C4C4]">
                  {coursedata[3].NumberOfEpisodes}
                </h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PopularCourses;
