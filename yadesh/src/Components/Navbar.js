import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import YadeshLogo from "../assets/svg/YadeshLogo";
import YadeshNameLogo from "../assets/svg/YadeshNameLogo";
import MenuIcon from "../assets/svg/MenuIcon";
import MyProgressRocket from "../assets/svg/MyProgressRocket";
import SearchIcon from "../assets/svg/SearchIcon";
import Menu from "./Menu";
import Langdropivon from "../assets/svg/langdropivon";
import IranFlag from "../assets/svg/IranFlag";
import EnFlag from "../assets/svg/EnFlag";
import ArabFlag from "../assets/svg/ArabFlag";
import ForBusinessImg from "../assets/Img/ForBusinessImg.png";
const Navbar = () => {
  let location = useLocation();
  const [menuDisplay, setmenuDisplay] = useState(false);
  const [searchInputWide, setsearchInputWide] = useState(false);
  const [isSelectMenuOpen, setisSelectMenuOpen] = useState(false);
  const [searchInputValue, setsearchInputValue] = useState("");
  const [flagshow, setflagshow] = useState(0);
  return (
    <div className="fixed h-[56px] w-full  top-0 z-50">
      <div className="backdrop-blur-xl bg-[#0105062d] flex  ">
        <div
          onClick={() => setmenuDisplay(!menuDisplay)}
          className="menu flex flex-col relative cursor-pointer my-[22px] mr-[30px]"
        >
          <MenuIcon />
        </div>

        <Menu menuDisplay={menuDisplay} />

        <div className="my-[16px] mr-[15px]">
          <YadeshLogo />
        </div>
        <div className=" my-[16px] mr-[10.5px]">
          <YadeshNameLogo />
        </div>
        <div>
          <div
            className={`
          ${
            location.pathname === "/home/signupforbusiness"
              ? " w-[118px] h-[35px] text-[13px] flex justify-center items-center text-[#E6E9EB] rounded-full bg-gradient-to-r from-[#40555e] to-[#33d499] mr-[15px] mt-[11px]"
              : "hidden"
          }
         `}
          >
            برای سازمان ها
          </div>
          <button
            className={`${
              location.pathname === "/home/myprogress"
                ? " border border-[#80FFC2] bg-[#001d29] flex mr-[15px] mt-[11px] w-[118px] h-[35px] rounded-[4px] text-[#E6E9EB]"
                : location.pathname === "/"
                ? "hidden"
                : location.pathname === "/home/signupforbusiness"
                ? "hidden"
                : "bg-[#001d29] flex mr-[15px] mt-[11px] w-[118px] h-[35px] rounded-[4px] text-[#E6E9EB]"
            }`}
          >
            <div className="mr-[10px] mt-[7.5px]">
              <MyProgressRocket />
            </div>
            <Link to={"/home/myprogress"}>
              <p
                className={`my-[7.5px] w-[70px] h-[19px] mr-[10px] text-[12.5px]`}
              >
                پیشرفت من
              </p>
            </Link>
          </button>
        </div>
        <div className="flex absolute left-10">
          <button
            className={`
          ${
            location.pathname === "/"
              ? " border-[1.5px] border-[#80FFC2] flex mt-[11px] w-[72px] h-[33px] rounded-[6px] text-[#E6E9EB]"
              : "hidden"
          }
         `}
          >
            <Link to={"/login"}>
              <p className="mt-[7px] w-[80px] h-[25px] -mr-1.5 text-[11px] ">
                وارد شوید
              </p>
            </Link>
          </button>
          <div
            className={`transform transition-all duration-1000
          ${
            searchInputWide
              ? "bg-[#001d29] flex mr-[15px] mt-[11px] w-[300px] h-[35px] rounded-[4px] text-[#E6E9EB]"
              : "bg-[#001d29] flex mr-[15px] mt-[11px] w-[120px] h-[35px] rounded-[4px] text-[#E6E9EB]"
          }
          bg-[#001d29] flex mr-[15px] mt-[11px] w-[120px] h-[35px] rounded-[4px] text-[#E6E9EB]`}
          >
            <div className="mr-[10px] mt-[9px]">
              <SearchIcon />
            </div>
            <input
              value={searchInputValue}
              onChange={(e) => {
                setsearchInputValue(e.target.value);
                e.target.value === ""
                  ? setsearchInputWide(false)
                  : setsearchInputWide(true);
              }}
              className={`transform transition-all duration-1000
              ${
                searchInputWide
                  ? "mt-[4px] bg-[#001d29] outline-none w-[250px] h-[25px] mr-[6px] text-[12.5px]"
                  : "mt-[4px] bg-[#001d29] outline-none w-[80px] h-[25px] mr-[6px] text-[12.5px]"
              }
              `}
              placeholder="جستوجو کنید"
            />
          </div>
          <div
            onClick={() => setisSelectMenuOpen(!isSelectMenuOpen)}
            className="bg-[#001d29] w-[45px] cursor-pointer h-[35px] rounded-[4px] mt-[11px] mr-[15px] text-[#E6E9EB]"
          >
            <div className="flex justify-end ml-[5px] mt-[16px]">
              <div className="mt-[-5px] ml-[5px]">
                {flagshow === 0 ? (
                  <IranFlag />
                ) : flagshow === 1 ? (
                  <ArabFlag />
                ) : flagshow === 2 ? (
                  <EnFlag />
                ) : null}
              </div>
              <Langdropivon />
            </div>
          </div>
          <div
            className={`translate transition-all duration-700 
          ${
            isSelectMenuOpen
              ? "absolute left-[0px] top-[46px] bg-[#001d29] w-[45px] h-[85px] rounded-[4px] text-[#E6E9EB]"
              : "absolute left-[0px] top-[46px] bg-[#001d29] w-[45px] h-[0px] rounded-[4px] text-[#E6E9EB]"
          }
          `}
          >
            <div
              onClick={() => {
                setflagshow(0);
                setisSelectMenuOpen(false);
              }}
              className={`translate transition-all duration-700 cursor-pointer
            ${
              isSelectMenuOpen
                ? "flex justify-center  h-[20px] mt-[5px]"
                : "flex justify-center relative z-[-10] mt-[-30px]"
            }
            `}
            >
              <IranFlag />
              <p className="text-[10px] mr-1">FA</p>
            </div>
            <div
              onClick={() => {
                setflagshow(1);
                setisSelectMenuOpen(false);
              }}
              className={`translate transition-all duration-700 cursor-pointer
            ${
              isSelectMenuOpen
                ? "flex justify-center  h-[20px] mt-[10px]"
                : "flex justify-center relative z-[-10] mt-[-10px]"
            }
            `}
            >
              <ArabFlag />
              <p className="text-[10px] mr-1">AR</p>
            </div>
            <div
              onClick={() => {
                setflagshow(2);
                setisSelectMenuOpen(false);
              }}
              className={`translate transition-all duration-700 cursor-pointer
            ${
              isSelectMenuOpen
                ? "flex justify-center  h-[20px] mt-[10px]"
                : "flex justify-center relative z-[-10] mt-[-10px]"
            }
            `}
            >
              <EnFlag />
              <p className="text-[10px] mr-1">EN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
