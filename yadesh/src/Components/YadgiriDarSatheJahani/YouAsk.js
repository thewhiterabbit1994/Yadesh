import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import Question from "../../assets/svg/YouAsk/Question";
import Lamp from "../../assets/svg/YouAsk/Lamp";

const YouAsk = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.YadeshForOrganization.QuestionAndAnswers;

  const [openAnswerTab, setopenAnswerTab] = useState(0);

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
          <div
            onClick={() => setopenAnswerTab(0)}
            className="cursor-pointer bg-[#011E29] text-[#fff] flex mt-[20px] w-[500px] h-[80px] rounded-lg  items-center text-[15px] "
          >
            <div className=" ml-[10px] bg-[#000E14] w-[30px] h-[30px] flex justify-center items-center rounded mr-[10px]">
              {<Question />}
            </div>
            <p classNam="text-[#C4C4C4] w-[350px] h-[100px] ">
              {data.first.question}
            </p>
          </div>
          <div
            onClick={() => setopenAnswerTab(1)}
            className="cursor-pointer bg-[#011E29] text-[#fff] flex mt-[20px] w-[500px] h-[80px] rounded-lg  items-center text-[15px] "
          >
            <div className=" ml-[10px] bg-[#000E14] w-[30px] h-[30px] flex justify-center items-center rounded mr-[10px]">
              {<Question />}
            </div>
            <p classNam="text-[#C4C4C4] w-[350px] h-[100px] ">
              {data.second.question}
            </p>
          </div>
          <div
            onClick={() => setopenAnswerTab(2)}
            className="cursor-pointer bg-[#011E29] text-[#fff] flex mt-[20px] w-[500px] h-[80px] rounded-lg  items-center text-[15px] "
          >
            <div className=" ml-[10px] bg-[#000E14] w-[30px] h-[30px] flex justify-center items-center rounded mr-[10px]">
              {<Question />}
            </div>
            <p classNam="text-[#C4C4C4] w-[350px] h-[100px] ">
              {data.third.question}
            </p>
          </div>
          <div
            onClick={() => setopenAnswerTab(3)}
            className="cursor-pointer bg-[#011E29] text-[#fff] flex mt-[20px] w-[500px] h-[80px] rounded-lg  items-center text-[15px] "
          >
            <div className=" ml-[10px] bg-[#000E14] w-[30px] h-[30px] flex justify-center items-center rounded mr-[10px]">
              {<Question />}
            </div>
            <p classNam="text-[#C4C4C4] w-[350px] h-[100px] ">
              {data.forth.question}
            </p>
          </div>
        </section>
        <section className="w-[40%]  bg-[#ffff] rounded-lg h-[370px] mt-[20px] flex flex-col items-center justify-center ">
          <div className="flex justify-start w-[75%]">
            <Lamp />
            <h6 className="font-semibold pr-[10px] text-[14px]">پاسخ یادش</h6>
          </div>
          <div>
            <hr className="bg-[#35393b5b] w-[400px] h-[4px] rounded-lg my-[1.5rem]"></hr>
          </div>
          <div>
            {openAnswerTab === 0 ? (
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
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
};
export default YouAsk;
