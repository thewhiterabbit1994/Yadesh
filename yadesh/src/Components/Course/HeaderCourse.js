import imgMan from "../../assets/Img/course/imgMan.png";
import Play from "../../assets/svg/course/Play";
import Bookmark from "../../assets/svg/course/Bookmark";
import imgHcourse from "../../assets/Img/course/imgHcourse.png";
import Ellipse from "../../assets/svg/HomePageNotLogin/Ellipse";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MainCounter } from "../../Context/Context";

const HeaderCourse = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);
  const { id } = useParams();
  const Course = siteManagmentDatabase.Courses.filter(
    (Course) => Course.CourseID === id
  );
  console.log(Course);
  return (
    <section className="bg-[#000] w-full h-[700px] flex justify-center">
      <section className=" w-[35%]  flex flex-col justify-center  leading-[35px] mr-[100px]">
        <div className="flex text-[#E6FFF3] text-[18px] mb-[15px]">
          <div className="border-[#00FF85] h-[20px] mt-[10px] border-r-[6px] ml-[7px] mr-[7px] rounded ">
            {" "}
          </div>
          <h5>{Course[0].CourseCategory}</h5>
        </div>
        <div>
          <p className="w-[400px] text-justify text-[#C4C4C4] text-[12px]">
            چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این
            نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ
            اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده
          </p>
        </div>
        <section className="flex text-[12px] my-[20px]">
          <div className="ml-[20px]">
            <img src={imgMan} />
          </div>
          <div>
            <h6 className="text-[#E6FFF3] text-[14px]">آموزش سرمایه گذاری</h6>
            <h6 className="text-[#C4C4C4]">{Course[0].TeacherName}</h6>
          </div>
        </section>
        <section className="flex w-[300px] justify-between">
          <div className="flex bg-[#00FF85] rounded-lg text-[#000E14] text-[10px] font-semibold w-[160px] justify-around">
            <div className="mt-[10px]">
              <Play />
            </div>
            <h6> ادامه ی تماشای قسمت سوم</h6>
          </div>
          <div className="flex bg-[#002433] w-[90px] justify-around text-[10px] rounded-lg text-[#fff]">
            <div className="mt-[10px]  ">
              <Bookmark />
            </div>
            <h6> ذخیره کن</h6>
          </div>
        </section>
      </section>
      <section className=" w-[49%]  m-auto relative z-20 ">
        <img
          src={Course[0].CourseImg}
          className="w-[600px] rounded object-cover h-[380px] "
        />
      </section>
    </section>
  );
};
export default HeaderCourse;
