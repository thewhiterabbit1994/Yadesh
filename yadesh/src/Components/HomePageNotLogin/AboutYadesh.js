import Ellipse from "../../assets/svg/HomePageNotLogin/Ellipse";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const Aboutyadesh = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);
  const data = siteManagmentDatabase.HomePageNotLogin.aboutYadesh;
  return (
    <div className="w-full  bg-[#000] flex pb-[7rem] relative z-10">
      <div className="absolute top-[-100px] -z-10">
        <Ellipse />
      </div>
      <section className=" flex justify-center mr-[10px] ">
        <img
          src={data.imagery}
          className="w-[500pxpx] h-[310px] rounded mr-[7rem] "
        />
        ّ
      </section>
      <section className="w-[530px] h-[310px] flex flex-col justify-center  mr-[10px]  ">
        <div className="mr-[50px]">
          <div className="flex text-[#E6FFF3] w-[178px] h-[22px] text-[22px]">
            <div className="border-[#00FF85]  border-r-[7px] ml-[7px] rounded h-[22px] mt-[8px]">
              {" "}
            </div>
            <h6 className="font-medium">{data.title}</h6>
          </div>
          <h6 className="text-[#C4C4C4] text-[15px] w-[189px] h-[18px] mt-[23px]">
            {data.subTitle}
          </h6>
        </div>
        <div className="text-[#C4C4C4] text-[13px] pt-[30px] leading-[40px] flex justify-center mr-[50px]">
          <p className="w-[480px] h-[100px] text-justify">{data.description}</p>
        </div>
        <div className="mt-[30px] mr-[50px]">
          <Link to="/aboutus">
            <button className="text-[12px] text-[#E6FFF3] w-[140px] h-[43px] rounded-[6px] border-solid border-[#80ffc2] border-[1.5px] ml-[20px] ">
              {" "}
              بیشتر بدانید
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Aboutyadesh;
