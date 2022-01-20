import UserIcon from "../../assets/svg/Login/UserIcon";
import YadeshLightLogo from "../../assets/svg/AdminLogin/YadeshLightLogo";
import { Link } from "react-router-dom";
import ForgotPasswords from "../../assets/svg/ForgotPassword/ForgotPassword";
const ForgotPassword = () => {
  return (
    <div className="h-[100vh] w-full bg-gradient-to-br from-[#5eca9f] via-[#60aef3] to-[#f3dd86] flex items-center  ">
      <div className=" bg-white h-[300px] w-[25vw] rounded-[10px] flex flex-col items-center  m-auto">
        <div className="my-7">
          <YadeshLightLogo />
        </div>

        <p className="mt-1  text-[12px] font-bold text-[#000000]">
          فراموشی رمز عبور
        </p>
        <label
          htmlFor="username"
          className="flex text-[#383838] mt-8 mb-3 -mr-[190px] font-bold text-[10px]"
        >
          <div className="ml-2">
            <ForgotPasswords color="#000" />
          </div>
          ایمیل آدرس
        </label>
        <input
          id="username"
          className="h-[45px] w-[267px] bg-[#f0f2f3] outline-[#000] text-[#E6FFF3]   rounded-[5px] pr-5 text-[13px]"
          type="text"
          placeholder="info_nftreact@"
        />
        <Link to="/home">
          <button className="h-[45px] w-[267px] mt-5 bg-[#008043] text-[#ffffff] font-bold rounded-[5px] text-[11px]">
            ارسال کد تایید
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ForgotPassword;
