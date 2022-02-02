import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar";
import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const PanelSazmani = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageNotLogin.pelanSazmani;
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
    database.HomePageNotLogin.pelanSazmani.title = titleValue;
    database.HomePageNotLogin.pelanSazmani.subTitle = subtitleValue;
    if (uploadImg !== null)
      database.HomePageNotLogin.pelanSazmani.imagery = uploadImg.previewUrl;
    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[500px] bg-[#F5F5F5] rounded mt-[10px] ">
      <section className="w-[95%] m-auto flex justify-between">
        <section className="w-[40%] pt-[10px]">
          <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
            <div>
              <lable className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                عنوان
              </lable>
              <input
                className="w-[400px] h-[40px] rounded text-[11px] pr-[10px]"
                value={titleValue}
                onChange={(e) => settitleValue(e.target.value)}
                maxLength={20}
              />
            </div>
            <div className="my-[30px]">
              <lable className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                زیر عنوان
              </lable>
              <textarea
                className="w-[400px] h-[200px] rounded resize-none pt-2 text-right text-[12px] pr-[10px]"
                value={subtitleValue}
                onChange={(e) => setsubtitleValue(e.target.value)}
                maxLength={200}
              />
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
          <div className="text-[10px] flex mt-[-270px] px-[10px] text-[#7A7A7A]">
            <Ekhtar />
            <p className="mr-[10px]">
              حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت
              اتوماتیک مطابق با سایز container باشد.
            </p>
          </div>
          <div className="w-[170px] m-auto mt-2">
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
export default PanelSazmani;
