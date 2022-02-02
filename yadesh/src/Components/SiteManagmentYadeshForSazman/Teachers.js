import { useState } from "react"

const Teachers = () => {
    const [titlevalue, setTitleValue] = useState("")
    const [subTitleValue, setSubTitleValue] = useState("")
    return (
        <section className="w-full h-[300px] bg-[#F5F5F5] flex justify-between rounded mt-[10px] ">
            <section className="w-[47%] ">
                <section className="w-[93%] h-[300px] m-auto  my-[20px] ">

                    <div >
                        <label htmlFor="Title76"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            عنوان
                        </label>
                        <input
                            onChange={(e) => setTitleValue(e.target.value)}
                            value={titlevalue}
                            id='Title76'
                            className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder=" تجربه ی اساتید یادش را به کارمندان خود انتقال دهید "
                        />
                    </div>
                    <div className="mt-[30px]" >
                        <label htmlFor="Title78"
                            className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
                            زیر عنوان
                        </label>
                        <input
                            value={subTitleValue}
                            onChange={(e) => setSubTitleValue(e.target.value)}
                            id='Title78'
                            className="w-[400px] h-[40px] rounded mt-[15px] placeholder:text-[11px] placeholder:pr-[10px]"
                            placeholder=" اساتید یادش در حرفه ی خود بهترینند "
                        />
                    </div>

                    <section className="w-[170px] h-[45px] rounded bg-[#0050A8] text-[12px] m-auto cursor-pointer mt-[30px]">
                        <div className="text-[#fff] flex justify-center items-center h-[45px]" >
                            <p className="mr-[5px]">ذخیره کردن تغییرات</p>
                        </div>
                    </section>

                </section>
            </section>
            <section className="w-[50%] mt-[20px]">

            </section>
          
        </section>
    )
}
export default Teachers