import { useState } from "react"
import Tags from "../SiteManegMentPlayerEpisode/Tags"
import MyNotes from "../SiteManegMentPlayerEpisode/MyNotes"
import RelateEpisode from "../SiteManegMentPlayerEpisode/RelateEpisode"

const Episode = () => {
    const [openTab, setOpenTab] = useState(1)

    return (
        <section className="w-full h-[400px] flex justify-between">
            <section className="w-[10%]">
                <div className="text-[11px] w-[160px] text-center opacity-90">
                    <p onClick={() => setOpenTab(1)} className=" hover:bg-[#e2e0e0]  p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer">درس های دوره </p>
                    <p onClick={() => setOpenTab(3)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> یادداشت های من   </p>
                    <p onClick={() => setOpenTab(4)} className=" hover:bg-[#e2e0e0] p-3  my-[10px] bg-[#C4C4C4] w-[140px] m-auto py-[15px] rounded-lg cursor-pointer"> اپیزود های مشابه  </p>
                </div>
            </section>
            <section className="mt-[5px] w-[85%]" >
                <div className={`${openTab === 1 ? "block" : "hidden"}`}>
                    <Tags />
                </div>
                <div className={`${openTab === 3 ? "block" : "hidden"}`}>
                    <MyNotes />
                </div>
                <div className={`${openTab === 4 ? "block" : "hidden"}`}>
                    <RelateEpisode />
                </div>
               
            </section>
        </section>
    )
}
export default Episode