import CloseButtonEditProfileModal from "../../assets/svg/CloseButtonEditProfileModal";
import UserProfileImg from "../../assets/Img/UserProfileImg.png";
import UpArrow from "../../assets/svg/UpArrow";

const EditProfileModal = ({ editProfileModal, seteditProfileModal }) => {
  return (
    <div
      className={`absolute z-30 w-full h-[2830px] bg-[#00000071]  ${
        editProfileModal ? null : "hidden"
      }`}
    >
      <div className="w-[450px] h-[93vh] fixed right-[30%] mt-[20px] rounded-[10px] bg-[#fff]">
        <div
          onClick={() => seteditProfileModal(false)}
          className="cursor-pointer absolute left-6 top-6"
        >
          <CloseButtonEditProfileModal />
        </div>
        <div>
          <p className="text-[15px] font-bold mt-6 mr-6">
            پروفایل خود را کامل کنید
          </p>
          <p className="text-[12px] mt-2 mr-6 ">
            خودتان را به هم کلاسی هایتان معرفی کنید
          </p>
        </div>
        <div className="flex mt-12 mr-12">
          <div>
            <img className="rounded-full h-[120px]" src={UserProfileImg} />
          </div>
          <div className="flex flex-col mr-5">
            <button className="text-white text-[13px] bg-[#002433] flex mr-[15px] mt-[11px] w-[200px] h-[45px] rounded-[5px]">
              <div className="mt-[13px] mr-[40px]">
                <UpArrow />
              </div>
              <p className="mt-[12px] mr-[15px]">آپلود عکس جدید</p>
            </button>
            <button className="text-[#002433] text-[13px] border-[1.5px] border-[#002433] bg-[white] flex mr-[15px] mt-[11px] w-[200px] h-[45px] rounded-[5px]">
              <p className="mt-[1px] mr-[35px] text-[30px]">×</p>
              <p className="mt-[12px] mr-[15px]">حذف عکس فعلی </p>
            </button>
          </div>
        </div>
        <div className="h-[1.5px] w-[355px] m-auto mt-5 bg-[#81818150]"></div>
        <div className="flex flex-col items-center m-auto w-full">
          <div className="mt-2">
            <label htmlFor="name" className="mr-1 text-[12px]">
              {"نام "}
            </label>
            <label htmlFor="lastname" className="mr-[170px]  text-[12px]">
              {"نام خانوادگی"}
            </label>
            <br />
            <input
              id="name"
              className="h-[45px] w-[170px] bg-[#E6E9EB]  rounded-[5px] pr-5 mt-2 text-[12px]"
              type="text"
            />

            <input
              id="lastname"
              className="h-[45px] w-[170px] bg-[#E6E9EB] mr-[18px] rounded-[5px] pr-5 text-[12px]"
              type="text"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="bio" className=" text-[12px]">
              بیوگرافی شما
            </label>
            <br />
            <input
              id="bio"
              className="h-[45px] w-[360px] bg-[#E6E9EB]  rounded-[5px] pr-5 mt-2 text-[12px]"
              type="text"
            />
          </div>
          <div>
            <button className="h-[45px] w-[360px] bg-[#80ffc2]  rounded-[5px] mt-6 text-[12px]">
              ثبت اطلاعات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfileModal;
