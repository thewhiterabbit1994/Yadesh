import endSection from "../../assets/Img/yadgiriDarSatheJahani/endSection.png"
import shadow from "../../assets/Img/yadgiriDarSatheJahani/shadowImg.png"

const EndSection = () => {
    return (
        <section className="w-full h-[60vh] bg-[#000] pt-[3rem] ">
            <section className="relative ">
                <img src={endSection} />
                <img src={shadow} className="absolute top-[0]" />
                <section className="absolute top-[0] flex flex-col justify-center items-center w-[100%] h-[100%] leading-[40px]">
                    <div>
                        <h5 className="text-[#E6FFF3] text-[20px]">همین امروز یادش را انتخاب کنید</h5>
                    </div>
                    <div>
                        <h5  className="text-[#C4C4C4] text-[16px]">با انتخاب یادش به جمع سازمان های حرفه ای بپیوندید</h5>
                    </div>
                    <div className="border-t-[7px] w-[20px] rounded border-[#00FF85] mb-[15px]"></div>
                    <div>
                        <button className="text-[12px] text-[#000] bg-[#00ff85] w-[140px] h-[43px] rounded-[6px]">
                            {" "}
                            به یادش بپیوندید
                        </button>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default EndSection