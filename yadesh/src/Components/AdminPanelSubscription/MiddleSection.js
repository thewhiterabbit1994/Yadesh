import Subscription from "../../assets/svg/AdminPanelCourses/Subscription";
import HazinehEshterack from "../../assets/svg/AdminPanelCourses/HazinehEshterack";
import Create from "../../assets/svg/AdminPanelCourses/Create";
import ArrowLeft from "../../assets/svg/AdminPanelCourses/ArrowLeft";

const MiddleSection = () => {
    return (
        <section className="w-full h-[200px] relative top-[100px] ">
            <section className="w-[85%] flex text-[12px] m-auto justify-between font-semibold ">
                <section className="flex w-[50%]">
                    <div className="flex ml-[10px] opacity-70">
                        <p className="ml-[5px] ">شرکت ها</p>
                        <div className="mt-[3px]">
                            <ArrowLeft />
                        </div>
                    </div>
                    <div className=" ml-[10px]">
                        <Subscription />
                    </div>
                    <p>فاکتور ها</p>
                </section>
                <section className="w-[65%] justify-around flex text-[10px] text-[#001D29]  ">
                    <section className="flex w-[70%] items-center justify-between ml-4 ">
                        <div className="flex">  
                            <div>
                                <HazinehEshterack />
                            </div>
                            <p className="mr-[8px]">هزینه اشتراک شما </p>
                        </div>
                        <div className="flex">
                            <p  className="ml-[5px]">سالینه </p>
                            <p>1.553.000 هزار تومان </p>
                        </div>
                        <div className="border-l-4 border-[#b3bdc285] h-[30px] rounded-xl"> </div>
                        <div className="flex">
                            <p className="ml-[5px]">ماهیانه </p>
                            <p>234.000 هزار تومان </p>
                        </div>
                    </section>
                    <section className="w-[300px] rounded h-[50px] bg-[#008043] flex justify-around items-center">
                        <section className="flex ">
                            <Create />
                            <p className="text-[10px] mr-[10px] text-[#fff]">
                                خرید اشتراک جدید
                            </p>
                        </section>
                        <div className="tetx-[#001D29] text-[10px] font-semibold bg-[#fff] w-[80px] h-[40px] rounded flex justify-center items-center">
                            {" "}
                            اضافه کنید
                        </div>
                    </section>
                </section>
            </section>
        </section>
    );
}
export default MiddleSection