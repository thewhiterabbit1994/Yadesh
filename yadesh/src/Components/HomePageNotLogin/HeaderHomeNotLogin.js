import TicIcon from "../../assets/svg/HomePageNotLogin/TikIcon";
import Ellipse from "../../assets/svg/HomePageNotLogin/Ellipse";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const HeaderHomeNotLogin = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);
  const data = siteManagmentDatabase.HomePageNotLogin.hero;
  console.log("header", siteManagmentDatabase);
  return (
    <section className="w-full bg-black  h-[700px] flex justify-center mt-[-2rem] ">
      <div className="absolute z-[10]">
        <Ellipse />
      </div>
      <div className=" w-[725px] h-[562px] mt-[100px] relative -mr-[80px] z-[20]">
        <img
          src={data.imagery.img1}
          className="w-[300px] h-[150px] absolute  left-[0px] top-[0] rounded-lg"
        />
        <img
          src={data.imagery.img2}
          className="w-[300px] h-[300px] absolute left-[320px] top-[0] rounded-lg"
        />
        <img
          src={data.imagery.img3}
          className="w-[145px] h-[140px] absolute left-[155px] top-[170px] rounded-lg"
        />
        <img
          src={data.imagery.img4}
          className="w-[140px] h-[270px] absolute left-[0] top-[170px] rounded-lg"
        />
        <img
          src={data.imagery.img5}
          className="w-[460px] h-[120px] absolute left-[160px] top-[320px] rounded-lg"
        />
      </div>

      <div className="   w-[414px] h-[405px]  mt-[140px] mr-[60px] ">
        <div>
          <h1 className="text-[#E6FFF3] font-medium text-[28px] w-[414px] h-[50px] leading-[50px] ">
            {data.title}
          </h1>
          <p className=" w-[414px] h-[85px] text-[14px] mt-[1rem] text-[#C4C4C4] leading-[40px]">
            {data.subTitle}
          </p>
        </div>

        <div className="flex mt-[20px] w-full ">
          <Link to="/aboutus" className="z-[40]">
            <button className="text-[12px]  text-[#E6FFF3] w-[140px] h-[43px] rounded-[6px] border-solid border-[#80ffc2] border-[1.5px] ml-[20px] ">
              {" "}
              بیشتر بدانید
            </button>
          </Link>
          <Link to={"/home/signupforbusiness"} className="z-[40]">
            <button className="text-[12px]  cursor-pointer text-[#000] bg-[#00ff85] w-[140px] h-[43px] rounded-[6px]">
              ثبت نام
            </button>
          </Link>
        </div>

        <div className="text-white  font-normal ">
          <div className="flex mt-[30px]">
            <div className="border-[#00FF85] opacity-80  border-r-[6px] ml-[7px] mr-[7px] rounded ">
              {" "}
            </div>
            <p className=" w-[155px] h-[20px] text-[14px]">
              {data.description}
            </p>
          </div>
          <div className="flex  mt-[20px] text-[12px] text-[#C4C4C4]">
            <TicIcon />
            <p className=" opacity-80 mr-[7px]  w-[207px] h-[19px]">
              {data.attributes.first}
            </p>
          </div>
          <div className="flex  mt-[20px] text-[12px] text-[#C4C4C4]">
            <TicIcon />
            <p className=" opacity-90  mr-[7px] w-[167px] h-[20px]">
              {data.attributes.second}
            </p>
          </div>
          <div className="flex  mt-[20px] text-[12px] text-[#C4C4C4]">
            <TicIcon />
            <p className=" opacity-80  mr-[7px] w-[225px] h-[18px]">
              {data.attributes.third}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeaderHomeNotLogin;
