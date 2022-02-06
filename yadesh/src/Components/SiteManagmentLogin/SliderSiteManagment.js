import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar";
import img from "../../assets/Img/joinToYadesh.png";
import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const SliderSiteManagment = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.UserLogin;

  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);
  const [uploadImg, setuploadImg] = useState(null);
  const [uploadicon, setuploadicon] = useState(null);

  const getUploadParamsimg = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  const handleChangeStatusimg = ({ meta, file }, status) => {
    console.log(status, meta, file);
    setuploadImg(meta);
  };
  const handleSubmitimg = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  const getUploadParamsicon = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  const handleChangeStatusicon = ({ meta, file }, status) => {
    console.log(status, meta, file);
    setuploadicon(meta);
  };
  const handleSubmiticon = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.UserLogin.title = titleValue;
    database.UserLogin.subTitle = subtitleValue;
    if (uploadicon !== null) database.UserLogin.icon = uploadicon.previewUrl;
    if (uploadImg !== null) database.UserLogin.imagery = uploadImg.previewUrl;
    setsiteManagmentDatabase(database);
    console.log("database.UserLogin", database.UserLogin);
  };
  console.log("data", data);

  return (
    <section className="w-full h-fit bg-[#F5F5F5] rounded-lg mt-[10px]">
      <section className="w-[90%] m-auto">
        <sectdion className="flex justify-around w-full">
          <section className=" text-[12px]   w-[45%]  flex flex-col pt-[20px] ">
            <label className="" htmlFor="titleSlide1">
              عنوان
            </label>
            <input
              value={titleValue}
              onChange={(e) => settitleValue(e.target.value)}
              className="w-[350px] h-[40px] bg-[#fff] pr-[15px] rounded mt-[20px]"
              id="titleSlide1"
              placeholder="مهارت های خود را افزایش دهید "
            />

            <label className=" mt-[30px]">
              آیکون فقط فرمت (svg یا png ) باشد
            </label>
            <div className="">
              <div className="cursor-pointer h-[70px] text-[9px] text-[#000] font-semibold bg-[#fff] rounded-lg p-1 flex-col flex justify-center items-center ml-[15px] my-[20px]">
                <Dropzone
                  autoUpload={true}
                  maxFiles={1}
                  inputContent={
                    <div>
                      <FontAwesomeIcon
                        className="customIcon"
                        style={{
                          color: "#000",
                          fontSize: "30px",
                          marginTop: 0,
                        }}
                        icon={faCloudUploadAlt}
                      />
                    </div>
                  }
                  className="dropZone"
                  styles={{
                    preview: {
                      position: "absolute",
                      width: 60,
                      marginLeft: 200,
                      marginTop: 50,
                    },
                    submitButton: {
                      display: "none",
                    },
                    dropzone: {
                      maxHeight: 100,
                      minHeight: 100,
                      maxWidth: 370,
                      borderRadius: 10,
                      border: "0",
                      top: 0,
                      left: -0,
                      backgroundColor: "#ff000000",
                      overflow: "hidden",
                    },
                  }}
                  getUploadParams={getUploadParamsicon}
                  onChangeStatus={handleChangeStatusicon}
                  onSubmit={handleSubmiticon}
                  accept="image/* png/* jpg/* jpeg/*"
                />
                <p className="w-[70px] text-center absolute mt-12 mr-2 text-black text-[9px]">
                  آپلود آیکون
                </p>
              </div>
              <div className="flex justify-items-center">
                <div className="mt-5">
                  <Ekhtar />
                </div>
                <p className="pt-[20px] text-[10px] mr-[10px]">
                  {" "}
                  ابعاد آیکون برای این قسمت 30 * 30 px باشد{" "}
                </p>
              </div>
            </div>
          </section>
          <section className="w-[50%] text-[12px] mr-5 pt-[20px]">
            <label className="text-[#7A7A7A]" htmlFor="description10 ">
              توضیحات
            </label>
            <textarea
              value={subtitleValue}
              onChange={(e) => setsubtitleValue(e.target.value)}
              className="w-[400px]  px-[20px]  py-[20px] leading-7  text-[#000000fa] resize-none h-[150px] bg-[#fff] pr-[15px] rounded mt-[20px]"
              id="description10"
              placeholder=" افزایش مهارت همیشه می تواند آینده شغلی شما را تضمین کند . هدف ما در یادش اینست که آینده شغلی شما واضح و درخشان باشد .   "
            />
          </section>
        </sectdion>
        <section className=" justify-between pt-[20px]">
          <img
            src={data.imagery}
            className="rounded-lg w-[400px] h-[300px] ml-5"
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
                maxHeight: 300,
                minHeight: 300,
                maxWidth: 400,
                borderRadius: 10,
                border: "0",
                top: -300,
                left: 206,
                backgroundColor: "#ff000000",
                overflow: "hidden",
              },
            }}
            getUploadParams={getUploadParamsimg}
            onChangeStatus={handleChangeStatusimg}
            onSubmit={handleSubmitimg}
            accept="image/* png/* jpg/* jpeg/*"
          />
          <div className="text-[11px] mt-[-300px] text-[#7A7A7A] w-full h-[150px] flex items-center">
            <div className="mb-[20px]">
              <Ekhtar />
            </div>
            <p className="mr-[10px]  leading-6">
              حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت
              اتوماتیک مطابق با سایز container باشد.
            </p>
            <div className="w-[170px] mr-32">
              <button
                onClick={handleClick}
                className="w-[170px] h-[45px] text-[13px] text-white bg-[#008043] rounded"
              >
                {" "}
                ذخیره کردن تغییرات{" "}
              </button>
            </div>
          </div>
        </section>
      </section>

      <section className="flex text-[#fff] mt-[50px] text-[12px] w-[350px] justify-between m-auto"></section>
    </section>
  );
};
export default SliderSiteManagment;
