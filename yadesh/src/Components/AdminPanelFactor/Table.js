import Sort from "../../assets/svg/AdminPanelCourses/Sort";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import Successful from "../../assets/svg/AdminPanelCourses/Successful";
import Failed from "../../assets/svg/AdminPanelCourses/Failed";
import { useState } from "react";

const Table = () => {
    const [showMore, setShowMore] = useState(false)
    const [factor, setFactor] = useState([
        {
            Subscription: "مخابرات ایران",
            Condition: "پرداخت شده",
            Amount: "735 هزار تومان",
            numberOfUsers: "132 نفر",
            DateOfRenewal: "26 مهر 1399",
            validityDuration: "یک ساله"
        },
        {
            Subscription: "مخابرات ایران",
            Condition: "پرداخت شده",
            Amount: "735 هزار تومان",
            numberOfUsers: "132 نفر",
            DateOfRenewal: "26 مهر 1399",
            validityDuration: "یک ساله"
        }, 
        {
            Subscription: "مخابرات ایران",
            Condition: "پرداخت شده",
            Amount: "735 هزار تومان",
            numberOfUsers: "132 نفر",
            DateOfRenewal: "26 مهر 1399",
            validityDuration: "یک ساله"
        },
        {
            Subscription: "مخابرات ایران",
            Condition: "پرداخت شده",
            Amount: "735 هزار تومان",
            numberOfUsers: "132 نفر",
            DateOfRenewal: "26 مهر 1399",
            validityDuration: "یک ساله"
        },    {
            Subscription: "مخابرات ایران",
            Condition: "پرداخت شده",
            Amount: "735 هزار تومان",
            numberOfUsers: "132 نفر",
            DateOfRenewal: "26 مهر 1399",
            validityDuration: "یک ساله"
        },    {
            Subscription: "مخابرات ایران",
            Condition: "پرداخت شده",
            Amount: "735 هزار تومان",
            numberOfUsers: "132 نفر",
            DateOfRenewal: "26 مهر 1399",
            validityDuration: "یک ساله"
        },
    ])
    let twoOfFactor = [];
    for (let i = 0; i < 2; i++) {
        let loopResult = factor[i];
        twoOfFactor.push(loopResult);
    }
    return (
        <sectio className="w-[97vw]">
            <section className="w-[87%] mr-[120px] m-auto text-[12px] text-[#001D29]">
                <section className="w-full justify-between flex py-[20px] bg-[#e6e9eb85] rounded-lg">
                    <section className=" pr-[10px] w-[50%] font-semibold"> لیست فاکتور ها</section>
                    <section className="w-[570px] flex justify-between pl-[10px]">
                        <div className="flex text-[12px] w-[300px] h-[35px] bg-[#E6E9EB] rounded">
                            <div className="mt-[13px] mx-[10px]">
                                <Search />
                            </div>
                            <label className="z-20">
                                <input
                                    className="placeholder:text-[#0000008a] placeholder:text-[10px]  w-[250px] h-[35px] bg-[#E6E9EB] outline-none text-[12px]"
                                    placeholder="جست وجو ی فاکتور"
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
                <table class="table-auto w-full bg-[#e6e9eb6e] rounded">
                    <thead>
                        <tr className="text-[#000000] h-[60px]">
                            <th><p className="text-center">ردیف</p></th>
                            <th><p className="text-center">اشتراک</p></th>
                            <th><p className="text-center">وضعیت</p></th>
                            <th><p className="text-center">مبلغ</p></th>
                            <th><p className="text-center">تعداد کاربران</p></th>
                            <th><p className="text-center">تاریخ تمدید</p></th>
                            <th><p className="text-center">مدت اعتبار</p></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !showMore ?

                            twoOfFactor.map(item => {
                                return (
                                    <tr className="h-[50px] hover:bg-[#e6e9ebc2]">
                                        <td className="text-center">1</td>
                                        <td className="text-center">{item.Subscription}</td>
                                        <td className=" text-[#008043] font-semibold ">
                                            <div className="justify-center flex ">
                                                <p className="ml-[5px]">{item.validityDuration}</p>
                                                <Successful />
                                            </div>
                                        </td>
                                        <td className="text-center text-[#0050A8] font-semibold">{item.Amount}</td>
                                        <td className="text-center">{item.numberOfUsers}</td>
                                        <td className="text-center">{item.DateOfRenewal}</td>
                                        <td className="text-center">{item.validityDuration}</td>
                                        <td className="flex h-[50px] items-center ">
                                            <p className="mr-[10px] text-[#0050A8] font-semibold">پرداخت</p>
                                        </td>
                                    </tr>
                                )
                            })
                            : 
                            factor.map(item => {
                                return (
                                    <tr className="h-[50px] hover:bg-[#e6e9ebc2]">
                                        <td className="text-center">1</td>
                                        <td className="text-center">{item.Subscription}</td>
                                        <td className=" text-[#008043] font-semibold ">
                                            <div className="justify-center flex ">
                                                <p className="ml-[5px]">{item.validityDuration}</p>
                                                <Successful />
                                            </div>
                                        </td>
                                        <td className="text-center text-[#0050A8] font-semibold">{item.Amount}</td>
                                        <td className="text-center">{item.numberOfUsers}</td>
                                        <td className="text-center">{item.DateOfRenewal}</td>
                                        <td className="text-center">{item.validityDuration}</td>
                                        <td className="flex h-[50px] items-center ">
                                            <p className="mr-[10px] text-[#0050A8] font-semibold">پرداخت</p>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <section onClick={()=> setShowMore(!showMore)} className="w-full cursor-pointer rounded-lg h-[50px] mt-[20px] bg-[#E6E9EB] flex justify-center items-center">
                    <p>موارد بیشتر</p>
                </section>
            </section>
        </sectio>
    );
}
export default Table