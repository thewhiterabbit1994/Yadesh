import YadeshLogo from "../assets/svg/YadeshLogo";
import YadeshNameLogo from "../assets/svg/YadeshNameLogo";
import Home from "../assets/svg/Login/Home";
import UserIcon from "../assets/svg/Login/UserIcon";
import Lock from "../assets/svg/Login/Lock";
import ShowPass from "../assets/svg/Login/ShowPass";
import GoogleIcon from "../assets/svg/Login/GoogleIcon";
import IranFlag from "../assets/svg/IranFlag";
import EnFlag from "../assets/svg/EnFlag";
import ArabFlag from "../assets/svg/ArabFlag";
import Langdropivon from "../assets/svg/langdropivon";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { MainCounter } from "../Context/Context";

const Login = () => {
  const [isSelectMenuOpen, setisSelectMenuOpen] = useState(false);
  const [flagshow, setflagshow] = useState(0);

  const { siteManagmentDatabase } = useContext(MainCounter);

  const data = siteManagmentDatabase.UserLogin;

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="w-full h-full bg-[#000405]">
      <img className="h-[100vh] w-[44.453125vw]" src={data.imagery} />
      <div className="top-0 bg-gradient-to-r z-10 from-[#000000] to-[#00040511] h-full w-1/2 left-[55.46875vw] absolute"></div>
      <div className="absolute z-20 top-5 mr-6 flex flex-row w-[95%] justify-between">
        <div className="flex ">
          <div className="">
            <YadeshLogo />
          </div>
          <div className="mr-[10.68px]">
            <YadeshNameLogo />
          </div>
          <button className="bg-[#223d49] -mt-0.5 mr-4 flex w-[72px] h-[33px] rounded-[6px] text-[#E6E9EB]">
            <Link to={"/"}>
              <p className="mt-[8.5px] w-[80px] h-[25px] mr-1 text-[11px] ">
                خانه
              </p>
              <div className="-mt-6 mr-3">
                <Home />
              </div>
            </Link>
          </button>
        </div>
        <div>
          <div
            onClick={() => setisSelectMenuOpen(!isSelectMenuOpen)}
            className="bg-[#001d29] w-[45px] cursor-pointer h-[35px] rounded-[4px] mt-[px] mr-[15px] text-[#E6E9EB]"
          >
            <div className="flex justify-end ml-[5px] pt-[15px]">
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
              ? "absolute left-[0px] top-[35px]  bg-[#001d29] w-[45px] h-[85px] rounded-[4px] text-[#E6E9EB]"
              : "absolute left-[0px] top-[35px] bg-[#001d29] w-[45px] h-[0px] rounded-[4px] text-[#E6E9EB]"
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
      <div className="absolute z-20 bg-[#15262c7a] backdrop-blur-lg	border rounded-[10px] border-[#192225] right-20 top-16 w-[39.0625vw] h-[79.08611599297012vh]  ">
        <div className="flex flex-col items-center m-auto text-center">
          <div className="mt-24">
            <img src={data.icon} />
          </div>
          <div className="mt-12">
            <p className="text-[18px]  mb-3 text-[#E6FFF3]">{data.title}</p>
          </div>
          <div className="mt-10">
            <p className=" text-[13px] w-[300px] h-[200px] leading-8 text-[#9ba4a8] ">
              {data.subTitle}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute z-20 w-[20.859375vw] left-52 top-16 flex flex-col m-auto">
        <p className="text-[18px]  mb-3 text-[#E6FFF3]">
          وارد حساب کاربری خود شوید
        </p>
        <p className="mt-1 text-[11px] text-[#9ba4a8]">
          با ورود به حساب خود از امکانات یادش بهره مند شوید
        </p>
        <label
          htmlFor="username"
          className="flex text-[#E6FFF3] mt-8 mb-3 text-[12px]"
        >
          <div className="ml-2">
            <UserIcon />
          </div>
          نام کاربری (ایمیل)
        </label>
        <input
          id="username"
          className="h-[45px] w-[267px] bg-[#1a3a47] outline-[#00ff85] text-[#E6FFF3]  rounded-[5px] pr-5 text-[13px]"
          type="text"
        />
        <label
          htmlFor="password"
          className="flex text-[#E6FFF3] mt-7 text-[12px]"
        >
          <div className="ml-2">
            <Lock />
          </div>
          رمز عبور
        </label>
        <div
          onClick={togglePassword}
          className=" cursor-pointer relative top-7 mr-[230px]"
        >
          <ShowPass />
        </div>
        <input
          id="password"
          className="h-[45px] w-[267px] bg-[#1a3a47] outline-[#00ff85] text-[#E6FFF3]  rounded-[5px] pr-5 text-[13px]"
          type={passwordShown ? "text" : "password"}
        />
        <div className="flex mt-4">
          <input className="accent-[#00ff85] ml-2" type="checkbox" />
          <p className="text-[10px] text-[#7e8588]">مرا به خاطر بسپار</p>
          <div className="w-[1px] mx-[12px] h-[15px] bg-[#7e8588] "></div>
          <p className="text-[10px] text-[#7e8588]">
            رمز عبور خود را فراموش کردید؟
          </p>
        </div>
        <Link to="/home">
          <button className="h-[40px] w-[267px] mt-5 bg-[#00ff85] text-[#000000] font-bold rounded-[5px] text-[11px]">
            ورود به یادش
          </button>
        </Link>
        <div className="flex mt-4">
          <div className="w-[115px] mt-1.5 mx-[12px] h-[1px] bg-[#7e858865] "></div>
          <p className="text-[10px] text-[#ffffff]">یا</p>
          <div className="w-[115px] mt-1.5 mx-[12px] h-[1px] bg-[#7e858865] "></div>
        </div>
        <button className="flex h-[45px] w-[267px] mt-3 bg-[#0a191f] text-[#9fa7aa] rounded-[5px] text-[11px]">
          <p className="mt-3.5 mr-16">ورود با حساب گوگل</p>
          <div className="mt-3 mr-4">
            <GoogleIcon />
          </div>
        </button>
        <div className="flex mt-2 justify-center">
          <p className="text-[10px] text-[#7e8588] ml-1">حساب کاربری ندارید؟</p>
          <p className="cursor-pointer text-[10px] text-[#00ff85]">عضو شوید</p>
        </div>
      </div>
    </div>
  );
};
export default Login;
