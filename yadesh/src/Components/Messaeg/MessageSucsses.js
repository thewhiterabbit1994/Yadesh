import TickSucsses from "../../assets/svg/adminPanelEpisode/TickSucsses"
const MessageSucsses = ({text}) => {
    return (
        <section className="w-[250px] h-[60px] rounded-lg bg-[#008043] flex justify-around items-center text-[#fff] text-[10px]">
            <div className="flex items-center">
                <p className="text-[15px]">
                    <TickSucsses/>
                </p>
                <p className="mr-[10px] text-[11px]">{text}</p>
            </div>
        </section>
    )
}
export default MessageSucsses