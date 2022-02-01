import SortGroup from "../../assets/svg/AdminLogin/SortGroup";
import ShowTick from "../../assets/svg/AdminLogin/ShowTick";

export default ({
  setshowAdminComponentModal,
  showAdminComponentModal,
  setshowYourUsers,
  setshowYourCoursesSeen,
  setshowYourEpisodesSeen,
  setshowNewTickets,
  showYourUsers,
  showYourCoursesSeen,
  showYourEpisodesSeen,
  showNewTickets,
}) => (
  <div
    className={`absolute divide-y top-[40px] drop-shadow-xl transform transition-opacity duration-500 scale-0 z-20 w-[200px] h-[250px]  rounded-[10px] bg-[#f5f5f5]  ${
      showAdminComponentModal ? "scale-100 opacity-100" : "opacity-0 "
    }`}
  >
    <div className="flex w-[85%] justify-between mt-5 mr-[15px]  ">
      <div className="flex pb-3">
        <SortGroup />
        <p className="font-bold mr-3 text-[12px]">نمایش</p>
      </div>
      <div className="flex ">
        <p
          onClick={() => (
            setshowYourUsers(true),
            setshowYourCoursesSeen(true),
            setshowYourEpisodesSeen(true),
            setshowNewTickets(true)
          )}
          className="text-[10px] cursor-pointer text-[#3f3f3f] "
        >
          نمایش همه
        </p>
      </div>
    </div>
    <div className="">
      <div className="flex mt-6 mb-6 justify-between  m-auto ">
        <div className="flex">
          <div className="mt-1 mr-[15px]">
            <div className={`${showYourUsers === true ? "" : "hidden "}`}>
              <ShowTick />
            </div>
          </div>
          <p
            onClick={() => setshowYourUsers(!showYourUsers)}
            className="cursor-pointer text-[11px] mr-3 w-[170px]"
          >
            کاربران شما
          </p>
        </div>
      </div>
      <div className="flex my-7  justify-between divide-y-reverse divide-y m-auto ">
        <div className="flex">
          <div className="mt-1 mr-[15px]">
            <div
              className={`${showYourEpisodesSeen === true ? "" : "hidden "}`}
            >
              <ShowTick />
            </div>
          </div>
          <p
            onClick={() => setshowYourEpisodesSeen(!showYourEpisodesSeen)}
            className="cursor-pointer text-[11px] mr-3 w-[170px]"
          >
            بازدید اپیزود های شما
          </p>
        </div>
      </div>
      <div className="flex my-7  justify-between divide-y-reverse divide-y m-auto ">
        <div className="flex">
          <div className="mt-1 mr-[15px]">
            <div className={`${showYourCoursesSeen === true ? "" : "hidden "}`}>
              <ShowTick />
            </div>
          </div>
          <p
            onClick={() => setshowYourCoursesSeen(!showYourCoursesSeen)}
            className="cursor-pointer text-[11px] mr-3 w-[170px]"
          >
            بازدید دوره های شما
          </p>
        </div>
      </div>
      <div className="flex my-7  justify-between divide-y-reverse divide-y m-auto ">
        <div className="flex">
          <div className="mt-1 mr-[15px]">
            <div className={`${showNewTickets === true ? "" : "hidden "}`}>
              <ShowTick />
            </div>
          </div>

          <p
            onClick={() => setshowNewTickets(!showNewTickets)}
            className="cursor-pointer text-[11px] mr-3 w-[170px]"
          >
            تیکت های جدید
          </p>
        </div>
      </div>
    </div>
  </div>
);
