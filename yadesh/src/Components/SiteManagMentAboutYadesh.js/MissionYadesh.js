import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const MissionYadesh = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.AboutYadesh.MissionYadesh;
  const [toggle, setToggle] = useState(data.isLogoDisplayed);
  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.AboutYadesh.MissionYadesh.title = titleValue;
    database.AboutYadesh.MissionYadesh.subTitle = subtitleValue;
    database.AboutYadesh.MissionYadesh.isLogoDisplayed = toggle;
    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[300px]  mt-[10px] ">
      <section className="bg-[#F5F5F5] rounded flex justify-between h-[300px]">
        <section className="w-[35%] pt-[10px]">
          <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
            <div className="text-[12px]">
              <label
                htmlFor="Title27"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                عنوان
              </label>
              <input
                onChange={(e) => settitleValue(e.target.value)}
                value={titleValue}
                id="Title27"
                className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
                placeholder=" ماموریت یادش "
              />
            </div>
            <div className="mt-[30px]">
              <label
                htmlFor="Title28"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                زیر عنوان
              </label>
              <textarea
                value={subtitleValue}
                onChange={(e) => setsubtitleValue(e.target.value)}
                id="Title28"
                className="w-[400px] px-[10px] py-[10px] leading-6 resize-none h-[80px] rounded mt-[15px] text-[11px] pr-[10px]"
                placeholder="هدف ما در یادش بالا بردن سطح کیفیت تجربه ی کاربری در استفاده از پلتفرم های آموزشی است."
              />
            </div>
          </section>
        </section>
        <section className="w-[50%] mt-3">
          <section className="w-[400px] text-[12px] flex pt-[20px] text-[#7A7A7A]">
            <p className="w-[150px] ml-[50px]">لوگو (نمایش داده شود)</p>
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

          <div className="w-[400px] mt-36 m-auto">
            <button
              onClick={handleClick}
              className="w-[400px] h-[45px] text-[13px] text-white bg-[#008043] rounded"
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
export default MissionYadesh;
