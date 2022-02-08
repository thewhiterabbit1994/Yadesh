import img from "../../assets/Img/qustionFromYadesh/img-auestion.png";
import Almas from "../../assets/svg/questionFromYadesh/Almas";
import Achar from "../../assets/svg/questionFromYadesh/Achar";
import Tick from "../../assets/svg/questionFromYadesh/Tick";
import Ellipse from "../../assets/svg/HomePageNotLogin/Ellipse";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const QuestionFromYadesh = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);

  const data = siteManagmentDatabase.YadeshForOrganization.QuestionFromYadesh;
  return (
    <div>
      <section className="w-full h-[700px] flex bg-[#000] justify-around relative z-20">
        <div className="absolute top-[0] right-[50px] z-10">
          <Ellipse />
        </div>
        <div className="w-[32%] mt-[120px]  flex justify-end relative">
          <img
            src={data.imagery}
            className="rounded-lg w-[350px] h-[420px] z-30"
          />
        </div>
        <section className="w-[50%]  h-[420px] mt-[120px] flex flex-col justify-center">
          <div className="flex ">
            <h6 className="text-[#E6FFF3] text-[18px]">{data.title}</h6>
          </div>
          <h6 className="text-[#C4C4C4] text-[14px] mt-[15px]">
            {data.subTitle}
          </h6>
          <div
            className={`${data.Subheadings.Subheading1.isDisplayed ? "" : "hidden"
              } `}
          >
            <div className="flex mt-[25px] ">
              <Almas />
              <h6 className="text-[#E6FFF3] text-[18px] mr-[10px] ">
                {data.Subheadings.Subheading1.title}
              </h6>
            </div>
            <h6 className="text-[#C4C4C4] text-[14px] mt-[15px]">
              {data.Subheadings.Subheading1.subTitle}
            </h6>
          </div>
          <div
            className={`${data.Subheadings.Subheading2.isDisplayed ? "" : "hidden"
              } `}
          >
            <div className="flex mt-[25px]">
              <Achar />
              <h6 className="text-[#E6FFF3] text-[18px] mr-[10px]">
                {data.Subheadings.Subheading2.title}
              </h6>
            </div>
            <h6 className="text-[#C4C4C4] text-[14px] mt-[15px]">
              {data.Subheadings.Subheading2.subTitle}
            </h6>
          </div>
          <div
            className={`${data.Subheadings.Subheading3.isDisplayed ? "" : "hidden"
              } `}
          >
            <div className="flex mt-[25px]">
              <Tick />
              <h6 className="text-[#E6FFF3] text-[18px] mr-[10px]">
                {data.Subheadings.Subheading3.title}
              </h6>
            </div>
            <h6 className="text-[#C4C4C4] text-[14px] mt-[15px]">
              {data.Subheadings.Subheading3.subTitle}
            </h6>
          </div>
        </section>
      </section>
    </div>
  );
};
export default QuestionFromYadesh;
