import conlearnImg1 from "../../assets/Img/conlearnImg1.png";
import _3Dots from "../../assets/svg/3Dots";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import { Link } from "react-router-dom";

export default () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.UserInfo.FavoriteEpisodes;
  let episodesData = [];
  const episodesDatabase = siteManagmentDatabase.Courses.forEach((Course) => {
    Course.Episodes.forEach((Episode) => {
      episodesData.push(Episode);
    });
  });
  return (
    <div
      className={`${data.isDisplayed ? "w-full h-fit bg-[#000405]" : "hidden"}`}
    >
      <div className="mr-[80px] pt-[20px]">
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
      <div className="w-[100%] flex flex-wrap pr-[6%]  mt-[25px]">
        {episodesData.map((item) => {
          return (
            <div className="ml-[20px] mb-[20px]">
              <Link to={`/home/PlayerEpisode/${item.EpisodeID}`}>
                <img
                  className="w-[200px] h-[120px] object-cover rounded"
                  src={item.PreviewImg}
                />
              </Link>
              <p className="text-white text-right  mt-5 text-[13px]">
                {item.EpisodeCategory}
              </p>
              <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
                <p className="text-[#C4C4C4] mt-[px] text-[11px]">
                  {item.TeacherName}
                </p>
              </div>
              <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
                {item.EpisodeDurationTime}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
