import AddUser from "../../assets/svg/Modals/AddUser"
import SubscriptionManagment from "../../assets/svg/Modals/SubscriptionManagment"
import UserList from "../../assets/svg/Modals/UserList"
import { Link } from "react-router-dom";

const CompanySubMenu = () => {
    return (
        <section className="w-[150px] h-[135px] bg-[#F5F5F5] text-[10px] rounded-lg  ">
            <section className=" pr-[20px] ">
                <Link
                    to="Listofcompanies"
                >
                    <div className="flex pt-[15px] hover:bg-[#4d4b4b3b]  rounded-lg w-[130px] h-[45px] cursor-pointer">
                        <AddUser />
                        <p className="mr-[5px]">لیست شرکت ها</p>
                    </div>
                </Link>
                <Link
                    to="userlist"
                >
                    <div className="flex pt-[15px] hover:bg-[#4d4b4b3b]  rounded-lg w-[130px] h-[45px] cursor-pointer">
                        <UserList />
                        <p className="mr-[5px]">لیست کاربران</p>
                    </div>
                </Link>
                <Link
                    to="subscriptionmanagment">
                    <div className="flex pt-[15px] hover:bg-[#4d4b4b3b] rounded-lg w-[130px] h-[45px] cursor-pointer">
                        <SubscriptionManagment />
                        <p className="mr-[5px]"> مدیریت اشتراک ها </p>
                    </div>
                </Link>
            </section>
        </section >
    )
}
export default CompanySubMenu

