import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const Teachers = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.YadeshForOrganization.Teachers;

  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.YadeshForOrganization.Teachers.title = titleValue;
    database.YadeshForOrganization.Teachers.subTitle = subtitleValue;
    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[300px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
      <section className="w-[47%] ">
        <section className="w-[93%] h-[300px] m-auto  my-[20px] ">
          <div>
            <label
              htmlFor="Title76"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              عنوان
            </label>
            <input
              onChange={(e) => settitleValue(e.target.value)}
              value={titleValue}
              id="Title76"
              className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder=" تجربه ی اساتید یادش را به کارمندان خود انتقال دهید "
            />
          </div>
          <div className="mt-[30px]">
            <label
              htmlFor="Title78"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              زیر عنوان
            </label>
            <input
              value={subtitleValue}
              onChange={(e) => setsubtitleValue(e.target.value)}
              id="Title78"
              className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder=" اساتید یادش در حرفه ی خود بهترینند "
            />
          </div>

          <div className="w-[170px] m-auto mt-7">
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
      <section className="w-[50%] mt-[20px]"></section>
    </section>
  );
};
export default Teachers;
