import { useState, useRef, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { MainCounter } from "../../Context/Context";

import "../../index.css";
import Imgman from "../../assets/Img/PlayerEpisode/imgman.png";
import Yaddasht from "../../assets/svg/PlayerEpisode/Yaddasht";
import Dislike from "../../assets/svg/PlayerEpisode/Dislike";
import Humborger from "../../assets/svg/PlayerEpisode/Humborgrt";
import Like from "../../assets/svg/PlayerEpisode/Like";
import Resize from "../../assets/svg/PlayerEpisode/Resize";
import Play from "../../assets/svg/PlayerEpisode/Nexd";
import Stop from "../../assets/svg/PlayerEpisode/Stop";
import Volume from "../../assets/svg/PlayerEpisode/Volume";
import Imgmap from "../../assets/Img/PlayerEpisode/imgMap.png";
import ArrowDown from "../../assets/svg/PlayerEpisode/ArrowDown";

const Header = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);
  let database = [];
  const { id } = useParams();
  const data = siteManagmentDatabase.Courses.forEach((Course) => {
    Course.Episodes.forEach((Episode) => {
      database.push(Episode);
    });
  });
  const Coursedata = siteManagmentDatabase.Courses;
  const Episode = database.find((Episode) => Episode.EpisodeID === id);

  const Course = Coursedata.filter(
    (Course) => Course.CourseID === Episode.CourseID
  );
  let forIndex = 0;
  if (Course[0].Episodes.length < 4) {
    forIndex = Course[0].Episodes.length;
  } else {
    forIndex = 4;
  }
  const fourOfCourse = [];
  for (let i = 0; i < forIndex; i++) {
    fourOfCourse.push(Course[0].Episodes[i]);
  }

  const [isPlaying, setisPlaying] = useState(false);
  const player = useRef();

  function handleplay() {
    player.current.play();
  }

  function handlepause() {
    player.current.pause();
  }
  const [ismuteiconshow, setismuteiconshow] = useState(false);
  function handlemute() {
    player.current.muted = !player.current.muted;
    setismuteiconshow(!ismuteiconshow);
  }
  function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

    return {
      hours: result.substr(0, 2),
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2),
    };
  }
  const [durationTime, setdurationTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [currentTime, setCurrentTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [maxseek, setmaxseek] = useState(0);
  const [seekValue, setseekValue] = useState(0);
  const [maxbar, setmaxbar] = useState(0);
  const [barValue, setbarValue] = useState(0);
  const [showControlBar, setshowControlBar] = useState(false);

  function updateTimeElapsed() {
    setCurrentTime(formatTime(Math.round(player.current.currentTime)));
    setseekValue(Math.round(player.current.currentTime));
    setbarValue(Math.round(player.current.currentTime));
    setvolumeValue(player.current.volume);
  }

  const [volumeValue, setvolumeValue] = useState(0);
  function skipAhead(event) {
    const skipTo = event.target.dataset.seek
      ? event.target.dataset.seek
      : event.target.value;
    player.current.currentTime = skipTo;
    setbarValue(skipTo);
    setseekValue(skipTo);
  }
  function updateVolume(e) {
    const skipTo = e.target.value;
    player.current.volume = skipTo;

    setvolumeValue(skipTo);
  }

  function initializeVideoDuration() {
    const videoDuration = Math.round(player.current.duration);
    setdurationTime(formatTime(videoDuration));
    setmaxseek(videoDuration);
    setmaxbar(videoDuration);
  }

  const [isFullScreen, setisFullScreen] = useState(false);
  function toggleFullScreen() {
    setisFullScreen(true);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
      document.webkitExitFullscreen();
    } else if (player.current.webkitRequestFullscreen) {
      player.current.webkitRequestFullscreen();
      setisFullScreen(false);
    } else {
      player.current.requestFullscreen();
      setisFullScreen(false);
    }
  }

  return (
    <section className="w-full h-[1300px] bg-[#000] flex">
      <div className="w-[800px] mt-[80px] mr-[50px] relative h-[450px]">
        <section className="text-[#fff] text-[20px] mr-[15px] my-[15px]">
          <h6>
            {Episode.EpisodeCategory} - {Episode.NameOfEpisode}
          </h6>
        </section>
        {/* <div
          className="cursor-pointer"
          onMouseEnter={() => setshowControlBar(true)}
          onMouseLeave={() => setshowControlBar(false)}
          style={{ borderRadius: "10px", width: "730px", height: "450px" }}
        > */}
        <video
          ref={player}
          onTimeUpdate={updateTimeElapsed}
          onMouseEnter={() => setshowControlBar(true)}
          onMouseLeave={() => setshowControlBar(false)}
          onClick={() => {
            if (isPlaying) {
              handlepause();
              setisPlaying(false);
            }
            if (!isPlaying) {
              handleplay();
              setisPlaying(true);
            }
          }}
          poster={Episode.PreviewImg}
          controls={isFullScreen ? true : false}
          controlsList={"nodownload"}
          class="video"
          src={Episode.Video}
        ></video>
        {/* </div> */}

        <div
          className={`${
            showControlBar
              ? " h-[40px] absolute mt-[-48px] w-[730px]"
              : " hidden"
          }`}
        >
          <div
            onMouseEnter={() => setshowControlBar(true)}
            onMouseLeave={() => setshowControlBar(false)}
            className="flex relative bg-white   mt-12"
          >
            <section className=" absolute bottom-[355px] cursor-pointer right-[5px] z-10 bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
              <div
                onClick={toggleFullScreen}
                className="absolute right-[11px] top-[11.5px]"
              >
                <Resize />
              </div>
            </section>
            {/* <section className=" absolute bottom-[10px] right-[70px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
              <div className="absolute right-[10px] top-[10px]">
                <Setting />
              </div>
            </section> */}
          </div>
          <div
            onMouseEnter={() => setshowControlBar(true)}
            onMouseLeave={() => setshowControlBar(false)}
            className="flex relative   "
          >
            <div className="absolute w-[730px] h-[60px]  bg-gradient-to-t from-[#000000cc] bottom-[80px] to-[#0000]"></div>
            <div className="absolute w-[730px] h-[60px]  bg-gradient-to-b from-[#000000cc] top-[-400px] to-[#0000]"></div>

            <section className=" absolute bg-[#00121ad2] w-[155px] h-[40px] rounded-[50px] bottom-[80px] left-[50px] text-[#fff]">
              <p className="absolute top-[8.5px] right-[6px]">
                {" "}
                {durationTime.hours}:{durationTime.minutes}:
                {durationTime.seconds} / {currentTime.hours}:
                {currentTime.minutes}:{currentTime.seconds}
              </p>
            </section>
            <section
              onClick={handlemute}
              className="cursor-pointer absolute bottom-[80px] right-[5px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]"
            >
              <div className={`absolute right-[11px] top-[11.5px]`}>
                <Volume />
                <div
                  className={`${
                    ismuteiconshow
                      ? "text-[30px] text-white rotate-[190deg] ml-1 mt-[-33px]"
                      : "hidden"
                  }`}
                >
                  /
                </div>
              </div>
            </section>
            <section
              onClick={() => {
                handleplay();
                setisPlaying(true);
                initializeVideoDuration();
              }}
              className={`transform transition-opacity duration-500  ${
                isPlaying
                  ? "opacity-0"
                  : "opacity-100 cursor-pointer absolute bottom-[80px] left-[5px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]"
              }`}
            >
              <div className="absolute right-[8px] top-[11.5px]">
                <Play />
              </div>
            </section>
            <section
              onClick={() => {
                handlepause();
                setisPlaying(false);
              }}
              className={`transform transition-opacity duration-500 ${
                !isPlaying
                  ? "opacity-0"
                  : "opacity-100 cursor-pointer absolute bottom-[80px] left-[5px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]"
              }`}
            >
              <div className="absolute right-[11px] top-[11px]">
                <Stop />
              </div>
            </section>
            <div className=" relative  mt-20">
              <div class="absolute z-[] rotate-180 right-[px] top-[-87px]">
                <progress
                  className="w-[730px] h-2  appearance-none cursor-pointer bg-[#] accent-[#]"
                  id="progress-bar"
                  value={barValue}
                  min="0"
                  max={maxbar}
                ></progress>
              </div>
              <div className="absolute z-10 rotate-180 right-[px] top-[-87px]">
                <input
                  className="w-[730px] h-2  appearance-none cursor-pointer bg-[#0000003d] accent-[#dadada]"
                  id="seek"
                  value={seekValue}
                  onChange={skipAhead}
                  min="0"
                  max={maxseek}
                  type="range"
                  step="1"
                />
              </div>

              <div className="absolute flex justify-center right-[50px] top-[-120px] bg-[#00121ad2] w-[150px] h-[40px] rounded-[50px]">
                <input
                  className=" cursor-pointer accent-gray-400 "
                  id="volume"
                  value={volumeValue}
                  onChange={(e) => updateVolume(e)}
                  type="range"
                  max="1"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="bg-[#c4c4c43d] h-[2px] rounded-xl w-[52vw]  mt-[10px]"></hr>
        <section className="text-[#fff] text-[20px] mr-[15px] mt-[15px]">
          <h6>{Episode.TeacherName}</h6>
        </section>
        <section className="m-auto w-[680px] h-[80px] text-[#fff] text-[12px] leading-[30px] text-justify mt-[20px]">
          <p className="">
            طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ،
            صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار
            به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل
            ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا ازنظر گرافیکی
            نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد.
          </p>
        </section>
        <div className="w-[700px] flex justify-end">
          <section className="flex  w-[300px] justify-around mt-[25px] 	">
            <div className="w-[140px] h-[40px] bg-[#00141C] rounded-lg flex text-[#fff] text-[12px] justify-center items-center">
              <Humborger />
              <h6 className="mr-[7px]">افزودن به لیست ها</h6>
            </div>
            <div className="w-[50px] h-[40px] bg-[#00141C] rounded-lg flex justify-center items-center">
              <Dislike />
            </div>
            <div className="w-[50px] h-[40px] bg-[#00141C] rounded-lg flex justify-center items-center">
              <Like />
            </div>
          </section>
        </div>
      </div>
      <div className="w-[400px] bg-[#00141C] h-[480px] mx-[2rem] mt-[6rem] rounded-xl">
        <section className="flex  h-[100px] items-center w-[300px] justify-around">
          <div>
            <img src={Imgman} className="rounded-[50%]" />
          </div>
          <div className="mr-[20px]">
            <h6 className="text-[#E6FFF3] text-[16px]"> رضا استوار </h6>
            <h6 className="text-[#C4C4C4] text-[14px] mt-[10px]">
              {" "}
              مقاله نویس تاثیر گذار
            </h6>
          </div>
        </section>
        <hr className="w-[400px] m-auto"></hr>
        <section className="flex  mr-[30px] h-[60px]  items-center w-[200px] justify-around">
          <div className="bg-[#0d0f0f] w-[40px] h-[40px] rounded-lg mt-[10px] relative ">
            <div className="absolute right-[10px] top-[5px]">
              <Yaddasht />
            </div>
          </div>
          <div>
            <h6 className="mr-[15px]  text-[#fff] text-[14px]">
              {" "}
              یادداشت های من
            </h6>
          </div>
        </section>
        <section className="text-[14px] bg-[#fff] w-[340px] h-[280px] rounded-xl mx-[30px] mt-[20px]   ">
          <section className="flex  mt-[20px] h-[50px] items-center justify-between w-[80%] m-auto text-[#00121A]">
            <div>
              <h6 className="">مقاله نویس تاثیر گذار</h6>
            </div>
            <div className="flex">
              <h6 className="">در حال تماشا</h6>
              <span class="flex mr-[10px] mt-[5px] h-3 w-3">
                <span class="animate-ping  absolute inline-flex h-3 w-3 rounded-full bg-[#00FF85] opacity-75"></span>
                <span class="relative inline-flex  rounded-full h-3 w-3 bg-[#00FF85]"></span>
              </span>
            </div>
          </section>
          <section>
            <div className="w-[100%] flex justify-center text-[13px] text-[#00121A] mt-[20px]">
              <p className="w-[280px] text-justify">
                طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ،
                صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار
                به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ
                شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا باشد.
              </p>
            </div>
          </section>
        </section>
        <section>
          <section className="mt-[40px] w-[70%]  m-auto">
            <div className="flex  text-[16px]  ">
              <div className="border-[#00FF85] border-r-[6px]  rounded "></div>
              <h6 className="mr-[10px] text-[#E6FFF3]"> اپیزودهای مشابه</h6>
            </div>
            <h6 className="text-[#C4C4C4] text-[12px] mt-[15px]">
              {" "}
              شاید این اپیزود ها را نیز دوست داشتع باشید
            </h6>
          </section>
          <section>
            {fourOfCourse.map((item) => {
              return (
                <Link to={`/home/PlayerEpisode/${item.EpisodeID}`}>
                  <section className="flex w-[80%] m-auto  justify-center  mt-[25px]">
                    <img
                      src={item.PreviewImg}
                      className="rounded-lg h-[90px]"
                    />
                    <div className="text-[#C4C4C4] text-[14px] flex flex-col mr-5 justify-center">
                      <p>{item.EpisodeCategory}</p>
                      <h6>{item.NameOfEpisode}</h6>
                      <h6 className="text-[12px]">{item.TimeOfEpisode}</h6>
                    </div>
                  </section>
                </Link>
              );
            })}
          </section>
        </section>
      </div>
    </section>
  );
};
export default Header;
