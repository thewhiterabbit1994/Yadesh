import { useState } from "react"
import Player from "../../assets/svg/adminPanelEpisode/Player"
import Trash from "../../assets/svg/AdminPanelCourses/Trash"
import cover from "../../assets/Img/cover.png"

const AddEpisode = ({ AddEpisodeModal, setAddEpisodeModal }) => {
  const [EpisodeName, setEpisodeName] = useState("")
  const [Teacher, setTeacher] = useState("")
  const [Course, setCourse] = useState("")
  const [tag, setTag] = useState("")
  const [Description, setDescription] = useState("")

  return (

    <section
      className={`fixed transform transition-opacity duration-300 scale-0 z-50 w-full h-screen  bg-[#00000071]  ${AddEpisodeModal ? "scale-100 opacity-100" : "opacity-0 "
        }`}
    >
      <section
        className={` w-[1000px] h-fit relative right-0 inset-x-[140px] ml-[200px]  rounded-[10px] bg-[#fff]`}
      >
        <section className="w-[900px] h-[600px]  m-auto text-[12px]">
          <section className="w-[900px] relative h-[600px] flex justify-between m-auto overflow-y-scroll-r  overflow-x-hidden ">
            <section
              className="flex justify-between w-[900px] absolute px-[20px] pt-[30px]">
              <div className="flex w-[130px]  justify-between  ">
                <Player />
                <p> افزودن اپیزود جدید</p>
              </div>
              <div
                onClick={() => setAddEpisodeModal(!AddEpisodeModal)}
                className=" relative cursor-pointer w-[25px] h-[25px] bg-[#d5d5d5c9] rounded">
                <p className=" right-[8px] text-[17px] absolute ">x</p>
              </div>
            </section>
            <section className="w-[300px] pr-[10px] mt-[80px] ">
              <div className=" flex flex-col ">
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
              <section className="w-[300px]  mt-[20px] mr-[5px]  ">
                <label htmlFor="tag"
                  className="w-[370px] m-auto my-[10px]">
                  تگ های اپیزود (حد اگثر 5 تگ)
                </label>
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
                <div className=" flex flex-col ">
                  <input
                    onChange={(e) => setTag(e.target.value)}
                    value={tag}
                    id='tag'
                    className="w-[380px] bg-[#d5d5d5c9] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                    placeholder=" تگ های خود را این جا وارد کنید ... "
                  />
                </div>
              </section>
            </section>
            <section className="w-[500px] mt-[90px]">
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
              <section className="pr-[25px]">
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
              <section className="pr-[30px] my-[20px]">
                <p>فضا برای اپلود عکس</p>
              </section>
              <div className="w-[400px] m-auto text-[#fff] mt-[20px]">
                <button className="bg-[#008043] w-[300px] h-[40px] rounded "> افزودن اپیزود </button>
              </div>
            </section>

          </section>
        </section>
      </section>
    </section>

  )
}
export default AddEpisode