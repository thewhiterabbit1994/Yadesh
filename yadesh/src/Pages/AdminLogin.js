import UserIcon from "../assets/svg/Login/UserIcon";
import Lock from "../assets/svg/Login/Lock";
import ShowPass from "../assets/svg/Login/ShowPass";
import YadeshLightLogo from "../assets/svg/AdminLogin/YadeshLightLogo";
import { Link } from "react-router-dom";
import { useState } from "react";

const AdminLogin = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-gradient-to-br from-[#5eca9f] via-[#60aef3] to-[#f3dd86] ">
      <div className=" bg-white h-[85vh] w-[25vw] rounded-[10px] flex flex-col items-center m-auto">
        <div className="my-7">
          <YadeshLightLogo />
        </div>

        <p className="mt-1  text-[12px] font-bold text-[#000000]">
          ورود به پنل کاربری
        </p>
        <label
          htmlFor="username"
          className="flex text-[#383838] mt-8 mb-3 -mr-[190px] font-bold text-[10px]"
        >
          <div className="ml-2">
            <UserIcon color="#000" />
          </div>
          نام کاربری
        </label>
        <input
          id="username"
          className="h-[45px] w-[267px] bg-[#f0f2f3] outline-[#000] text-[#E6FFF3]   rounded-[5px] pr-5 text-[13px]"
          type="text"
        />
        <label
          htmlFor="password"
          className="flex text-[#383838] mt-12 -mr-[190px] font-bold text-[10px]"
        >
          <div className="ml-2">
            <Lock color="#000" />
          </div>
          رمز عبور
        </label>
        <div
          onClick={togglePassword}
          className=" cursor-pointer relative top-7 mr-[210px]"
        >
          <ShowPass color="#000" />
        </div>
        <input
          id="password"
          className="h-[45px] w-[267px] bg-[#f0f2f3] outline-[#000] text-[#E6FFF3]  rounded-[5px] pr-5 text-[13px]"
          type={passwordShown ? "text" : "password"}
        />
        <div className="flex mt-12">
          <input className="accent-[#008043] ml-2" type="checkbox" />
          <p className="text-[10px] text-[#7e8588]">مرا به خاطر بسپار</p>
          <div className="w-[1px] mx-[12px] h-[15px] bg-[#7e8588] "></div>
          <p className="text-[10px] text-[#7e8588]">
            رمز عبور خود را فراموش کردید؟
          </p>
        </div>
        <Link to="/admindashboard">
          <button className="h-[45px] w-[267px] mt-5 bg-[#008043] text-[#ffffff] font-bold rounded-[5px] text-[11px]">
            ورود به پنل
          </button>
        </Link>
      </div>
    </div>
  );
};
export default AdminLogin;
