import Link from "../../assets/svg/AdminPanelCourses/Link"
import Send from "../../assets/svg/AdminPanelCourses/Send"
import Header from "../../Components/TicketsCompany/Header"
import { useState } from "react"
import { useContext } from "react"
import { MainCounter } from "../../Context/Context"

const MainSection = () => {
  const [openTab, setOpenTab] = useState(1)
  const { comment, setComment } = useContext(MainCounter)
  const { arrayComment, setArrayComment } = useContext(MainCounter)
  const { arrayAnswer, setArrayAnswe } = useContext(MainCounter)
  const { tickets, setTickets } = useContext(MainCounter)

  let addComment = () => {
    let obj = {
      txt: comment,
      name: "حسین ضرابی",
      time: "12 : 00",
      date: "22 شهریور"
    }
    const arr = [...arrayComment, obj]
    setArrayComment(arr)
    setComment("")
  }
  return (
    <section className="w-full h-[100vh] relative ">
      {console.log(arrayComment)}
      <Header setOpenTab={setOpenTab} />
      <section className="w-[86%] m-auto mr-[120px] mt-[130px] justify-between flex">
        <div className={`w-full flex  justify-between ${openTab === 1 ? "block" : "hidden"}`}>
          <section className="w-[39%] h-[600px] relative">
            <div className="w-full h-[170px]   justify-center  ">
              {
                tickets.map(item => {
                  return (
                    <div className="text-[12px] flex  relative bg-[#c5c1c134] my-[20px] w-[450px] h-[150px] rounded-lg pr-[10px] border-l-4 border-[#007AFF]">
                      <section className="mt-[20px]">
                        <img src={item.img} className="w-[60px] h-[40px] rounded-[50%]" />
                      </section>
                      <section className="mt-[20px]">
                        <p className="py-[10px] pr-[10px] text-[#00000091] ">{item.name}</p>
                        <p className="py-[7px] leading-6">{item.txt}</p>
                        <section className="flex w-[100px] justify-between absolute top-[20px] left-[20px] text-[#00000091] py-[10px]">
                          <p>{item.date}</p>
                          <p>{item.time}</p>
                        </section>
                        <div>
                          <p className="text-[#000] font-semibold text-[11px] ">{item.categories}</p>
                        </div>
                      </section>
                    </div>
                  )
                })
              }
            </div>
            <div on className="w-[380px] h-[50px] bg-[#c5c1c1a4]  rounded-xl flex justify-center items-center absolute bottom-[38px] right-[20px]">
              <p className=" text-[10px] font-semibold text-[#001D29]">مشاهده ی همه ی تیکت ها</p>
            </div>
          </section>
          <section className="w-[59%] bg-[#0000001a] rounded-lg h-[600px] relative ">
            <div className="w-full h-[170px] justify-center py-[20px]">
              {
                arrayComment.map(item => {
                  return (
                    <div className="text-[12px] mb-[20px] relative bg-[#fff] w-[600px] h-fit rounded-lg mr-[20px] pr-[10px] border-l-4 border-[#007AFF]">
                      <p className="py-[10px] pr-[10px] text-[#00000091]">{item.name}</p>
                      <p className="py-[7px] leading-6">{item.txt}</p>
                      <section className="flex w-[100px] justify-between text-[#00000091] py-[5px]">
                        <p absolute="">{item.date}</p>
                        <p absolute="">{item.time}</p>
                      </section>
                    </div>
                  )
                })
              }
            </div>
            <div className="w-full h-[300px] flex  justify-center  py-[20px]">
              {/* {
                arrayAnswer.map(item => {
                    return (
                        <div className="text-[12px] relative bg-[#fff] w-[600px] h-[130px] rounded-lg pr-[10px] border-l-4 border-[#FF003D]">
                            <p className="py-[10px] pr-[10px] text-[#00000091]">{item.name}</p>
                            <p className="py-[7px] leading-6">{item.txt}</p>
                            <section className="flex w-[100px] justify-between text-[#00000091] py-[10px]">
                                <p absolute="">{item.date}</p>
                                <p absolute="">{item.time}</p>
                            </section>
                        </div>
                    )
                })
            } */}
            </div>
            <div className="" >
              <div onClick={addComment} className="w-[15px] rotate-45 absolute cursor-pointer bottom-[20px] right-[40px] ">
                <Send />
              </div>
              <label >
                <input value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  className="w-[550px] h-[40px] text-[12px] pr-[15px]  placeholder:text-[12px] outline-none placeholder:pr-[15px] right-[70px] rounded absolute  bottom-[10px]"
                  placeholder="پیام شما ..."
                />
              </label>
              <div className="w-[15px]  absolute bottom-[20px] left-[90px]">
                <Link />
              </div>
            </div>
          </section>
        </div>
        <section className={`${openTab === 2 ? "block" : "hidden"}`}>
          <p>sample</p>
        </section>
      </section>
    </section>
  )
}
export default MainSection