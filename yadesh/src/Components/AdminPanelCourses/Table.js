import "../../Components/AdminPanelCourses/Table.css";
import Edit from "../../assets/svg/AdminPanelCourses/Edit";
import Sort from "../../assets/svg/AdminPanelCourses/Sort";
import Search from "../../assets/svg/AdminPanelCourses/Search";
const Table = () => {
  return (
    <section className="w-full">
      <p>hi</p>
      <section className="w-[90%] m-auto text-[12px] text-[#001D29]">
        <section className="w-full justify-between flex mb-[40px]">
          <section className="w-[50%]"> لیست شرکت ها</section>
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
            <th>ردیف</th>
            <th>نام شرکت</th>
            <th>کارشناسان آموزش</th>
            <th> تعداد کارمندان</th>
            <th> موقعیت شرکت</th>
          </tr>
          <tr>
            <td>1</td>
            <td>مخابرات ایران </td>
            <td> علی محرابی</td>
            <td>1300 نفر</td>
            <td>خوزستان اهواز </td>
            <td className="flex">
              <div className="mt-[3px]">
                <Edit />{" "}
              </div>
              <p className="mr-[10px] text-[#0050A8]">ویراش شرکت ها</p>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>مخابرات ایران </td>
            <td> علی محرابی</td>
            <td>1300 نفر</td>
            <td>خوزستان اهواز </td>
            <td className="flex">
              <div className="mt-[3px]">
                <Edit />{" "}
              </div>
              <p className="mr-[10px] text-[#0050A8]">ویراش شرکت ها</p>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>مخابرات ایران </td>
            <td> علی محرابی</td>
            <td>1300 نفر</td>
            <td>خوزستان اهواز </td>
            <td className="flex">
              <div className="mt-[3px]">
                <Edit />{" "}
              </div>
              <p className="mr-[10px] text-[#0050A8]">ویراش شرکت ها</p>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>مخابرات ایران </td>
            <td> علی محرابی</td>
            <td>1300 نفر</td>
            <td>خوزستان اهواز </td>
            <td className="flex">
              <div className="mt-[3px]">
                <Edit />{" "}
              </div>
              <p className="mr-[10px] text-[#0050A8]">ویراش شرکت ها</p>
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
