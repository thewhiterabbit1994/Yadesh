import Edit from "../../assets/svg/AdminPanelCourses/Edit";
import Sort from "../../assets/svg/AdminPanelCourses/Sort";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import video from "../../assets/Img/adminPanelEpisode/video.png";
import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const Table = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);
  let database = [];
  const data = siteManagmentDatabase.Courses.forEach((Course) => {
    // database = Course.Episodes;
    Course.Episodes.forEach((Episode) => {
      database.push(Episode);
    });
  });
  console.log(database);

  const [showMore, setShowMore] = useState(false);

  let threeOfEpisodes = [];
  for (let i = 0; i < 3; i++) {
    let loopResult = database[i];
    threeOfEpisodes.push(loopResult);
  }
  return (
    <section className="w-[97vw]">
      <section className="w-[90%] mr-[120px] m-auto text-[12px] text-[#001D29]">
        <section className="w-full justify-between rounded bg-[#F5F5F5] flex py-[30px] px-[15px]">
          <section className="w-[50%] font-semibold">
            {" "}
            لیست اپیزود های شما
          </section>
          <section className="w-[570px] flex justify-between">
            <div className="flex text-[12px] w-[300px] h-[35px] bg-[#E6E9EB] rounded">
              <div className="mt-[13px] mx-[10px]">
                <Search />
              </div>
              <label className="z-20">
                <input
                  className="w-[250px] h-[35px] placeholder:text-[#000000a2] placeholder:text-[10px] z-20 bg-[#E6E9EB] outline-none text-[12px]"
                  placeholder="جستوجوی اپیزود"
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
                <p>ویدیوی اپیزود</p>
              </th>
              <th>
                <p>نام اپیزود </p>
              </th>
              <th>
                <p>نام مدرس </p>
              </th>
              <th>
                <p>زمان اپیزود</p>
              </th>
              <th>
                <p>دسته بندی ها</p>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="w-full ">
            {!showMore
              ? threeOfEpisodes.map((item, i) => {
                  return (
                    <tr className="h-[100px] hover:bg-[#e6e9ebc2]">
                      <td>
                        <p className="text-center">{i + 1}</p>
                      </td>
                      <td>
                        <img
                          src={item.PreviewImg}
                          className="rounded m-auto  h-[50px]"
                        />{" "}
                      </td>
                      <td>
                        <p className="text-center">{item.NameOfEpisode}</p>
                      </td>
                      <td>
                        <p className="text-center">{item.TeacherName}</p>
                      </td>
                      <td className="text-[#0050A8] font-semibold text-center">
                        {item.TimeOfEpisode}
                      </td>
                      <td>
                        <p className="text-center">{item.EpisodeCategory}</p>
                      </td>
                      <td className="flex h-[55px]  items-end ">
                        <div className="mt-[3px]">
                          <Edit />{" "}
                        </div>
                        <p className="mr-[10px] text-[#0050A8] text-[10px] font-semibold">
                          ویرایش اپیزود ها
                        </p>
                      </td>
                    </tr>
                  );
                })
              : database.map((item, i) => {
                  return (
                    <tr className="h-[100px] hover:bg-[#e6e9ebc2]">
                      <td>
                        <p className="text-center">{i + 1}</p>
                      </td>
                      <td>
                        <img
                          src={item.PreviewImg}
                          className="rounded m-auto  h-[50px]"
                        />{" "}
                      </td>
                      <td>
                        <p className="text-center">{item.NameOfEpisode}</p>
                      </td>
                      <td>
                        <p className="text-center">{item.TeacherName}</p>
                      </td>
                      <td className="text-[#0050A8] font-semibold text-center">
                        {item.TimeOfEpisode}
                      </td>
                      <td>
                        <p className="text-center">{item.EpisodeCategory}</p>
                      </td>
                      <td className="flex h-[55px]  items-end ">
                        <div className="mt-[3px]">
                          <Edit />{" "}
                        </div>
                        <p className="mr-[10px] text-[#0050A8] text-[10px] font-semibold">
                          ویرایش اپیزود ها
                        </p>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
        <section
          onClick={() => setShowMore(!showMore)}
          className="w-full cursor-pointer h-[50px] my-[10px] bg-[#E6E9EB] rounded flex justify-center items-center"
        >
          <p>مشاهده ی همه ی اپیزود ها</p>
        </section>
      </section>
    </section>
  );
};
export default Table;
