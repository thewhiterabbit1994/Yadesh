import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { MainCounter } from "../../Context/Context";
import MyProgressRocket from "../../assets/svg/MyProgressRocket";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PrevIcon from "../../assets/svg/PrevIcon";

const ContinueLearning = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);
  const slider = useRef(null);

  const data = siteManagmentDatabase.HomePageLogin.ContinueLearning;
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
    arrows: false,
    slidesToShow: 4,
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
        <Slider ref={slider} {...settings}>
          {episodes.map((item) => {
            return (
              <div className="">
                <Link to={`/home/PlayerEpisode/${item.EpisodeID}`}>
                  <img
                    className="w-[200px] h-[120px] object-cover rounded"
                    src={item.PreviewImg}
                  />
                </Link>
                <p className="text-right mr-[37px] mt-5 text-[13px]">
                  {item.EpisodeCategory}
                </p>
                <div className="flex flex-row justify-end w-[200px] mt-[10px] text-[#C4C4C4] text-[11px]">
                  <p className=" flex">{item.NameOfEpisode}</p>
                  <p className=" text-[35px] px-1 -mt-[25px]">.</p>
                  <p className="flex ">{item.TeacherName}</p>
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
        className="absolute top-[690px] left-[70px] bg-[#283043] cursor-pointer w-[30px] h-[30px] rounded flex justify-center items-center"
      >
        <PrevIcon />
      </div>
      <div
        onClick={() => {
          slider?.current?.slickNext();
        }}
        className="absolute top-[690px] left-[110px] bg-[#283043] cursor-pointer w-[30px] h-[30px] rotate-180 rounded flex justify-center items-center"
      >
        <PrevIcon />
      </div>
    </div>
  );
};
export default ContinueLearning;
