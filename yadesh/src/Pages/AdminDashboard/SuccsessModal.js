import { Link } from "react-router-dom";
import Succses from "../../assets/svg/AdminLogin/Succses"
const SuccsessModal = () => {
    return (
        <div className="h-[100vh] w-full bg-gradient-to-br from-[#5eca9f] via-[#60aef3] to-[#f3dd86] flex items-center  ">
            <div className=" bg-white h-[270px] w-[25vw] rounded-[10px] flex flex-col items-center  m-auto">
                <div className="relative my-7 bg-[#D5D5D5] rounded-[50%] w-[50px] h-[50px]">
                    <div className="absolute top-[20%] right-[25%]">
                        <Succses />
                    </div>
                </div>

                <p className="mt-1  text-[12px] font-bold text-[#000000] relative top-[30px]">
                  رمزعبور شما با موفقیت تغییر کرد
                </p>
                <label
                    htmlFor="username"
                    className="flex text-[#383838] mt-8 mb-3 -mr-[190px] font-bold text-[10px]"
                >
                </label>
                <Link to="/home">
                    <button className="h-[45px] w-[267px] mt-5 bg-[#124e32] text-[#ffffff] font-bold rounded-[5px] text-[11px]">
                       بازگشت به صفحه ورود
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default SuccsessModal