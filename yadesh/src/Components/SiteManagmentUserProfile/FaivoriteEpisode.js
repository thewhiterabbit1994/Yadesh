import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import MessageSucsses from "../../Components/Messaeg/MessageSucsses"
import MessageFailed from "../../Components/Messaeg/MessageFailed"

const FaivoriteEpisode = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);
  const [SavedChangesModal, setSavedChangesModal] = useState(false)
  const [MessageFailedModal, setMessageFailedModal] = useState(false)

  const data = siteManagmentDatabase.UserInfo.FavoriteEpisodes;
  const [toggle, setToggle] = useState(data.isDisplayed);
  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.UserInfo.FavoriteEpisodes.title = titleValue;
    database.UserInfo.FavoriteEpisodes.subTitle = subtitleValue;
    database.UserInfo.FavoriteEpisodes.isDisplayed = toggle;
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
    <section className="w-full h-[350px] text-[12px] ">
      <section className="w-full h-[250px] flex justify-around mt-[10px] bg-[#F5F5F5] rounded">
        <section className="w-[47%] ">
          <section className="w-[93%] h-[280px] m-auto  my-[20px] ">
            <div className="text-[12px]">
              <label
                htmlFor="Title40"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                عنوان
              </label>
              <input
                onChange={(e) => settitleValue(e.target.value)}
                value={titleValue}
                id="Title40"
                className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
                placeholder=" اپیزودهای مورد علاقه شما "
              />
            </div>
            <div className="mt-[30px]">
              <label
                htmlFor="Title41"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                زیر عنوان
              </label>
              <input
                value={subtitleValue}
                onChange={(e) => setsubtitleValue(e.target.value)}
                id="Title41"
                className="w-[400px] px-[10px] py-[10px] leading-6  h-[40px] rounded my-[25px] text-[11px] pr-[10px]"
                placeholder="  لیست اپیزودهای مورد علاقه شما "
              />
            </div>
          </section>
        </section>
        <section className="w-[35%]">
          <section className=" text-[12px] mt-[70px] flex text-[#7A7A7A]">
            <p>این قسمت نمایش داده شود</p>
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
          <div className="w-[300px] mr-[-20px] mt-20 m-auto">
            <button
              onClick={handleClick}
              className="w-[300px] h-[45px] text-[13px] text-white bg-[#008043] rounded"
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
export default FaivoriteEpisode;
