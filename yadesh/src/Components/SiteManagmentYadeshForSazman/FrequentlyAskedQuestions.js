import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const FrequentlyAskedQuestions = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.YadeshForOrganization.QuestionAndAnswers;

  const [question1, setquestion1] = useState(data.first.question);
  const [question2, setquestion2] = useState(data.second.question);
  const [question3, setquestion3] = useState(data.third.question);
  const [question4, setquestion4] = useState(data.forth.question);

  const [answer1, setanswer1] = useState(data.first.answer);
  const [answer2, setanswer2] = useState(data.second.answer);
  const [answer3, setanswer3] = useState(data.third.answer);
  const [answer4, setanswer4] = useState(data.forth.answer);

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.YadeshForOrganization.QuestionAndAnswers.first.question =
      question1;
    database.YadeshForOrganization.QuestionAndAnswers.second.question =
      question2;
    database.YadeshForOrganization.QuestionAndAnswers.third.question =
      question3;
    database.YadeshForOrganization.QuestionAndAnswers.forth.question =
      question4;

    database.YadeshForOrganization.QuestionAndAnswers.first.answer = answer1;
    database.YadeshForOrganization.QuestionAndAnswers.second.answer = answer2;
    database.YadeshForOrganization.QuestionAndAnswers.third.answer = answer3;
    database.YadeshForOrganization.QuestionAndAnswers.forth.answer = answer4;

    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[550px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
      <section className="w-[47%] ">
        <section className="w-[93%] h-[300px] m-auto  my-[20px] ">
          <div>
            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
              سوال 1
            </p>
            <lable>
              <input
                className="w-[400px] h-[40px] rounded text-[11px] pr-[10px]"
                value={question1}
                onChange={(e) => setquestion1(e.target.value)}
                maxLength={30}
              />
            </lable>
          </div>
          <div className="my-[10px]">
            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
              پاسخ 1
            </p>
            <lable>
              <textarea
                className="w-[400px] resize-none h-[100px] rounded text-[11px] pt-3 pr-[10px]"
                value={answer1}
                onChange={(e) => setanswer1(e.target.value)}
                maxLength={30}
              />
            </lable>
          </div>
          <div>
            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
              سوال 2
            </p>
            <lable>
              <input
                className="w-[400px] h-[40px] rounded text-[11px] pr-[10px]"
                value={question2}
                onChange={(e) => setquestion2(e.target.value)}
                maxLength={30}
              />
            </lable>
          </div>
          <div className="my-[10px]">
            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
              پاسخ 2
            </p>
            <lable>
              <textarea
                className="w-[400px] resize-none h-[100px] rounded text-[11px] pt-3 pr-[10px]"
                value={answer2}
                onChange={(e) => setanswer2(e.target.value)}
                maxLength={30}
              />
            </lable>
          </div>
        </section>
      </section>
      <section className="w-[55%] mt-[20px] mr-10 text-[12px]">
        <div>
          <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
            سوال 3
          </p>
          <lable>
            <input
              className="w-[400px] h-[40px] rounded text-[11px] pr-[10px]"
              value={question3}
              onChange={(e) => setquestion3(e.target.value)}
              maxLength={30}
            />
          </lable>
        </div>
        <div className="my-[10px]">
          <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
            پاسخ 3
          </p>
          <lable>
            <textarea
              className="w-[400px] resize-none h-[100px] rounded text-[11px] pt-3 pr-[10px]"
              value={answer3}
              onChange={(e) => setanswer3(e.target.value)}
              maxLength={30}
            />
          </lable>
        </div>
        <div>
          <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
            سوال 4
          </p>
          <lable>
            <input
              className="w-[400px] h-[40px] rounded text-[11px] pr-[10px]"
              value={question4}
              onChange={(e) => setquestion4(e.target.value)}
              maxLength={30}
            />
          </lable>
        </div>
        <div className="my-[10px]">
          <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
            پاسخ 4
          </p>
          <lable>
            <textarea
              className="w-[400px] resize-none h-[100px] rounded text-[11px] pt-3 pr-[10px]"
              value={answer4}
              onChange={(e) => setanswer4(e.target.value)}
              maxLength={30}
            />
          </lable>
        </div>
        <div className="w-[170px] m-auto mt-[-5px]">
          <button
            onClick={handleClick}
            className="w-[170px] h-[45px] text-[13px] text-white bg-[#008043] rounded"
          >
            {" "}
            ذخیره کردن تغییرات{" "}
          </button>
        </div>
      </section>
    </section>
  );
};
export default FrequentlyAskedQuestions;
