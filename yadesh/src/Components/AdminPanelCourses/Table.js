import Edit from "../../assets/svg/AdminPanelCourses/Edit";
import Sort from "../../assets/svg/AdminPanelCourses/Sort";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import video from "../../assets/Img/adminPanelEpisode/video.png";
import { useState } from "react";

const Table = () => {
  const [showmore, setShowmore] = useState(false);
  const [course, setCourse] = useState([
    {
      img: video,
      teacherName: "سهراب دل انگیزان ",
      courseTime: "20 دقیقه",
      NumberOfEpisodes: "30 اپیزود",
      category: "اقتصاد / مدیریت",
    },
    {
      img: video,
      teacherName: "سهراب دل انگیزان ",
      courseTime: "20 دقیقه",
      NumberOfEpisodes: "30 اپیزود",
      category: "اقتصاد / مدیریت",
    },
    {
      img: video,
      teacherName: "سهراب دل انگیزان ",
      courseTime: "20 دقیقه",
      NumberOfEpisodes: "30 اپیزود",
      category: "اقتصاد / مدیریت",
    },
    {
      img: video,
      teacherName: "سهراب دل انگیزان ",
      courseTime: "20 دقیقه",
      NumberOfEpisodes: "30 اپیزود",
      category: "اقتصاد / مدیریت",
    },
  ]);

  let twoOfCourses = [];
  for (let i = 0; i < 2; i++) {
    let loopResult = course[i];
    twoOfCourses.push(loopResult);
  }
  console.log(twoOfCourses);
  return (
    <section className="w-[97vw]">
      <section className=" m-auto text-[12px] text-[#001D29] mr-[120px]">
        <section className="w-full justify-between flex  py-[20px] bg-[#e6e9eb6e] rounded-lg">
          <section className="w-[50%] pr-[10px] font-semibold">
            {" "}
            لیست دور های شما
          </section>
          <section className="w-[600px] flex justify-between pl-[10px]">
            <div className="flex text-[12px] w-[300px] h-[35px] bg-[#E6E9EB] rounded">
              <div className="mt-[13px] mx-[10px]">
                <Search />
              </div>
              <label className="z-30 w-[300px] h-[35px] flex">
                <input
                  placeholder="جستوجوی دوره ها "
                  className="z-30 w-[100px] placeholder:text-[#000000a4] placeholder:text-[10px] bg-[#E6E9EB] outline-none"
                />
              </label>
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
              ? twoOfCourses.map((item) => {
                  return (
                    <tr className="hover:bg-[#e6e9ebc2]">
                      <td className="text-center">1</td>
                      <td>
                        <img src={item.img} className="rounded m-auto" />{" "}
                      </td>
                      <td>
                        <p className="text-center">{item.teacherName}</p>
                      </td>
                      <td>
                        <p className="text-center text-[#0050A8] font-semibold">
                          {item.courseTime}
                        </p>
                      </td>
                      <td className="text-[#0050A8] font-semibold text-center">
                        {item.NumberOfEpisodes}
                      </td>
                      <td>
                        <p className="text-center">{item.category}</p>
                      </td>
                      <td className="flex items-center h-[80px]">
                        <div className="mt-[3px]">
                          <Edit />{" "}
                        </div>
                        <p className="mr-[10px] text-[#0050A8]  text-[10px]">
                          ویراش شرکت ها
                        </p>
                      </td>
                    </tr>
                  );
                })
              : course.map((item) => {
                  return (
                    <tr className="hover:bg-[#e6e9ebc2]">
                      <td className="text-center">1</td>
                      <td>
                        <img src={item.img} className="rounded m-auto" />{" "}
                      </td>
                      <td>
                        <p className="text-center">{item.teacherName}</p>
                      </td>
                      <td>
                        <p className="text-center text-[#0050A8] font-semibold">
                          {item.courseTime}
                        </p>
                      </td>
                      <td className="text-[#0050A8] font-semibold text-center">
                        {item.NumberOfEpisodes}
                      </td>
                      <td>
                        <p className="text-center">{item.category}</p>
                      </td>
                      <td className="flex items-center h-[80px]">
                        <div className="mt-[3px]">
                          <Edit />{" "}
                        </div>
                        <p className="mr-[10px] text-[#0050A8]  text-[10px]">
                          ویراش شرکت ها
                        </p>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
        <section className="w-full h-[50px] bg-[#E6E9EB] mt-[20px] flex justify-center items-center rounded-lg">
          <p onClick={() => setShowmore(!showmore)} className="cursor-pointer ">
            موارد بیشتر
          </p>
        </section>
      </section>
    </section>
  );
};
export default Table;
