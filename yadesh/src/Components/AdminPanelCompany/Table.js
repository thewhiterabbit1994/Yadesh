import "../../Components/AdminPanelCompany/Table.css";
import Edit from "../../assets/svg/AdminPanelCourses/Edit";
import Sort from "../../assets/svg/AdminPanelCourses/Sort";
import Search from "../../assets/svg/AdminPanelCourses/Search";
const Table = () => {
  return (
    <sectio n className="w-full">
      <section className="w-[90%] m-auto text-[12px] text-[#001D29] mr-[120px]">
        <section className="w-full justify-between flex py-[20px] bg-[#e6e9eb6b]">
          <section className="w-[50%] font-semibold pr-[10px]	"> لیست شرکت ها</section>
          <section className="w-[570px] flex justify-between pl-[10px]">
            <div className="flex text-[12px] w-[300px] h-[35px] bg-[#E6E9EB] rounded">
              <div className="mt-[13px] mx-[10px]">
                <Search />
              </div>
              <lable >
                <input
                  className="w-[250px] h-[35px] bg-[#E6E9EB] outline-none text-[12px] placeholder:text-[#0000009f] placeholder:text-[10px]"
                  placeholder="جست وجوی شرکت"
                />
              </lable>
            </div>
            <div className="flex items-center justify-center text-[10px] w-[250px] h-[35px] bg-[#E6E9EB] rounded">
              <p> چیدمان بر اساس لیست شرکت ها</p>
              <div className=" mx-[10px]">
                <Sort />
              </div>
            </div>
          </section>
        </section>
        <table id="customers" className="text-[10px]">
          <tr>
            <th><p className="text-center">ردیف</p></th>
            <th>نام شرکت</th>
            <th>کارشناسان آموزش</th>
            <th> تعداد کارمندان</th>
            <th> موقعیت شرکت</th>
            <th></th>
          </tr>
          <tr>
            <td className="text-center">1</td>
            <td>مخابرات ایران </td>
            <td> علی محرابی</td>
            <td className=" text-[#0050A8] font-semibold	">1300 نفر</td>
            <td>خوزستان اهواز </td>
            <td className="flex">
              <div className="mt-[3px]">
                <Edit />{" "}
              </div>
              <p className="mr-[10px] text-[#0050A8]">ویراش شرکت ها</p>
            </td>
          </tr>
          <tr>
            <td className="text-center">1</td>
            <td>مخابرات ایران </td>
            <td> علی محرابی</td>
            <td className=" text-[#0050A8] font-semibold	">1300 نفر</td>
            <td>خوزستان اهواز </td>
            <td className="flex">
              <div className="mt-[3px]">
                <Edit />{" "}
              </div>
              <p className="mr-[10px] text-[#0050A8]">ویراش شرکت ها</p>
            </td>
          </tr>
          <tr>
            <td className="text-center">1</td>
            <td>مخابرات ایران </td>
            <td> علی محرابی</td>
            <td className=" text-[#0050A8] font-semibold	">1300 نفر</td>
            <td>خوزستان اهواز </td>
            <td className="flex">
              <div className="mt-[3px]">
                <Edit />{" "}
              </div>
              <p className="mr-[10px] text-[#0050A8]">ویراش شرکت ها</p>
            </td>
          </tr>
          <tr>
            <td className="text-center">1</td>
            <td>مخابرات ایران </td>
            <td> علی محرابی</td>
            <td className=" text-[#0050A8] font-semibold	">1300 نفر</td>
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
    </sectio>
  );
};
export default Table;
