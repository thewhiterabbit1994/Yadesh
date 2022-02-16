import Edit from "../../assets/svg/AdminPanelCourses/Edit";
import Sort from "../../assets/svg/AdminPanelCourses/Sort";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import EmtyLogo from "../../assets/svg/adminPanelEpisode/EmtyLogo";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import EditCourse from "../Modals/EditCourse";

const Table = () => {
  const [EditCourseModal, setEditCourseModal] = useState(false);

  const {
    siteManagmentDatabase,
    setsiteManagmentDatabase,
    emtyCourse,
    setemtyCourse,
  } = useContext(MainCounter);
  const [searchInputValue, setsearchInputValue] = useState("");
  const data = siteManagmentDatabase.Courses;
  console.log(data);
  const [showmore, setShowmore] = useState(false);

  let threeOfCourses = [data[0], data[1], data[2]];

  return (
    <section className="w-[97vw]">
      <EditCourse
        EditCourseModal={EditCourseModal}
        setEditCourseModal={setEditCourseModal}
      />
      {emtyCourse ? (
        <section className=" m-auto text-[12px] text-[#001D29] mr-[120px]">
          <section className="w-full justify-between flex  py-[20px] bg-[#e6e9eb6e] rounded-lg">
            <section className="w-[50%] pr-[10px] font-semibold">
              {" "}
              لیست دوره های شما
            </section>
            <section className="w-[600px] flex justify-between pl-[10px]">
              <div className="flex text-[12px] w-[300px] h-[35px] bg-[#E6E9EB] rounded">
                <div className="mt-[13px] mx-[10px]">
                  <Search />
                </div>

                <input
                  value={searchInputValue}
                  onChange={(e) => setsearchInputValue(e.target.value)}
                  onClick={() => setShowmore(true)}
                  placeholder="جستوجوی دوره ها "
                  className="z-30 w-[250px] placeholder:text-[#000000a4] placeholder:text-[10px] bg-[#E6E9EB] outline-none"
                />
              </div>
              <div className="flex items-center justify-center text-[10px] w-[250px] h-[35px] bg-[#E6E9EB] rounded">
                <p> چیدمان بر اساس لیست شرکت ها</p>
                <div className=" mx-[10px]">
                  <Sort />
                </div>
              </div>
            </section>
          </section>
          <table class="table-auto w-full bg-[#e6e9eb6e]">
            <thead>
              <tr className="h-[50px]">
                <th>
                  <p className="text-center">ردیف</p>
                </th>
                <th>
                  <p className="text-center">تصویر دوره</p>
                </th>
                <th>
                  <p className="text-center">نام مدرس </p>
                </th>
                <th>
                  <p className="text-center">زمان دوره </p>
                </th>
                <th>
                  <p className="text-center">تعداد اپیزود</p>
                </th>
                <th>
                  <p className="text-center">دسته بندی ها</p>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody className="w-full">
              {!showmore
                ? threeOfCourses.map((item, i) => {
                    return (
                      <tr className="hover:bg-[#e6e9ebc2]">
                        <td className="text-center">{i + 1}</td>
                        <td>
                          <img
                            src={item.CourseImg}
                            className="rounded m-auto h-[50px]"
                          />{" "}
                        </td>
                        <td>
                          <p className="text-center">{item.TeacherName}</p>
                        </td>
                        <td>
                          <p className="text-center text-[#0050A8] font-semibold">
                            {item.CourseDurationTime}
                          </p>
                        </td>
                        <td className="text-[#0050A8] font-semibold text-center">
                          {item.NumberOfEpisodes}
                        </td>
                        <td>
                          <p className="text-center">{item.CourseCategory}</p>
                        </td>
                        <td className="flex items-center h-[80px]">
                          <div className="mt-[3px]">
                            <Edit />{" "}
                          </div>
                          <p className="mr-[10px] cursor-pointer text-[#0050A8]  text-[10px]">
                            ویرایش دوره
                          </p>
                        </td>
                      </tr>
                    );
                  })
                : data
                    .filter((item, i) => {
                      return (
                        item.CourseCategory.toLowerCase().includes(
                          searchInputValue.toLowerCase()
                        ) ||
                        item.TeacherName.toLowerCase().includes(
                          searchInputValue.toLowerCase()
                        ) ||
                        item.NumberOfEpisodes.toLowerCase().includes(
                          searchInputValue.toLowerCase()
                        ) ||
                        item.CourseDurationTime.toLowerCase().includes(
                          searchInputValue.toLowerCase()
                        )
                      );
                    })
                    .map((item, i) => {
                      return (
                        <tr className="hover:bg-[#e6e9ebc2]">
                          <td className="text-center">{i + 1}</td>
                          <td>
                            <img
                              src={item.CourseImg}
                              className="rounded m-auto h-[50px]"
                            />{" "}
                          </td>
                          <td>
                            <p className="text-center">{item.TeacherName}</p>
                          </td>
                          <td>
                            <p className="text-center text-[#0050A8] font-semibold">
                              {item.CourseDurationTime}
                            </p>
                          </td>
                          <td className="text-[#0050A8] font-semibold text-center">
                            {item.NumberOfEpisodes}
                          </td>
                          <td>
                            <p className="text-center">{item.CourseCategory}</p>
                          </td>
                          <td className="flex items-center h-[80px]">
                            <div className="mt-[3px]">
                              <Edit />{" "}
                            </div>
                            <p className="mr-[10px] cursor-pointer text-[#0050A8]  text-[10px]">
                              ویرایش دوره
                            </p>
                          </td>
                        </tr>
                      );
                    })}
            </tbody>
          </table>
          <section className="w-full h-[50px] bg-[#E6E9EB] mt-[20px] flex justify-center items-center rounded-lg">
            <p
              onClick={() => setShowmore(!showmore)}
              className="cursor-pointer "
            >
              موارد بیشتر
            </p>
          </section>
        </section>
      ) : (
        <section className="w-full h-[400px] text-[12px] bg-[#FFF] m-auto ">
          <section className="flex flex-col justify-center items-center w-full h-[400px] leading-6">
            <EmtyLogo />
            <p className="mt-[10px] text-[14px]">
              لیست دوره های شما خالی است !
            </p>
            <p className=" text-[#0000005d] mt-[5px]">
              {" "}
              برای افزودن دوره جدید روی دکمه زیر کلیک کنید{" "}
            </p>
            <button className="w-[200px] cursor-pointer h-[35px] rounded-lg bg-[#3B8044] mt-[15px] text-[#fff]">
              {" "}
              افزودن دوره
            </button>
          </section>
        </section>
      )}
    </section>
  );
};
export default Table;
