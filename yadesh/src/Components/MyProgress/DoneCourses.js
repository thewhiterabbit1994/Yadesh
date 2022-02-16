import Slider from "react-slick";
import BigVerifiedIcon from "../../assets/svg/BigVerifiedIcon";
import PrevIcon from "../../assets/svg/PrevIcon";
import { useContext, useRef } from "react";
import { MainCounter } from "../../Context/Context";
import { Link } from "react-router-dom";

export default () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);
  const slider = useRef(null);

  const data = siteManagmentDatabase.MyProgress.DoneCourses;
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
      className={`h-[450px] w-full bg-[#000405] ${
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
      <div className="pl-1 mt-[25px] w-[95%] text-white">
        <Slider ref={slider} {...settings}>
          {episodes.map((item) => {
            return (
              <div>
                <Link to={`/home/PlayerEpisode/${item.EpisodeID}`}>
                  <img
                    className="w-[270px] h-[200px] object-cover rounded"
                    src={item.PreviewImg}
                  />
                </Link>
                <div className="relative  -right-[220px] -top-[190px]">
                  <div className="h-[40px] w-[40px] cursor-pointer rounded-full  pt-1.5 px-[6px] bg-[#626765]">
                    <BigVerifiedIcon />
                  </div>
                </div>

                <div className="flex -mt-[20px]">
                  <div>
                    <img
                      className="relative -right-[215px] rounded-full object-cover w-[55px] h-[55px]"
                      src={item.TeacherImg}
                    />
                  </div>
                  <div className="mt-[-15px] -ml-[5px]">
                    <p className="text-right text-[13px] mt-2 text-[#ffffff]">
                      {item.EpisodeCategory}
                    </p>
                    <p className="text-right text-[12px] mt-2 text-[#ffffff]">
                      {item.NameOfEpisode}
                    </p>
                    <p className="text-right mt-2 text-[#C4C4C4] text-[11px]">
                      {item.TeacherName}
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
        className="absolute top-[2470px] left-[70px] bg-[#283043] cursor-pointer w-[30px] h-[30px] rounded flex justify-center items-center"
      >
        <PrevIcon />
      </div>
      <div
        onClick={() => {
          slider?.current?.slickNext();
        }}
        className="absolute top-[2470px] left-[110px] bg-[#283043] cursor-pointer w-[30px] h-[30px] rotate-180 rounded flex justify-center items-center"
      >
        <PrevIcon />
      </div>
    </div>
  );
};
