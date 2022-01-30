import { useState } from "react"
import YourProgres from "../../Components/SiteManagmentPishrafteMan(myProgress)/YourProgres"
import MyNotes from "../../Components/SiteManagmentPishrafteMan(myProgress)/MyNotes"
import MyList from "../../Components/SiteManagmentPishrafteMan(myProgress)/MyList"
import YouHaveSeenItBefore from "../../Components/SiteManagmentPishrafteMan(myProgress)/YouHaveSeenItBefore"
import CompletedCourse from "../../Components/SiteManagmentPishrafteMan(myProgress)/CompletedCourse"
import KeepLearning from "../../Components/StateManagmentSignIn/KeepLearning"


const PishrafteMan =()=>{
    const [openTab, setOpenTab] = useState(6)

    return(
        <section className="w-full h-[100vh]">
            <section className=" flex justify-between">
                <section className="w-[10%]">
                    <div className="text-[11px] w-[160px] text-center opacity-90">
                        <p onClick={() => setOpenTab(1)} className=" hover:bg-[#e2e0e0]  p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">پیشرفت شما</p>
                        <p onClick={() => setOpenTab(2)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">به یادگیری ادامه دهید  </p>
                        <p onClick={() => setOpenTab(3)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">یادداشت های من</p>
                        <p onClick={() => setOpenTab(4)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">لیست من </p>
                        <p onClick={() => setOpenTab(5)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">قبلا دیده اید</p>
                        <p onClick={() => setOpenTab(6)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">دوره های تکمیل شده</p>
                        <p onClick={() => setOpenTab(7)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">فوتر</p>
                    </div>
                </section>
                <section className="w-[84%]">
                    <div className={`${openTab === 1 ? "block" : "hidden"}`}>
                        <YourProgres />
                    </div>
                    <div className={`${openTab === 2 ? "block" : "hidden"}`}>
                        <KeepLearning />
                    </div>
                    <div className={`${openTab === 3 ? "block" : "hidden"}`}>
                        <MyNotes />
                    </div>
                    <div className={`${openTab === 4 ? "block" : "hidden"}`}>
                        <MyList />
                    </div>
                    <div className={`${openTab === 5 ? "block" : "hidden"}`}>
                        <YouHaveSeenItBefore />
                    </div>
                    <div className={`${openTab === 6 ? "block" : "hidden"}`}>
                        <CompletedCourse />
                    </div>
                </section>
            </section>
        </section>
    )
}
    export default PishrafteMan