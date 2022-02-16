import Link from "../../assets/svg/AdminPanelCourses/Link"
import Send from "../../assets/svg/AdminPanelCourses/Send"
import { useContext } from "react"
import { MainCounter } from "../../Context/Context"
import { useState } from "react"
const UserComent = () => {
    const [privetTicket, setprivetTicket] = useState({})

    let {
        comment, setComment,
        ticketDatabase, setticketDatabase
    } = useContext(MainCounter)

    let addComment = () => {
        let obj = {
            txt: comment,
            name: "حسین ضرابی",
            time: new Date().getTime(),
            date: "22 شهریور",

        }
        ticketDatabase.userTicket.push(obj)
        setComment("")
        console.log(ticketDatabase.userTicket);
    }

    const handlekeyEnter = (e) => {
        if (e.key === "Enter") {
            addComment()
        }
    }
    let privetTickets = (item) => {
        setprivetTicket(item)
    }

    return (
        <div className="flex w-full justify-between" >
            <section className="w-[39%] h-fit relative">
                <div className="w-full  justify-center ">
                    {
                        ticketDatabase.user.map(item => {
                            return (

                                <div key={item.id}
                                    onClick={() => privetTickets(item)}
                                    className={`cursor-pointer text-[12px] flex  relative bg-[#c5c1c134] my-[20px] w-[450px] h-[150px] rounded-lg pr-[10px] border-2 hover:border-[#007AFF]`}>
                                    <section className="mt-[20px]">
                                        <img src={item.img} className="w-[40px] h-[40px] rounded-[50%]" />
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
            <section className="w-[55%]  pb-[50px] border-2 bg-[#0000001a] rounded-lg h-fit mt-[20px] ">
                <div className="w-full h-fit justify-center border-2 py-[20px] flex-col    flex items-center ">
                    {
                        <section className="text-[12px] relative bg-[#F5F5F5] w-[500px] h-[130px] rounded-lg pr-[20px] pt-[10px]">
                            <div className="flex w-[150px] justify-around">
                                <img src={privetTicket.img} className="w-[40px] h-[40px] rounded-[50%]" />
                                <p className="mt-[5px]">{privetTicket.name}</p>
                            </div>
                            <div className="mt-[15px] pr-[60px] leading-7">
                                <p>{privetTicket.txt}</p>
                                <p className="text-[10px] text-[#000000c4] font-semibold">{privetTicket.categories}</p>
                            </div>
                            <div className="absolute top-[0] left-[0] flex w-[150px] justify-around mt-[10px] text-[10px] text-[#000000af] font-semibold">
                                <p>{privetTicket.time}</p>
                                <p>{privetTicket.date}</p>
                            </div>
                        </section>
                    }
                    {
                        ticketDatabase.userTicket.map(item => {
                            return (
                                <section className="text-[12px] relative bg-[#F5F5F5] w-[500px] my-[15px] h-[130px] rounded-lg pr-[20px] pt-[10px]">
                                    <div className="flex w-[150px] justify-around">
                                        <p className="mt-[5px]">مسئول فنی یادش</p>
                                    </div>
                                    <div className="mt-[15px] pr-[60px] leading-7">
                                        <p>{item.txt}</p>
                                        
                                    </div>
                                    <div className="absolute top-[5px] left-[20px] flex w-[150px] justify-around mt-[10px] text-[10px] text-[#000000af] font-semibold">
                                        <p>{item.date}</p>
                                        <p>{item.time}</p>
                                    </div>
                                </section>
                            )
                        })
                    }
                </div>
                <div>
                    <label >
                        <div onClick={addComment} className="w-[17px] rotate-45 fixed cursor-pointer bottom-[20px] right-[48.682284040995604vw] z-10">
                            <Send />
                        </div>
                        <input value={comment}
                            onChange={(event) => setComment(event.target.value)}
                            onKeyDown={handlekeyEnter}
                            className="w-[550px] h-[40px] text-[12px] pr-[15px] bg-[#0000002a] placeholder:text-[#000]  placeholder:text-[12px] outline-none placeholder:pr-[15px] right-[51.24450951683748vw] rounded fixed bottom-[8px]"
                            placeholder="پیام شما ..."
                        />
                    </label>
                    <div className="w-[16px] fixed bottom-[20px] left-[9.51683748169839vw] z-10">
                        <Link />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default UserComent