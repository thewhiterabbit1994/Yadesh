import "../../Components/AdminPanelCompany/Table.css";
import Sort from "../../assets/svg/AdminPanelCourses/Sort";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import Successful from "../../assets/svg/AdminPanelCourses/Successful";
import Failed from "../../assets/svg/AdminPanelCourses/Failed";

const Table = () => {
    return (
        <sectio n className="w-full">
            <section className="w-[85%] m-auto text-[12px] text-[#001D29]">
                <section className="w-full justify-between flex mb-[40px]">
                    <section className="w-[50%]"> لیست فاکتور ها</section>
                    <section className="w-[48%] flex justify-between">
                        <div className="flex text-[12px] w-[300px] h-[35px] bg-[#E6E9EB] rounded">
                            <div className="mt-[13px] mx-[10px]">
                                <Search />
                            </div>
                            <input
                                className="w-[250px] h-[35px] bg-[#E6E9EB] outline-none text-[12px]"
                                placeholder="جست وجو کنید"
                            />
                        </div>
                        <div className="flex items-center justify-center text-[12px] w-[250px] h-[35px] bg-[#E6E9EB] rounded">
                            <p> چیدمان بر اساس لیست شرکت ها</p>
                            <div className=" mx-[10px]">
                                <Sort />
                            </div>
                        </div>
                    </section>
                </section>
                <table id="customers">
                    <tr className="text-[#00000075]">
                        <th><p className="text-center">ردیف</p></th>
                        <th><p className="text-center">اشتراک</p></th>
                        <th><p className="text-center">وضعیت</p></th>
                        <th><p className="text-center">مبلغ</p></th>
                        <th><p className="text-center">تعداد کاربران</p></th>
                        <th><p className="text-center">تاریخ تمدید</p></th>
                        <th><p className="text-center">مدت اعتبار</p></th>
                    </tr>
                    <tr>
                        <td className="text-center">1</td>
                        <td className="text-center">مخابرات ایران </td>
                        <td className=" text-[#008043] font-semibold ">
                            <div className="justify-center flex ">
                                <p className="ml-[5px]">پرداخت شده</p>
                                <Successful />
                            </div>
                        </td>
                        <td className="text-center text-[#0050A8] font-semibold">735 هزار تومان </td>
                        <td className="text-center"> 132 نفر</td>
                        <td className="text-center">26 مهر 1399</td>
                        <td className="text-center">یک ساله</td>
                        <td className="flex">
                            <p className="mr-[10px] text-[#0050A8]">پرداخت</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">1</td>
                        <td className="text-center">مخابرات ایران </td>
                        <td className="text-center text-[#AA0029] font-semibold">
                            <div className="justify-center flex ">
                                <p className="ml-[5px]">پرداخت نشده</p>
                                <Failed />
                            </div>
                        </td>
                        <td className="text-center text-[#0050A8] font-semibold">735 هزار تومان </td>
                        <td className="text-center"> 132 نفر</td>
                        <td className="text-center">26 مهر 1399</td>
                        <td className="text-center">یک ساله</td>
                        <td className="flex">
                            <p className="mr-[10px] text-[#0050A8]">پرداخت</p>
                        </td>
                    </tr>
                </table>
                <section className="w-full h-[50px] bg-[#E6E9EB] flex justify-center items-center">
                    <p>موارد بیشتر</p>
                </section>
            </section>
        </sectio>
    );
}
export default Table