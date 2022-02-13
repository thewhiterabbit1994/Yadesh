import Slider from "react-slick";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import conlearnImg1 from "../../assets/Img/conlearnImg1.png";
import BgArrow from "../../assets/svg/adminPanelEpisode/BgArrow"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TodayMostViewLessons = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageLogin.TodayMostViewLessons;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rtl: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className=" h-[400px] bg-[#000405] ">
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
      </div>

      <div className="mr-[55px] mt-7 w-[90%] text-white relative ">
        <Slider {...settings}>
          <div className="">
            <img
              className="w-[200px] hover:blur-[2px] rounded"
              src={conlearnImg1}
            />
            <p className="text-right mr-[30px] mt-5 text-[13px]">
              بازار مالی و شناخت آن
            </p>
            <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
              <p className=" flex">درس ۱۴ </p>
              <p className=" text-[35px] px-4 -mt-[25px]">.</p>
              <p className="flex ">علی الله یاری</p>
            </div>
            <p className="text-[#C4C4C4] text-[11px] text-right mr-7">
              ۱۸ دقیقه
            </p>
          </div>
          <div>
            <img className="w-[200px] rounded" src={conlearnImg1} />
            <p className="text-right mr-[30px] mt-5 text-[13px]">
              بازار مالی و شناخت آن
            </p>
            <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
              <p className=" flex">درس ۱۴ </p>
              <p className=" text-[35px] px-4 -mt-[25px]">.</p>
              <p className="flex ">علی الله یاری</p>
            </div>
            <p className="text-[#C4C4C4] text-[11px] text-right mr-7">
              ۱۸ دقیقه
            </p>
          </div>
          <div>
            <img className="w-[200px] rounded" src={conlearnImg1} />
            <p className="text-right mr-[30px] mt-5 text-[13px]">
              بازار مالی و شناخت آن
            </p>
            <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
              <p className=" flex">درس ۱۴ </p>
              <p className=" text-[35px] px-4 -mt-[25px]">.</p>
              <p className="flex ">علی الله یاری</p>
            </div>
            <p className="text-[#C4C4C4] text-[11px] text-right mr-7">
              ۱۸ دقیقه
            </p>
          </div>
          <div>
            <img className="w-[200px] rounded" src={conlearnImg1} />
            <p className="text-right mr-[30px] mt-5 text-[13px]">
              بازار مالی و شناخت آن
            </p>
            <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
              <p className=" flex">درس ۱۴ </p>
              <p className=" text-[35px] px-4 -mt-[25px]">.</p>
              <p className="flex ">علی الله یاری</p>
            </div>
            <p className="text-[#C4C4C4] text-[11px] text-right mr-7">
              ۱۸ دقیقه
            </p>
          </div>
          <div>
            <img className="w-[200px] rounded" src={conlearnImg1} />
            <p className="text-right mr-[30px] mt-5 text-[13px]">
              بازار مالی و شناخت آن
            </p>
            <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
              <p className=" flex">درس ۱۴ </p>
              <p className=" text-[35px] px-4 -mt-[25px]">.</p>
              <p className="flex ">علی الله یاری</p>
            </div>
            <p className="text-[#C4C4C4] text-[11px] text-right mr-7">
              ۱۸ دقیقه
            </p>
          </div>
          <div>
            <img className="w-[200px] rounded" src={conlearnImg1} />
            <p className="text-right mr-[30px] mt-5 text-[13px]">
              بازار مالی و شناخت آن
            </p>
            <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
              <p className=" flex">درس ۱۴ </p>
              <p className=" text-[35px] px-4 -mt-[25px]">.</p>
              <p className="flex ">علی الله یاری</p>
            </div>
            <p className="text-[#C4C4C4] text-[11px] text-right mr-7">
              ۱۸ دقیقه
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default TodayMostViewLessons;
