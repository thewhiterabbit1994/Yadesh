import "../../Components/AdminPanelEpisode/Table.css";
import Edit from "../../assets/svg/AdminPanelCourses/Edit";
import Sort from "../../assets/svg/AdminPanelCourses/Sort";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import video from "../../assets/Img/adminPanelEpisode/video.png";
import imgUser from "../../assets/Img/AdminPanelCourses/imgUser.jpg";

const Table = () => {
  return (
    <section n className="w-full">
      <section className="w-[85%] m-auto text-[12px] text-[#001D29]">
        <section className="w-full justify-between flex mb-[40px]">
          <section className="w-[50%]"> لیست کاربران شما</section>
          <section className="w-[48%] flex justify-between">
            <div className="flex text-[12px] w-[300px] h-[35px] bg-[#E6E9EB] rounded">
              <div className="mt-[13px] mx-[10px]">
                <Search />
              </div>
              <input
                className="w-[250px] h-[35px] bg-[#E6E9EB] outline-none text-[12px]"
                placeholder="جست وجو کنید"
              />
            </div>
            <div className="flex items-center justify-center text-[12px] w-[250px] h-[35px] bg-[#E6E9EB] rounded">
              <p> چیدمان بر اساس لیست شرکت ها</p>
              <div className=" mx-[10px]">
                <Sort />
              </div>
            </div>
          </section>
        </section>
        <table id="customers">
          <tr>
            <th>
              <p className="text-center">ردیف</p>
            </th>
            <th>
              <p className="text-center">عکس</p>
            </th>
            <th>
              <p className="text-center">نام اپیزود </p>
            </th>
            <th>
              <p className="text-center">نام و نام خانوادگی </p>
            </th>
            <th>
              <p className="text-center">شرکت </p>
            </th>
            <th>
              <p className="text-center"> شماره تلفن</p>
            </th>
            <th>
              <p className="text-center"> ایمیل</p>
            </th>
          </tr>
          <tr>
            <td className="text-center">1</td>
            <td>
              <img src={imgUser} className="rounded-[50%] m-auto" />{" "}
            </td>
            <td>
              <p className="text-center">رضا رنجبر</p>
            </td>
            <td>
              <p className="text-center">مخابرات ایران </p>
            </td>
            <td className="font-semibold text-center"> 021-88665544</td>
            <td>
              <p className="text-center">info@google.com</p>
            </td>
            <td className="flex items-center ">
              <div className="mt-[3px]">
                <Edit />{" "}
              </div>
              <p className="mr-[10px] text-[#0050A8]">ویراش کاربر</p>
            </td>
          </tr>
        </table>
        <section className="w-full h-[50px] bg-[#E6E9EB] flex justify-center items-center">
          <p>موارد بیشتر</p>
        </section>
      </section>
    </section>
  );
};
export default Table;
