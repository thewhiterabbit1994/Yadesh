import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar";
import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const Costomers = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.YadeshForOrganization.Customer;

  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);
  const [customerName, setcustomerName] = useState("");
  const [newcustomerName, setnewcustomerName] = useState("");
  const [toggle, setToggle] = useState(data.isDisplayed);
  const [newCustomerComment, setnewCustomerComment] = useState("");
  const [uploadImg, setuploadImg] = useState(null);
  const [showcomment, setshowcomment] = useState({
    imgComment: "",
    Commentindex: "",
  });

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
    database.YadeshForOrganization.Customer.title = titleValue;
    database.YadeshForOrganization.Customer.subTitle = subtitleValue;
    database.YadeshForOrganization.Customer.isDisplayed = toggle;
    if (showcomment.imgComment !== "" && showcomment.Commentindex !== "")
      database.YadeshForOrganization.Customer.imagery[
        showcomment.Commentindex
      ].comment = showcomment.imgComment;
    if (uploadImg !== null)
      database.YadeshForOrganization.Customer.imagery.push({
        name: newcustomerName,
        img: uploadImg.previewUrl,
        comment: newCustomerComment,
      });
    if (customerName !== "")
      database.YadeshForOrganization.Customer.imagery[
        showcomment.Commentindex
      ].name = customerName;
    setsiteManagmentDatabase(database);
    setnewcustomerName("");
    setnewCustomerComment("");
    setuploadImg(null);
  };
  console.log(data);

  const deleteicon = (i) => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.YadeshForOrganization.Customer.imagery.splice(i, 1);
    setsiteManagmentDatabase(database);
  };
  const getcomment = (image, i) => {
    setshowcomment({
      imgComment: image.comment,
      Commentindex: i,
    });
    setcustomerName(image.name);
  };
  console.log(showcomment);
  return (
    <section className="w-full h-fit bg-[#F5F5F5] mt-[10px] rounded">
      <section className="w-[95%] m-auto flex justify-between">
        <section className="w-[35%] pt-[10px] ">
          <section className="w-[93%] h-[550px] m-auto  my-[10px] text-[12px]">
            <div>
              <label
                htmlFor="Title80"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                عنوان
              </label>
              <input
                onChange={(e) => settitleValue(e.target.value)}
                value={titleValue}
                id="Title80"
                className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
                placeholder=" مشتریان در مورد یادش چه می گویند "
              />
            </div>
            <div className="mt-[30px]">
              <label
                htmlFor="Title81"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                زیر عنوان
              </label>
              <input
                value={subtitleValue}
                onChange={(e) => setsubtitleValue(e.target.value)}
                id="Title81"
                className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
                placeholder=" نشر مشتریان در مورد یادش "
              />
            </div>

            <section className="w-[500px] text-[12px] mt-[30px] flex mr-[10px] text-[#7A7A7A]">
              <p>این قسمت نمایش داده شود</p>
              <div
                onClick={() => setToggle(!toggle)}
                className={`${
                  toggle
                    ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                    : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
                }`}
              >
                <div
                  className={`${
                    toggle
                      ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                      : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                  }`}
                ></div>
              </div>
            </section>
            <div className="mt-[30px]">
              <label
                htmlFor="Title81"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                ادیت نام مشتری
              </label>
              <input
                value={customerName}
                onChange={(e) => setcustomerName(e.target.value)}
                id="Title81"
                className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
                placeholder="برای ادیت نام مشتری بر روی نمایش کامنت آن مشتری کلیک کنید"
              />
            </div>
            <div className="mt-[10px] text-[12px]">
              <label
                htmlFor="Title89"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                ادیت نظر مشتری
              </label>
              <textarea
                onChange={(e) =>
                  setshowcomment({
                    ...showcomment,
                    imgComment: e.target.value,
                  })
                }
                value={showcomment.imgComment}
                id="Title89"
                className="w-[400px] resize-none leading-6 h-[70px] rounded mt-[15px] text-[11px] px-[10px] py-[10px]"
                placeholder="برای ادیت نظر مشتری بر روی نمایش کامنت آن مشتری کلیک کنید"
              />
            </div>
          </section>
        </section>
        <section className="w-[50%] h-[500px] text-[12px] text-[#7A7A7A] mt-[30px]">
          <p>مشتریان</p>
          <div className="grid grid-cols-5  justify-between   ">
            {data.imagery.map((image, i) => {
              return (
                <div className="w-[70px] h-[70px] bg-[#fff] rounded-lg p-1 flex justify-center items-center my-[15px] ml-[15px]">
                  <img src={image.img} className=" h-[40px]" />
                  <div
                    onClick={() => deleteicon(i)}
                    className="absolute mt-[-50px] ml-[-50px] cursor-pointer text-center text-[#000] rounded-lg text-[30px]"
                  >
                    ×
                  </div>
                  <div
                    onClick={() => getcomment(image, i)}
                    className="absolute text-center cursor-pointer bg-[#0000001f] w-[70px] rounded-b-lg text-[10px] mb-[-55px]"
                  >
                    نمایش کامنت
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
          <div className="mt-[17px]">
            <label
              htmlFor="Title81"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              نام مشتری جدید
            </label>
            <input
              value={newcustomerName}
              onChange={(e) => setnewcustomerName(e.target.value)}
              id="Title81"
              className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder="در صورت اضافه کردن لوگوی مشتری جدید نام آن مشتری را اینجا بنویسید"
            />
          </div>
          <div className="mt-[11px] text-[12px]">
            <label
              htmlFor="Title89"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              نظر مشتری جدید
            </label>
            <textarea
              onChange={(e) => setnewCustomerComment(e.target.value)}
              value={newCustomerComment}
              id="Title89"
              className="w-[400px] resize-none leading-6 h-[70px] rounded mt-[15px] text-[11px] px-[10px] py-[10px]"
              placeholder="در صورت اضافه کردن لوگوی مشتری جدید نظر آن مشتری را اینجا بنویسید"
            />
          </div>
        </section>
      </section>
      <div className="w-[170px] absolute left-32 mt-[-100px]">
        <button
          onClick={handleClick}
          className="w-[170px] h-[45px] text-[13px] text-white bg-[#008043] rounded"
        >
          {" "}
          ذخیره کردن تغییرات{" "}
        </button>
      </div>
    </section>
  );
};
export default Costomers;
