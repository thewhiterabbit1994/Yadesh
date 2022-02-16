import img from "../../assets/Img/AboutUs/imgAbouUs.png";
import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar";
import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import MessageSucsses from "../../Components/Messaeg/MessageSucsses"
import MessageFailed from "../../Components/Messaeg/MessageFailed"

const HeroAboutYadesh = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);
  const [SavedChangesModal, setSavedChangesModal] = useState(false)
  const [MessageFailedModal, setMessageFailedModal] = useState(false)

  const data = siteManagmentDatabase.AboutYadesh.hero;
  const [toggle, setToggle] = useState(data.isLogoDisplayed);
  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);
  const [uploadImg, setuploadImg] = useState(null);

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
    database.AboutYadesh.hero.title = titleValue;
    database.AboutYadesh.hero.subTitle = subtitleValue;
    database.AboutYadesh.hero.isLogoDisplayed = toggle;
    if (uploadImg !== null)
      database.AboutYadesh.hero.imagery = uploadImg.previewUrl;
    setsiteManagmentDatabase(database);
    setSavedChangesModal(true)
    // setMessageFailedModal(true)
  };
  setTimeout(() => {
    if (SavedChangesModal === true) {
      setSavedChangesModal(false)
    }
  }, 4000)
  setTimeout(() => {
    if (MessageFailedModal === true) {
      setMessageFailedModal(false)
    }
  }, 4000)
  return (
    <section className="w-full h-[390px] bg-[#F5F5F5] rounded mt-[10px] ">
      <section className="w-[95%] m-auto flex justify-between">
        <section className="w-[40%] pt-[30px]">
          <section className="w-[400px] text-[12px] mt-[10px] flex mr-[20px] text-[#7A7A7A]">
            <p className="w-[150px] ml-[50px]">لوگو (نمایش داده شود)</p>
            <div
              onClick={() => setToggle(!toggle)}
              className={`${toggle
                ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
                }`}
            >
              <div
                className={`${toggle
                  ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                  : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                  }`}
              ></div>
            </div>
          </section>
          <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
            <div>
              <label
                htmlFor="Title22"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                عنوان
              </label>
              <input
                onChange={(e) => settitleValue(e.target.value)}
                value={titleValue}
                id="Title22"
                className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
                placeholder="درس های پربازدید امروز"
              />
            </div>
            <div className="mt-[30px]">
              <label
                htmlFor="Title23"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                زیر عنوان
              </label>
              <textarea
                value={subtitleValue}
                onChange={(e) => setsubtitleValue(e.target.value)}
                id="Title23"
                className="w-[400px] resize-none h-[80px] rounded mt-[15px] text-[11px] py-2 pr-[10px]"
                placeholder="یادشی ها این ویدیو را بیشتر دیده اند"
              />
            </div>
            <div className={`${!SavedChangesModal ? "fixed bottom-[-200px]" : "fixed bottom-[30px] left-[50px] transition-all duration-[500ms]"}`}>
              <MessageSucsses text={"تغییرات با موفقیت ذخیره شد"} />
            </div>
            <div className={`${!MessageFailedModal ?  "fixed bottom-[-200px]" : "fixed bottom-[50px] left-[50px] transition-all duration-[500ms]"}`}>
              <MessageFailed text={"متاسفانه تغییرات ذخیره نشد"} />
            </div>
            <div className="w-[400px] mt-3 m-auto">
              <button
                onClick={handleClick}
                className="w-[400px] h-[45px] text-[13px] text-white bg-[#008043] rounded"
              >
                {" "}
                ذخیره کردن تغییرات{" "}
              </button>
            </div>
          </section>
        </section>
        <section className="w-[50%] h-[00px] text-[12px]  text-[#7A7A7A] pt-[30px]">
          <p className="mb-[15px]"> تصویر</p>
          <img src={data.imagery} className="w-[500px] h-[200px] rounded-lg" />
          <Dropzone
            autoUpload={true}
            maxFiles={1}
            inputContent={
              <div>
                <FontAwesomeIcon
                  className="customIcon"
                  style={{
                    color: "#fff",
                    fontSize: "30px",
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
                maxWidth: 500,
                borderRadius: 10,
                border: "0",
                top: -200,
                left: -0,
                backgroundColor: "#ff000000",
                overflow: "hidden",
              },
            }}
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="image/* png/* jpg/* jpeg/*"
          />
          <div className="text-[10px] flex mt-[-150px] px-[10px] text-[#7A7A7A]">
            <Ekhtar />
            <p className="mr-[10px]">
              حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت
              اتوماتیک مطابق با سایز container باشد.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};
export default HeroAboutYadesh;
