import "../../Components/AdminPanelEpisode/Table.css";
import Edit from "../../assets/svg/AdminPanelCourses/Edit";
import Sort from "../../assets/svg/AdminPanelCourses/Sort";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import video from "../../assets/Img/adminPanelEpisode/video.png";

const Table = () => {
   return (
      <section n className="w-full">
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
            <table id="customers" className="text-[10px]">
               <tr>
                  <th><p className="text-center">ردیف</p></th>
                  <th><p>ویدیوی اپیزود</p></th>
                  <th><p>نام اپیزود </p></th>
                  <th><p>نام مدرس </p></th>
                  <th><p>زمان اپیزود</p></th>
                  <th><p>دسته بندی ها</p></th>
                  <th></th>
               </tr>
               <tr>
                  <td><p className="text-center">1</p></td>
                  <td><img src={video} className="rounded " />{" "}</td>
                  <td><p>اموزش مدیریت مالی -رکود و تورم</p></td>
                  <td><p>سهراب دل انگیزان </p></td>
                  <td className="text-[#0050A8] font-semibold"> 30 دقیقه</td>
                  <td><p>اقتصاد / مدیریت</p></td>
                  <td className="flex h-[55px]  items-end ">
                     <div className="mt-[3px]"><Edit />{" "}</div>
                     <p className="mr-[10px] text-[#0050A8] text-[10px] font-semibold">ویراش شرکت ها</p>
                  </td>
               </tr>
            </table>
            <section className="w-full h-[50px] my-[10px] bg-[#E6E9EB] rounded flex justify-center items-center">
               <p>مشاهده ی همه ی اپیزود ها</p>
            </section>
         </section>
      </section>
   );
};
export default Table;
