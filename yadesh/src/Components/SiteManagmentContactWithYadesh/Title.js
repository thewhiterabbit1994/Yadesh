import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import MessageSucsses from "../../Components/Messaeg/MessageSucsses"
import MessageFailed from "../../Components/Messaeg/MessageFailed"
const Title = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);
  const [SavedChangesModal, setSavedChangesModal] = useState(false)
  const [MessageFailedModal, setMessageFailedModal] = useState(false)

  const data = siteManagmentDatabase.ContactWithYadesh.Title;

  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.ContactWithYadesh.Title.title = titleValue;
    database.ContactWithYadesh.Title.subTitle = subtitleValue;
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
            <div className={`${!SavedChangesModal ? "fixed bottom-[-200px]" : "fixed bottom-[20px] left-[50px] transition-all duration-[500ms]"}`}>
              <MessageSucsses text={"تغییرات با موفقیت ذخیره شد"} />
            </div>
            <div className={`${!MessageFailedModal ? "fixed bottom-[-200px]" : "fixed bottom-[20px] left-[50px] transition-all duration-[500ms]"}`}>
              <MessageFailed text={"متاسفانه تغییرات ذخیره نشد"} />
            </div>
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
