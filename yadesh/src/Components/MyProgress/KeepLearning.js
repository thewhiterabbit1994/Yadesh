import Slider from "react-slick";
import BrandImg from "../../assets/Img/BrandImg.png";
import TeacherImg1 from "../../assets/Img/TeacherImg1.png";
import _3Dots from "../../assets/svg/3Dots";
import BtnPlay from "../../assets/svg/BtnPlay";
import { useContext, useRef } from "react";
import { MainCounter } from "../../Context/Context";
import { Link } from "react-router-dom";
import PrevIcon from "../../assets/svg/PrevIcon";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

export default () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);
  const slider = useRef(null);

  const data = siteManagmentDatabase.MyProgress.KeepLearning;

  let episodesData = [];
  const episodesDatabase = siteManagmentDatabase.Courses.forEach((Course) => {
    Course.Episodes.forEach((Episode) => {
      episodesData.push(Episode);
    });
  });
  let episodes = [];
  for (let i = 0; i < 10; i++) {
    episodes.push(episodesData[i]);
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    arrows: false,
  };
  return (
    <div
      className={`h-[520px] w-full bg-[#000405] ${
        data.isDisplayed ? "" : "hidden"
      }`}
    >
      <div className="mr-[80px] pt-[30px]">
        <div className="flex ">
          <div className="w-[5.5px] h-[18px] bg-[#00FF85] rounded-[10px] mt-1.5 ml-2"></div>
          <p className="text-[19px]  text-[#ffffff]">{data.title}</p>
        </div>
        <div>
          <p className="mt-[15px] text-[#C4C4C4] text-[14px]">
            {data.subTitle}
          </p>
        </div>
      </div>

      <div className="mr-[50px] mt-[25px] w-[95%] text-white">
        <Slider ref={slider} {...settings}>
          {episodes.map((item) => {
            return (
              <div>
                <img
                  className="w-[270px] h-[180px] object-cover rounded"
                  src={item.PreviewImg}
                />
                <div className="relative  -right-[230px] -top-[170px]">
                  <div className="h-[30px] w-[30px] cursor-pointer rounded pt-2 px-[13px] bg-[#626765]">
                    <_3Dots />
                  </div>
                </div>
                <div className="relative -right-[70px] -top-[90px]">
                  <button className="flex flex-row-reverse font-semibold w-[135px] h-[40px] text-[11px] rounded-[6px] bg-[#80ffc2] ">
                    <Link
                      className="flex flex-row-reverse"
                      to={`/home/PlayerEpisode/${item.EpisodeID}`}
                    >
                      <div className="mt-3 mr-6">
                        <BtnPlay />
                      </div>
                      <p className="mt-3 mr-3  text-black"> ادامه دهید</p>
                    </Link>
                  </button>
                </div>
                <div className="flex -mt-[50px]">
                  <div>
                    <img
                      className="relative -right-[215px] top-[-5px] object-cover rounded-full w-[55px] h-[55px]"
                      src={item.TeacherImg}
                    />
                  </div>
                  <div className=" mt-[-15px] -ml-[5px]">
                    <p className="text-right  text-[13px] mt-2 text-[#ffffff]">
                      {item.EpisodeCategory}
                    </p>
                    <p className="text-right text-[12px] mt-2 text-[#ffffff]">
                      {item.NameOfEpisode}
                    </p>

                    <p className="text-right mt-2 text-[#C4C4C4] text-[11px]">
                      {item.TeacherName} - {item.EpisodeView}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div
        onClick={() => {
          slider?.current?.slickPrev();
        }}
        className="absolute top-[280px] left-[70px] bg-[#283043] cursor-pointer w-[30px] h-[30px] rounded flex justify-center items-center"
      >
        <PrevIcon />
      </div>
      <div
        onClick={() => {
          slider?.current?.slickNext();
        }}
        className="absolute top-[280px] left-[110px] bg-[#283043] cursor-pointer w-[30px] h-[30px] rotate-180 rounded flex justify-center items-center"
      >
        <PrevIcon />
      </div>
    </div>
  );
};
