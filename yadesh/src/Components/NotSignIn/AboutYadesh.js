import img from "../../assets/Img/AboutYadesh/Rectangle 857.jpg";
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

const AboutYadesh = () => {
  const [SavedChangesModal, setSavedChangesModal] = useState(false)
  const [MessageFailedModal, setMessageFailedModal] = useState(false)
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageNotLogin.aboutYadesh;
  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);
  const [descriptionValue, setdescriptionValue] = useState(data.description);
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
    database.HomePageNotLogin.aboutYadesh.title = titleValue;
    database.HomePageNotLogin.aboutYadesh.subTitle = subtitleValue;
    database.HomePageNotLogin.aboutYadesh.description = descriptionValue;
    if (uploadImg !== null)
      database.HomePageNotLogin.aboutYadesh.imagery = uploadImg.previewUrl;
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
    <section className="w-full h-[600px] bg-[#F5F5F5] rounded  ">
      <section className="w-[95%] m-auto flex justify-between">
        <section className="w-[40%] pt-[10px]">
          <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
            <div>
              <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                عنوان
              </p>
              <lable>
                <input
                  className="w-[400px] h-[40px] rounded text-[11px] pr-[10px]"
                  value={titleValue}
                  onChange={(e) => settitleValue(e.target.value)}
                  maxLength={20}
                />
              </lable>
            </div>
            <div className="my-[30px]">
              <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                زیر عنوان
              </p>
              <lable>
                <input
                  className="w-[400px] h-[80px] rounded text-[11px] pr-[10px]"
                  value={subtitleValue}
                  onChange={(e) => setsubtitleValue(e.target.value)}
                  maxLength={30}
                />
              </lable>
            </div>
            <div className="my-[30px]">
              <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                توضیحات
              </p>
              <lable>
                <textarea
                  className="w-[400px] h-[200px] rounded resize-none pt-2 text-right text-[12px] pr-[10px]"
                  value={descriptionValue}
                  onChange={(e) => setdescriptionValue(e.target.value)}
                  maxLength={250}
                />
              </lable>
            </div>
          </section>
        </section>
        <section className="w-[50%] h-[00px] text-[12px]  text-[#7A7A7A] pt-[30px]">
          <p className="mb-[15px]"> تصویر</p>
          <img src={data.imagery} className="w-[500px] h-[300px]" />
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
                maxHeight: 300,
                minHeight: 300,
                maxWidth: 500,
                borderRadius: 10,
                border: "0",
                top: -300,
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
          <div className="text-[10px] flex mt-[-230px] px-[10px] text-[#7A7A7A]">
            <Ekhtar />
            <p className="mr-[10px]">
              حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت
              اتوماتیک مطابق با سایز container باشد.
            </p>
          </div>
          <div className={`${!SavedChangesModal ?  "fixed bottom-[-200px]" : "fixed bottom-[20px] left-[20px] transition-all duration-[500ms]"}`}>
            <MessageSucsses text={"تغییرات با موفقیت ذخیره شد"} />
          </div>
          <div className={`${!MessageFailedModal ?  "fixed bottom-[-200px]" : "fixed bottom-[50px] left-[50px] transition-all duration-[500ms]"}`}>
            <MessageFailed text={"متاسفانه تغییرات ذخیره نشد"} />
          </div>
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
export default AboutYadesh;
