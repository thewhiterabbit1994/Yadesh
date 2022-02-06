import { useState } from "react"
import Player from "../../assets/svg/adminPanelEpisode/Player"
import Trash from "../../assets/svg/AdminPanelCourses/Trash"
import cover from "../../assets/Img/cover.png"


const AddEpisode = () => {
    const [EpisodeName, setEpisodeName] = useState("")
    const [Teacher, setTeacher] = useState("")
    const [Course, setCourse] = useState("")
    const [Description, setDescription] = useState("")

    return (
        <section className="w-[470px] h-[600px]  m-auto text-[12px]">
            <section className="w-[430px] h-[600px] m-auto overflow-y-scroll-r  overflow-x-hidden ">
                <section className="flex justify-between px-[20px] pt-[15px]">
                    <div className="flex w-[130px]  justify-between  ">
                        <Player />
                        <p> افزودن اپیزود جدید</p>
                    </div>
                    <div className=" relative cursor-pointer w-[25px] h-[25px] bg-[#d5d5d5c9] rounded">
                        <p className=" right-[8px] text-[17px] absolute ">x</p>
                    </div>
                </section>

                <section className="w-[400px] mt-[20px] m-auto pr-[10px] ">
                    <div className=" flex flex-col">
                        <label htmlFor="EpisodeName"
                            className=" text-[#000] mr-[10px] ">
                            نام اپیزود
                        </label>
                        <input
                            onChange={(e) => setEpisodeName(e.target.value)}
                            value={EpisodeName}
                            id='EpisodeName'
                            className="w-[380px] bg-[#d5d5d5c9] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                            placeholder=" تحلیل روند صعود "
                        />
                    </div>
                    <div className=" flex flex-col my-[12px]">
                        <label htmlFor="Categories"
                            className=" text-[#000] mr-[10px] ">
                            دوره
                        </label>
                        <input
                            onChange={(e) => setCourse(e.target.value)}
                            value={Course}
                            id='Categories'
                            className="w-[380px] bg-[#d5d5d5c9] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                            placeholder=" تحلیل تکنیکال بورس "
                        />
                    </div>
                    <div className=" flex flex-col ">
                        <label htmlFor="Teacher1"
                            className=" text-[#000] mr-[10px] ">
                            مدرس
                        </label>
                        <input
                            onChange={(e) => setTeacher(e.target.value)}
                            value={Teacher}
                            id='Teacher1'
                            className="w-[380px] bg-[#d5d5d5c9] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                            placeholder=" رها تمدن "
                        />
                    </div>
                </section>
                <section className="w-[400px] m-auto mt-[20px] mr-[5px]  ">
                    <p className="w-[370px] m-auto my-[10px]">تگ های اپیزود (حد اگثر 5 تگ)</p>
                    <section className="w-[380px] h-[150px] m-auto flex wrap  bg-[#d5d5d5c9] mt-[10px] rounded ">
                        <div className=" mt-[10px] mr-[10px] bg-[#d5d5d5c9] cursor-pointer ml-[5px] w-[120px] justify-around text-[10px] flex justify-center items-center h-[40px] rounded-lg">
                            <p>اموزش حسابداری</p>
                            <Trash />
                        </div>
                        <div className="bg-[#d5d5d5c9] cursor-pointer w-[120px] mt-[10px] mr-[5px] justify-around text-[10px] flex justify-center items-center h-[40px] rounded-lg">
                            <p> حسابداری کلان </p>
                            <Trash />
                        </div>
                    </section>
                </section>
                <section className="flex justify-around w-[400px] h-[120px] items-center text-[10px] pr-[15px] ">
                    <img src={cover} className="w-[120px] h-[80px] rounded-lg" />
                    <div className="bg-[#d5d5d5c9] cursor-pointer w-[100px] flex justify-center items-center h-[40px] rounded-lg">
                        <p>تغییر عکس</p>
                    </div>
                    <div className="bg-[#d5d5d533] cursor-pointer w-[100px] flex justify-center items-center h-[40px] rounded-lg">
                        <div>
                            <Trash />
                        </div>
                        <p className="mr-[5px]">حذف عکس</p>
                    </div>
                </section>
                <section className="pr-[15px]">
                    <div className=" flex flex-col">
                        <label htmlFor="Description1"
                            className=" text-[#000] mr-[10px] ">
                            توضیحات
                        </label>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            value={Description}
                            id='Description1'
                            className="w-[380px] resize-none bg-[#d5d5d5c9] h-[70px]  rounded mt-[15px] placeholder:text-[10px] placeholder:py-[15px] placeholder:px-[10px]"
                            placeholder=" تحلیل روند صعود و فرودابر ایچککو از الزامات تحلیل تکنیکال در بورس و بازار های مالی است. "
                        />
                    </div>
                </section>
                <div className="w-[300px] m-auto text-[#fff] mt-[20px]">
                    <button className="bg-[#008043] w-[300px] h-[40px] rounded "> افزودن اپیزود </button>
                </div>

            </section>
        </section>
    )
}
export default AddEpisode