import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const PelaneSazmani = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageNotLogin.pelanSazmani;
  return (
    <div className="bg-[#000] w-[100%] flex justify-center">
      <section className="w-[100%] bg-[#000E14] h-[50vh] flex rounded mb-[2rem]">
        <section className="w-[650px] flex flex-col  h-[320px]  justify-center mr-[130px]">
          <div className="text-[#E6FFF3] text-[20px] flex w-[155px] mt-[-40px] mb-3 h-[40px]">
            <div className="border-[#00FF85]   border-r-[7px] ml-[7px] h-[20px] mt-[5px] rounded-[6px] "></div>
            <h6>{data.title}</h6>
          </div>
          <div className=" text-[14px] leading-10 text-[#C4C4C4]">
            <h6 className="w-[524px] h-[83px]">{data.subTitle}</h6>
          </div>
          <div className="mt-[25px]  w-[75%]">
            <Link to="/home/forbusiness">
              <button className="text-[12px] text-[#E6FFF3] w-[140px] h-[43px] rounded border-solid border-[#00FF85] border-2 ml-[7px] ">
                {" "}
                بیشتر بدانید
              </button>
            </Link>
          </div>
        </section>
        <section className="w-[350px]  h-[280px] relative flex  ">
          <div>
            <img
              src={data.imagery}
              className="w-[350px] object-cover  h-[280px] rounded-[10px] absolute top-[-26px]"
            />
          </div>
        </section>
      </section>
    </div>
  );
};
export default PelaneSazmani;
