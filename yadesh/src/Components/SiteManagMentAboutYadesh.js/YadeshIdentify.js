import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import MessageSucsses from "../../Components/Messaeg/MessageSucsses"
import MessageFailed from "../../Components/Messaeg/MessageFailed"

const YadeshIdentify = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);
  const [SavedChangesModal, setSavedChangesModal] = useState(false)
  const [MessageFailedModal, setMessageFailedModal] = useState(false)

  const data = siteManagmentDatabase.AboutYadesh.YadeshIdentify;
  const [toggle, setToggle] = useState(data.isLogoDisplayed);
  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.AboutYadesh.YadeshIdentify.title = titleValue;
    database.AboutYadesh.YadeshIdentify.subTitle = subtitleValue;
    database.AboutYadesh.YadeshIdentify.isLogoDisplayed = toggle;
    setsiteManagmentDatabase(database);
    setSavedChangesModal(true)
    // setMessageFailedModal(true)
  };
  setTimeout(() => {
    if (SavedChangesModal === true) {
      setSavedChangesModal(false)
    }
  }, 4000)
  setTimeout(() => {
    if (MessageFailedModal === true) {
      setMessageFailedModal(false)
    }
  }, 4000)
  return (
    <section className="w-full h-[300px] bg-[#F5F5F5] mt-[10px] rounded flex justify-between">
      <section className="w-[35%] pt-[10px]">
        <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
          <div className="text-[12px]">
            <label
              htmlFor="Title25"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              عنوان
            </label>
            <input
              onChange={(e) => settitleValue(e.target.value)}
              value={titleValue}
              id="Title25"
              className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder="جشم انداز یادش"
            />
          </div>
          <div className="mt-[30px]">
            <label
              htmlFor="Title26"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              زیر عنوان
            </label>
            <textarea
              value={subtitleValue}
              onChange={(e) => setsubtitleValue(e.target.value)}
              id="Title26"
              className="w-[400px] px-[10px] py-[10px] leading-6 resize-none h-[100px] rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder="هدف ما در یادش بالا بردن سطح کیفیت تجربه ی کاربری در استفاده از پلتفرم های آموزشی است."
            />
          </div>
        </section>
      </section>
      <section className="mt-2 w-[50%]">
        <section className="w-[400px] text-[12px] flex pt-[20px] text-[#7A7A7A]">
          <p className="w-[150px] ml-[50px]">لوگو (نمایش داده شود)</p>
          <div
            onClick={() => setToggle(!toggle)}
            className={`${toggle
              ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
              : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
              }`}
          >
            <div
              className={`${toggle
                ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                }`}
            ></div>
          </div>
        </section>
        <div className={`${!SavedChangesModal ? "fixed bottom-[-200px]" : "fixed bottom-[20px] left-[50px] transition-all duration-[500ms]"}`}>
          <MessageSucsses text={"تغییرات با موفقیت ذخیره شد"} />
        </div>
        <div className={`${!MessageFailedModal ? "fixed bottom-[-200px]" : "fixed bottom-[20px] left-[50px] transition-all duration-[500ms]"}`}>
          <MessageFailed text={"متاسفانه تغییرات ذخیره نشد"} />
        </div>
        <div className="w-[400px] mt-40 m-auto">
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
export default YadeshIdentify;
