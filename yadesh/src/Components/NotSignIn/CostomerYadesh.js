import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar";
import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const CostomerYadesh = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageNotLogin.costomerYadesh;

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
    database.HomePageNotLogin.costomerYadesh.title = titleValue;
    database.HomePageNotLogin.costomerYadesh.subTitle = subtitleValue;
    if (uploadImg !== null)
      database.HomePageNotLogin.costomerYadesh.imagery.push(
        uploadImg.previewUrl
      );

    setsiteManagmentDatabase(database);
  };

  const deleteicon = (i) => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.HomePageNotLogin.costomerYadesh.imagery.splice(i, 1);
    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[500px] bg-[#F5F5F5] mt-[10px] rounded">
      <section className="w-[95%] m-auto flex justify-between">
        <section className="w-[35%] pt-[10px]">
          <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
            <div>
              <lable className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                عنوان
              </lable>
              <input
                className="w-[400px] h-[40px] rounded text-[11px] pr-[10px]"
                value={titleValue}
                onChange={(e) => settitleValue(e.target.value)}
                maxLength={30}
              />
            </div>
            <div className="my-[30px]">
              <lable className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                زیر عنوان
              </lable>
              <input
                className="w-[400px] h-[40px] rounded text-[11px] pr-[10px]"
                value={subtitleValue}
                onChange={(e) => setsubtitleValue(e.target.value)}
                maxLength={30}
              />
            </div>
          </section>
        </section>
        <section className="w-[50%] h-[500px] text-[12px] text-[#7A7A7A] mt-[30px]">
          <p>مشتریان</p>
          <div className="flex  justify-between flex-wrap  ">
            {data.imagery.map((image, i) => {
              return (
                <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                  <img src={image} className=" h-[40px]" />
                  <div
                    onClick={() => deleteicon(i)}
                    className="absolute w-[70px] cursor-pointer text-center text-[#000] h-[70px] rounded-lg bg-[#00000021] text-[50px]"
                  >
                    ×
                  </div>
                </div>
              );
            })}

            <div className="cursor-pointer w-[70px] h-[70px] text-[9px] text-[#000] font-semibold bg-[#fff] rounded-lg p-1 flex-col flex justify-center items-center ml-[15px] my-[20px]">
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
                    maxHeight: 70,
                    minHeight: 70,
                    maxWidth: 70,
                    borderRadius: 10,
                    border: "0",
                    top: 0,
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
              <p className="w-[70px] absolute mt-12 mr-2 text-black text-[9px]">
                افزودن مشتری
              </p>
            </div>
          </div>

          <div className="flex mt-[20px]">
            <Ekhtar />
            <p className="mr-[10px]">
              حداکثر تعداد مشتریان 15 و حداقل 10 می باشد
            </p>
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
export default CostomerYadesh;
