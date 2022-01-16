import MyListImg from "../../assets/Img/MyListImg.png";
import _3Dots from "../../assets/svg/3Dots";

export default () => (
  <div className="w-full h-fit bg-[#000405]">
    <div className="mr-[80px] pt-[20px]">
      <div className="flex ">
        <div className="w-[5.5px] h-[18px] bg-[#00FF85] rounded-[10px] mt-1.5 ml-2"></div>
        <p className="text-[19px]  text-[#ffffff]">لیست من</p>
      </div>
      <div>
        <p className="mt-[15px] text-[#C4C4C4] text-[14px]">
          لیست دوره های شما
        </p>
      </div>
    </div>
    <div className="w-[100%] flex flex-wrap justify-center mt-[25px]">
      <div>
        <img className="w-[310px] h-[310px] " src={MyListImg} />
        <div className=" relative -top-[300px] right-[80px] h-[30px] w-[30px] cursor-pointer rounded pt-2 px-[13px] bg-[#626765]">
          <_3Dots />
        </div>
        <div className=" relative right-[80px] -top-[100px]">
          <p className="text-[14px]  text-[#ffffff]">
            برندسازی شخصی - رفتار حرفه ای
          </p>
          <p className="text-[#C4C4C4] mt-[8px] text-[13px]">
            گلاره عباسی، کارآفرین
          </p>
        </div>
      </div>
      <div>
        <img className="w-[310px] h-[310px] mr-[70px]" src={MyListImg} />
        <div className=" relative -top-[300px] right-[80px] h-[30px] w-[30px] cursor-pointer rounded pt-2 px-[13px] bg-[#626765]">
          <_3Dots />
        </div>
        <div className=" relative right-[80px] -top-[100px]">
          <p className="text-[14px]  text-[#ffffff]">
            برندسازی شخصی - رفتار حرفه ای
          </p>
          <p className="text-[#C4C4C4] mt-[8px] text-[13px]">
            گلاره عباسی، کارآفرین
          </p>
        </div>
      </div>
      <div>
        <img className="w-[310px] h-[310px] mr-[70px]" src={MyListImg} />
        <div className=" relative -top-[300px] right-[80px] h-[30px] w-[30px] cursor-pointer rounded pt-2 px-[13px] bg-[#626765]">
          <_3Dots />
        </div>
        <div className=" relative right-[80px] -top-[100px]">
          <p className="text-[14px]  text-[#ffffff]">
            برندسازی شخصی - رفتار حرفه ای
          </p>
          <p className="text-[#C4C4C4] mt-[8px] text-[13px]">
            گلاره عباسی، کارآفرین
          </p>
        </div>
      </div>
      <div>
        <img className="w-[310px] h-[310px] " src={MyListImg} />
        <div className=" relative -top-[300px] right-[80px] h-[30px] w-[30px] cursor-pointer rounded pt-2 px-[13px] bg-[#626765]">
          <_3Dots />
        </div>
        <div className=" relative right-[80px] -top-[100px]">
          <p className="text-[14px]  text-[#ffffff]">
            برندسازی شخصی - رفتار حرفه ای
          </p>
          <p className="text-[#C4C4C4] mt-[8px] text-[13px]">
            گلاره عباسی، کارآفرین
          </p>
        </div>
      </div>
      <div>
        <img className="w-[310px] h-[310px] mr-[70px]" src={MyListImg} />
        <div className=" relative -top-[300px] right-[80px] h-[30px] w-[30px] cursor-pointer rounded pt-2 px-[13px] bg-[#626765]">
          <_3Dots />
        </div>
        <div className=" relative right-[80px] -top-[100px]">
          <p className="text-[14px]  text-[#ffffff]">
            برندسازی شخصی - رفتار حرفه ای
          </p>
          <p className="text-[#C4C4C4] mt-[8px] text-[13px]">
            گلاره عباسی، کارآفرین
          </p>
        </div>
      </div>
      <div>
        <img className="w-[310px] h-[310px] mr-[70px]" src={MyListImg} />
        <div className=" relative -top-[300px] right-[80px] h-[30px] w-[30px] cursor-pointer rounded pt-2 px-[13px] bg-[#626765]">
          <_3Dots />
        </div>
        <div className=" relative right-[80px] -top-[100px]">
          <p className="text-[14px]  text-[#ffffff]">
            برندسازی شخصی - رفتار حرفه ای
          </p>
          <p className="text-[#C4C4C4] mt-[8px] text-[13px]">
            گلاره عباسی، کارآفرین
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center h-[100px] -mt-[30px]">
      <button className="flex flex-row w-[190px] h-[40px] text-[12px] border-[1.5px] ml-[20px] text-[#ffffff] rounded-[6px] border-[#80FFC2]">
        <p className="mt-2.5 mr-5">نمایش همه (46 مورد)</p>
        <span className="mt-[2px] text-[25px] mr-[10px]">+</span>
      </button>
    </div>
  </div>
);
