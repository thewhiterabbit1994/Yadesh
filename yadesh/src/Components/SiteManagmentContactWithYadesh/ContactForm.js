import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import Play from "../../assets/svg/AdminPanelCourses/Play";
import MessageSucsses from "../../Components/Messaeg/MessageSucsses"
import MessageFailed from "../../Components/Messaeg/MessageFailed"

const ContactForm = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);
  const [SavedChangesModal, setSavedChangesModal] = useState(false)
  const [MessageFailedModal, setMessageFailedModal] = useState(false)

  const data = siteManagmentDatabase.ContactWithYadesh.ContactForm.Fields;

  const [toggle, setToggle] = useState(data.Field1.isDisplayed);
  const [toggle2, setToggle2] = useState(data.Field2.isDisplayed);
  const [toggle3, setToggle3] = useState(data.Field3.isDisplayed);
  const [toggle4, setToggle4] = useState(data.Field4.isDisplayed);
  const [toggle5, setToggle5] = useState(data.Field5.isDisplayed);

  const [fullName, setFullName] = useState(data.Field1.title);
  const [email, setEmail] = useState(data.Field2.title);
  const [nameInSazman, setNameInSazman] = useState(data.Field3.title);
  const [YourTitleInSazman, setYourTitleInSazman] = useState(data.Field4.title);
  const [MessageText, setMessageText] = useState(data.Field5.title);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.ContactWithYadesh.ContactForm.Fields.Field1.isDisplayed = toggle;
    database.ContactWithYadesh.ContactForm.Fields.Field2.isDisplayed = toggle2;
    database.ContactWithYadesh.ContactForm.Fields.Field3.isDisplayed = toggle3;
    database.ContactWithYadesh.ContactForm.Fields.Field4.isDisplayed = toggle4;
    database.ContactWithYadesh.ContactForm.Fields.Field5.isDisplayed = toggle5;

    database.ContactWithYadesh.ContactForm.Fields.Field1.title = fullName;
    database.ContactWithYadesh.ContactForm.Fields.Field2.title = email;
    database.ContactWithYadesh.ContactForm.Fields.Field3.title = nameInSazman;
    database.ContactWithYadesh.ContactForm.Fields.Field4.title =
      YourTitleInSazman;
    database.ContactWithYadesh.ContactForm.Fields.Field5.title = MessageText;
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
    <section className="w-full  mt-[10px] bg-[#F5F5F5] rounded-lg">
      <section className="w-full h-[430px] text-[12px]  pt-[30px] pr-[20px]   flex justify-around flex-wrap  ">
        <section className="w-[400px] relative flex justify-between  ">
          <div className="text-[12px]">
            <label
              htmlFor="Title140"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              فیلد ورودی 1
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              id="Title140"
              className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder=" نام و نام خانوادگی "
            />
          </div>
          <section className="flex absolute top-[0] right-[230px]">
            <p>نمایش این قسمت</p>
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
        </section>

        <section className="w-[400px] relative flex justify-between ">
          <div className="text-[12px]">
            <label
              htmlFor="Title143"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              فیلد ورودی 4
            </label>
            <input
              onChange={(e) => setMessageText(e.target.value)}
              value={MessageText}
              id="Title143"
              className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder=" متن پیام"
            />
          </div>
          <section className="flex absolute top-[0] right-[230px]">
            <p>نمایش این قسمت</p>
            <div
              onClick={() => setToggle4(!toggle4)}
              className={`${toggle4
                ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
                }`}
            >
              <div
                className={`${toggle4
                  ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                  : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                  }`}
              ></div>
            </div>
          </section>
        </section>

        <section className="w-[400px] relative flex justify-between my-[40px] ">
          <div className="text-[12px]">
            <label
              htmlFor="Title141"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              فیلد ورودی 2
            </label>
            <input
              onChange={(e) => setNameInSazman(e.target.value)}
              value={nameInSazman}
              id="Title141"
              className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder="نام شما در سازمان"
            />
          </div>
          <section className="flex absolute top-[0] right-[230px]">
            <p>نمایش این قسمت</p>
            <div
              onClick={() => setToggle2(!toggle2)}
              className={`${toggle2
                ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
                }`}
            >
              <div
                className={`${toggle2
                  ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                  : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                  }`}
              ></div>
            </div>
          </section>
        </section>

        <section className="w-[400px] relative flex justify-between my-[40px] ">
          <div className="text-[12px]">
            <label
              htmlFor="Title144"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              فیلد ورودی 5
            </label>
            <input
              onChange={(e) => setYourTitleInSazman(e.target.value)}
              value={YourTitleInSazman}
              id="Title144"
              className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder=" عنوان شما در سازمان"
            />
          </div>
          <section className="flex absolute top-[0] right-[230px]">
            <p>نمایش این قسمت</p>
            <div
              onClick={() => setToggle5(!toggle5)}
              className={`${toggle5
                ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
                }`}
            >
              <div
                className={`${toggle5
                  ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                  : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                  }`}
              ></div>
            </div>
          </section>
        </section>

        <section className="w-[400px] relative flex justify-between  ">
          <div className="text-[12px] mr-5">
            <label
              htmlFor="Title142"
              className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
            >
              فیلد ورودی 3
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="Title142"
              className="w-[400px] h-[40px]  rounded mt-[15px] text-[11px] pr-[10px]"
              placeholder=" ایمیل آدرس"
            />
          </div>
          <section className="flex absolute top-[0] right-[230px]">
            <p>نمایش این قسمت</p>
            <div
              onClick={() => setToggle3(!toggle3)}
              className={`${toggle3
                ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative"
                : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"
                }`}
            >
              <div
                className={`${toggle3
                  ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]"
                  : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"
                  }`}
              ></div>
            </div>
          </section>
        </section>
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
      </section>
    </section>
  );
};
export default ContactForm;
