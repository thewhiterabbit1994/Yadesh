import { useState } from "react";
import HeroSighin from "../../Components/StateManagmentSignIn/HeroSighin";
import KeepLearning from "../../Components/StateManagmentSignIn/KeepLearning";
import MostViewedEpisodes from "../../Components/NotSignIn/MostViewedEpisodes";
import MostViewLesson from "../../Components/StateManagmentSignIn/MostViewLesson";
import SelfManagMent from "../../Components/StateManagmentSignIn/SelfManagMent";

const SignIn = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className="w-full h-[100vh]">
      <section className=" flex justify-between">
        <section className="w-[10%]">
          <div className="text-[11px] w-[160px] text-center opacity-90">
            <p
              onClick={() => setOpenTab(1)}
              className=" hover:bg-[#e2e0e0]  p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"
            >
              قسمت hero
            </p>
            <p
              onClick={() => setOpenTab(2)}
              className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"
            >
              {" "}
              به یادگیری ادامه دهید{" "}
            </p>
            <p
              onClick={() => setOpenTab(3)}
              className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"
            >
              پربازدیدترین اپیزودها
            </p>
            <p
              onClick={() => setOpenTab(4)}
              className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"
            >
              درس های پربازدید
            </p>
            <p
              onClick={() => setOpenTab(5)}
              className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"
            >
              مدیریت شخصی
            </p>
          </div>
        </section>
        <section className="w-[84%]">
          <div className={`${openTab === 1 ? "block" : "hidden"}`}>
            <HeroSighin />
          </div>
          <div className={`${openTab === 2 ? "block" : "hidden"}`}>
            <KeepLearning />
          </div>
          <div className={`${openTab === 3 ? "block" : "hidden"}`}>
            <MostViewedEpisodes />
          </div>
          <div className={`${openTab === 4 ? "block" : "hidden"}`}>
            <MostViewLesson />
          </div>
          <div className={`${openTab === 5 ? "block" : "hidden"}`}>
            <SelfManagMent />
          </div>
        </section>
      </section>
    </section>
  );
};
export default SignIn;
