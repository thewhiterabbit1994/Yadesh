import Edit from "../../assets/svg/AdminPanelCourses/Edit";
import Sort from "../../assets/svg/AdminPanelCourses/Sort";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import video from "../../assets/Img/adminPanelEpisode/video.png";
import imgUser from "../../assets/Img/AdminPanelCourses/imgUser.jpg";
import { useState } from "react"
import EditUser from "../Modals/EditUser"

const Table = () => {
  const [showMore, setShowMore] = useState(false)
  const [EditUserModal, setEditUserModal] = useState(false)
  const [user, setUser] = useState([
    {
      UserImg: imgUser,
      fullName: "رضا رنجبر",
      telephone: "021-88665544",
      copmany: "مخابرات ایران ",
      email: "info@google.com"
    },
    {
      UserImg: imgUser,
      fullName: "رضا رنجبر",
      telephone: "021-88665544",
      copmany: "مخابرات ایران ",
      email: "info@google.com"
    },
    {
      UserImg: imgUser,
      fullName: "رضا رنجبر",
      telephone: "021-88665544",
      copmany: "مخابرات ایران ",
      email: "info@google.com"
    },
    {
      UserImg: imgUser,
      fullName: "رضا رنجبر",
      telephone: "021-88665544",
      copmany: "مخابرات ایران ",
      email: "info@google.com"
    },
  ])
  let twoOfuser = [];
  for (let i = 0; i < 2; i++) {
    let loopResult = user[i];
    twoOfuser.push(loopResult);
  }
  return (
    <sectionn className="w-[97vw]">
      <EditUser EditUserModal={EditUserModal} setEditUserModal={setEditUserModal} />
      <section className="w-[90%] mr-[120px] m-auto text-[12px] text-[#001D29]">
        <section className="w-full justify-between flex py-[20px] bg-[#e6e9eb75]">
          <section className="w-[50%] font-semibold pr-[10px]"> لیست کاربران شما</section>
          <section className="w-[570px] flex justify-between pl-[10px]">
            <div className="flex text-[12px] w-[300px] h-[35px] bg-[#E6E9EB] rounded">
              <div className="mt-[13px] mx-[10px]">
                <Search />
              </div>
              <label className="z-20">
                <input
                  className="placeholder:text-[10px] placeholder:text-[#000000a8] w-[250px] h-[35px] bg-[#E6E9EB] outline-none text-[12px]"
                  placeholder="جست وجو کنید"
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
                <p className="text-center">عکس</p>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              !showMore ?
                twoOfuser.map((item , i) => {
                  return (
                    <tr className="h-[70px] hover:bg-[#e6e9ebc2]">
                      <td className="text-center">{i+1}</td>
                      <td>
                        <img src={item.UserImg} className="rounded-[50%] w-[40px] h-[40px] m-auto" />{" "}
                      </td>
                      <td>
                        <p className="text-center">{item.fullName}</p>
                      </td>
                      <td>
                        <p className="text-center">{item.copmany}</p>
                      </td>
                      <td className="font-semibold text-center">{item.telephone}</td>
                      <td>
                        <p className="text-center">{item.email}</p>
                      </td>
                      <td className="flex items-center h-[50px] font-semibold	">
                        <div className="mt-[3px]">
                          <Edit />{" "}
                        </div>
                        <p
                          onClick={() => setEditUserModal(true)}
                          className="mr-[10px] cursor-pointer text-[#0050A8] ">ویراش کاربر</p>
                      </td>
                    </tr>
                  )
                })
                :
                user.map((item , i) => {
                  return (
                    <tr className="h-[70px] hover:bg-[#e6e9ebc2] ">
                      <td className="text-center">{i+1}</td>
                      <td>
                        <img src={item.UserImg} className="rounded-[50%] w-[40px] h-[40px] m-auto" />{" "}
                      </td>
                      <td>
                        <p className="text-center">{item.fullName}</p>
                      </td>
                      <td>
                        <p className="text-center">{item.copmany}</p>
                      </td>
                      <td className="font-semibold text-center">{item.telephone}</td>
                      <td>
                        <p className="text-center">{item.email}</p>
                      </td>
                      <td className="flex items-center h-[50px] font-semibold	">
                        <div className="mt-[3px]">
                          <Edit />{" "}
                        </div>
                        <p
                          onClick={() => setEditUserModal(true)}
                          className="mr-[10px] cursor-pointer text-[#0050A8] ">ویراش کاربر</p>
                      </td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
        <section onClick={() => setShowMore(!showMore)} className="w-full cursor-pointer mt-[20px] h-[50px] bg-[#E6E9EB] flex justify-center items-center">
          <p>موارد بیشتر</p>
        </section>
      </section>
    </sectionn>
  );
};
export default Table;
