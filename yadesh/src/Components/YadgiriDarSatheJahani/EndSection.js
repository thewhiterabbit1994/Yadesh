import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const EndSection = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.YadeshForOrganization.JoinToYadesh;
  return (
    <section
      className={`${
        data.isDisplayed ? "w-full h-[60vh] bg-[#000] pt-[3rem] " : "hidden"
      }`}
    >
      <section className="relative ">
        <img src={data.imagery} />
        <div className="absolute mt-[-233px] w-full h-[41vh] bg-gradient-to-t from-[#000] to-[#00000048]"></div>
        <section className="absolute top-[0] flex flex-col justify-center items-center w-[100%] h-[100%] leading-[40px]">
          <div>
            <h5 className="text-[#E6FFF3] text-[20px]">{data.title}</h5>
          </div>
          <div>
            <h5 className="text-[#C4C4C4] text-[16px]">{data.subTitle}</h5>
          </div>
          <div className="border-t-[7px] w-[20px] rounded border-[#00FF85] mb-[15px]"></div>
          <div>
            <button className="text-[12px] text-[#000] bg-[#00ff85] w-[140px] h-[43px] rounded-[6px]">
              {" "}
              به یادش بپیوندید
            </button>
          </div>
        </section>
      </section>
    </section>
  );
};
export default EndSection;
