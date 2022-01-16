import imgPelaneSazmani from "../../assets/Img/PelaneSazmani/imgPelaneSazmani.jpg";
import bgGradiant from "../../assets/Img/PelaneSazmani/bgGradiant.png";
const PelaneSazmani = () => {
  return (
    <div className="bg-[#000] w-[100%] flex justify-center">
      <section className="w-[100%] bg-[#000E14] h-[55vh] flex rounded mb-[2rem]">
        <section className="w-[650px] flex flex-col  h-[320px]  justify-center mr-[130px]">
          <div className="text-[#E6FFF3] text-[22px] flex w-[155px] mb-[2rem] h-[40px]">
            <div className="border-[#00FF85]   border-r-[7px] ml-[7px] h-[20px] mt-[10px] rounded-[6px] ">
              {" "}
            </div>
            <h6> پلن سازمانی</h6>
          </div>
          <div className=" text-[16px] leading-10 text-[#C4C4C4]">
            <h6 className="w-[524px] h-[83px]">
              سازمان ها و شرگت ها به جهت ارتقای سطح کیفی نیروی انسانی خود می
              توانند از پلن ویژه آموزشی یادش برای آموزش مهارت ها استفاده کنند.
            </h6>
          </div>
          <div className="mt-[2rem]  w-[75%]">
            <button className="text-[12px] text-[#E6FFF3] w-[160px] h-[46px] rounded border-solid border-[#00FF85] border-2 ml-[7px] ">
              {" "}
              بیشتر بدانید
            </button>
          </div>
        </section>
        <section className="w-[400px]  h-[320px] relative flex ">
          <div>
            <img
              src={imgPelaneSazmani}
              className="w-[400px] h-[320px] rounded absolute top-[-26px]"
            />
          </div>
        </section>
      </section>
    </div>
  );
};
export default PelaneSazmani;
