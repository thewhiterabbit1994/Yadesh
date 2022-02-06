import LogoYadesh from "../../assets/svg/AboutUs/LogoYadesh";
import TxtYadesh from "../../assets/svg/AboutUs/TxtYadesh";
import DonbaleFelash from "../../assets/svg/AboutUs/DonbaleFelash";
import FelashDown from "../../assets/svg/AboutUs/FelashDown";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const Header = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.AboutYadesh.hero;
  return (
    <section className="w-full h-[550px] relative bg-[#000]">
      <section>
        <img src={data.imagery} className="w-[100%] h-[450px]" />
        <div className="absolute bg-gradient-to-t top-[0] from-[#000] via-[#000000f6] to-[#0000000e] w-[100%] h-[450px] rounded-lg"></div>
      </section>
      <section className="absolute top-[15%] right-[45%] flex mt-[30px]">
        <div className={`${data.isLogoDisplayed ? "" : "hidden"} ml-[10px]`}>
          <LogoYadesh />
        </div>
        <div className={`${data.isLogoDisplayed ? "" : "hidden"}`}>
          <TxtYadesh />
        </div>
        <div className="absolute top-[50px] left-[-270px] w-[600px] text-center  m-auto">
          <h6 className="text-[#E6FFF3] text-[36px]">{data.title}</h6>
          <h6 className="text-[#C4C4C4] text-[16px] mt-[20px] w-[400px] text-center m-auto leading-[35px]">
            {data.subTitle}
          </h6>
        </div>
        <section className="absolute top-[180px] right-[60px]">
          <div>
            <DonbaleFelash />
          </div>
          <div className="absolute left-[-4px]">
            <FelashDown />
          </div>
        </section>
      </section>
    </section>
  );
};
export default Header;
