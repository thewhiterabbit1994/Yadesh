import Navbar from "../Components/Navbar";
import _404 from "../assets/svg/404";
import Home from "../assets/svg/Login/Home";
import _404Art from "../assets/svg/404Art";
import { Link } from "react-router-dom";

export default () => (
  <div className="h-[100vh] relative z-10 bg-[#000405]">
    <Navbar />
    <div className="w-full flex flex-col relative z-10 items-center ">
      <_404 />
      <div className="relative flex flex-col items-center z-10 mt-[-170px]">
        <p className="text-[30px] mb-8 text-[#ffffff]">متاسفیم!</p>
        <p className="text-[14px] mb-8 text-[#929292]">
          صفحه مورد نظر شما یافت نشد لطفا از طریق منو به صفحات دیگر بروید
        </p>
        <button className="bg-[#00ff85] mt-[px] relative z-10 flex w-[150px] h-[33px] rounded-[6px] text-[#000000]">
          <Link to={"/"}>
            <p className="mt-[8.5px] w-[150px] h-[25px] mr-2.5 text-[12px] ">
              برو به صفحه اصلی
            </p>
            <div className="-mt-6 mr-3">
              <Home color="#000" />
            </div>
          </Link>
        </button>
      </div>
    </div>
    <div className="absolute z-[5] top-0">
      <_404Art />
    </div>
  </div>
);
