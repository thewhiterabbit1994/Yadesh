import { useState } from "react"

const MostViewedEpisodes = () => {
    const [titlevalue, setTitleValue] = useState("")
    const [subTitleValue, setSubTitleValue] = useState("")

    return (
        <section className="w-full h-[330px] flex justify-between bg-[#F5F5F5] mt-[10px]">
            <section className="w-[95%] m-auto flex justify-between">
                <section className="w-[45%] h-[260px] flex items-center  ">
                    <section >

                        <div >
                            <label htmlFor="title3"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                عنوان
                            </label>
                            <input
                                onChange={(e) => setTitleValue(e.target.value)}
                                value={titlevalue}
                                id='title3'
                                className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="پربازدید ترین اپیزودها"
                            />
                        </div>

                        <div className="mt-[30px]" >
                            <label htmlFor="title4"
                                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                                زیر عنوان
                            </label>
                            <input
                                value={subTitleValue}
                                onChange={(e) => setSubTitleValue(e.target.value)}
                                id='title4'
                                className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                                placeholder="اپیزود های پربازدید هفته"
                            />
                        </div>

                        <section className="w-[170px] h-[45px] rounded bg-[#0050A8] text-[12px] m-auto cursor-pointer mt-[40px]">
                            <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                                <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                            </div>
                        </section>

                    </section>
                </section>
            </section>
        </section>
    )
}
export default MostViewedEpisodes