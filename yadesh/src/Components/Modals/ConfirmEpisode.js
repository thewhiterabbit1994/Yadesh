import Done from "../../assets/svg/Modals/Done"
const ConfirmEpisode = () => {
    return (
        <section className="w-[400px] text-[12px] h-[300px] m-auto rounded-lg  bg-[#d5d5d556]">
            <section className="pt-[40px]">
                <div className="w-[70px] relative h-[70px] rounded-[50%] bg-[#d5d5d556] m-auto mb-[30px] pt-[20px]">
                    <div className="absolute right-[10px]">
                        <Done />
                    </div>
                </div>
                <div className="  w-[150px] m-auto ">
                    <p>اپیزود با موفقیت آپلود شد</p>
                </div>
                <section className="flex w-[280px] justify-between m-auto text-[#fff] mt-[40px]">
                    <button className="w-[130px] h-[40px] rounded text-[#000000c7] bg-[#d5d5d5da]"> ویرایش و بازبینی </button>
                    <button className="w-[130px] h-[40px] rounded bg-[#008043]"> ذخیره و انتشار </button>
                </section>
            </section>
        </section>
    )
}
export default ConfirmEpisode