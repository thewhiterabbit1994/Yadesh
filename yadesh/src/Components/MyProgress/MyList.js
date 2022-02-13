import MyListImg from "../../assets/Img/MyListImg.png";
import _3Dots from "../../assets/svg/3Dots";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import { Link } from "react-router-dom";

export default () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.MyProgress.MyList;
  let episodesData = [];
  const episodesDatabase = siteManagmentDatabase.Courses.forEach((Course) => {
    Course.Episodes.forEach((Episode) => {
      episodesData.push(Episode);
    });
  });
  let episodes = [];
  for (let i = 0; i < 6; i++) {
    episodes.push(episodesData[i]);
  }

  return (
    <div
      className={`w-full h-fit bg-[#000405] ${
        data.isDisplayed ? "" : "hidden"
      }`}
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
      <div className="w-[100%] grid grid-cols-3 align-center place-items-center  mt-[25px]">
        {episodes.map((item) => {
          return (
            <div className="ml-[px]">
              <Link to={`/home/PlayerEpisode/${item.EpisodeID}`}>
                <div className="absolute w-[310px] h-[310px] bg-gradient-to-t from-black to-[#0000]"></div>
                <img
                  className="w-[310px] h-[310px] object-cover rounded "
                  src={item.PreviewImg}
                />
                <div className=" relative -top-[300px] right-[10px] h-[30px] w-[30px] cursor-pointer rounded pt-2 px-[13px] bg-[#626765]">
                  <_3Dots />
                </div>
                <div className=" relative right-[10px] -top-[110px]">
                  <p className="text-[14px] w-[310px]   text-[#ffffff]">
                    {item.EpisodeCategory} - {item.NameOfEpisode}
                  </p>
                  <p className="text-[#C4C4C4] mt-[8px] text-[13px]">
                    {item.TeacherName}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
