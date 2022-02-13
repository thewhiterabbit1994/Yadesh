import TeacherImg1 from "../../assets/Img/TeacherImg1.png";
import Clock from "../../assets/svg/Clock";
import View from "../../assets/svg/View";
import Hat from "../../assets/svg/Hat";
import BtnPlay from "../../assets/svg/BtnPlay";
import Slider from "react-slick";
import FarhangeSazmani from "../../assets/Img/FarhangeSazmani.png";
import "slick-carousel/slick/slick.css";
import "../../Css/TodaySpecialCoursesSlick.css";
import Bookmark from "../../assets/svg/Bookmark";
import Speakermute from "../../assets/svg/Speakermute";
import { useContext, useState } from "react";
import { MainCounter } from "../../Context/Context";
import { Link } from "react-router-dom";

const TodaySpecialCourses = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageLogin.hero;
  const coursesdata = siteManagmentDatabase.Courses;
  let threeOfCourses = [];
  for (let i = 0; i < 3; i++) {
    threeOfCourses.push(coursesdata[i]);
  }
  console.log(threeOfCourses);
  let [index, setindex] = useState(2);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    pauseOnHover: true,
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
  };
  console.log(index);
  return (
    <div className="h-[650px] bg-[#000506] flex">
      <div className="mr-[88px]">
        <div className="flex  mt-[130px]">
          <div className="w-[5.5px] h-[18px] bg-[#00FF85] rounded-[10px] mt-1.5 ml-2"></div>
          <p className="text-[19px]  text-[#ffffff]">{data.title}</p>
        </div>
        <div>
          <p className="mt-[5px] text-[#C4C4C4] text-[14px]">{data.subTitle}</p>
        </div>
        <div>
          <div className="bg-gradient-to-l from-[#00FF85] h-[0.5px] w-[200px]  mt-[25px] "></div>
        </div>
        <p className="text-[24px] mt-[30px] text-[#ffffff]">
          دوره {threeOfCourses[index].CourseCategory}
        </p>
        <div className="flex mt-[23px]">
          <div>
            <img className="rounded-full h-[40px]" src={TeacherImg1} />
          </div>
          <div className="mr-[15px]">
            <p className="text-[#C4C4C4] text-[12px]">مدرس دوره</p>
            <p className="text-[13px] mt-2 text-[#ffffff]">
              {threeOfCourses[index].TeacherName}
            </p>
          </div>
        </div>
        <div className="flex mt-[30px] text-[#C4C4C4] text-[11px]">
          <p className="flex">
            <div className="-mt-[2.5px] ml-2 ">
              <Clock />
            </div>
            {threeOfCourses[index].CourseDurationTime}
          </p>
          <p className="text-[35px] px-4 -mt-[25px]">.</p>
          <p className="flex">
            <div className=" ml-2 ">
              <View />
            </div>
            {threeOfCourses[index].CourseView}
          </p>
        </div>
        <div className="mt-7 flex">
          <Link to={`/home/course/${threeOfCourses[index].CourseID}`}>
            <button className="flex flex-row w-[135px] h-[40px] text-[12px] border-[1.5px] ml-[20px] text-[#ffffff] rounded-[6px] border-[#80FFC2]">
              <div className="mt-2.5 mr-4">
                <Hat />
              </div>
              <p className="mt-2.5 mr-3">برو به کلاس</p>
            </button>
          </Link>
          <Link to={`/home/course/${threeOfCourses[index].CourseID}`}>
            <button className="flex w-[135px] h-[40px] text-[12px] rounded-[6px] bg-[#00FF85] ">
              <div className="mt-3 mr-6">
                <BtnPlay />
              </div>
              <p className="mt-3 mr-3"> شروع دوره</p>
            </button>
          </Link>
        </div>
      </div>
      <section className=" mt-[70px] rounded-lg mr-[120px] w-[670px]">
        <div className="flex w-[670px] justify-between">
          <p className="relative rounded text-[12px] mr-5 py-2  text-[#fff] w-fit px-3 h-[32px] bg-[#7b9199] top-[55px] z-10 ">
            {threeOfCourses[index].CourseCategory}
          </p>
          <div className="flex relative left-4 top-14 z-10">
            <div className="bg-[#13273d] w-[35px] p-2">
              <Speakermute />
            </div>
            <div className="bg-[#13273d] w-[35px] h-[35px] mr-2 p-2">
              <Bookmark />
            </div>
          </div>
        </div>
        <Slider
          {...settings}
          beforeChange={() => {
            if (index === 0) {
              setindex(2);
            } else {
              setindex(index - 1);
            }
          }}
        >
          {threeOfCourses.map((item) => {
            console.log("item", item);
            return (
              <div>
                <img className="rounded-lg" src={item.CourseImg} />
              </div>
            );
          })}
        </Slider>
      </section>
    </div>
  );
};
export default TodaySpecialCourses;
