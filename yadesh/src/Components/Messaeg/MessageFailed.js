const MessageFailed = ({text}) => {
    return (
        <section className="w-[350px] h-[60px] rounded-lg bg-[#C32129] flex justify-around items-center text-[#fff] text-[10px]">
            <div className="flex items-center">
                <p className="text-[15px]">x</p>
                <p className="mr-[10px]">{text}</p>
            </div>
            <div>تلاش مجدد</div>
        </section>
    )
}
export default MessageFailed