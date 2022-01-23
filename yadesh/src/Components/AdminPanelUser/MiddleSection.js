import Exele from "../../assets/svg/AdminPanelCourses/Exele";
import Create from "../../assets/svg/AdminPanelCourses/Create";
import ArrowLeft from "../../assets/svg/AdminPanelCourses/ArrowLeft";
import User from "../../assets/svg/AdminPanelCourses/User";
import Statistics from "../../assets/svg/AdminPanelCourses/statistics";

const MiddleSection = () => {
    return (
        <section className="w-full h-[200px] relative top-[100px] ">
            <section className="w-[85%] flex text-[12px] m-auto justify-between font-semibold ">
                <section className="flex w-[50%]">
                    <div className="opacity-75 flex">
                        <p>شرکت ها</p>
                        <div className=" mr-[10px] mt-[2px]">
                            <ArrowLeft />
                        </div>
                        <div className="flex">
                            <div className="mx-[10px]">
                                <User />
                            </div>
                            <p>لیست کاربران</p>
                        </div>
                    </div>
                </section>
                <section className="w-[55%] justify-between flex text-[10px] text-[#001D29]">
                    <section className=" flex justify-center items-center border-dashed border-2 w-[180px] h-[50px] rounded border-[#0000003d]">
                        <p>دانلود به صورت فایل اکسل</p>
                        <div className="mr-[10px]">
                            <Exele />
                        </div>
                    </section>
                    <section className="w-[300px] rounded h-[50px] bg-[#008043] flex justify-around items-center">
                        <section className="flex">
                            <Create />
                            <p className="text-[10px] mr-[10px] text-[#fff]">
                                افزودن کاربر جدید
                            </p>
                        </section>
                        <div className="tetx-[#001D29] text-[10px] font-semibold bg-[#fff] w-[80px] h-[40px] rounded flex justify-center items-center">
                            {" "}
                            اضافه کنید
                        </div>
                    </section>
                    <section className="flex items-center w-[100px]">
                        <div className="mx-[10px]">
                            <Statistics />
                        </div>
                        <p>آمار کاربران</p>
                    </section>
                </section>
            </section>
        </section>
    );
}
export default MiddleSection