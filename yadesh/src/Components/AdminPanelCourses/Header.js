import ArrowDown from "../../assets/svg/AdminPanelCourses/ArrowDown"
import Calendar from "../../assets/svg/AdminPanelCourses/Calendar"
import Search from "../../assets/svg/AdminPanelCourses/Search"
import Nnotification from "../../assets/svg/AdminPanelCourses/Nnotification"
import imgProfile from "../../assets/Img/AdminPanelCourses/imgUser.png"
const Header = () => {
    return (
        <section className="w-full h-[80px] ">
            <section className="w-[90%] h-[400px] m-auto mt-[20px] flex justify-between">
                <section className="w-[50%] text-[#001D29]">
                    <section className="flex">
                        <div className="flex ">
                            <img src={imgProfile}
                                className="rounded-[50%]"
                            />
                            <div className="text-[10px] flex flex-col mr-[10px]">
                                <p className="opacity-[60%] ">عصر بخیر</p>
                                <div className="text-[12px] flex">
                                    <p>کیارش اسدی</p>
                                    <div className="mr-[7px] mt-[5px]">
                                        <ArrowDown />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </section>
                <section className="w-[38%] flex  justify-between">
                    <div className="flex w-[100px] h-[35px] bg-[#E6E9EB] rounded justify-center items-center">
                        <div className="mt-[2px] ml-[5px]">
                            <Calendar />
                        </div>
                        <p className="text-[10px] text-[#0050A8]">1 مهر 1400</p>
                    </div>
                    <div className="flex text-[12px] w-[300px] h-[35px] bg-[#E6E9EB] rounded">
                        <div className="mt-[13px] mx-[10px]">
                            <Search />
                        </div>
                        <input
                            className="w-[250px] h-[35px] bg-[#E6E9EB] outline-none text-[12px]"
                            placeholder="جست وجو کنید"
                        />
                    </div>
                    <div className="mt-[10px]">
                        <Nnotification/>
                    </div>
                </section>
            </section>

        </section>
    )
}
export default Header