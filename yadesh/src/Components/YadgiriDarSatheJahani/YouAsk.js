import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import Question from "../../assets/svg/YouAsk/Question";
import Lamp from "../../assets/svg/YouAsk/Lamp";

const YouAsk = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.YadeshForOrganization.QuestionAndAnswers;
  const [index, setindex] = useState(0)
  let boxQuestion = []
  const QuestionHeading = () => {
    boxQuestion.push(data.first.question, data.second.question, data.third.question, data.forth.question)
  }
  QuestionHeading()

  let boxAnswer = []
  const titleHeading = () => {
    boxAnswer.push(data.first.answer, data.second.answer, data.third.answer, data.forth.answer)
  }
  titleHeading()
  const changeindex = () => {
    index === boxAnswer.length - 1 ? setindex(0) : setindex(index + 1);
  };
  setTimeout(() => {
    changeindex();
  }, 5000);

  return (
    <div className="bg-[#000]">
      <section className=" mr-[135px] ">
        <div className="border-[#00FF85]  border-r-[6px] pr-[10px]  rounded ">
          <div />
          <h5 className="text-[#E6FFF3] ">شما پرسیده اید</h5>
        </div>
        <div className="pt-[10px]">
          <h5 className="text-[#C4C4C4]"> سوالات متداول کاربران یادش </h5>
        </div>
      </section>
      <div className="w-full h-[80vh]  flex items-center justify-around">
        <section className="w-[22%] ">
          <div>
            {boxQuestion.map((item ,i) => {
              return (
                <div
                  className="cursor-pointer bg-[#011E29] relative text-[#fff] flex mt-[20px] w-[500px] h-[80px] rounded-lg  items-center text-[15px] "
                >
                  <div className=" ml-[10px] bg-[#000E14] w-[30px] h-[30px] flex justify-center items-center rounded mr-[10px]">
                    {<Question />}
                  </div>
                  <p classNam="text-[#C4C4C4] w-[350px] h-[100px] ">
                    {item}
                  </p>
                  <div
                    className={`${index === i
                        ? "absolute mr-[-1px] top-[0] z-10 w-[500px] h-[80px] rounded-lg border-[1px] border-[#01b166]"
                        : "hidden"
                      }`}
                  ></div>
                </div>
              )
            })}
          </div>
        </section>
        <section className="w-[40%]  bg-[#ffff] rounded-lg h-[370px] mt-[20px] flex flex-col items-center justify-center ">
          <div className="flex justify-start w-[75%]">
            <Lamp />
            <h6 className="font-semibold pr-[10px] text-[14px]">پاسخ یادش</h6>
          </div>
          <div>
            <hr className="bg-[#35393b5b] w-[500px] h-[4px] rounded-lg my-[1.5rem]"></hr>
          </div>
          <div>

            <div className="text-[12px] px-[35px] leading-6 text-justify">{boxAnswer[index]}</div>
            {/* {openAnswerTab === 0 ? (
              <p className="text-[#000405] text-[14px] font-semibold leading-[30px] w-[400px] text-justify opacity-90">
                {data.first.answer}
              </p>
            ) : openAnswerTab === 1 ? (
              <p className="text-[#000405] text-[14px] font-semibold leading-[30px] w-[400px] text-justify opacity-90">
                {data.second.answer}
              </p>
            ) : openAnswerTab === 2 ? (
              <p className="text-[#000405] text-[14px] font-semibold leading-[30px] w-[400px] text-justify opacity-90">
                {data.third.answer}
              </p>
            ) : openAnswerTab === 3 ? (
              <p className="text-[#000405] text-[14px] font-semibold leading-[30px] w-[400px] text-justify opacity-90">
                {data.forth.answer}
              </p>
            ) : null} */}
          </div>
        </section>
      </div>
    </div>
  );
};
export default YouAsk;
