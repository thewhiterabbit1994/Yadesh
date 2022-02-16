import { useState } from "react"
import userProfile from "../../assets/Img/UserProfileImg.jpg"
import Trash from "../../assets/svg/AdminPanelCourses/Trash"
import ParchamIran from "../../assets/svg/AdminPanelCourses/ParchamIran"
import MessageSucsses from "../../Components/Messaeg/MessageSucsses"
const Account = ({setSettingsModal , settingsModal}) => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [SavedChangesModal, setSavedChangesModal] = useState(false)
    setTimeout(() => {
        if (SavedChangesModal === true) {
            setSavedChangesModal(false)
        }
    }, 4000)
    return (
        <section className="text-[12px] mt-[50px]">
            <div>
                <p>حساب کاربری</p>
            </div>
            <section className="flex w-[91.5%] justify-between my-[20px]">
                <div className="flex flex-col">
                    <label
                        htmlFor="name"
                        className="text-[12px] text-[#7A7A7A]  pr-[10px]"
                    >
                        نام
                    </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        id="name"
                        className="w-[350px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
                        placeholder="رها"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="lastname"
                        className="text-[12px] text-[#7A7A7A]  pr-[10px]"
                    >
                        نام خانوادگی
                    </label>
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        id="lastname"
                        className="w-[350px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px] "
                        placeholder="تمدن"
                    />
                </div>
            </section>


            <section className="flex justify-between w-[91.5%]  h-[120px]">
                <div className="flex flex-col">
                    <label
                        htmlFor="phone"
                        className="text-[12px] text-[#7A7A7A]  pr-[10px]"
                    >
                        تلفن
                    </label>
                    <input
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        id="phone"
                        className="w-[350px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px] "
                        placeholder="021889997755"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="email"
                        className="text-[12px] text-[#7A7A7A]  pr-[10px]"
                    >
                        ایمیل
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        id="email"
                        className="w-[350px] h-[40px] rounded mt-[15px] text-[11px] pr-[10px]"
                        placeholder="raha@gmail.com"
                    />
                </div>
            </section>
            <div>
                <p>تصویر پروفایل</p>
            </div>

            <section className="flex mt-[20px]  w-[60%] justify-between">
                <section className="w-[170px] flex justify-between">
                    <img
                        className="w-[40px] h-[40px] rounded-[50%]"
                        src={userProfile} />
                    <p className="w-[100px] h-[40px] bg-[#F0F2F3] rounded  flex justify-center items-center">
                        تغییر عکس
                    </p>
                </section>
                <section className="w-[100px] flex justify-between">
                    <div className="mt-[10px]">
                        <Trash />
                    </div>
                    <p className="w-[100px] h-[40px]  flex justify-center items-center">
                        حذف عکس
                    </p>
                </section>
                <section className="w-[130px] flex justify-between  items-start">
                    <p className="w-[100px] h-[40px]  flex justify-center items-center ">
                        زبان
                    </p>
                    <div className="flex justify-around items-center w-[100px] mt-[10px] bg-[#F0F2F3]">
                        <ParchamIran />
                        <p >فارسی</p>
                    </div>
                </section>
            </section>
            <div className={`${!SavedChangesModal ? "absolute bottom-[-100px]" : "absolute bottom-[10px] left-[450px] transition-all duration-[500ms]"}`}>
                <MessageSucsses text={"تغییرات با موفقیت ذخیره شد"} />
            </div>
            <div className="w-[92%]  bg-[#4e50501c] rounded-lg h-1 mt-[30px] ml-[170px]"> </div>
            <section className="text-[12px] text-[#fff] w-[210px] flex justify-between mt-[20px] absolute left-[70px]">
                <button
                onClick={()=>setSettingsModal(false)}
                    className="w-[100px] h-[35px] rounded bg-[#4e50505d] text-[#000]">لغو </button>
                <button
                    onClick={() =>setSavedChangesModal(true)}
                    className="w-[100px] h-[35px] rounded bg-[#008043]">ذخیره کردن</button>
            </section>
        </section>
    )
}
export default Account