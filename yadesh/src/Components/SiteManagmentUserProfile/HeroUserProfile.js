import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar";
import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const HeroUserProfile = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.UserInfo.hero;
  const [uploadImg, setuploadImg] = useState(null);
  const [isUserImgDisplayedtoggle, setisUserImgDisplayedtoggle] = useState(
    data.isUserImgDisplayed
  );
  const [seenCourseIsDisplayedtoggle, setseenCourseIsDisplayedtoggle] =
    useState(data.seenCourseIsDisplayed);
  const [seenVideoIsDisplayedtoggle, setseenVideoIsDisplayedtoggle] = useState(
    data.seenVideoIsDisplayed
  );

  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
    setuploadImg(meta);
  };
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.UserInfo.hero.isUserImgDisplayed = isUserImgDisplayedtoggle;
    database.UserInfo.hero.seenCourseIsDisplayed = seenCourseIsDisplayedtoggle;
    database.UserInfo.hero.seenVideoIsDisplayed = seenVideoIsDisplayedtoggle;
    if (uploadImg !== null)
      database.UserInfo.hero.imagery = uploadImg.previewUrl;
    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[350px] text-[12px] ">
      <section className="w-full h-[350px] mt-[10px] flex justify-around bg-[#F5F5F5] rounded">
        <section className="mt-[15px] w-[58%] text-[#7A7A7A]">
          <p>تصویر</p>
          <img
            className="w-[600px] h-[200px] rounded-lg mt-[20px]"
            src={data.imagery}
          />
          <Dropzone
            autoUpload={true}
            maxFiles={1}
            inputContent={
              <div>
                <FontAwesomeIcon
                  className="customIcon"
                  style={{
                    color: "rgb(243, 243, 243)",
                    fontSize: "50px",
                    margin: "40px 150px",
                  }}
                  icon={faCloudUploadAlt}
                />
              </div>
            }
            className="dropZone"
            styles={{
              submitButton: {
                display: "none",
              },
              dropzone: {
                maxHeight: 200,
                minHeight: 200,
                maxWidth: 600,
                borderRadius: 10,
                border: "0",
                top: -200,
                left: 0,
                backgroundColor: "#ff000000",
                overflow: "hidden",
              },
            }}
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="image/* png/* jpg/* jpeg/*"
          />
          <div className="text-[10px] flex mt-[20px] px-[10px] text-[#7A7A7A]">
            <Ekhtar />
            <p className="mr-[10px]">
              حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت
              اتوماتیک مطابق با سایز container باشد.
            </p>
          </div>
        </section>
        <section className="w-[35%]">
          <section className=" text-[12px] mt-[70px] flex text-[#7A7A7A]">
            <p>تصویر کاربری(نمایش داده شود)</p>
            <div
              onClick={() =>
                setisUserImgDisplayedtoggle(!isUserImgDisplayedtoggle)
              }
              className={`${
                isUserImgDisplayedtoggle
                  ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                  : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
              }`}
            >
              <div
                className={`${
                  isUserImgDisplayedtoggle
                    ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                    : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                }`}
              ></div>
            </div>
          </section>
          <section className=" text-[12px] mt-[50px] flex text-[#7A7A7A]">
            <p>تعداد دوره های شرکت شده(نمایش داده شود)</p>
            <div
              onClick={() =>
                setseenCourseIsDisplayedtoggle(!seenCourseIsDisplayedtoggle)
              }
              className={`${
                seenCourseIsDisplayedtoggle
                  ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                  : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
              }`}
            >
              <div
                className={`${
                  seenCourseIsDisplayedtoggle
                    ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                    : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                }`}
              ></div>
            </div>
          </section>
          <section className=" text-[12px] mt-[50px] flex text-[#7A7A7A]">
            <p>اپیزود های مورد علاقه(نمایش داده شود)</p>
            <div
              onClick={() =>
                setseenVideoIsDisplayedtoggle(!seenVideoIsDisplayedtoggle)
              }
              className={`${
                seenVideoIsDisplayedtoggle
                  ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                  : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
              }`}
            >
              <div
                className={`${
                  seenVideoIsDisplayedtoggle
                    ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                    : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                }`}
              ></div>
            </div>
          </section>
          <div className="w-[170px] m-auto mt-12">
            <button
              onClick={handleClick}
              className="w-[170px] h-[45px] text-[13px] text-white bg-[#008043] rounded"
            >
              {" "}
              ذخیره کردن تغییرات{" "}
            </button>
          </div>
        </section>
      </section>
    </section>
  );
};
export default HeroUserProfile;
