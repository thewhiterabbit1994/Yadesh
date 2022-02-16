import Play from "../../assets/svg/AdminPanelCourses/Play"
import { useState } from "react"
import MessageSucsses from "../../Components/Messaeg/MessageSucsses"
import MessageFailed from "../../Components/Messaeg/MessageFailed"
const LessonCourses = () => {
    const [titlevalue, setTitleValue] = useState("")
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
        <section className="bg-[#F5F5F5] w-full h-[200px] mt-[5px] ">
            <section className="w-[90%] m-auto pt-[20px]">
                <div className="text-[12px] flex flex-col">
                    <label htmlFor="Title120"
                        className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                        عنوان
                    </label>
                    <input
                        onChange={(e) => setTitleValue(e.target.value)}
                        value={titlevalue}
                        id='Title120'
                        className="w-[400px] h-[40px]  rounded mt-[10px] placeholder:text-[11px] placeholder:pr-[10px]"
                        placeholder=" درس های این دوره "
                    />
                </div>
                <div className={`${!SavedChangesModal ? "fixed bottom-[-200px]" : "fixed bottom-[20px] left-[50px] transition-all duration-[500ms]"}`}>
                    <MessageSucsses text={"تغییرات با موفقیت ذخیره شد"} />
                </div>
                <div className={`${!MessageFailedModal ? "fixed bottom-[-200px]" : "fixed bottom-[20px] left-[50px] transition-all duration-[500ms]"}`}>
                    <MessageFailed text={"متاسفانه تغییرات ذخیره نشد"} />
                </div>
                <section className="flex text-[#fff] text-[12px] w-[350px] justify-between m-auto mt-[30px]">
                    <div className="relative ">
                        <div className="absolute top-[18px] right-[10px]">
                            <Play />
                        </div>
                        <button className="w-[170px] h-[45px] bg-[#0050A8] rounded"> پیش نمایش صفحه </button>
                    </div>
                    <button
                        onClick={handleClick}
                        className="w-[170px] h-[45px] bg-[#008043] rounded"> ذخیره کردن تغییرات </button>
                </section>
            </section>
        </section>
    )
}
export default LessonCourses