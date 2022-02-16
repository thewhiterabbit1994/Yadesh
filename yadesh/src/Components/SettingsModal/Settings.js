import { useState } from "react";
import Account from "../../Components/SettingsModal/Account";
import Setting from "../../assets/svg/AdminPanelCourses/Settings";
import Notifications from "../../Components/SettingsModal/Notifications";
import Protection from "../../Components/SettingsModal/Protection";

const Settings = ({ settingsModal, setSettingsModal }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className=" relative bg-[#f5f5f5] w-[93%] h-[550px]  rounded-lg flex justify-between">
      <section className="flex justify-between w-[80px] text-[12px] absolute right-[50px]  top-[20px] ">
        <Setting />
        <p>تنظیمات</p>
      </section>
      <section className="bg-[#4e50505d] cursor-pointer w-[30px] h-[30px] rounded absolute left-[70px] top-[20px]">
        <div
          onClick={() => setSettingsModal(!settingsModal)}
          className="flex justify-center items-center text-[20px]"
        >
          x
        </div>
      </section>

      <section className="w-[20%] text-[11px]  text-center opacity-90 mt-[50px]">
        <div
          onClick={() => setOpenTab(1)}
          className=" hover:bg-[#e2e0e0]  p-3  my-[10px] bg-[#C4C4C4] leading-7 w-[190px] m-auto py-[15px] rounded-lg cursor-pointer"
        >
          <p className="text-[12px] font-semibold">حساب کاربری</p>
          <p>تنظیمات حساب کاربری شما</p>
        </div>
        <div
          onClick={() => setOpenTab(2)}
          className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] leading-7 w-[190px] m-auto py-[15px] rounded-lg cursor-pointer"
        >
          <p className="text-[12px] font-semibold">اعلان ها</p>
          <p>اعلان های دریافتی از پنل کاربری </p>
        </div>
        <div
          onClick={() => setOpenTab(3)}
          className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] leading-7 w-[190px] m-auto py-[15px] rounded-lg cursor-pointer"
        >
          <p className="text-[12px] font-semibold">امنیت</p>
          <p>تنظیمات امنیت پنل کاربری</p>
        </div>
      </section>

      <section className="w-[75%]">
        <div className={`${openTab === 1 ? "block" : "hidden"}`}>
          <Account
            settingsModal={settingsModal}
            setSettingsModal={setSettingsModal}
          />
        </div>
        <div className={`${openTab === 2 ? "block" : "hidden"}`}>
          <Notifications
            settingsModal={settingsModal}
            setSettingsModal={setSettingsModal}
          />
        </div>
        <div className={`${openTab === 3 ? "block" : "hidden"}`}>
          <Protection
            settingsModal={settingsModal}
            setSettingsModal={setSettingsModal}
          />
        </div>
      </section>
    </section>
  );
};
export default Settings;
