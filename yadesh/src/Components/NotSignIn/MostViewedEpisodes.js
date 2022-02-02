import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const MostViewedEpisodes = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageNotLogin.mostViewedEpisodes;

  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.HomePageNotLogin.mostViewedEpisodes.title = titleValue;
    database.HomePageNotLogin.mostViewedEpisodes.subTitle = subtitleValue;
    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[280px] flex justify-between bg-[#F5F5F5] mt-[10px]">
      <section className="w-[95%] m-auto flex justify-between">
        <section className="w-[45%] h-[260px] flex items-center  ">
          <section>
            <div>
              <lable className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                عنوان
              </lable>
              <input
                className="w-[400px] h-[40px] rounded text-[11px] pr-[10px]"
                value={titleValue}
                onChange={(e) => settitleValue(e.target.value)}
                maxLength={30}
              />
            </div>
            <div className="my-[30px]">
              <lable className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                زیر عنوان
              </lable>
              <input
                className="w-[400px] h-[40px] rounded text-[11px] pr-[10px]"
                value={subtitleValue}
                onChange={(e) => setsubtitleValue(e.target.value)}
                maxLength={50}
              />
            </div>
            <div className="w-[400px] m-auto">
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
export default MostViewedEpisodes;
