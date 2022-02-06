import Course from "../../assets/svg/Modals/Course"
import Trash from "../../assets/svg/AdminPanelCourses/Trash"
import Add from "../../assets/svg/Modals/Add"
import cover from "../../assets/Img/cover.png"
import { useState } from "react"
const AddCourse = () => {
    const [courseName, setCourseNmae] = useState("")
    const [Teacher, setTeacher] = useState("")
    const [Categories, setCategories] = useState("")
    const [Description, setDescription] = useState("")
    return (
        <section className="w-[900px] h-[50px] text-[12px]  m-auto  ">
            <section className="flex w-[90%] h-[50px] m-auto  justify-between  pt-[20px]">
                <div className="flex w-[130px]  justify-between  ">
                    <Course />
                    <p> افزودن دوره جدید</p>
                </div>
                <div className=" relative cursor-pointer w-[25px] h-[25px] bg-[#d5d5d5c9] rounded">
                    <p className=" right-[8px] text-[17px] absolute ">x</p>
                </div>
            </section>
            <section className="h-[550px] w-[850px] mt-[20px]  m-auto  flex justify-around ">
                <section className="w-[400px] ">
                    <section className="w-[400px]">
                        <div className=" flex flex-col">
                            <label htmlFor="nameCourse"
                                className=" text-[#000] mr-[10px] ">
                                نام دوره
                            </label>
                            <input
                                onChange={(e) => setCourseNmae(e.target.value)}
                                value={courseName}
                                id='nameCourse'
                                className="w-[380px] bg-[#d5d5d5c9] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                                placeholder=" تحلیل روند صعود "
                            />
                        </div>
                        <div className=" flex flex-col my-[12px]">
                            <label htmlFor="Teacher"
                                className=" text-[#000] mr-[10px] ">
                                مدرس
                            </label>
                            <input
                                onChange={(e) => setTeacher(e.target.value)}
                                value={Teacher}
                                id='Teacher'
                                className="w-[380px] bg-[#d5d5d5c9] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                                placeholder=" رها تمدن "
                            />
                        </div>
                        <div className=" flex flex-col">
                            <label htmlFor="Categories"
                                className=" text-[#000] mr-[10px] ">
                                دسته بندی گروه
                            </label>
                            <input
                                onChange={(e) => setCategories(e.target.value)}
                                value={Categories}
                                id='Categories'
                                className="w-[380px] bg-[#d5d5d5c9] h-[40px]  rounded mt-[15px] placeholder:text-[10px] placeholder:pr-[10px]"
                                placeholder=" اقتصاد "
                            />
                        </div>
                    </section>
                    <section className="flex justify-between w-[370px] h-[120px] items-center ">
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
                    <section>
                        <div className=" flex flex-col">
                            <label htmlFor="Description"
                                className=" text-[#000] mr-[10px] ">
                                توضیحات
                            </label>
                            <textarea
                                onChange={(e) => setDescription(e.target.value)}
                                value={Description}
                                id='Description'
                                className="w-[380px] resize-none bg-[#d5d5d5c9] h-[70px]  rounded mt-[15px] placeholder:text-[10px] placeholder:py-[15px] placeholder:px-[10px]"
                                placeholder=" تحلیل روند صعود و فرودابر ایچککو از الزامات تحلیل تکنیکال در بورس و بازار های مالی است. "
                            />
                        </div>
                    </section>
                </section>
                <section className=" w-[400px] " >
                    <div className="w-[400px] mb-[15px] flex justify-between">
                        <p>اپیزود های دوره</p>
                        <div className="flex cursor-pointer w-[90px] justify-between">
                            <Add />
                            <p>افزودن اپیزود</p>
                        </div>
                    </div>
                    <section className="w-[400px] bg-[#d5d5d556]  rounded-lg h-[435px] flex items-center flex-col ">
                        <section className="  bg-[#d5d5d5d0] flex justify-between items-center px-[15px]  mt-[15px]  w-[370px] h-[40px] rounded">
                            <p>اپیزود های دوره</p>
                            <div className="cursor-pointer">
                                <Trash />
                            </div>
                        </section>
                        <section className="  bg-[#d5d5d5d0] flex justify-between items-center  px-[15px] mt-[15px]  w-[370px] h-[40px] rounded">
                            <p>اپیزود های دوره</p>
                            <div className="cursor-pointer">
                                <Trash />
                            </div>
                        </section>
                    </section>
                </section>
            </section>
            <div className="w-[300px] m-auto text-[#fff] mt-[-50px]">
                <button className="bg-[#008043] w-[300px] h-[40px] rounded ">آپلود دوره</button>
            </div>

        </section>
    )
}
export default AddCourse