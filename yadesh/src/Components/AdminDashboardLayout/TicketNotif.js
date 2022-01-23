import NotifAlert from "../../assets/svg/AdminLogin/NotifAlert";

export default ({ setticketNotifDisplay, ticketNotifDisplay }) => (
  <div
    className={`absolute left-5 top-[60px] drop-shadow-xl transform transition-opacity duration-500 scale-0 z-20 w-[250px] h-[330px]  rounded-[10px] bg-[#f5f5f5]  ${
      ticketNotifDisplay ? "scale-100 opacity-100" : "opacity-0 "
    }`}
  >
    <div className="flex w-[85%] justify-between mt-5 mr-[15px]">
      <div className="flex ">
        <NotifAlert />
        <p className="font-bold mr-3 text-[12px]">اعلانات</p>
      </div>
      <div className="flex">
        <p className="text-[12px] cursor-pointer text-[#3f3f3f] ">
          پاک کردن همه
        </p>
      </div>
    </div>
    <p className="text-[12px] my-6 mr-[15px]">تیکت جدید</p>
    <div className="max-h-[180px] overflow-y-auto">
      <div className="flex mb-3 justify-between divide-y-reverse divide-y m-auto w-[220px]">
        <div>
          <span class="flex mt-1 h-3 w-3">
            <span class="animate-ping relative left-[-6px] inline-flex z-[-20] h-1.5 w-3 rounded-full bg-[#008043] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-1.5 w-3 bg-[#008043]"></span>
          </span>
        </div>
        <div>
          <p className="text-[11px] w-[170px]">
            سلام من در دیدن ویدیو ها مشکل دارم
          </p>
          <p className="py-3 text-[#000000c9] text-[10px]">6 ساعت پیش</p>
        </div>
        <div className="flex items-center">{">"}</div>
      </div>
      <div className="flex mb-3 justify-between divide-y-reverse divide-y m-auto w-[220px]">
        <div>
          <span class="flex mt-1 h-3 w-3">
            <span class="animate-ping relative left-[-6px] inline-flex z-[-20] h-1.5 w-3 rounded-full bg-[#008043] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-1.5 w-3 bg-[#008043]"></span>
          </span>
        </div>
        <div>
          <p className="text-[11px] w-[170px]">
            سلام من در دیدن ویدیو ها مشکل دارم
          </p>
          <p className="py-3 text-[#000000c9] text-[10px]">6 ساعت پیش</p>
        </div>
        <div className="flex items-center">{">"}</div>
      </div>
    </div>

    <div className="">
      <button className="w-[100%] h-12 text-[12px] fixed bottom-0 rounded-b-[10px] bg-[#e6e9eb]">
        مشاهده همه ی اعلان ها
      </button>
    </div>
  </div>
);
