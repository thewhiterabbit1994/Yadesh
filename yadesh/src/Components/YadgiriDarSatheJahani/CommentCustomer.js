import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import { useState } from "react";

const CommentCustomer = () => {
  const { siteManagmentDatabase } = useContext(MainCounter);
  const data = siteManagmentDatabase.YadeshForOrganization.Customer;
  let [index, setindex] = useState(0);

  const changeindex = () => {
    index === data.imagery.length - 1 ? setindex(0) : setindex(index + 1);
  };
  setTimeout(() => {
    changeindex();
  }, 5000);
  return (
    <div>
      <section className="w-full h-[400px] bg-[#000E14] flex ">
        <div className="w-[50%]  flex flex-col justify-center items-center ">
          <div>
            <div className="flex mb-[10px]">
              <div className="border-[#00FF85]   border-r-[6px] ml-[10px] rounded h-[20px] mt-[7px] ">
                {" "}
              </div>
              <h6 className="text-[20px] text-[#E6FFF3]">
                مشتریان در مورد یادش چه می گویند؟
              </h6>
            </div>
            <h6 className="text-[16px] text-[#C4C4C4] mb-[50px]">
              نظر مشتریان در مورد یادش
            </h6>
            <div className=" bg-gradient-to-l from-[#00FF85] h-[1.5px] mr-[-110px] w-[200px] relative -top-3 right-28"></div>
            <section className="flex">
              <img
                className="flex w-[50px] h-[40px] justify-between mt-[20px] mb-[20px]"
                src={data.imagery[index].img}
              />
              <p className="text-[#fff] mt-[25px] mr-[10px]">
                {data.imagery[index].name}
              </p>
            </section>
            <h6 className="text-[#C4C4C4] text-[14px] w-[480px] h-[80px] leading-[30px]">
              {data.imagery[index].comment}
            </h6>
          </div>
          {}
        </div>
        <section className="w-[43.5%] h-[250px] pl-[50px] grid grid-cols-5 items-center mt-[70px]  justify-between ">
          {data.imagery.map((item, i) => {
            return (
              <div>
                <div className="border-[#01b166] relative z-20 bg-[#011E29] w-[90px] h-[90px] rounded-lg flex justify-center items-center">
                  <img src={item.img} className=" w-[50px] h-[50px] " />
                </div>
                <div
                  className={`${
                    index === i
                      ? "absolute mr-[-1px] mt-[-91.5px] z-10 w-[92px] h-[92px] rounded-lg bg-gradient-to-br from-[#01b166]"
                      : "hidden"
                  }`}
                ></div>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};
export default CommentCustomer;
