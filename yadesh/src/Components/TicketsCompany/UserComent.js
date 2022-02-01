import Link from "../../assets/svg/AdminPanelCourses/Link"
import Send from "../../assets/svg/AdminPanelCourses/Send"
import { useContext } from "react"
import { MainCounter } from "../../Context/Context"
const UserComent = () => {
    const {
        comment, setComment,
        tickets, setTickets,
        ticketDatabase, setticketDatabase
    } = useContext(MainCounter)

    let addComment = () => {
        let obj = {
            txt: comment,
            name: "حسین ضرابی",
            time: new Date().getTime(),
            date: "22 شهریور"
        }
        // tickets.push(obj)
        const arr = [ obj]
        ticketDatabase.userTicket.push(obj)
        setComment("")
    }

    const handlekeyEnter = (e) => {
        if (e.key === "Enter") {
            addComment()
        }
    }

    return (
        <div className="flex w-full justify-between" >
            <section className="w-[39%] h-fit relative">
                <div className="w-full  justify-center ">
                    {
                        tickets.map(item => {
                            return (
                                <div className="text-[12px] flex  relative bg-[#c5c1c134] my-[20px] w-[450px] h-[150px] rounded-lg pr-[10px] border-2 hover:border-[#007AFF]">
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
                <div on className="w-[380px] h-[50px] bg-[#c5c1c1a4]  rounded-xl flex justify-center items-center absolute bottom-[-50px] right-[30px]">
                    <p className=" text-[10px] font-semibold text-[#001D29]">مشاهده ی همه ی تیکت ها</p>
                </div>
            </section>
            <section className="w-[59%] pb-[50px] bg-[#0000001a] rounded-lg h-fit   ">
                <div className="w-full h-fit justify-center py-[20px] ">
                    {
                        ticketDatabase.userTicket.map(item => {
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
                {/* <div className="w-full h-fit flex  justify-center  py-[20px]">
              {
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
            } 
            </div> */}
                <div>
                    <label >
                        <div onClick={addComment} className="w-[17px] rotate-45 fixed cursor-pointer bottom-[20px] right-[625px] z-10">
                            <Send />
                        </div>
                        <input value={comment}
                            onChange={(event) => setComment(event.target.value)}
                            onKeyDown={handlekeyEnter}
                            className="w-[550px] h-[40px] text-[12px] pr-[15px] bg-[#0000002a] placeholder:text-[#000]  placeholder:text-[12px] outline-none placeholder:pr-[15px] right-[670px] rounded fixed bottom-[8px]"
                            placeholder="پیام شما ..."
                        />
                    </label>
                    <div className="w-[16px] fixed bottom-[20px] left-[160px] z-10">
                        <Link />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default UserComent