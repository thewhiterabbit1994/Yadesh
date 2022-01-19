import UserProfileBackground from "../../assets/Img/UserProfileBackground.png";
import UserProfileImg from "../../assets/Img/UserProfileImg.png";
import Hat from "../../assets/svg/Hat";
import Star from "../../assets/svg/Star";
import PenIcon from "../../assets/svg/PenIcon";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";

export default () => {
  const [editProfileModal, seteditProfileModal] = useState(false);
  return (
    <div className="h-[600px] w-full bg-[#000405] ">
      <EditProfileModal
        seteditProfileModal={seteditProfileModal}
        editProfileModal={editProfileModal}
      />
      <div className="absolute z-10 top-[80px] left-[60px]">
        <button
          onClick={() => seteditProfileModal(true)}
          className="bg-[#072b50] flex mr-[15px] mt-[11px] w-[155px] h-[45px] rounded-[4px] "
        >
          <p className="my-[12px] mr-[18px] text-[12.5px] text-[#ffffff]">
            ویرایش پروفایل
          </p>
          <div className="mr-[15px] mt-[14px]">
            <PenIcon />
          </div>
        </button>
      </div>
      <div className="bg-gradient-to-t from-[#000000] to-[#00040511] h-[71.1775043936731vh] w-full absolute"></div>
      <div className="">
        <img className="" src={UserProfileBackground} />
        <div className="flex flex-col items-center m-auto w-full absolute top-[100px]">
          <img
            className="h-[80px] w-[80px] rounded-full"
            src={UserProfileImg}
          />
          <p className="text-white text-[25px] mt-[25px] font-medium">
            مرتضی بهمنش
          </p>
          <p className=" text-[#C4C4C4] mt-[15px] text-[12px]">
            به دنبال اهدافت برو
          </p>
          <div className="flex mt-[30px]  ">
            <div className="flex flex-col items-center m-auto w-full">
              <p className="text-white text-[25px] font-medium">۲۸</p>
              <div className=" ">
                <p className="mt-[15px] text-[#C4C4C4]  text-[12px]">
                  دوره های شرکت شده
                </p>
                <div className="w-full flex flex-col items-center mt-[15px]">
                  <Hat />
                </div>
              </div>
            </div>
            <div className="h-[55px] w-[3.2px] mt-[35px]  mx-[30px] bg-[#c4c4c448]"></div>
            <div className="flex flex-col items-center m-auto w-full">
              <p className="text-white text-[25px]">۱۴۵</p>
              <div className="">
                <p className="mt-[15px] text-[#C4C4C4] text-[12px]">
                  اپیزودهای مورد علاقه
                </p>
                <div className="w-full flex flex-col items-center mt-[15px]">
                  <Star />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
