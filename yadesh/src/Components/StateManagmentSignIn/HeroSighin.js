import Danger from "../../assets/svg/AdminPanelCourses/Danger";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import { useState } from "react";

const HeroSighin = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageLogin.hero;

  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.HomePageLogin.hero.title = titleValue;
    database.HomePageLogin.hero.subTitle = subtitleValue;
    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[350px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
      <section className="w-[47%] ">
        <section className="w-[93%] h-[300px] m-auto  my-[20px] ">
          <div>
            <label
              htmlFor="title1"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              عنوان
            </label>
            <input
              onChange={(e) => settitleValue(e.target.value)}
              value={titleValue}
              id="title1"
              className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder="درس های ویژه امروز"
            />
          </div>

          <div className="mt-[30px]">
            <label
              htmlFor="title2"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              زیر عنوان
            </label>
            <input
              value={subtitleValue}
              onChange={(e) => setsubtitleValue(e.target.value)}
              id="title2"
              className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder="برای شما"
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
    </section>
  );
};
export default HeroSighin;
