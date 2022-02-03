import Slider from "react-slick";
import BrandImg from "../../assets/Img/BrandImg.png";
import TeacherImg1 from "../../assets/Img/TeacherImg1.png";
import BigVerifiedIcon from "../../assets/svg/BigVerifiedIcon";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  rtl: false,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.MyProgress.DoneCourses;
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
        <Slider {...settings}>
          <div>
            <img className="w-[270px] h-[200px] rounded" src={BrandImg} />
            <div className="relative  -right-[220px] -top-[190px]">
              <div className="h-[40px] w-[40px] cursor-pointer rounded-full  pt-1.5 px-[6px] bg-[#626765]">
                <BigVerifiedIcon />
              </div>
            </div>

            <div className="flex -mt-[20px]">
              <div>
                <img
                  className="relative -right-[215px] rounded-full h-[55px]"
                  src={TeacherImg1}
                />
              </div>
              <div className=" -ml-[50px]">
                <p className="text-right text-[13px] mt-2 text-[#ffffff]">
                  آموزش مدیریت مالی - رکود و تورم
                </p>
                <p className="text-right mt-2 text-[#C4C4C4] text-[11px]">
                  سهراب دل انگیزان ، اقتصادان مالی
                </p>
              </div>
            </div>
          </div>
          <div>
            <img className="w-[270px] h-[200px] rounded" src={BrandImg} />
            <div className="relative  -right-[220px] -top-[190px]">
              <div className="h-[40px] w-[40px] cursor-pointer rounded-full  pt-1.5 px-[6px] bg-[#626765]">
                <BigVerifiedIcon />
              </div>
            </div>

            <div className="flex -mt-[20px]">
              <div>
                <img
                  className="relative -right-[215px] rounded-full h-[55px]"
                  src={TeacherImg1}
                />
              </div>
              <div className=" -ml-[50px]">
                <p className="text-right text-[13px] mt-2 text-[#ffffff]">
                  آموزش مدیریت مالی - رکود و تورم
                </p>
                <p className="text-right mt-2 text-[#C4C4C4] text-[11px]">
                  سهراب دل انگیزان ، اقتصادان مالی
                </p>
              </div>
            </div>
          </div>
          <div>
            <img className="w-[270px] h-[200px] rounded" src={BrandImg} />
            <div className="relative  -right-[220px] -top-[190px]">
              <div className="h-[40px] w-[40px] cursor-pointer rounded-full  pt-1.5 px-[6px] bg-[#626765]">
                <BigVerifiedIcon />
              </div>
            </div>

            <div className="flex -mt-[20px]">
              <div>
                <img
                  className="relative -right-[215px] rounded-full h-[55px]"
                  src={TeacherImg1}
                />
              </div>
              <div className=" -ml-[50px]">
                <p className="text-right text-[13px] mt-2 text-[#ffffff]">
                  آموزش مدیریت مالی - رکود و تورم
                </p>
                <p className="text-right mt-2 text-[#C4C4C4] text-[11px]">
                  سهراب دل انگیزان ، اقتصادان مالی
                </p>
              </div>
            </div>
          </div>
          <div>
            <img className="w-[270px] h-[200px] rounded" src={BrandImg} />
            <div className="relative  -right-[220px] -top-[190px]">
              <div className="h-[40px] w-[40px] cursor-pointer rounded-full  pt-1.5 px-[6px] bg-[#626765]">
                <BigVerifiedIcon />
              </div>
            </div>

            <div className="flex -mt-[20px]">
              <div>
                <img
                  className="relative -right-[215px] rounded-full h-[55px]"
                  src={TeacherImg1}
                />
              </div>
              <div className=" -ml-[50px]">
                <p className="text-right text-[13px] mt-2 text-[#ffffff]">
                  آموزش مدیریت مالی - رکود و تورم
                </p>
                <p className="text-right mt-2 text-[#C4C4C4] text-[11px]">
                  سهراب دل انگیزان ، اقتصادان مالی
                </p>
              </div>
            </div>
          </div>
          <div>
            <img className="w-[270px] h-[200px] rounded" src={BrandImg} />
            <div className="relative  -right-[220px] -top-[190px]">
              <div className="h-[40px] w-[40px] cursor-pointer rounded-full  pt-1.5 px-[6px] bg-[#626765]">
                <BigVerifiedIcon />
              </div>
            </div>

            <div className="flex -mt-[20px]">
              <div>
                <img
                  className="relative -right-[215px] rounded-full h-[55px]"
                  src={TeacherImg1}
                />
              </div>
              <div className=" -ml-[50px]">
                <p className="text-right text-[13px] mt-2 text-[#ffffff]">
                  آموزش مدیریت مالی - رکود و تورم
                </p>
                <p className="text-right mt-2 text-[#C4C4C4] text-[11px]">
                  سهراب دل انگیزان ، اقتصادان مالی
                </p>
              </div>
            </div>
          </div>
          <div>
            <img className="w-[270px] h-[200px] rounded" src={BrandImg} />
            <div className="relative  -right-[220px] -top-[190px]">
              <div className="h-[40px] w-[40px] cursor-pointer rounded-full  pt-1.5 px-[6px] bg-[#626765]">
                <BigVerifiedIcon />
              </div>
            </div>

            <div className="flex -mt-[20px]">
              <div>
                <img
                  className="relative -right-[215px] rounded-full h-[55px]"
                  src={TeacherImg1}
                />
              </div>
              <div className=" -ml-[50px]">
                <p className="text-right text-[13px] mt-2 text-[#ffffff]">
                  آموزش مدیریت مالی - رکود و تورم
                </p>
                <p className="text-right mt-2 text-[#C4C4C4] text-[11px]">
                  سهراب دل انگیزان ، اقتصادان مالی
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
