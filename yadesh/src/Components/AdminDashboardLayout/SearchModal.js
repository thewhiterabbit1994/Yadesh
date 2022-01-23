import CloseButtonEditProfileModal from "../../assets/svg/CloseButtonEditProfileModal";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import SearchIcon from "../../assets/svg/AdminLogin/SearchIcon";

export default ({ searchModal, setsearchModal }) => (
  <div
    className={`fixed transform transition-opacity duration-300 scale-0 z-30 w-full h-screen bg-[#00000071]  ${
      searchModal ? "scale-100 opacity-100" : "opacity-0 "
    }`}
  >
    <div
      className={` w-[1000px] h-[93vh] fixed inset-x-[140px] mt-[20px] rounded-[10px] bg-[#fff]`}
    >
      <div
        onClick={() => setsearchModal(!searchModal)}
        className="cursor-pointer absolute left-6 top-6"
      >
        <CloseButtonEditProfileModal />
      </div>
      <div className="flex text-[12px] w-[300px] mt-[24px] mr-[24px] h-[35px] bg-[#E6E9EB] rounded">
        <div className="mt-[13px] mx-[10px]">
          <Search />
        </div>
        <input
          className="w-[250px] h-[35px] outline-none bg-[#E6E9EB] text-[11px]"
          placeholder="جستجو کنید"
        />
      </div>
      <div className="flex text-[12px] mr-[24px] mt-[24px] text-[#000000]">
        <div className="ml-2">
          <SearchIcon />
        </div>
        نتایج جستوجو برای -
      </div>
    </div>
  </div>
);
