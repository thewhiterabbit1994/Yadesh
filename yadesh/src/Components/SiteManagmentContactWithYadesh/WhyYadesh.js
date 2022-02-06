import { useState } from "react";
import Play from "../../assets/svg/AdminPanelCourses/Play";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const WhyYadesh = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.ContactWithYadesh.WhyYadesh.Subheadings;

  const [toggle, setToggle] = useState(data.Subheading1.isDisplayed);
  const [toggle2, setToggle2] = useState(data.Subheading2.isDisplayed);
  const [toggle3, setToggle3] = useState(data.Subheading3.isDisplayed);

  const [titleSubsidiary1, setTitleSubsidiary1] = useState(
    data.Subheading1.title
  );
  const [subTitleSubsidiary1, setSubTitleSubsidiary1] = useState(
    data.Subheading1.subTitle
  );

  const [titleSubsidiary2, setTitleSubsidiary2] = useState(
    data.Subheading2.title
  );
  const [subTitleSubsidiary2, setSubTitleSubsidiary2] = useState(
    data.Subheading2.subTitle
  );

  const [titleSubsidiary3, setTitleSubsidiary3] = useState(
    data.Subheading3.title
  );
  const [subTitleSubsidiary3, setSubTitleSubsidiary3] = useState(
    data.Subheading3.subTitle
  );

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.ContactWithYadesh.WhyYadesh.Subheadings.Subheading1.title =
      titleSubsidiary1;
    database.ContactWithYadesh.WhyYadesh.Subheadings.Subheading2.title =
      titleSubsidiary2;
    database.ContactWithYadesh.WhyYadesh.Subheadings.Subheading3.title =
      titleSubsidiary3;

    database.ContactWithYadesh.WhyYadesh.Subheadings.Subheading1.subTitle =
      subTitleSubsidiary1;
    database.ContactWithYadesh.WhyYadesh.Subheadings.Subheading2.subTitle =
      subTitleSubsidiary2;
    database.ContactWithYadesh.WhyYadesh.Subheadings.Subheading3.subTitle =
      subTitleSubsidiary3;

    database.ContactWithYadesh.WhyYadesh.Subheadings.Subheading1.isDisplayed =
      toggle;
    database.ContactWithYadesh.WhyYadesh.Subheadings.Subheading2.isDisplayed =
      toggle2;
    database.ContactWithYadesh.WhyYadesh.Subheadings.Subheading3.isDisplayed =
      toggle3;
    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[530px] bg-[#F5F5F5] mt-[10px] rounded-lg">
      <section className="w-[95%] m-auto flex justify-between">
        <section className="w-full h-[500px] text-[12px]  mt-[30px]">
          <section className="w-full text-[12px] mt-[5px]  mr-[10px]   h-[450px]">
            {/* <titleSubsidiary1 .......................................................................................>  */}
            <section className="w-[95%] relative flex justify-between ">
              <div className="text-[12px]">
                <label
                  htmlFor="Title130"
                  className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
                >
                  عنوان
                </label>
                <input
                  onChange={(e) => setTitleSubsidiary1(e.target.value)}
                  value={titleSubsidiary1}
                  id="Title130"
                  className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
                  placeholder=" تنوع موضوع و مهارت در یادش "
                />
              </div>
              <div className="mr-5">
                <label
                  htmlFor="Title131"
                  className="text-[12px] text-[#7A7A7A]  pr-[10px]"
                >
                  زیر عنوان
                </label>
                <textarea
                  value={subTitleSubsidiary1}
                  onChange={(e) => setSubTitleSubsidiary1(e.target.value)}
                  id="Title131"
                  className="w-[400px] resize-none leading-5 px-[10px] py-[10px] h-[80px] rounded mt-[10px] text-[11px] pr-[10px]"
                  placeholder=" سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویيژه ای داریم "
                />
              </div>
              <section className="flex absolute top-[0] right-[230px]">
                <p>نمایش این قسمت</p>
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
            </section>

            {/* <titleSubsidiary2 .......................................................................................>  */}
            <section className="w-[95%] relative flex justify-between my-[30px]">
              <div className="text-[12px]">
                <label
                  htmlFor="Title132"
                  className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
                >
                  عنوان
                </label>
                <input
                  onChange={(e) => setTitleSubsidiary2(e.target.value)}
                  value={titleSubsidiary2}
                  id="Title132"
                  className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
                  placeholder=" اساتید برتر و نمونه "
                />
              </div>
              <div className="mr-5">
                <label
                  htmlFor="Title133"
                  className="text-[12px] text-[#7A7A7A]  pr-[10px]"
                >
                  زیر عنوان
                </label>
                <textarea
                  value={subTitleSubsidiary2}
                  onChange={(e) => setSubTitleSubsidiary2(e.target.value)}
                  id="Title133"
                  className="w-[400px] resize-none leading-5 px-[10px] py-[10px] h-[80px] rounded mt-[10px] text-[11px] pr-[10px]"
                  placeholder=" سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویيژه ای داریم "
                />
              </div>
              <section className="flex absolute top-[0] right-[230px]">
                <p>نمایش این قسمت</p>
                <div
                  onClick={() => setToggle2(!toggle2)}
                  className={`${
                    toggle2
                      ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                      : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
                  }`}
                >
                  <div
                    className={`${
                      toggle2
                        ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                        : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                    }`}
                  ></div>
                </div>
              </section>
            </section>

            {/* <titleSubsidiary3 .......................................................................................>  */}
            <section className="w-[95%] relative flex justify-between">
              <div className="text-[12px]">
                <label
                  htmlFor="Title134"
                  className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
                >
                  عنوان
                </label>
                <input
                  onChange={(e) => setTitleSubsidiary3(e.target.value)}
                  value={titleSubsidiary3}
                  id="Title134"
                  className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
                  placeholder=" ویدیو و محتوای با کیفیت "
                />
              </div>
              <div className="mr-5">
                <label
                  htmlFor="Title135"
                  className="text-[12px] text-[#7A7A7A]  pr-[10px]"
                >
                  زیر عنوان
                </label>
                <textarea
                  value={subTitleSubsidiary3}
                  onChange={(e) => setSubTitleSubsidiary3(e.target.value)}
                  id="Title135"
                  className="w-[400px] resize-none leading-5 px-[10px] py-[10px] h-[80px] rounded mt-[10px] text-[11px] pr-[10px]"
                  placeholder=" سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویيژه ای داریم "
                />
              </div>
              <section className="flex absolute top-[0] right-[230px]">
                <p>نمایش این قسمت</p>
                <div
                  onClick={() => setToggle3(!toggle3)}
                  className={`${
                    toggle3
                      ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                      : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
                  }`}
                >
                  <div
                    className={`${
                      toggle3
                        ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                        : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                    }`}
                  ></div>
                </div>
              </section>
            </section>
            <div className="w-[170px] m-auto mt-[20px]">
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
    </section>
  );
};
export default WhyYadesh;
