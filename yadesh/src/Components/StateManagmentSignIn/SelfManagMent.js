import Remove from "../../assets/svg/AdminPanelCourses/Remove";
import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const SelfManagMent = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageLogin.PersonalManagement;
  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.HomePageLogin.PersonalManagement.title = titleValue;
    database.HomePageLogin.PersonalManagement.subTitle = subtitleValue;
    setsiteManagmentDatabase(database);
  };
  return (
    <section className="w-full h-[330px] flex justify-between bg-[#F5F5F5] mt-[10px]">
      <section className="w-[95%] m-auto flex justify-between">
        <section className="w-[45%] h-[260px] flex items-center  ">
          <section>
            <div>
              <label
                htmlFor="Title7"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                عنوان
              </label>
              <input
                onChange={(e) => settitleValue(e.target.value)}
                value={titleValue}
                id="Title7"
                className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
                placeholder="مدیریت شخصی"
              />
            </div>
            <div className="mt-[30px]">
              <label
                htmlFor="Title8"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                زیر عنوان
              </label>
              <input
                value={subtitleValue}
                onChange={(e) => setsubtitleValue(e.target.value)}
                id="Title8"
                className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
                placeholder="پربازدیدترین های مدیریت شخصی"
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
export default SelfManagMent;
