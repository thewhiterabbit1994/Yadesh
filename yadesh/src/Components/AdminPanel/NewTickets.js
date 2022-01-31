import TicketIcon from "../../assets/svg/AdminLogin/TicketIcon";

const NewTickets = ({ showNewTickets, showYourEpisodesSeen }) => {
  return (
    <div
      className={`transform transition-opacity duration-500 scale-0 absolute w-[330px] h-[420px] bg-[#f5f5f5] rounded-[10px]  left-0 ${
        showNewTickets
          ? `${
              showYourEpisodesSeen ? "top-[460px]" : "top-16"
            }  scale-100 opacity-100`
          : "opacity-0"
      }`}
    >
      <div>
        <div className="flex mt-5 justify-between">
          <div className="flex mt-1 mr-5">
            <TicketIcon color={"#000"} />
            <p className="mr-3 font-bold text-[13px]">تیکت های جدید</p>
          </div>
          <div className="ml-5">
            <button className="bg-[#e1e4e5] text-[12px] mt-[-10px] outline-none h-[30px] w-[80px] rounded-[5px]">
              صعودی
            </button>
          </div>
        </div>
        <div className="my-5 divide-y">
          <div className="flex py-3 justify-between  m-auto w-[280px]">
            <div>
              <span class="flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#008043] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-[#008043]"></span>
              </span>
            </div>
            <div>
              <p className="text-[11px] w-[200px]">
                سلام من در دیدن ویدیو ها مشکل دارم
              </p>
              <p className="py-3 text-[#000000c9] text-[10px]">6 ساعت پیش</p>
            </div>
            <div className="flex items-center">{">"}</div>
          </div>
          <div className="flex py-3 justify-between  m-auto w-[280px]">
            <div>
              <span class="flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#008043] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-[#008043]"></span>
              </span>
            </div>
            <div>
              <p className="text-[11px] w-[200px]">
                سلام من در دیدن ویدیو ها مشکل دارم
              </p>
              <p className="py-3 text-[#000000c9] text-[10px]">6 ساعت پیش</p>
            </div>
            <div className="flex items-center">{">"}</div>
          </div>
          <div className="flex py-3 justify-between  m-auto w-[280px]">
            <div>
              <span class="flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#008043] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-[#008043]"></span>
              </span>
            </div>
            <div>
              <p className="text-[11px] w-[200px]">
                سلام من در دیدن ویدیو ها مشکل دارم
              </p>
              <p className="py-3 text-[#000000c9] text-[10px]">6 ساعت پیش</p>
            </div>
            <div className="flex items-center">{">"}</div>
          </div>
          <div className="flex py-3 justify-between  m-auto w-[280px]">
            <div>
              <span class="flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#008043] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-[#008043]"></span>
              </span>
            </div>
            <div>
              <p className="text-[11px] w-[200px]">
                سلام من در دیدن ویدیو ها مشکل دارم
              </p>
              <p className="py-3 text-[#000000c9] text-[10px]">6 ساعت پیش</p>
            </div>
            <div className="flex items-center">{">"}</div>
          </div>
          <button className="w-[100%] h-12 text-[12px] relative bottom-0 rounded-b-[10px] bg-[#e6e9eb]">
            مشاهده همه ی تیکت ها
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewTickets;
