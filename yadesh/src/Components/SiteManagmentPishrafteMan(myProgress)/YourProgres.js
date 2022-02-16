import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import MessageSucsses from "../../Components/Messaeg/MessageSucsses"
import MessageFailed from "../../Components/Messaeg/MessageFailed"

const YourProgres = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);
  const [SavedChangesModal, setSavedChangesModal] = useState(false)
  const [MessageFailedModal, setMessageFailedModal] = useState(false)

  const data = siteManagmentDatabase.MyProgress.YourProgressInYadesh;

  const [coursetoggle, setcoursetoggle] = useState(data.seenCourseIsDisplayed);
  const [videotoggle, setvideotoggle] = useState(data.seenVideoIsDisplayed);
  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.MyProgress.YourProgressInYadesh.title = titleValue;
    database.MyProgress.YourProgressInYadesh.subTitle = subtitleValue;
    database.MyProgress.YourProgressInYadesh.seenCourseIsDisplayed =
      coursetoggle;
    database.MyProgress.YourProgressInYadesh.seenVideoIsDisplayed = videotoggle;
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
    <section className="w-full h-[330px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
      <section className="w-[47%] ">
        <section className="w-[93%] h-[280px] m-auto  my-[20px] ">
          <div>
            <label
              htmlFor="Title10"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              عنوان
            </label>
            <input
              onChange={(e) => settitleValue(e.target.value)}
              value={titleValue}
              id="Title10"
              className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder="پیشرفت شما در یادش"
            />
          </div>
          <div className="mt-[30px]">
            <label
              htmlFor="Title11"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              زیر عنوان
            </label>
            <input
              value={subtitleValue}
              onChange={(e) => setsubtitleValue(e.target.value)}
              id="Title11"
              className="w-[400px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder="لیست ویدیو ها و دوره های  شما "
            />
          </div>
          <div className={`${!SavedChangesModal ?  "fixed bottom-[-200px]" : "fixed bottom-[50px] left-[50px] transition-all duration-[500ms]"}`}>
            <MessageSucsses text={"تغییرات با موفقیت ذخیره شد"} />
          </div>
          <div className={`${!MessageFailedModal ? "fixed bottom-[-200px]" : "fixed bottom-[50px] left-[50px] transition-all duration-[500ms]"}`}>
            <MessageFailed text={"متاسفانه تغییرات ذخیره نشد"} />
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
      <section className="w-[50%]  mt-[60px]  ">
        <section className="flex text-[12px] text-[#7A7A7A]">
          <p>تعداد دوره های تکمیل شده نمایش داده شود</p>
          <div
            onClick={() => setcoursetoggle(!coursetoggle)}
            className={`${coursetoggle
              ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
              : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
              }`}
          >
            <div
              className={`${coursetoggle
                ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                }`}
            ></div>
          </div>
        </section>
        <section className="flex text-[12px] text-[#7A7A7A] mt-[40px]">
          <p>تعداد ویدیو های دیده شده نمایش داده شود</p>
          <div
            onClick={() => setvideotoggle(!videotoggle)}
            className={`${videotoggle
              ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
              : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
              }`}
          >
            <div
              className={`${videotoggle
                ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                }`}
            ></div>
          </div>
        </section>
      </section>
    </section>
  );
};
export default YourProgres;
