import VerifiedIcon from "../../assets/svg/VerifiedIcon";
import VideoShortIcon from "../../assets/svg/VideoShortIcon";
import CurveLine1 from "../../assets/svg/CurveLine1";
import CurveLine2 from "../../assets/svg/CurveLine2";
import { MainCounter } from "../../Context/Context";
import { useContext } from "react";

export default () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.MyProgress.YourProgressInYadesh;

  return (
    <div className="h-[220px] pt-[90px] w-full bg-[#000405] ">
      <div className="flex  bg-[#000e14] justify-between ">
        <div className="bg-gradient-to-r from-[#000e14] to-[#00ff8413] h-[100px] pr-[80px] pt-[20px]  ">
          <div className="flex ">
            <div className="w-[5.5px] h-[18px] bg-[#00FF85] rounded-[10px] mt-1.5 ml-2"></div>
            <p className="text-[19px] z-10 text-[#ffffff]">{data.title}</p>
          </div>
          <div>
            <p className="mt-[8px] text-[#C4C4C4] text-[14px]">
              {data.subTitle}
            </p>
          </div>
        </div>
        <div className="flex mt-[10px] ml-[100px] ">
          <div className={`${data.seenCourseIsDisplayed ? "" : "hidden"}`}>
            <p className="text-white text-[35px] font-medium">۲۸</p>
            <div className="flex">
              <div>
                <VerifiedIcon />
              </div>
              <p className=" text-[#C4C4C4] mr-[10px] text-[14px]">
                تعداد دوره های تکمیل شده
              </p>
            </div>
          </div>
          <div
            className={`${
              data.seenCourseIsDisplayed && data.seenVideoIsDisplayed
                ? ""
                : "hidden"
            } h-[55px] w-[1.5px] mt-[15px] mx-[25px] bg-[#c4c4c448]`}
          ></div>
          <div className={`${data.seenVideoIsDisplayed ? "" : "hidden"}`}>
            <p className="text-white text-[35px]">۱۴۵</p>
            <div className="flex">
              <div className="mt-[3px]">
                <VideoShortIcon />
              </div>
              <p className=" text-[#C4C4C4] mr-[10px] text-[14px]">
                تعداد ویدیوهای دیده شده
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -mt-[17px] right-0">
          <CurveLine1 />
        </div>
        <div className="absolute -mt-[17px] left-0">
          <CurveLine2 />
        </div>
      </div>
    </div>
  );
};
