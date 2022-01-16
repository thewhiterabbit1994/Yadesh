import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import conlearnImg1 from "../../assets/Img/conlearnImg1.png";
import LogoPlay from "../../assets/Img/MostVeiw/logoPlay.svg";
import bgLogoPlay from "../../assets/Img/MostVeiw/bgLogoPlay.png";

const TodayMostViewLessons = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rtl: false,
    slidesToShow: 5,
    slidesToScroll: -1,
  };
  return (
    <div className=" h-[400px] bg-[#000405] ">
      <div className="pt-[50px] mr-[80px]">
        <div className="flex ">
          <div className="w-[5.5px] h-[18px] bg-[#00FF85] rounded-[10px] mt-1.5 ml-2"></div>
          <p className="text-[19px]  text-[#ffffff]">درس های پربازدید امروز</p>
        </div>
        <div>
          <p className="mt-[15px]  text-[#C4C4C4] text-[14px]">
            یادشی ها این ویدیو ها را بیشتر دیده اند
          </p>
        </div>
      </div>

      <div className="mr-[55px] mt-7 w-[90%] text-white">
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
