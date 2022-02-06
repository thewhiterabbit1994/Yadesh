import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const Support = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.AboutYadesh.Support;
  const [toggle, setToggle] = useState(data.isDisplayed);
  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.AboutYadesh.Support.title = titleValue;
    database.AboutYadesh.Support.subTitle = subtitleValue;
    database.AboutYadesh.Support.isDisplayed = toggle;
    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[280px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
      <section className="w-[47%] ">
        <section className="w-[93%] h-[280px] m-auto  my-[20px] ">
          <div className="text-[12px]">
            <label
              htmlFor="Title35"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              عنوان
            </label>
            <input
              onChange={(e) => settitleValue(e.target.value)}
              value={titleValue}
              id="Title35"
              className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder="سوال خاصی دارید "
            />
          </div>
          <div className="mt-[30px]">
            <label
              htmlFor="Title36"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              زیر عنوان
            </label>
            <input
              value={subtitleValue}
              onChange={(e) => setsubtitleValue(e.target.value)}
              id="Title36"
              className="w-[400px] px-[10px] py-[10px] leading-6  h-[40px] rounded my-[25px] text-[11px] pr-[10px]"
              placeholder=" با تیم پشتیبانی تماس بگیرید "
            />
          </div>
        </section>
      </section>
      <section className="w-[400px]  text-[12px] mt-[60px] m-auto   text-[#7A7A7A]">
        <section className="flex w-[280px] justify-between">
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
        <div className="w-[400px] mt-32 m-auto">
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
  );
};
export default Support;
