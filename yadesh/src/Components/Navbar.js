import { useState } from "react";
import { Link } from "react-router-dom";
import YadeshLogo from "../assets/svg/YadeshLogo";
import YadeshNameLogo from "../assets/svg/YadeshNameLogo";
import MenuIcon from "../assets/svg/MenuIcon";
import MyProgressRocket from "../assets/svg/MyProgressRocket";
import SearchIcon from "../assets/svg/SearchIcon";
import Menu from "./Menu";
const Navbar = () => {
  const [menuDisplay, setmenuDisplay] = useState(false);
  return (
    <div className="fixed h-[56px] w-full  top-0 z-20">
      <div className="backdrop-blur-xl bg-[#0105062d] flex  ">
        <div
          onClick={() => setmenuDisplay(!menuDisplay)}
          className="cursor-pointer my-[22px] mr-[30px]"
        >
          <MenuIcon />
        </div>
        <div className="my-[16px] mr-[15px]">
          <YadeshLogo />
        </div>
        <div className=" my-[16px] mr-[10.5px]">
          <YadeshNameLogo />
        </div>
        <div>
          <button className="bg-[#001d29] flex mr-[15px] mt-[11px] w-[118px] h-[35px] rounded-[4px] text-[#E6E9EB]">
            <div className="mr-[10px] mt-[9px]">
              <MyProgressRocket />
            </div>
            <Link to={"/home/myprogress"}>
              <p className="my-[9px] w-[70px] h-[19px] mr-[10px] text-[12.5px] ">
                پیشرفت من
              </p>
            </Link>
          </button>
        </div>
        <div className="flex absolute left-10">
          <button className="bg-[#001d29] flex mr-[15px] mt-[11px] w-[120px] h-[35px] rounded-[4px] text-[#E6E9EB]">
            <div className="mr-[10px] mt-[9px]">
              <SearchIcon />
            </div>
            <p className="my-[8px] w-[80px] h-[25px] mr-[6px] text-[12.5px] ">
              جستوجو کنید
            </p>
          </button>
          <select className="bg-[#001d29] w-[45px] h-[35px] rounded-[4px] mt-[11px] mr-[15px] text-[#E6E9EB]">
            <option value="1"></option>
            <option value="2">EN</option>
          </select>
        </div>
      </div>
      <Menu menuDisplay={menuDisplay} />
    </div>
  );
};
export default Navbar;
