import Sort from "../../assets/svg/AdminPanelCourses/Sort";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import Successful from "../../assets/svg/AdminPanelCourses/Successful";
import Failed from "../../assets/svg/AdminPanelCourses/Failed";
import Oclock from "../../assets/svg/AdminPanelCourses/Oclock";
import { useState } from "react"

const Table = () => {
    const [showmore, setShowmore] = useState(false);
    const [Subscription, setSubscription] = useState([
        {
            Subscription: "مخابرات ایران",
            Condition: "پرداخت شده",
            Amount: "735 هزار تومان",
            numberOfUsers: "132 نفر",
            DateOfRenewal: "26 مهر 1399",
        },
        {
            Subscription: "مخابرات ایران",
            Condition: "پرداخت شده",
            Amount: "735 هزار تومان",
            numberOfUsers: "132 نفر",
            DateOfRenewal: "26 مهر 1399",
        },
        {
            Subscription: "مخابرات ایران",
            Condition: "پرداخت شده",
            Amount: "735 هزار تومان",
            numberOfUsers: "132 نفر",
            DateOfRenewal: "26 مهر 1399",
        },
        {
            Subscription: "مخابرات ایران",
            Condition: "پرداخت شده",
            Amount: "735 هزار تومان",
            numberOfUsers: "132 نفر",
            DateOfRenewal: "26 مهر 1399",
        },
        {
            Subscription: "مخابرات ایران",
            Condition: "پرداخت شده",
            Amount: "735 هزار تومان",
            numberOfUsers: "132 نفر",
            DateOfRenewal: "26 مهر 1399",
        },
    ])
    let twoOfSubscription = [];
    for (let i = 0; i < 2; i++) {
        let loopResult = Subscription[i];
        twoOfSubscription.push(loopResult);
    }
    return (
        <sectio n className="w-[97vw]">
            <section className="w-[87%] mr-[120px] m-auto text-[12px] text-[#001D29]">
                <section className="w-full justify-between flex py-[20px]  items-center  bg-[#e6e9eb6e]">
                    <section className="w-[50%] font-semibold pr-[10px]"> لیست اشتراک ها</section>
                    <section className="w-[570px] flex justify-between pl-[10px]">
                        <div className="flex text-[12px] w-[300px] h-[35px] bg-[#E6E9EB] rounded">
                            <div className="mt-[13px] mx-[10px]">
                                <Search />
                            </div>
                            <label className="z-20">
                                <input
                                    className=" placeholder:text-[10px] placeholder:text-[#0000008f] w-[250px] h-[35px] bg-[#E6E9EB] outline-none text-[12px]"
                                    placeholder="جست وجو ی اشتراک"
                                />
                            </label>
                        </div>
                        <div className="flex items-center justify-center text-[10px] w-[250px] h-[35px] bg-[#E6E9EB] rounded">
                            <p> چیدمان بر اساس لیست شرکت ها</p>
                            <div className=" mx-[10px]">
                                <Sort />
                            </div>
                        </div>
                    </section>
                </section>
                <table class="table-auto w-full bg-[#e6e9eb6e] rounded text-[12px]">
                    <thead>
                        <tr className="text-[#000000e5] h-[50px]">
                            <th><p className="text-center">ردیف</p></th>
                            <th><p className="text-center">اشتراک</p></th>
                            <th><p className="text-center">وضعیت</p></th>
                            <th><p className="text-center">مبلغ</p></th>
                            <th><p className="text-center">تعداد کاربران</p></th>
                            <th><p className="text-center">تاریخ تمدید</p></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !showmore ?
                                twoOfSubscription.map(item => {
                                    return (
                                        <tr className="h-[50px] hover:bg-[#e6e9ebc2]">
                                            <td className="text-center">1</td>
                                            <td className="text-center">مخابرات ایران </td>
                                            <td className=" text-[#008043] font-semibold ">
                                                <div className="justify-center flex ">
                                                    <p className="ml-[5px]">فعال</p>
                                                    <Successful />
                                                </div>
                                            </td>
                                            <td className="text-center text-[#0050A8] font-semibold">735 هزار تومان </td>
                                            <td className="text-center"> 132 نفر</td>
                                            <td className="text-center">26 مهر 1399</td>
                                            <td >
                                                <p className="mr-[10px] text-[#0050A8] text-center font-semibold">جزییات اشتراک</p>
                                            </td>
                                            <td >
                                                <p className="mr-[10px] text-[#AA0029] text-center font-semibold">لغو اشتراک</p>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                Subscription.map(item => {
                                    return (
                                        <tr className="h-[50px] hover:bg-[#e6e9ebc2]">
                                            <td className="text-center">1</td>
                                            <td className="text-center">مخابرات ایران </td>
                                            <td className=" text-[#008043] font-semibold ">
                                                <div className="justify-center flex ">
                                                    <p className="ml-[5px]">فعال</p>
                                                    <Successful />
                                                </div>
                                            </td>
                                            <td className="text-center text-[#0050A8] font-semibold">735 هزار تومان </td>
                                            <td className="text-center"> 132 نفر</td>
                                            <td className="text-center">26 مهر 1399</td>
                                            <td >
                                                <p className="mr-[10px] text-[#0050A8] text-center font-semibold">جزییات اشتراک</p>
                                            </td>
                                            <td >
                                                <p className="mr-[10px] text-[#AA0029] text-center font-semibold">لغو اشتراک</p>
                                            </td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
                <section onClick={() => setShowmore(!showmore)} className="w-full mt-[20px] cursor-pointer h-[50px] bg-[#E6E9EB] flex justify-center rounded items-center">
                    <p>موارد بیشتر</p>
                </section>
            </section>
        </sectio>
    );
}
export default Table