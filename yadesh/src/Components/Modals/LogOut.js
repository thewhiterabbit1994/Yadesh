import LogOutLogo from "../../assets/svg/Modals/Logout"
const LogOut = () => {
    return (
        <section className="w-[386px] h-[286px] flex flex-col justify-center items-center rounded-lg m-auto bg-[#d5d5d556]">
            <section className="text-center pb-[35px]">
                <div className=" relative w-[70px] h-[70px] rounded-[50%] bg-[#D5D5D5]">
                    <div className="absolute top-[20px] left-[25px]">
                        <LogOutLogo />
                    </div>
                </div>
            </section>
            <p className="w-[200px] h-[50px] text-[12px]"> آیا می خواهید از پنل خارج شوید؟</p>
            <section className="w-[330px] flex justify-between text-[10px] ">
                <button className="w-[150px] h-[45px] bg-[#EEEEEE] text-[#000] rounded-lg">خیر . بستن این پنجره</button>
                <button className="w-[150px] h-[45px] bg-[#008043] text-[#fff] rounded-lg">بله . خروج از پنل</button>
            </section>
        </section>
    )
}
export default LogOut