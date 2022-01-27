import Exele from "../../assets/svg/AdminPanelCourses/Exele";
import Create from "../../assets/svg/AdminPanelCourses/Create";
import Doreha from "../../assets/svg/AdminPanelCourses/Doreha";
import Statistics from "../../assets/svg/AdminPanelCourses/statistics";

const MiddleSection = () => {
    return (
        <section className="w-[97vw] h-[200px] relative top-[100px] ">
            <section className="w-[90%] flex text-[12px] m-auto justify-between font-semibold mr-[120px] items-center ">
                <section className="flex w-[50%]">
                    <div className=" ml-[10px]">
                        <Doreha />
                    </div>
                    <p>دوره ها</p>
                </section>
                <section className="w-[400px] justify-between flex text-[10px]  text-[#001D29] ">
                    <section className="w-[400px] rounded h-[50px] bg-[#008043] flex justify-around items-center">
                        <section className="flex">
                            <Create />
                            <p className="text-[10px] mr-[10px] text-[#fff]">
                                ایجاد دوره های جدید
                            </p>
                        </section>
                        <div className="tetx-[#001D29] text-[10px] font-semibold bg-[#fff] w-[100px] h-[37px] rounded flex justify-center items-center">
                            {" "}
                            ایجاد کنید
                        </div>
                    </section>
                    <section className="flex items-center w-[200px]">
                        <div className="mx-[10px]">
                            <Statistics />
                        </div>
                        <p>آمار بازدید دوره ها</p>
                    </section>
                </section>
            </section>
        </section>
    );
}
export default MiddleSection