import Factor from "../../assets/svg/AdminPanelCourses/Factor";
import Exele from "../../assets/svg/AdminPanelCourses/Exele";
import Create from "../../assets/svg/AdminPanelCourses/Create";
const MiddleSection = () => {
    return (
        <section className="w-[97vw] h-[200px] relative top-[100px] ">
            <section className="w-[90%] mr-[120px] flex text-[12px] m-auto justify-between font-semibold items-center">
                <section className="flex w-[50%]">
                    <div className=" ml-[10px]">
                        <Factor />
                    </div>
                    <p>فاکتور ها</p>
                </section>
                <section className="w-[185px] justify-between flex text-[10px] text-[#001D29]">
                    <section className="flex justify-center items-center border-dashed border-2 w-[180px] h-[50px] rounded border-[#0000003d]">
                        <p>دانلود به صورت فایل اکسل</p>
                        <div className="mr-[10px]">
                            <Exele />
                        </div>
                    </section>
                </section>
            </section>
        </section>
    );
}
export default MiddleSection