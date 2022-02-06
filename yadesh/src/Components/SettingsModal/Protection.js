const Protection = () => {
    return (
        <section className="w-full">
            <section className="w-[90%] mt-[55px] text-[12px]  text-[#7A7A7A]">
                <div className="mb-7">
                    <p>امنیت</p>
                </div>
                <div className="mb-3">
                    <p>active sessions</p>
                </div>
                <section className="w-[92%] h-[60px] rounded bg-[#7a7a7a2a] mt-10 ">
                    <div className="w-[600px] h-[60px] flex justify-around items-center">
                        <p className="text-[#008043]">آنلاین</p>
                        <p className="text-[#0050A8]">دستگاه شما (pc)</p>
                        <p> windows 10 , home version </p>
                        <p> تهران . ایران </p>
                        <p> 183.233.150.4</p>
                    </div>
                </section>
                <section className="w-[92%] h-[60px] rounded bg-[#7a7a7a2a]  mt-3">
                    <div className="w-[650px] h-[60px] flex justify-between px-[20px] items-center">
                        <div className="w-[400px] h-[60px] flex justify-between items-center">
                            <p className="text-[#AA0029]">آفلاین</p>
                            <p className="text-[#0050A8]">android</p>
                            <p> android 1 </p>
                            <p> تهران . ایران </p>
                            <p> 185.255.190.4</p>
                        </div>
                        <div className="cursor-pointer">
                            <p className="text-[#AA0029]">حذف sesions</p>
                        </div>
                    </div>
                </section>
                <div className="w-[92%]  bg-[#4e50501c] rounded-lg h-[3px] mt-[170px]  ml-[170px]"> </div>
                <section className="text-[12px] text-[#fff] w-[210px] flex justify-between mt-[20px] absolute left-[140px]">
                    <button
                        className="w-[100px] h-[35px] rounded bg-[#4e50505d] text-[#000]">لغو </button>
                    <button className="w-[100px] h-[35px] rounded bg-[#008043]">ذخیره کردن</button>
                </section>
            </section>
        </section>
    )
}
export default Protection