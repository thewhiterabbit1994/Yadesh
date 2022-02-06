import conlearnImg1 from "../../assets/Img/conlearnImg1.png";
import _3Dots from "../../assets/svg/3Dots";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

export default () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.UserInfo.FavoriteEpisodes;
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
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
        <div className="ml-[20px] mb-[20px]">
          <img
            className="w-[200px] hover:blur-[2px] rounded"
            src={conlearnImg1}
          />
          <p className="text-white text-right  mt-5 text-[13px]">
            بازار مالی و شناخت آن
          </p>
          <div className="flex ml-14 mt-[10px] text-[#C4C4C4] text-[11px]">
            <p className="text-[#C4C4C4] mt-[px] text-[11px]">
              گلاره عباسی، کارآفرین
            </p>
          </div>
          <p className="text-[#C4C4C4] text-[9px] text-right mt-[5px]">
            ۱۸ دقیقه
          </p>
        </div>
      </div>
      <div className="flex justify-center h-[100px] mt-[20px]">
        <button className="flex w-[190px] h-[40px] text-[12px] border-[1.5px] text-[#ffffff] rounded-[6px] border-[#80FFC2]">
          <p className="m-auto ">بیشتر ببینید</p>
          <p className=" text-[25px] m-auto">+</p>
        </button>
      </div>
    </div>
  );
};
