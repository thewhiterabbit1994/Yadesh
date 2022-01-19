import ImgPlayer from "../../assets/Img/PlayerEpisode/imgPlayer.png"
import Yaddasht from "../../assets/svg/PlayerEpisode/Yaddasht"
import Cc from "../../assets/svg/PlayerEpisode/Cc"
import Dislike from "../../assets/svg/PlayerEpisode/Dislike"
import Hd from "../../assets/svg/PlayerEpisode/Hd"
import Humborger from "../../assets/svg/PlayerEpisode/Humborgrt"
import Like from "../../assets/svg/PlayerEpisode/Like"
import Resize from "../../assets/svg/PlayerEpisode/Resize"
import Nexd from "../../assets/svg/PlayerEpisode/Nexd"
import Setting from "../../assets/svg/PlayerEpisode/Setting"
import Stop from "../../assets/svg/PlayerEpisode/Stop"
import Volume from "../../assets/svg/PlayerEpisode/Volume"
import Tag from "../../assets/svg/PlayerEpisode/Tag"
import Border from "../../assets/svg/PlayerEpisode/Border"
const Header = () => {
    return (
        <section className="w-full h-[100vh] bg-[#000] flex">
            <div className="w-[800px] mt-[100px] mr-[50px] relative h-[450px]">
                <img src={ImgPlayer} className="rounded-lg w-[900px] h-[450px] relative" />
                <sction className="absolute bottom-[85px] right-[20px] text-[#fff]">
                    <p className="absolute bottom-[130px] right-[110px] w-[450px] text-[14px] leading-[30px] bg-[#00121ad2]"> طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار </p>
                </sction>
                <section className="absolute bottom-[85px] right-[20px]">
                    <Border />
                </section>
                <section className=" absolute bottom-[10px] right-[20px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]">
                        <Cc />
                    </div>
                </section>
                <section className=" absolute bottom-[10px] right-[70px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]">
                        <Hd />
                    </div>
                </section>
                <section className=" absolute bottom-[10px] right-[120px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]">
                        <Resize />
                    </div>
                </section >
                <section className=" absolute bottom-[10px] right-[170px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]">
                        <Setting />
                    </div>
                </section>
                <section className=" absolute bottom-[10px] right-[220px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%] text-[#fff]">
                    <h6 className="absolute top-[8px] right-[13px]">1x</h6>
                </section>
                <section className=" absolute bg-[#00121ad2] w-[150px] h-[40px] rounded-[50px] bottom-[10px] left-[160px] text-[#fff]">
                    <p className="absolute top-[8px] right-[25px]"> 0:25/01:45.36</p>
                </section>
                <section className=" absolute bottom-[10px] left-[110px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]">
                        <Volume />
                    </div>
                </section>
                <section className=" absolute bottom-[10px] left-[60px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]">
                        <Nexd />
                    </div>
                </section>
                <section className=" absolute bottom-[10px] left-[10px] bg-[#00121ad2] w-[40px] h-[40px] rounded-[50%]">
                    <div className="absolute right-[10px] top-[10px]" >
                        <Stop />
                    </div>
                </section>
            </div>
            <div className="w-[50%]">

            </div>
        </section>
    )
}
export default Header