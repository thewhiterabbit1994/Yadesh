import Slider from "react-slick";
import BrandImg from "../../assets/Img/BrandImg.png";
import TeacherImg1 from "../../assets/Img/TeacherImg1.png";
import NoteIcon from "../../assets/svg/NoteIcon";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  rtl: false,
  slidesToShow: 4.0,
  slidesToScroll: 1,
};

export default () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.MyProgress.MyNotes;

  return (
    <div
      className={`h-[350px] w-full bg-[#000405] ${
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
      <div className=" mt-[25px] w-[95%] m-auto  text-white">
        <Slider {...settings}>
          <div>
            <div className="flex w-fit h-[120px] bg-[#011e29] rounded-[10px]">
              <div className=" flex flex-row-reverse ">
                <div className=" w-[40px] h-[40px] mt-[12px] mr-[12px] bg-[#000e14] py-[6px] rounded-[10px] px-[12px] ">
                  <NoteIcon />
                </div>
                <div className=" mt-[15px] px-[15px]">
                  <div>
                    <p className="text-right text-[13px] text-[#ffffff]">
                      آموزش مدیریت مالی - رکود و تورم
                    </p>
                    <p className="text-right mt-2 text-[#C4C4C4] text-[11px]">
                      سهراب دل انگیزان ، اقتصادان مالی
                    </p>
                  </div>

                  <div className="flex justify-center ml-[50px] ">
                    <button className=" text-[13px] mt-[20px] h-[40px] text-[#ffffff]">
                      مشاهده یادداشت
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[1px] relative bottom-[45px] w-[80%]  mx-[5%] bg-slate-700"></div>
          </div>
          <div>
            <div className="flex w-fit h-[120px] bg-[#011e29] rounded-[10px]">
              <div className=" flex flex-row-reverse ">
                <div className=" w-[40px] h-[40px] mt-[12px] mr-[12px] bg-[#000e14] py-[6px] rounded-[10px] px-[12px] ">
                  <NoteIcon />
                </div>
                <div className=" mt-[15px] px-[15px]">
                  <div>
                    <p className="text-right text-[13px] text-[#ffffff]">
                      آموزش مدیریت مالی - رکود و تورم
                    </p>
                    <p className="text-right mt-2 text-[#C4C4C4] text-[11px]">
                      سهراب دل انگیزان ، اقتصادان مالی
                    </p>
                  </div>

                  <div className="flex justify-center ml-[50px] ">
                    <button className=" text-[13px] mt-[20px] h-[40px] text-[#ffffff]">
                      مشاهده یادداشت
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[1px] relative bottom-[45px] w-[80%]  mx-[5%] bg-slate-700"></div>
          </div>
          <div>
            <div className="flex w-fit h-[120px] bg-[#011e29] rounded-[10px]">
              <div className=" flex flex-row-reverse ">
                <div className=" w-[40px] h-[40px] mt-[12px] mr-[12px] bg-[#000e14] py-[6px] rounded-[10px] px-[12px] ">
                  <NoteIcon />
                </div>
                <div className=" mt-[15px] px-[15px]">
                  <div>
                    <p className="text-right text-[13px] text-[#ffffff]">
                      آموزش مدیریت مالی - رکود و تورم
                    </p>
                    <p className="text-right mt-2 text-[#C4C4C4] text-[11px]">
                      سهراب دل انگیزان ، اقتصادان مالی
                    </p>
                  </div>

                  <div className="flex justify-center ml-[50px] ">
                    <button className=" text-[13px] mt-[20px] h-[40px] text-[#ffffff]">
                      مشاهده یادداشت
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[1px] relative bottom-[45px] w-[80%]  mx-[5%] bg-slate-700"></div>
          </div>
          <div>
            <div className="flex w-fit h-[120px] bg-[#011e29] rounded-[10px]">
              <div className=" flex flex-row-reverse ">
                <div className=" w-[40px] h-[40px] mt-[12px] mr-[12px] bg-[#000e14] py-[6px] rounded-[10px] px-[12px] ">
                  <NoteIcon />
                </div>
                <div className=" mt-[15px] px-[15px]">
                  <div>
                    <p className="text-right text-[13px] text-[#ffffff]">
                      آموزش مدیریت مالی - رکود و تورم
                    </p>
                    <p className="text-right mt-2 text-[#C4C4C4] text-[11px]">
                      سهراب دل انگیزان ، اقتصادان مالی
                    </p>
                  </div>

                  <div className="flex justify-center ml-[50px] ">
                    <button className=" text-[13px] mt-[20px] h-[40px] text-[#ffffff]">
                      مشاهده یادداشت
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[1px] relative bottom-[45px] w-[80%] mx-[5%] bg-slate-700"></div>
          </div>
          <div>
            <div className="flex w-fit h-[120px] bg-[#011e29] rounded-[10px]">
              <div className=" flex flex-row-reverse ">
                <div className=" w-[40px] h-[40px] mt-[12px] mr-[12px] bg-[#000e14] py-[6px] rounded-[10px] px-[12px] ">
                  <NoteIcon />
                </div>
                <div className=" mt-[15px] px-[15px]">
                  <div>
                    <p className="text-right text-[13px] text-[#ffffff]">
                      آموزش مدیریت مالی - رکود و تورم
                    </p>
                    <p className="text-right mt-2 text-[#C4C4C4] text-[11px]">
                      سهراب دل انگیزان ، اقتصادان مالی
                    </p>
                  </div>

                  <div className="flex justify-center ml-[50px] ">
                    <button className=" text-[13px] mt-[20px] h-[40px] text-[#ffffff]">
                      مشاهده یادداشت
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[1px] relative bottom-[45px] w-[80%]  mx-[5%] bg-slate-700"></div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
