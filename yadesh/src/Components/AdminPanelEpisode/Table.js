import Edit from "../../assets/svg/AdminPanelCourses/Edit";
import Sort from "../../assets/svg/AdminPanelCourses/Sort";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import video from "../../assets/Img/adminPanelEpisode/video.png";
import { useState } from "react"

const Table = () => {
   const [showMore, setShowMore] = useState(false)
   const [episode, setEpisode] = useState([
      {
         videoOfEpisode: video,
         nameOfEpisode: "اموزش مدیریت مالی -رکود و تورم",
         timeOfEpisode: "30 دقیقه",
         categories: "اقتصاد / مدیریت",
         teacherName: "سهراب دل انگیزان "
      },
      {
         videoOfEpisode: video,
         nameOfEpisode: "اموزش مدیریت مالی -رکود و تورم",
         timeOfEpisode: "30 دقیقه",
         categories: "اقتصاد / مدیریت",
         teacherName: "سهراب دل انگیزان "
      },  {
         videoOfEpisode: video,
         nameOfEpisode: "اموزش مدیریت مالی -رکود و تورم",
         timeOfEpisode: "30 دقیقه",
         categories: "اقتصاد / مدیریت",
         teacherName: "سهراب دل انگیزان "
      },  {
         videoOfEpisode: video,
         nameOfEpisode: "اموزش مدیریت مالی -رکود و تورم",
         timeOfEpisode: "30 دقیقه",
         categories: "اقتصاد / مدیریت",
         teacherName: "سهراب دل انگیزان "
      },  {
         videoOfEpisode: video,
         nameOfEpisode: "اموزش مدیریت مالی -رکود و تورم",
         timeOfEpisode: "30 دقیقه",
         categories: "اقتصاد / مدیریت",
         teacherName: "سهراب دل انگیزان "
      },
   ])
   let twoOfEpisode = [];
   for (let i = 0; i < 1; i++) {
      let loopResult = episode[i];
      twoOfEpisode.push(loopResult);
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
                     <th><p className="text-center">ردیف</p></th>
                     <th><p>ویدیوی اپیزود</p></th>
                     <th><p>نام اپیزود </p></th>
                     <th><p>نام مدرس </p></th>
                     <th><p>زمان اپیزود</p></th>
                     <th><p>دسته بندی ها</p></th>
                     <th></th>
                  </tr>
               </thead>
               <tbody className="w-full ">
                  {
                     !showMore ?
                        twoOfEpisode.map(item => {
                           return (
                              <tr className="h-[100px] hover:bg-[#e6e9ebc2]">
                                 <td><p className="text-center">1</p></td>
                                 <td><img src={video} className="rounded m-auto " />{" "}</td>
                                 <td><p className="text-center">{item.nameOfEpisode}</p></td>
                                 <td><p className="text-center">{item.teacherName}</p></td>
                                 <td className="text-[#0050A8] font-semibold text-center">{item.timeOfEpisode}</td>
                                 <td><p className="text-center">{item.categories}</p></td>
                                 <td className="flex h-[55px]  items-end ">
                                    <div className="mt-[3px]"><Edit />{" "}</div>
                                    <p className="mr-[10px] text-[#0050A8] text-[10px] font-semibold">ویراش شرکت ها</p>
                                 </td>
                              </tr>
                           )
                        }) :
                        episode.map(item => {
                           return (
                              <tr className="h-[100px] hover:bg-[#e6e9ebc2]">
                                 <td><p className="text-center">1</p></td>
                                 <td><img src={video} className="rounded m-auto " />{" "}</td>
                                 <td><p className="text-center">{item.nameOfEpisode}</p></td>
                                 <td><p className="text-center">{item.teacherName}</p></td>
                                 <td className="text-[#0050A8] font-semibold text-center">{item.timeOfEpisode}</td>
                                 <td><p className="text-center">{item.categories}</p></td>
                                 <td className="flex h-[55px]  items-end ">
                                    <div className="mt-[3px]"><Edit />{" "}</div>
                                    <p className="mr-[10px] text-[#0050A8] text-[10px] font-semibold">ویراش شرکت ها</p>
                                 </td>
                              </tr>
                           )
                        })
                  }
                  <tr className="h-[100px] hover:bg-[#e6e9ebc2]">
                     <td><p className="text-center">1</p></td>
                     <td><img src={video} className="rounded m-auto " />{" "}</td>
                     <td><p className="text-center">اموزش مدیریت مالی -رکود و تورم</p></td>
                     <td><p className="text-center">سهراب دل انگیزان </p></td>
                     <td className="text-[#0050A8] font-semibold text-center"> 30 دقیقه</td>
                     <td><p className="text-center">اقتصاد / مدیریت</p></td>
                     <td className="flex h-[55px]  items-end ">
                        <div className="mt-[3px]"><Edit />{" "}</div>
                        <p className="mr-[10px] text-[#0050A8] text-[10px] font-semibold">ویراش شرکت ها</p>
                     </td>
                  </tr>
               </tbody>
            </table>
            <section onClick={() => setShowMore(!showMore)} className="w-full cursor-pointer h-[50px] my-[10px] bg-[#E6E9EB] rounded flex justify-center items-center">
               <p>مشاهده ی همه ی اپیزود ها</p>
            </section>
         </section>
      </section>
   );
};
export default Table;
