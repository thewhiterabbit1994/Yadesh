import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import MyProgressRocket from "../../assets/svg/MyProgressRocket";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import conlearnImg1 from "../../assets/Img/conlearnImg1.png";

const ContinueLearning = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageLogin.ContinueLearning;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rtl: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div
      className={`flex h-[340px] bg-[#000E14] ${
        data.isDisplayed ? "" : "hidden"
      }`}
    >
      <div className="pt-[50px] mr-[80px]">
        <div className="flex ">
          <div className="w-[5.5px] h-[18px] bg-[#00FF85] rounded-[10px] mt-1.5 ml-2"></div>
          <p className="text-[19px]  text-[#ffffff]">{data.title}</p>
        </div>
        <div>
          <p className="mt-[15px]  text-[#C4C4C4] text-[14px]">
            {data.subTitle}
          </p>
        </div>
        <div className="mt-[120px]">
          <button className="flex flex-row w-[135px] h-[40px] text-[12px] border-[1.5px] ml-[20px] text-[#ffffff] rounded-[6px] border-[#80FFC2]">
            <div className="mt-2.5 mr-4">
              <MyProgressRocket />
            </div>
            <Link to={"/home/myprogress"}>
              <p className="mt-2.5 mr-3">پیشرفت من</p>
            </Link>
          </button>
          <p className="mt-3 text-[#C4C4C4] text-[11px]">
            از اینجا پیشرفت خود را ببینید
          </p>
        </div>
      </div>

      <div className="pl-1 mt-24 w-[75%] text-white">
        <Slider {...settings}>
          <div className="">
            <img className="w-[200px] rounded" src={conlearnImg1} />
            <p className="text-right mr-[37px] mt-5 text-[13px]">
              بازار مالی و شناخت آن
            </p>
            <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
              <p className=" flex">درس ۱۴ </p>
              <p className=" text-[35px] px-4 -mt-[25px]">.</p>
              <p className="flex ">علی الله یاری</p>
            </div>
          </div>
          <div>
            <img className="w-[200px] rounded" src={conlearnImg1} />
            <p className="text-right mr-[37px] mt-5 text-[13px]">
              بازار مالی و شناخت آن
            </p>
            <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
              <p className=" flex">درس ۱۴ </p>
              <p className=" text-[35px] px-4 -mt-[25px]">.</p>
              <p className="flex ">علی الله یاری</p>
            </div>
          </div>
          <div>
            <img className="w-[200px] rounded" src={conlearnImg1} />
            <p className="text-right mr-[37px] mt-5 text-[13px]">
              بازار مالی و شناخت آن
            </p>
            <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
              <p className=" flex">درس ۱۴ </p>
              <p className=" text-[35px] px-4 -mt-[25px]">.</p>
              <p className="flex ">علی الله یاری</p>
            </div>
          </div>
          <div>
            <img className="w-[200px] rounded" src={conlearnImg1} />
            <p className="text-right mr-[37px] mt-5 text-[13px]">
              بازار مالی و شناخت آن
            </p>
            <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
              <p className=" flex">درس ۱۴ </p>
              <p className=" text-[35px] px-4 -mt-[25px]">.</p>
              <p className="flex ">علی الله یاری</p>
            </div>
          </div>
          <div>
            <img className="w-[200px] rounded" src={conlearnImg1} />
            <p className="text-right mr-[37px] mt-5 text-[13px]">
              بازار مالی و شناخت آن
            </p>
            <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
              <p className=" flex">درس ۱۴ </p>
              <p className=" text-[35px] px-4 -mt-[25px]">.</p>
              <p className="flex ">علی الله یاری</p>
            </div>
          </div>
          <div>
            <img className="w-[200px] rounded" src={conlearnImg1} />
            <p className="text-right mr-[37px] mt-5 text-[13px]">
              بازار مالی و شناخت آن
            </p>
            <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
              <p className=" flex">درس ۱۴ </p>
              <p className=" text-[35px] px-4 -mt-[25px]">.</p>
              <p className="flex ">علی الله یاری</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default ContinueLearning;
