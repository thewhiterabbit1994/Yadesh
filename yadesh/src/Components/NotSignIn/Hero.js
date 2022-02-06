import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar";
import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [uploadImg1, setuploadImg1] = useState(null);
  const [uploadImg2, setuploadImg2] = useState(null);
  const [uploadImg3, setuploadImg3] = useState(null);
  const [uploadImg4, setuploadImg4] = useState(null);
  const [uploadImg5, setuploadImg5] = useState(null);

  const getUploadParams1 = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  const getUploadParams2 = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  const getUploadParams3 = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  const getUploadParams4 = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  const getUploadParams5 = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus1 = ({ meta, file }, status) => {
    console.log(status, meta, file);
    setuploadImg1(meta);
  };

  const handleChangeStatus2 = ({ meta, file }, status) => {
    console.log(status, meta, file);
    setuploadImg2(meta);
  };
  const handleChangeStatus3 = ({ meta, file }, status) => {
    console.log(status, meta, file);
    setuploadImg3(meta);
  };
  const handleChangeStatus4 = ({ meta, file }, status) => {
    console.log(status, meta, file);
    setuploadImg4(meta);
  };
  const handleChangeStatus5 = ({ meta, file }, status) => {
    console.log(status, meta, file);
    setuploadImg5(meta);
  };

  const handleSubmit1 = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  const handleSubmit2 = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };
  const handleSubmit3 = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };
  const handleSubmit4 = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };
  const handleSubmit5 = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageNotLogin.hero;

  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);
  const [descriptionValue, setdescriptionValue] = useState(data.description);
  const [attributesValue1, setattributesValue1] = useState(
    data.attributes.first
  );
  const [attributesValue2, setattributesValue2] = useState(
    data.attributes.second
  );
  const [attributesValue3, setattributesValue3] = useState(
    data.attributes.third
  );

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.HomePageNotLogin.hero.title = titleValue;
    database.HomePageNotLogin.hero.subTitle = subtitleValue;
    database.HomePageNotLogin.hero.description = descriptionValue;
    database.HomePageNotLogin.hero.attributes.first = attributesValue1;
    database.HomePageNotLogin.hero.attributes.second = attributesValue2;
    database.HomePageNotLogin.hero.attributes.third = attributesValue3;
    if (uploadImg1 !== null)
      database.HomePageNotLogin.hero.imagery.img1 = uploadImg1.previewUrl;
    if (uploadImg2 !== null)
      database.HomePageNotLogin.hero.imagery.img2 = uploadImg2.previewUrl;
    if (uploadImg3 !== null)
      database.HomePageNotLogin.hero.imagery.img3 = uploadImg3.previewUrl;
    if (uploadImg4 !== null)
      database.HomePageNotLogin.hero.imagery.img4 = uploadImg4.previewUrl;
    if (uploadImg5 !== null)
      database.HomePageNotLogin.hero.imagery.img5 = uploadImg5.previewUrl;

    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[600px] bg-[#F5F5F5] flex justify-around rounded mt-[10px]">
      <section className="w-[35%]">
        <section className="w-[93%] h-[550px] m-auto ml-6  my-[20px] ">
          <div>
            <label
              htmlFor="title"
              className="text-[12px] text-[#7A7A7A]  pr-[10px]"
            >
              عنوان
            </label>
            <input
              value={titleValue}
              onChange={(e) => settitleValue(e.target.value)}
              maxLength={30}
              id="title"
              className="w-[350px] h-[40px] pr-[10px] mt-[15px] text-[11px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
            />
          </div>
          <div className="my-[30px]">
            <p className="text-[12px] text-[#7A7A7A] pr-[10px]">زیر عنوان</p>
            <label>
              <textarea
                className="w-[350px] resize-none h-[80px] pt-2 pr-[10px] mt-[15px] text-[11px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                value={subtitleValue}
                onChange={(e) => setsubtitleValue(e.target.value)}
                maxLength={100}
              ></textarea>
            </label>
          </div>
          <div className="my-[30px]">
            <label className="text-[12px] text-[#7A7A7A]  pr-[10px]">
              توضیحات
            </label>
            <input
              value={descriptionValue}
              onChange={(e) => setdescriptionValue(e.target.value)}
              maxLength={40}
              className="w-[350px] h-[40px]  pr-[10px] mt-[15px] text-[11px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
            />
          </div>
          <div className="my-[30px]">
            <label className="text-[12px] text-[#7A7A7A]  pr-[10px]">
              ویژگی ها
            </label>
            <input
              className="w-[350px] mb-3 h-[40px] mt-[10px] rounded text-[11px] pr-[10px]"
              value={attributesValue1}
              onChange={(e) => setattributesValue1(e.target.value)}
              maxLength={50}
            />
            <input
              className="w-[350px] mb-3 h-[40px] rounded text-[11px] pr-[10px]"
              value={attributesValue2}
              onChange={(e) => setattributesValue2(e.target.value)}
              maxLength={50}
            />
            <input
              className="w-[350px] h-[40px] rounded text-[11px] pr-[10px]"
              value={attributesValue3}
              onChange={(e) => setattributesValue3(e.target.value)}
              maxLength={50}
            />
          </div>
        </section>
      </section>
      <section className="w-[55%]  ">
        <section className="w-[500px] h-[400px] mt-[20px] relative bg-[#ff000000]">
          <img
            src={data.imagery.img2}
            className="rounded-lg w-[260px] h-[240px]  absolute top-[10px] right-[10px] left-0 bottom-0"
          />

          <img
            src={data.imagery.img1}
            className="rounded-lg w-[210px] h-[125px]  absolute top-[10px]  left-[10px] bottom-0"
          />

          <img
            src={data.imagery.img4}
            className="rounded-lg w-[95px] h-[238px]  absolute left-[10px] bottom-[15px]"
          />
          <img
            src={data.imagery.img5}
            className="rounded-lg w-[375px] h-[120px]  absolute right-[10px]  bottom-[15px]"
          />
          <img
            src={data.imagery.img3}
            className="rounded-lg w-[105px] h-[100px]  absolute top-[149px] left-[115px]"
          />
        </section>
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
              maxHeight: 125,
              minHeight: 125,
              maxWidth: 240,
              borderRadius: 10,
              border: "0",
              top: -390,
              left: -147,
              backgroundColor: "#ff000000",
              overflow: "hidden",
            },
          }}
          getUploadParams={getUploadParams1}
          onChangeStatus={handleChangeStatus1}
          onSubmit={handleSubmit1}
          accept="image/* png/* jpg/* jpeg/*"
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
              maxHeight: 240,
              minHeight: 240,
              maxWidth: 260,
              border: "0",
              borderRadius: 10,
              top: -515,
              left: 108,
              backgroundColor: "#ff000000",
              overflow: "hidden",
            },
          }}
          getUploadParams={getUploadParams2}
          onChangeStatus={handleChangeStatus2}
          onSubmit={handleSubmit2}
          accept="image/* png/* jpg/* jpeg/*"
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
              maxHeight: 238,
              minHeight: 238,
              maxWidth: 95,
              borderRadius: 10,
              border: "0",
              top: -618,
              left: -195,
              backgroundColor: "#ff000000",
              overflow: "hidden",
            },
          }}
          getUploadParams={getUploadParams4}
          onChangeStatus={handleChangeStatus4}
          onSubmit={handleSubmit4}
          accept="image/* png/* jpg/* jpeg/*"
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
              maxHeight: 120,
              minHeight: 120,
              maxWidth: 375,
              borderRadius: 10,
              border: "0",
              top: -738,
              left: 50,
              backgroundColor: "#ff000000",
              overflow: "hidden",
            },
          }}
          getUploadParams={getUploadParams5}
          onChangeStatus={handleChangeStatus5}
          onSubmit={handleSubmit5}
          accept="image/* png/* jpg/* jpeg/*"
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
              maxHeight: 100,
              minHeight: 100,
              maxWidth: 105,
              borderRadius: 10,
              border: "0",
              top: -973,
              left: -85,
              backgroundColor: "#ff000000",
              overflow: "hidden",
            },
          }}
          getUploadParams={getUploadParams3}
          onChangeStatus={handleChangeStatus3}
          onSubmit={handleSubmit3}
          accept="image/* png/* jpg/* jpeg/*"
        />

        <div className="text-[10px]  mt-[-800px] flex px-[10px] text-[#7A7A7A]">
          <Ekhtar />
          <p className="mr-[10px]">
            حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت
            اتوماتیک مطابق با سایز container باشد.
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
  );
};
export default Hero;
