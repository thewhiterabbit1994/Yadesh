import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar"
import img from "../../assets/Img/joinToYadesh.png"
import Play from "../../assets/svg/AdminPanelCourses/Play"


const SliderSiteManagment = () => {
    return (
        <section className="w-full h-[1100px] bg-[#F5F5F5] rounded-lg mt-[10px]">
            <section className="w-[90%] m-auto">
                <section className="flex justify-between pt-[20px]">
                    <img src={img} className="rounded-lg w-[500px] h-[180px]" />
                    <div className="text-[11px] mt-[20px] text-[#7A7A7A] w-[350px] h-[150px] flex items-center">
                        <div className="mb-[20px]">
                            <Ekhtar />
                        </div>
                        <p className="mr-[10px]  leading-6" >حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت اتوماتیک مطابق با سایز container باشد.</p>
                    </div>
                </section>


                <sectdion className="flex justify-around w-full">
                    <section className=" text-[12px] text-[#7A7A7A]  w-[45%]  flex flex-col pt-[20px] ">
                        <label className="" htmlFor="titleSlide1">
                            عنوان (اسلاید 1)
                        </label>
                        <input
                            className="w-[390px] h-[40px] bg-[#fff] pr-[15px] rounded mt-[20px]"
                            id="titleSlide1"
                            placeholder="مهارت های خود را افزایش دهید "
                        />

                        <label className=" mt-[30px]" htmlFor="search">
                            آیکون فقط فرمت (svg یا  png ) باشد
                        </label>
                        <div className="">
                            <input
                                className="w-[300px] h-[40px] bg-[#fff] pr-[15px] rounded mt-[20px]"
                                id="search"
                                placeholder="مهارت های خود را افزایش دهید "
                            />
                            <button className="text-[#fff] text-[10px] bg-[#008043] w-[90px] h-[40px] rounded">جستجو فایل</button>
                            <div className="flex justify-items-center">
                                <div className="mt-5">
                                    <Ekhtar />
                                </div>
                                <p className="pt-[20px] text-[10px] mr-[10px]"> ابعاد آیکون برای این قسمت 30 * 30 px باشد  </p>
                            </div>
                        </div>
                    </section>

                    <section className="w-[50%] text-[12px]  pt-[20px]">
                        <label className="text-[#7A7A7A]" htmlFor="description ">
                            توضیحات (اسلاید 1)
                        </label>
                        <textarea
                            className="w-[400px] placeholder: px-[20px] placeholder: py-[20px] placeholder:leading-7 placeholder: text-[#000000fa] resize-none h-[150px] bg-[#fff] pr-[15px] rounded mt-[20px]"
                            id="description"
                            placeholder=" افزایش مهارت همیشه می تواند آینده شغلی شما را تضمین کند . هدف ما در یادش اینست که آینده شغلی شما واضح و درخشان باشد .   "
                        />
                    </section>
                </sectdion>


                <sectdion className="flex justify-around w-full pt-[30px]">
                    <section className=" text-[12px] text-[#7A7A7A] w-[45%]  flex flex-col pt-[20px] ">
                        <label className="" htmlFor="titleSlide2">
                            عنوان (اسلاید 2)
                        </label>
                        <input
                            className="w-[390px] h-[40px] bg-[#fff] pr-[15px] rounded mt-[20px]"
                            id="titleSlide2"
                            placeholder="مهارت های خود را افزایش دهید "
                        />

                        <label className=" mt-[30px]" htmlFor="search">
                            آیکون فقط فرمت (svg یا  png ) باشد
                        </label>
                        <div className="">
                            <input
                                className="w-[300px] h-[40px] bg-[#fff] pr-[15px] rounded mt-[20px]"
                                id="search"
                                placeholder="مهارت های خود را افزایش دهید "
                            />
                            <button className="text-[#fff] text-[10px] bg-[#008043] w-[90px] h-[40px] rounded">جستجو فایل</button>
                            <div className="flex justify-items-center">
                                <div className="mt-5">
                                    <Ekhtar />
                                </div>
                                <p className="pt-[20px] text-[10px] mr-[10px]"> ابعاد آیکون برای این قسمت 30 * 30 px باشد  </p>
                            </div>
                        </div>
                    </section>

                    <section className="w-[50%] text-[12px]  pt-[20px]">
                        <label className="text-[#7A7A7A]" htmlFor="description ">
                            توضیحات (اسلاید 2)
                        </label>
                        <textarea
                            className="w-[400px] placeholder: px-[20px] placeholder: py-[20px] placeholder:leading-7 placeholder: text-[#000000fa] resize-none h-[150px] bg-[#fff] pr-[15px] rounded mt-[20px]"
                            id="description"
                            placeholder=" افزایش مهارت همیشه می تواند آینده شغلی شما را تضمین کند . هدف ما در یادش اینست که آینده شغلی شما واضح و درخشان باشد .   "
                        />
                    </section>
                </sectdion>

                <sectdion className="flex justify-around w-full pt-[30px]">
                    <section className=" text-[12px] text-[#7A7A7A] w-[45%]  flex flex-col pt-[20px] ">
                        <label className="" htmlFor="titleSlide3">
                            عنوان (اسلاید 3)
                        </label>
                        <input
                            className="w-[390px] h-[40px] bg-[#fff] pr-[15px] rounded mt-[20px]"
                            id="titleSlide3"
                            placeholder="مهارت های خود را افزایش دهید "
                        />

                        <label className=" mt-[30px]" htmlFor="search">
                            آیکون فقط فرمت (svg یا  png ) باشد
                        </label>
                        <div className="">
                            <input
                                className="w-[300px] h-[40px] bg-[#fff] pr-[15px] rounded mt-[20px]"
                                id="search"
                                placeholder="مهارت های خود را افزایش دهید "
                            />
                            <button className="text-[#fff] text-[10px] bg-[#008043] w-[90px] h-[40px] rounded">جستجو فایل</button>
                            <div className="flex justify-items-center">
                                <div className="mt-5">
                                    <Ekhtar />
                                </div>
                                <p className="pt-[20px] text-[10px] mr-[10px]"> ابعاد آیکون برای این قسمت 30 * 30 px باشد  </p>
                            </div>
                        </div>
                    </section>

                    <section className="w-[50%] text-[12px]  pt-[20px]">
                        <label className="text-[#7A7A7A]" htmlFor="description ">
                            توضیحات (اسلاید 3)
                        </label>
                        <textarea
                            className="w-[400px] placeholder: px-[20px] placeholder: py-[20px] placeholder:leading-7 placeholder: text-[#000000fa] resize-none h-[150px] bg-[#fff] pr-[15px] rounded mt-[20px]"
                            id="description"
                            placeholder=" افزایش مهارت همیشه می تواند آینده شغلی شما را تضمین کند . هدف ما در یادش اینست که آینده شغلی شما واضح و درخشان باشد .   "
                        />
                    </section>
                </sectdion>

            </section>
            <section className="text-[#fff] text-[12px]  pt-[40px] relative w-[200px] m-auto">
                <p className="absolute top-10 right-5 text-[20px] "> + </p>
                <button className="bg-[#008043] w-[200px] h-[50px] rounded">افزودن اسلاید جدید</button>
            </section>

            <section className="flex text-[#fff] mt-[50px] text-[12px] w-[350px] justify-between m-auto">
                <div className="relative ">
                    <div className="absolute top-[18px] right-[10px]">
                        <Play />
                    </div>
                    <button className="w-[170px] h-[45px] bg-[#0050A8] rounded"> پیش نمایش صفحه </button>
                </div>
                <button className="w-[170px] h-[45px] bg-[#008043] rounded"> ذخیره کردن تغییرات </button>
            </section>
        </section>
    )
}
export default SliderSiteManagment