import YadeshLightLogo from "../../assets/svg/AdminLogin/YadeshLightLogo";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const EnterCode = () => {
  const inputE1 = useRef(null);
  const inputE2 = useRef(null);
  const inputE3 = useRef(null);
  const inputE4 = useRef(null);
  const inputE5 = useRef(null);
  const inputE6 = useRef(null);
  const btnSubmit = useRef(null);
  const [enterCode, setenterCode] = useState("");

  return (
    <div className="h-[100vh] w-full bg-gradient-to-br from-[#5eca9f] via-[#60aef3] to-[#f3dd86] flex items-center  ">
      <div className=" bg-white h-[300px] w-[25vw] rounded-[10px] flex flex-col items-center  m-auto">
        <div className="my-7">
          <YadeshLightLogo />
        </div>

        <p className="mt-1  text-[12px] font-bold text-[#000000]">
          کد تایید را وارد کنید
        </p>
        <label
          htmlFor="username"
          className="flex text-[#383838] mt-8 mb-3 -mr-[150px] font-bold text-[10px]"
        >
          کد دریافتی را وارد کنید
        </label>
        <section className="flex flex-row-reverse  w-[260px] justify-between">
          <input
            id="username"
            className="h-[45px] text-center text-[#000] w-[30px] bg-[#f0f2f3] outline-[#000]  rounded-[5px]  text-[13px]"
            type="number"
            ref={inputE1}
            onChange={({ target: { value } }) => {
              if (!isNaN(Number(value))) {
                Number(value);
                setenterCode(enterCode + value);
                inputE2.current.focus();
              } else {
                inputE1.current.value = "";
              }
            }}
          />
          <div className="flex items-center">-</div>
          <input
            id="username"
            className="h-[45px] text-center text-[#000] w-[30px] bg-[#f0f2f3] outline-[#000]  rounded-[5px]  text-[13px]"
            type="number"
            ref={inputE2}
            onChange={({ target: { value } }) => {
              if (!isNaN(Number(value))) {
                Number(value);
                setenterCode(enterCode + value);
                inputE3.current.focus();
              } else {
                inputE2.current.value = "";
              }
            }}
          />
          <div className="flex items-center">-</div>
          <input
            id="username"
            className="h-[45px] text-center text-[#000] w-[30px] bg-[#f0f2f3] outline-[#000]  rounded-[5px]  text-[13px]"
            type="number"
            ref={inputE3}
            onChange={({ target: { value } }) => {
              if (!isNaN(Number(value))) {
                Number(value);
                setenterCode(enterCode + value);
                inputE4.current.focus();
              } else {
                inputE3.current.value = "";
              }
            }}
          />
          <div className="flex items-center">-</div>
          <input
            id="username"
            className="h-[45px] text-center text-[#000] w-[30px] bg-[#f0f2f3] outline-[#000]  rounded-[5px]  text-[13px]"
            type="number"
            ref={inputE4}
            onChange={({ target: { value } }) => {
              if (!isNaN(Number(value))) {
                Number(value);
                setenterCode(enterCode + value);
                inputE5.current.focus();
              } else {
                inputE4.current.value = "";
              }
            }}
          />
          <div className="flex items-center">-</div>
          <input
            id="username"
            className="h-[45px] text-center text-[#000] w-[30px] bg-[#f0f2f3] outline-[#000]  rounded-[5px]  text-[13px]"
            type="number"
            ref={inputE5}
            onChange={({ target: { value } }) => {
              if (!isNaN(Number(value))) {
                Number(value);
                setenterCode(enterCode + value);
                inputE6.current.focus();
              } else {
                inputE5.current.value = "";
              }
            }}
          />
          <div className="flex items-center">-</div>
          <input
            id="username"
            className="h-[45px] text-center text-[#000] w-[30px] bg-[#f0f2f3] outline-[#000]  rounded-[5px]  text-[13px]"
            type="number"
            ref={inputE6}
            onChange={({ target: { value } }) => {
              if (!isNaN(Number(value))) {
                Number(value);
                setenterCode(enterCode + value);
                btnSubmit.current.focus();
              } else {
                inputE6.current.value = "";
              }
            }}
          />
        </section>

        <Link to="/adminlogin/changpassword">
          <button
            ref={btnSubmit}
            className="h-[45px] w-[267px] mt-5 bg-[#008043] text-[#ffffff] font-bold rounded-[5px] text-[11px]"
          >
            تایید
          </button>
        </Link>
      </div>
    </div>
  );
};
export default EnterCode;
