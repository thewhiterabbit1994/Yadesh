import Slider from "react-slick";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import conlearnImg1 from "../../assets/Img/conlearnImg1.png";
import BgArrow from "../../assets/svg/adminPanelEpisode/BgArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TodayMostViewLessons = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageLogin.TodayMostViewLessons;
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
    slidesToShow: 5,
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
          {episodes.map((item) => {
            return (
              <div className="">
                <Link to={`/home/PlayerEpisode/${item.EpisodeID}`}>
                  <img
                    className="w-[200px] h-[120px] rounded"
                    src={item.PreviewImg}
                  />
                </Link>
                <p className="text-right mr-[30px] mt-5 text-[13px]">
                  {item.EpisodeCategory}
                </p>
                <div className="flex flex-row justify-end w-[200px] pr-[3px] mt-[10px] text-[#C4C4C4] text-[11px]">
                  <p className=" flex">{item.NameOfEpisode}</p>
                  <p className=" text-[35px] px-1 -mt-[25px]">.</p>
                  <p className="flex ">{item.TeacherName}</p>
                </div>
                <p className="text-[#C4C4C4] text-[11px] text-right mr-[30px]">
                  ۱۸ دقیقه
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default TodayMostViewLessons;
