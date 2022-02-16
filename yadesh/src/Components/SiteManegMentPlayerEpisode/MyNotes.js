import { useState } from "react"
import MessageSucsses from "../../Components/Messaeg/MessageSucsses"
import MessageFailed from "../../Components/Messaeg/MessageFailed"
const MyNotes = () => {
    const [toggle, setToggle] = useState(true)
    const [SavedChangesModal, setSavedChangesModal] = useState(false)
    const [MessageFailedModal, setMessageFailedModal] = useState(false)
    const handleClick = () => {
        setSavedChangesModal(true)
        // setMessageFailedModal(true)
    }
    setTimeout(() => {
        if (SavedChangesModal === true) {
            setSavedChangesModal(false)
        }
    }, 4000)
    setTimeout(() => {
        if (MessageFailedModal === true) {
            setMessageFailedModal(false)
        }
    }, 4000)
    return (
        <section className="w-full ">

            <section className=" flex text-[12px] text-[#7A7A7A] bg-[#F5F5F5] h-[67px] rounded items-center pr-[20px] mt-[10px] ">
                <p className="ml-[50px]"> نمایش یادداشت ها  </p>
                <div onClick={() => setToggle(!toggle)} className={`${toggle ? "cursor-pointer w-[40px] h-[20px] bg-[#008043] rounded-[20px] mr-[20px] relative" : "cursor-pointer w-[40px] h-[20px] bg-[#C4C4C4] rounded-[20px] mr-[20px] relative"}`}>
                    <div className={`${toggle ? "w-[18px] h-[18px] bg-[#fff] rounded-[50%]  absolute left-0 top-[1px]" : "w-[18px] h-[18px] bg-[#fff] rounded-[50%] absolute right-0 top-[1px]"}`}></div>
                </div>
            </section>
            <div className={`${!SavedChangesModal ? "fixed bottom-[-200px]" : "fixed bottom-[20px] left-[50px] transition-all duration-[500ms]"}`}>
                <MessageSucsses text={"تغییرات با موفقیت ذخیره شد"} />
            </div>
            <div className={`${!MessageFailedModal ? "fixed bottom-[-200px]" : "fixed bottom-[20px] left-[50px] transition-all duration-[500ms]"}`}>
                <MessageFailed text={"متاسفانه تغییرات ذخیره نشد"} />
            </div>
            <section className="w-[170px] h-[45px] rounded bg-[#0050A8] text-[12px] mt-[20px] m-auto cursor-pointer">
                <div
                    onClick={handleClick}
                    className="text-[#fff] flex justify-center items-center h-[45px]" >
                    <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                </div>
            </section>
        </section>
    )

}
export default MyNotes