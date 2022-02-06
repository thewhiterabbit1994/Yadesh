import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar";
import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const HeroYadeshForSazman = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.YadeshForOrganization.hero;

  const [description, setdescription] = useState(data.description);
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
    database.YadeshForOrganization.hero.title = titleValue;
    database.YadeshForOrganization.hero.subTitle = subtitleValue;
    database.YadeshForOrganization.hero.description = description;
    if (uploadImg !== null)
      database.YadeshForOrganization.hero.imagery = uploadImg.previewUrl;

    setsiteManagmentDatabase(database);
  };
  return (
    <section className="w-full h-[400px] bg-[#F5F5F5] flex justify-between rounded mt-[10px]">
      <section className="w-[45%]">
        <section className="w-[93%] h-[550px] m-auto  my-[20px] text-[12px]">
          <div className="text-[12px]">
            <label
              htmlFor="Title71"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              عنوان
            </label>
            <input
              onChange={(e) => settitleValue(e.target.value)}
              value={titleValue}
              id="Title71"
              className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder=" اپیزودهای مورد علاقه شما "
            />
          </div>
          <div className="mt-[20px]">
            <label
              htmlFor="Title72"
              className="text-[12px] text-[#7A7A7A]  pr-[10px]"
            >
              زیر عنوان
            </label>
            <textarea
              value={subtitleValue}
              onChange={(e) => setsubtitleValue(e.target.value)}
              id="Title72"
              className="w-[400px] leading-5 px-[10px] py-[10px]   resize-none h-[70px] rounded my-[15px] text-[11px] pr-[10px]"
              placeholder=" سازمان ها در یادش جایگاه ویژهای دارند پس م هم برای سازمان ها برنامه ویژه ای داریم "
            />
          </div>
          <div>
            <label
              htmlFor="Title73"
              className="text-[12px] text-[#7A7A7A]  pr-[10px]"
            >
              زیر عنوان
            </label>
            <textarea
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              id="Title73"
              className="w-[400px] leading-5 px-[10px] py-[10px] resize-none   h-[70px] rounded my-[15px] text-[11px] pr-[10px]"
              placeholder=" اشتراک ویژه سالانه برای گروه ها  همراه تخفبف 5 تا 15 درصدی "
            />
          </div>
        </section>
      </section>
      <section className="w-[53%] mt-[20px] text-[#7A7A7A] text-[12px] ">
        <p>تصویر</p>
        <section className="w-[450px] h-[200px] mt-[20px] relative bg-[#ff000007]">
          <img src={data.imagery} className="rounded-lg w-[450px] h-[200px]" />
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
                maxHeight: 210,
                minHeight: 210,
                maxWidth: 450,
                borderRadius: 10,
                border: "0",
                top: -210,
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
        </section>
        <div className="text-[10px] flex  px-[10px] text-[#7A7A7A]">
          <div className="mt-7">
            <Ekhtar />
          </div>
          <p className="mr-[10px] mt-7">
            حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت
            اتوماتیک مطابق با سایز container باشد.
          </p>
        </div>
        <div className="w-[170px] m-auto mt-7">
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
export default HeroYadeshForSazman;
