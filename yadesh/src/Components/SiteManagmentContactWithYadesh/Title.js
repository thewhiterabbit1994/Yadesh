import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const Title = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.ContactWithYadesh.Title;

  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.ContactWithYadesh.Title.title = titleValue;
    database.ContactWithYadesh.Title.subTitle = subtitleValue;
    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[200px] bg-[#F5F5F5] rounded-lg mt-[10px] ">
      <section className="w-[90%]  h-[140px] flex justify-between  m-auto pr-[20px]">
        <section className=" m-auto w-full  my-[20px] text-[12px]  flex justify-between ">
          <div className="text-[12px]">
            <label
              htmlFor="Title127"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              عنوان
            </label>
            <input
              onChange={(e) => settitleValue(e.target.value)}
              value={titleValue}
              id="Title127"
              className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder=" با یادش در تماس باشید "
            />
          </div>
          <div className="mr-5">
            <label
              htmlFor="Title128"
              className="text-[12px] text-[#7A7A7A]  pr-[10px]"
            >
              زیر عنوان
            </label>
            <input
              value={subtitleValue}
              onChange={(e) => setsubtitleValue(e.target.value)}
              id="Title128"
              className="w-[400px] leading-5 px-[10px] py-[10px] h-[40px] rounded my-[15px] text-[11px] pr-[10px]"
              placeholder=" از طریق فرم روبرو با ما در تماس باشید "
            />
            <div className="w-[170px] m-auto mt-[20px]">
              <button
                onClick={handleClick}
                className="w-[170px] h-[45px] text-[13px] text-white bg-[#008043] rounded"
              >
                {" "}
                ذخیره کردن تغییرات{" "}
              </button>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
export default Title;
