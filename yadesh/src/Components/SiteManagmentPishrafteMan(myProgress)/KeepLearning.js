import Danger from "../../assets/svg/AdminLogin/Danger";
import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const KeepLearning = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.MyProgress.KeepLearning;
  const [toggle, setToggle] = useState(data.isDisplayed);
  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.MyProgress.KeepLearning.title = titleValue;
    database.MyProgress.KeepLearning.subTitle = subtitleValue;
    database.MyProgress.KeepLearning.isDisplayed = toggle;
    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[330px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
      <section className="w-[47%] ">
        <section className="w-[93%] h-[280px] m-auto  my-[20px] ">
          <div>
            <label
              htmlFor="Title12"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              عنوان
            </label>
            <input
              onChange={(e) => settitleValue(e.target.value)}
              value={titleValue}
              id="Title12"
              className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder="به یادگیری ادامه دهید"
            />
          </div>
          <div className="mt-[30px]">
            <label
              htmlFor="Title13"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              زیر عنوان
            </label>
            <input
              value={subtitleValue}
              onChange={(e) => setsubtitleValue(e.target.value)}
              id="Title13"
              className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder="ویدیوهای در حال تماشا"
            />
          </div>

          <div className="w-[400px] mt-12 m-auto">
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
      <section className="w-[50%] text-[12px] mt-[60px] flex text-[#7A7A7A]">
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
    </section>
  );
};
export default KeepLearning;
