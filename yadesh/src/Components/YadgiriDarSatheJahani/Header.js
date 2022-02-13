import Star from "../../assets/svg/Star";
import Arrow from "../../assets/svg/Aroow";
import FatAroow from "../../assets/svg/FatAroow";
import manPng from "../../assets/Img/yadgiriDarSatheJahani/manPng.png";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import { Link } from "react-router-dom";

const Header = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);

  const herodata = siteManagmentDatabase.YadeshForOrganization.hero;
  const teacherdata = siteManagmentDatabase.YadeshForOrganization.Teachers;
  return (
    <div className="bg-[#000]">
      <section className="relative h-[600px] ">
        <div className=" w-full ">
          <img src={herodata.imagery} />
        </div>

        <section className=" absolute text-[#E6E9EB] flex flex-col items-center w-full top-[200px] z-10">
          <div className="mb-[20px] text-[40px]">
            <p>{herodata.title}</p>
          </div>
          <div className="mb-[20px] text-[17px] w-[467px] h-[71px] text-center leading-[33px]">
            <p>{herodata.subTitle}</p>
          </div>
          <div>
            <Link to="/aboutus">
              <button className="text-[12px] bg-[#00000073] text-[#E6FFF3] w-[150px] h-[46px] rounded border-solid border-[#00FF85] border-2 ml-[20px] ">
                {" "}
                بیشتر بدانید
              </button>
            </Link>
            <Link to="/home/signupforbusiness">
              <button className=" font-black text-[12px] text-[#000] bg-[#00FF85] w-[150px] h-[46px] rounded">
                {" "}
                به یادش بپیوندید
              </button>
            </Link>
          </div>
          <div className="mt-[20px]">
            <Star />
          </div>
          <div className="mt-[20px] w-[319px] h-[44px] text-[10px]">
            <p>{herodata.description}</p>
          </div>
          <div className="mb-[-50px]  absolute top-[250px]">
            <FatAroow />
            <div className="absolute right-[-4px]">
              <Arrow />
            </div>
          </div>
        </section>
        <div className="absolute bg-gradient-to-t top-[0] from-[#000] via-[#00000094] to-[#0000000e] w-[100%] h-[80vh] rounded-lg"></div>
      </section>

      <section className="bg-[#000] w-[100%] h-[600px] ">
        <div className="flex flex-col items-center leading-[40px] justify-center mt-[100px] mb-[50px] ">
          <p className="text-[22px] text-[#E6E9EB]">{teacherdata.title}</p>
          <p className="text-[16px] text-[#C4C4C4]">{teacherdata.subTitle}</p>
          <div className="border-t-[7px] w-[20px] rounded border-[#00FF85]"></div>
        </div>
        <div className="flex bg-[#000] w-[100%] h-[80vh] justify-center">
          <div className="relative text-[#E6E9EB]">
            <img
              src={manPng}
              className=" w-[180px] h-[380px]  ml-[20px] rounded-lg relative"
            />
            <div className="absolute bg-gradient-to-t top-[0] from-[#00121A] via-[#00121a88] to-[#00121a00] w-[90%] h-[380px] rounded-lg"></div>
            <h6 className="absolute top-[300px] left-[52px] text-[14px]">
              {" "}
              شهاب علی بخشی{" "}
            </h6>
            <h6 className="absolute top-[340px] left-[65px] text-[12px] text-[#C4C4C4]">
              {" "}
              مشاور رسانه ای{" "}
            </h6>
          </div>
          <div className="relative text-[#E6E9EB]">
            <img
              src={manPng}
              className=" relative w-[180px] h-[380px] ml-[20px] rounded-lg"
            />
            <div className="absolute bg-gradient-to-t top-[0] from-[#00121A] via-[#00121a88] to-[#00121a00] w-[90%] h-[380px] rounded-lg"></div>
            <h6 className="absolute top-[300px] left-[52px] text-[14px]">
              {" "}
              شهاب علی بخشی{" "}
            </h6>
            <h6 className="absolute top-[340px] left-[65px] text-[12px] text-[#C4C4C4]">
              {" "}
              مشاور رسانه ای{" "}
            </h6>
          </div>
          <div className="relative text-[#E6E9EB]">
            <img
              src={manPng}
              className=" relative w-[180px] h-[380px]  ml-[20px] rounded-lg"
            />
            <div className="absolute bg-gradient-to-t top-[0] from-[#00121A] via-[#00121a88] to-[#00121a00] w-[90%] h-[380px] rounded-lg"></div>
            <h6 className="absolute top-[300px] left-[52px] text-[14px]">
              {" "}
              شهاب علی بخشی{" "}
            </h6>
            <h6 className="absolute top-[340px] left-[65px] text-[12px] text-[#C4C4C4]">
              {" "}
              مشاور رسانه ای{" "}
            </h6>
          </div>
          <div className="relative text-[#E6E9EB]">
            <img
              src={manPng}
              className="relative w-[180px] h-[380px] rounded-lg ml-[20px]"
            />
            <div className="absolute bg-gradient-to-t top-[0] from-[#00121A] via-[#00121a88] to-[#00121a00] w-[90%] h-[380px] rounded-lg"></div>
            <h6 className="absolute top-[300px] left-[52px] text-[14px]">
              {" "}
              شهاب علی بخشی{" "}
            </h6>
            <h6 className="absolute top-[340px] left-[65px] text-[12px] text-[#C4C4C4]">
              {" "}
              مشاور رسانه ای{" "}
            </h6>
          </div>
          <div className="relative text-[#E6E9EB]">
            <img
              src={manPng}
              className="relative w-[180px] h-[380px] rounded-lg ml-[20px]"
            />
            <div className="absolute bg-gradient-to-t top-[0] from-[#00121A] via-[#00121a88] to-[#00121a00] w-[90%] h-[380px] rounded-lg"></div>
            <h6 className="absolute top-[300px] left-[52px] text-[14px]">
              {" "}
              شهاب علی بخشی{" "}
            </h6>
            <h6 className="absolute top-[340px] left-[65px] text-[12px] text-[#C4C4C4]">
              {" "}
              مشاور رسانه ای{" "}
            </h6>
          </div>
          <div className="relative text-[#E6E9EB]">
            <img
              src={manPng}
              className="ralative w-[180px] h-[380px] rounded-lg"
            />
            <div className="absolute bg-gradient-to-t top-[0] from-[#00121A] via-[#00121a88] to-[#00121a00] w-[100%] h-[380px] rounded-lg"></div>
            <h6 className="absolute top-[300px] left-[45px] text-[14px]">
              {" "}
              شهاب علی بخشی{" "}
            </h6>
            <h6 className="absolute top-[340px] left-[55px] text-[#C4C4C4] text-[12px] text-center ">
              {" "}
              مشاور رسانه ای{" "}
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
