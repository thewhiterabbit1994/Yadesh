import imgWhyYadesh from "../../assets/Img/imgWhyYadesh.png";
import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar";
import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const WhyYadesh = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.YadeshForOrganization.QuestionFromYadesh;

  const [Subheading1toggle, setSubheading1toggle] = useState(
    data.Subheadings.Subheading1.isDisplayed
  );
  const [Subheading2toggle, setSubheading2toggle] = useState(
    data.Subheadings.Subheading2.isDisplayed
  );
  const [Subheading3toggle, setSubheading3toggle] = useState(
    data.Subheadings.Subheading3.isDisplayed
  );
  const [titlevalue, setTitleValue] = useState(data.title);
  const [subTitleValue, setSubTitleValue] = useState(data.subTitle);
  const [uploadImg, setuploadImg] = useState(null);

  const [Subheading1, setSubheading1] = useState(
    data.Subheadings.Subheading1.title
  );
  const [SubheadingsubTitle1, setSubheadingsubTitle1] = useState(
    data.Subheadings.Subheading1.subTitle
  );

  const [Subheading2, setSubheading2] = useState(
    data.Subheadings.Subheading2.title
  );
  const [SubheadingsubTitle2, setSubheadingsubTitle2] = useState(
    data.Subheadings.Subheading2.subTitle
  );

  const [Subheading3, setSubheading3] = useState(
    data.Subheadings.Subheading3.title
  );
  const [SubheadingsubTitle3, setSubheadingsubTitle3] = useState(
    data.Subheadings.Subheading3.subTitle
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
    database.YadeshForOrganization.QuestionFromYadesh.title = titlevalue;
    database.YadeshForOrganization.QuestionFromYadesh.subTitle = subTitleValue;
    database.YadeshForOrganization.QuestionFromYadesh.Subheadings.Subheading1.title =
      Subheading1;
    database.YadeshForOrganization.QuestionFromYadesh.Subheadings.Subheading1.subTitle =
      SubheadingsubTitle1;
    database.YadeshForOrganization.QuestionFromYadesh.Subheadings.Subheading1.isDisplayed =
      Subheading1toggle;
    database.YadeshForOrganization.QuestionFromYadesh.Subheadings.Subheading2.title =
      Subheading2;
    database.YadeshForOrganization.QuestionFromYadesh.Subheadings.Subheading2.subTitle =
      SubheadingsubTitle2;
    database.YadeshForOrganization.QuestionFromYadesh.Subheadings.Subheading2.isDisplayed =
      Subheading2toggle;
    database.YadeshForOrganization.QuestionFromYadesh.Subheadings.Subheading3.title =
      Subheading3;
    database.YadeshForOrganization.QuestionFromYadesh.Subheadings.Subheading3.subTitle =
      SubheadingsubTitle3;
    database.YadeshForOrganization.QuestionFromYadesh.Subheadings.Subheading3.isDisplayed =
      Subheading3toggle;

    if (uploadImg !== null)
      database.YadeshForOrganization.QuestionFromYadesh.imagery =
        uploadImg.previewUrl;

    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[830px] bg-[#F5F5F5] mt-[10px] rounded">
      <section className="w-[95%] m-auto flex justify-between">
        <section className="w-[35%] pt-[10px] ">
          <section className="w-[93%] h-[550px] m-auto  my-[15px] text-[12px]">
            <div>
              <label
                htmlFor="Title100"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                عنوان
              </label>
              <input
                onChange={(e) => setTitleValue(e.target.value)}
                value={titlevalue}
                id="Title100"
                className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
                placeholder=" چرا ما از بقیه متفاوت هستیم ؟"
              />
            </div>
            <div className="my-[15px]">
              <label
                htmlFor="Title101"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                زیر عنوان
              </label>
              <input
                value={subTitleValue}
                onChange={(e) => setSubTitleValue(e.target.value)}
                id="Title101"
                className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
                placeholder=" دلیل تفاوت یادش با دیگران "
              />
            </div>

            <div className="text-[12px] text-[#7A7A7A] w-[500px]">
              <p>تصویر</p>
              <img
                className="w-[400px] h-[380px] rounded-lg mt-[10px]"
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
                    maxHeight: 380,
                    minHeight: 380,
                    maxWidth: 400,
                    borderRadius: 10,
                    border: "0",
                    top: -380,
                    left: 50,
                    backgroundColor: "#ff000000",
                    overflow: "hidden",
                  },
                }}
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/* png/* jpg/* jpeg/*"
              />
              <div className="text-[10px] flex mt-[-350px] px-[10px] text-[#7A7A7A]">
                <Ekhtar />
                <p className="mr-[10px] w-[375px]">
                  حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به
                  صورت اتوماتیک مطابق با سایز container باشد.
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className="w-[50%] h-[500px] text-[12px] text-[#7A7A7A] mt-[30px]">
          <section className="w-[500px] text-[12px] mt-[5px]  mr-[10px] text-[#7A7A7A]  h-[450px]">
            <section className="w-[400px] relative">
              <div>
                <label
                  htmlFor="Title103"
                  className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
                >
                  عنوان فرعی 1
                </label>
                <input
                  onChange={(e) => setSubheading1(e.target.value)}
                  value={Subheading1}
                  id="Title103"
                  className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
                  placeholder=" تنوع موضوع و مهارت در یادش"
                />
              </div>
              <div className="mt-[15px]">
                <label
                  htmlFor="Title104"
                  className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
                >
                  زیر عنوان فرعی 1
                </label>
                <textarea
                  value={SubheadingsubTitle1}
                  onChange={(e) => setSubheadingsubTitle1(e.target.value)}
                  id="Title104"
                  className="w-[400px] resize-none h-[75px] leading-6 rounded mt-[15px] text-[11px] px-[10px] py-[10px]"
                  placeholder=" سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویژه ای داریم "
                />
              </div>

              <section className="flex absolute top-[0] left-[0]">
                <p>نمایش این قسمت</p>
                <div
                  onClick={() => setSubheading1toggle(!Subheading1toggle)}
                  className={`${
                    Subheading1toggle
                      ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                      : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
                  }`}
                >
                  <div
                    className={`${
                      Subheading1toggle
                        ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                        : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                    }`}
                  ></div>
                </div>
              </section>
            </section>
            <section className="w-[400px] relative top-[20px]">
              <div>
                <label
                  htmlFor="Title110"
                  className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
                >
                  عنوان فرعی 2
                </label>
                <input
                  onChange={(e) => setSubheading2(e.target.value)}
                  value={Subheading2}
                  id="Title110"
                  className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
                  placeholder="اساتید برتر و نمونه"
                />
              </div>
              <div className="my-[15px]">
                <label
                  htmlFor="Title111"
                  className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
                >
                  زیر عنوان فرعی 2
                </label>
                <textarea
                  value={SubheadingsubTitle2}
                  onChange={(e) => setSubheadingsubTitle2(e.target.value)}
                  id="Title111"
                  className="w-[400px] resize-none h-[75px] leading-6 rounded mt-[15px] text-[11px] px-[10px] py-[10px]"
                  placeholder=" سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویژه ای داریم "
                />
              </div>

              <section className="flex absolute top-[0] left-[0]">
                <p>نمایش این قسمت</p>
                <div
                  onClick={() => setSubheading2toggle(!Subheading2toggle)}
                  className={`${
                    Subheading2toggle
                      ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                      : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
                  }`}
                >
                  <div
                    className={`${
                      Subheading2toggle
                        ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                        : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                    }`}
                  ></div>
                </div>
              </section>

              <section className="w-[400px] relative top-[10px]">
                <div>
                  <label
                    htmlFor="Title112"
                    className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
                  >
                    عنوان فرعی 3
                  </label>
                  <input
                    onChange={(e) => setSubheading3(e.target.value)}
                    value={Subheading3}
                    id="Title112"
                    className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
                    placeholder="ویدیو و محتوای با کیفیت"
                  />
                </div>
                <div className="my-[15px]">
                  <label
                    htmlFor="Title113"
                    className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
                  >
                    زیر عنوان فرعی 3
                  </label>
                  <textarea
                    value={SubheadingsubTitle3}
                    onChange={(e) => setSubheadingsubTitle3(e.target.value)}
                    id="Title113"
                    className="w-[400px] resize-none h-[75px] leading-6 rounded mt-[15px] text-[11px] px-[10px] py-[10px]"
                    placeholder=" سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویژه ای داریم "
                  />
                </div>

                <section className="flex absolute top-[0] left-[0]">
                  <p>نمایش این قسمت</p>
                  <div
                    onClick={() => setSubheading3toggle(!Subheading3toggle)}
                    className={`${
                      Subheading3toggle
                        ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                        : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
                    }`}
                  >
                    <div
                      className={`${
                        Subheading3toggle
                          ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                          : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                      }`}
                    ></div>
                  </div>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
      <div className="w-[170px] m-auto mt-32">
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
export default WhyYadesh;
