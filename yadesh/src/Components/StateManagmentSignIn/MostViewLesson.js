import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const MostViewLesson = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageLogin.TodayMostViewLessons;

  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.HomePageLogin.TodayMostViewLessons.title = titleValue;
    database.HomePageLogin.TodayMostViewLessons.subTitle = subtitleValue;
    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[330px] flex justify-between bg-[#F5F5F5] mt-[10px]">
      <section className="w-[95%] m-auto flex justify-between">
        <section className="w-[45%] h-[260px] flex items-center text-[12px] ">
          <section>
            <div>
              <label
                htmlFor="Title5"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                عنوان
              </label>
              <input
                onChange={(e) => settitleValue(e.target.value)}
                value={titleValue}
                id="Title5"
                className="w-[400px] h-[40px]  rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                placeholder="درس های پربازدید امروز"
              />
            </div>
            <div className="mt-[30px]">
              <label
                htmlFor="Title6"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                زیر عنوان
              </label>
              <input
                value={subtitleValue}
                onChange={(e) => setsubtitleValue(e.target.value)}
                id="Title6"
                className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                placeholder="یادشی ها این ویدیو را بیشتر دیده اند"
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
    </section>
  );
};
export default MostViewLesson;
