import ArrowDown from "../../assets/svg/AdminPanelCourses/ArrowDown";
import Calendar from "../../assets/svg/AdminPanelCourses/Calendar";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import Nnotification from "../../assets/svg/AdminPanelCourses/Nnotification";
import imgProfile from "../../assets/Img/AdminPanelCourses/imgUser.png";
const Header = () => {
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
  const date = "۱۴۰۰/۱۱/۳";
  const sepratedDate = date.split("/");
  const getDayNumber = sepratedDate[2];
  const getMonthNumber = sepratedDate[1].replace(
    "۱",
    persianMonth[0] | "۲",
    persianMonth[1] | "۳",
    persianMonth[2] | "۴",
    persianMonth[3] | "۵",
    persianMonth[4] | "۶",
    persianMonth[5] | "۷",
    persianMonth[6] | "۸",
    persianMonth[7] | "۹",
    persianMonth[8] | "۱۰",
    persianMonth[9] | "۱۱",
    persianMonth[10] | "۱۲",
    persianMonth[11]
  );
  const getYearNumber = sepratedDate[0];

  console.log("year is :", getYearNumber);
  console.log("month is :", getMonthNumber);
  console.log("day is :", getDayNumber);
  return (
    <section className="absolute w-full h-[80px] ">
      <section className="w-[90%] h-[400px] m-auto mt-[20px] ml-5 flex justify-between">
        <section className="w-[50%] text-[#001D29]">
          <section className="flex">
            <div className="flex ">
              <img src={imgProfile} className="rounded-[50%]" />
              <div className="text-[10px] flex flex-col mr-[100px]">
                {3 >= getHour && getHour >= 0 ? (
                  <p className="opacity-[60%] ">شب بخیر</p>
                ) : 10 >= getHour && getHour >= 3 ? (
                  <p className="opacity-[60%] ">صبح بخیر</p>
                ) : 16 >= getHour && getHour >= 10 ? (
                  <p className="opacity-[60%] ">ظهر بخیر</p>
                ) : 19 >= getHour && getHour >= 16 ? (
                  <p className="opacity-[60%] ">عصر بخیر</p>
                ) : 24 >= getHour && getHour >= 19 ? (
                  <p className="opacity-[60%] ">شب بخیر</p>
                ) : null}
                <div className="text-[12px] flex">
                  <p>کیارش اسدی</p>
                  <div className="mr-[7px] mt-[5px]">
                    <ArrowDown />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="w-[38%] flex  justify-between">
          <div className="flex w-[100px] h-[35px] bg-[#E6E9EB] rounded justify-center items-center">
            <div className="mt-[2px] ml-[5px]">
              <Calendar />
            </div>
            <p className="text-[10px] text-[#0050A8]">1 مهر 1400</p>
          </div>
          <div className="flex text-[12px] w-[300px] h-[35px] bg-[#E6E9EB] rounded">
            <div className="mt-[13px] mx-[10px]">
              <Search />
            </div>
            <input
              className="w-[250px] h-[35px] bg-[#E6E9EB] outline-none text-[12px]"
              placeholder="جست وجو کنید"
            />
          </div>
          <div className="mt-[10px]">
            <Nnotification />
          </div>
        </section>
      </section>
    </section>
  );
};
export default Header;
