import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar";
import MessageSucsses from "../../Components/Messaeg/MessageSucsses"
import MessageFailed from "../../Components/Messaeg/MessageFailed"

const JoinToYadesh = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);
  const [SavedChangesModal, setSavedChangesModal] = useState(false)
  const [MessageFailedModal, setMessageFailedModal] = useState(false)

  const data = siteManagmentDatabase.YadeshForOrganization.JoinToYadesh;

  const [toggle, setToggle] = useState(data.isDisplayed);
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
    database.YadeshForOrganization.JoinToYadesh.title = titleValue;
    database.YadeshForOrganization.JoinToYadesh.subTitle = subtitleValue;
    database.YadeshForOrganization.JoinToYadesh.isDisplayed = toggle;
    if (uploadImg !== null)
      database.YadeshForOrganization.JoinToYadesh.imagery =
        uploadImg.previewUrl;

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
    <section className="w-full h-[350px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
      <section className="w-[47%] ">
        <section className="w-[93%] h-[300px] m-auto  my-[20px] ">
          <div>
            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
              عنوان
            </p>
            <lable>
              <input
                className="w-[400px] h-[40px] rounded text-[11px] pr-[10px]"
                value={titleValue}
                onChange={(e) => settitleValue(e.target.value)}
                maxLength={30}
              />
            </lable>
          </div>
          <div className="my-[30px]">
            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
              زیر عنوان
            </p>
            <lable>
              <input
                className="w-[400px] h-[40px] rounded text-[11px] pr-[10px]"
                value={subtitleValue}
                onChange={(e) => setsubtitleValue(e.target.value)}
                maxLength={30}
              />
            </lable>
          </div>
          <section className=" w-[300px] flex text-[12px] text-[#7A7A7A] justify-between ">
            <p>این قسمت نمایش داده شود</p>
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
        </section>
      </section>
      <section className="w-[55%] mt-[20px] text-[12px] text-[#7A7A7A]">
        <p className="mr-6">تصویر</p>
        <img
          className="w-[450px] m-auto h-[200px] rounded-lg mt-[15px]"
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
              maxWidth: 450,
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
        <div className="text-[10px] flex mt-[-180px] px-[10px] text-[#7A7A7A]">
          <Ekhtar />
          <p className="mr-[10px] w-[500px]">
            حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت
            اتوماتیک مطابق با سایز container باشد.
          </p>
        </div>
        <div className={`${!SavedChangesModal ? "fixed bottom-[-200px]" : "fixed bottom-[20px] left-[50px] transition-all duration-[500ms]"}`}>
          <MessageSucsses text={"تغییرات با موفقیت ذخیره شد"} />
        </div>
        <div className={`${!MessageFailedModal ? "fixed bottom-[-200px]" : "fixed bottom-[20px] left-[50px] transition-all duration-[500ms]"}`}>
          <MessageFailed text={"متاسفانه تغییرات ذخیره نشد"} />
        </div>
        <div className="w-[170px] m-auto mt-[-5px]">
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
  );
};
export default JoinToYadesh;
