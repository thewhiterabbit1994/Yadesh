import ArrowDown from "../../assets/svg/AdminPanelCourses/ArrowDown";
import Calendar from "../../assets/svg/AdminPanelCourses/Calendar";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import Nnotification from "../../assets/svg/AdminPanelCourses/Nnotification";
import imgProfile from "../../assets/Img/AdminPanelCourses/imgUser.jpg";
import SearchModal from "./SearchModal";
import TicketNotif from "./TicketNotif";
import { useState } from "react";

const Header = () => {
  const [searchModal, setsearchModal] = useState(false);
  const [ticketNotifDisplay, setticketNotifDisplay] = useState(false);
  const persianMonth = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const getHour = new Date().getHours();
  const date = new Date().toLocaleDateString("fa-IR");
  const sepratedDate = date.split("/");
  const day = sepratedDate[2];
  const month = sepratedDate[1]
    .replace("۱۰", persianMonth[9])
    .replace("۱۱", persianMonth[10])
    .replace("۱۲", persianMonth[11])
    .replace("۱", persianMonth[0])
    .replace("۲", persianMonth[1])
    .replace("۳", persianMonth[2])
    .replace("۴", persianMonth[3])
    .replace("۵", persianMonth[4])
    .replace("۶", persianMonth[5])
    .replace("۷", persianMonth[6])
    .replace("۸", persianMonth[7])
    .replace("۹", persianMonth[8]);
  const year = sepratedDate[0];
  console.log("---------------------------------------");
  console.log("year is :", year);
  console.log("month is :", month);
  console.log("day is :", day);
  console.log("full date is :", date);
  console.log("---------------------------------------");

  return (
    <section className="absolute w-full  h-[70px] ">
      <SearchModal searchModal={searchModal} setsearchModal={setsearchModal} />
      <section className="w-[90%] m-auto mt-[15px] ml-5 flex  items-center justify-between">
        <section className="w-[50%] text-[#001D29]">
          <section className="flex">
            <div className="flex ">
              <img
                src={imgProfile}
                className="h-[45px] mt-[-3px] rounded-[50%]"
              />
              <div className="text-[10px] flex flex-col mt-[3px] mr-[10px]">
                {3 >= getHour && getHour >= 0 ? (
                  <p className="opacity-[60%] ">شب بخیر</p>
                ) : 10 >= getHour && getHour >= 3 ? (
                  <p className="opacity-[60%] ">صبح بخیر</p>
                ) : 15 >= getHour && getHour >= 10 ? (
                  <p className="opacity-[60%] ">ظهر بخیر</p>
                ) : 19 >= getHour && getHour >= 15 ? (
                  <p className="opacity-[60%] ">عصر بخیر</p>
                ) : 24 >= getHour && getHour >= 19 ? (
                  <p className="opacity-[60%] ">شب بخیر</p>
                ) : null}
                <div className="text-[12px] flex">
                  <p>محمد حسین ضرابی</p>
                  <div className="mr-[7px] mt-[5px]">
                    <ArrowDown />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="w-[38%] flex  justify-between">
          <div className="flex w-fit px-2 h-[35px] bg-[#E6E9EB] rounded justify-center items-center">
            <div className="mt-[2px] ml-[5px]">
              <Calendar />
            </div>
            <p className="text-[10px] text-[#0050A8]">
              {day + " " + month + " " + year}
            </p>
          </div>
          <div className="flex text-[12px] w-[300px] h-[35px] bg-[#E6E9EB] rounded">
            <div className="mt-[13px] mx-[10px]">
              <Search />
            </div>
            <div
              onClick={() => setsearchModal(!searchModal)}
              className="w-[250px] h-[35px] cursor-pointer bg-[#E6E9EB] text-[11px]"
            >
              <p className="text-[#00000093] font-bold mt-[9px]">جستجو کنید</p>
            </div>
          </div>
          <div
            onClick={() => setticketNotifDisplay(!ticketNotifDisplay)}
            className="cursor-pointer mt-[10px]"
          >
            <Nnotification />
          </div>
          <TicketNotif
            ticketNotifDisplay={ticketNotifDisplay}
            setticketNotifDisplay={setticketNotifDisplay}
          />
        </section>
      </section>
    </section>
  );
};
export default Header;
