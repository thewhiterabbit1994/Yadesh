import img1 from "../../assets/Img/yadgiriDarSatheJahani/img1.png"
import img2 from "../../assets/Img/yadgiriDarSatheJahani/img2.png"
import img3 from "../../assets/Img/yadgiriDarSatheJahani/img3.png"
import img4 from "../../assets/Img/yadgiriDarSatheJahani/img4.png"
import img5 from "../../assets/Img/yadgiriDarSatheJahani/im4.png"
import image1 from "../../assets/Img/yadgiriDarSatheJahani/image1.png"
import image2 from "../../assets/Img/yadgiriDarSatheJahani/image2.png"
import image3 from "../../assets/Img/yadgiriDarSatheJahani/image3.png"
import image4 from "../../assets/Img/yadgiriDarSatheJahani/image4.png"
import image5 from "../../assets/Img/yadgiriDarSatheJahani/image5.png"
import image6 from "../../assets/Img/yadgiriDarSatheJahani/image6.png"
import Star from "../../assets/svg/Star"
import Arrow from "../../assets/svg/Aroow"
import FatAroow from "../../assets/svg/FatAroow"
import manPng from "../../assets/Img/yadgiriDarSatheJahani/manPng.png"

const Header = () => {
    return (
        <div>
            <div className="flex w-[100%]">
                <img src={img4} className="w-[550px] ml-[20px]" />
                <img src={img1} className="w-[219px] ml-[20px]" />
                <img src={img2} className="w-[300px] ml-[20px]" />
                <img src={img3} className="w-[219px] ml-[20px]" />
                <img src={img5} className="w-[550px]" />
            </div>
            <div className="mt-[20px] flex relative">
                <img src={image3} className="w-[357px] h-[348px] ml-[20px]" />
                <img src={image1} className="w-[165px] h-[348px] ml-[20px]" />
                <img src={image2} className="w-[348px] h-[175px] top-[180px] right-[500px] ml-[20px]" />
                <img src={image5} className="w-[163px] h-[175px] ml-[20px]" />
                <img src={image6} className="w-[541px] h-[143px] ml-[20px] absolute top-[200px] right-[510px]" />
                <img src={image4} className="w-[609px] h-[348px]" />
                <div className=" absolute bg-gradient-to-r from-[#000405d7] to-[#00040525] w-[100%] h-[80vh] flex flex-col top-[-105px]"></div>
                <div className="opacity-[200px] absolute bg-gradient-to-r from-[#00040528]  to-[#000405de] w-[100%] h-[80vh] top-[-105px] flex flex-col"></div>
                <section className="absolute text-[#E6E9EB] flex flex-col items-center w-full top-[100px]">
                    <div className="mb-[20px] text-[40px]">
                        <p>یادگیری در سطح جهانی</p>
                    </div>
                    <div className="mb-[20px] text-[17px] w-[467px] h-[71px] text-center leading-[33px]">
                        <p>سازمان ها در یادش جایگاه ویژه ای دارند , پس ما هم برای سازمان ها برنامه ویژه ای داریم.</p>
                    </div>
                    <div>
                        <button className="text-[12px] bg-[#00000073] text-[#E6FFF3] w-[150px] h-[46px] rounded border-solid border-[#00FF85] border-2 ml-[20px] ">
                            {" "}
                            بیشتر بدانید
                        </button>
                        <button className=" font-black text-[12px] text-[#000] bg-[#00FF85] w-[150px] h-[46px] rounded">
                            {" "}
                            به یادش بپیوندید
                        </button>
                    </div>
                    <div className="mt-[20px]">
                        <Star />
                    </div>
                    <div className="mt-[20px] w-[319px] h-[44px] text-[10px]">
                        <p>اشتراک ویژه ی سالانه برای گروه ها به همراه تخفیف 5 تا 25 درصدی </p>
                    </div>
                    <div className="mb-[-50px]  absolute top-[250px]">
                        <FatAroow />
                        <div className="absolute right-[-4px]">
                            <Arrow />
                        </div>
                    </div>
                </section>
            </div>
            <section className="bg-[#000] w-[100%] h-[90vh]   mt-[30px] ">
                <div className="flex flex-col items-center leading-[40px] justify-center  h-[100%]">
                    <p className="text-[22px] text-[#E6E9EB]"> تجربه ی اساتید یادش را به کارمندان خود هدیه دهید</p>
                    <p className="text-[16px] text-[#C4C4C4]"> اساتید یادش در حرفه خود بهتریند</p>
                    <div className="border-t-[7px] w-[20px] rounded border-[#00FF85]"></div>
                </div>
                <div className="flex bg-[#000] w-[100%] h-[80vh] justify-center">
                    <div className="relative text-[#E6E9EB]">
                        <img src={manPng} className=" w-[180px] h-[400px] rounded ml-[20px]" />
                        <h6 className="absolute top-[310px] left-[45px]"> شهاب علی بخشی </h6>
                        <h6 className="absolute top-[350px] left-[45px] text-[#C4C4C4]"> مشاور رسانه ای </h6>

                    </div>
                    <div className="relative text-[#E6E9EB]">
                        <img src={manPng} className=" w-[180px] h-[400px]  rounded ml-[20px]" />
                        <h6 className="absolute top-[310px] left-[45px]"> شهاب علی بخشی </h6>
                        <h6 className="absolute top-[350px] left-[45px] text-[#C4C4C4]"> مشاور رسانه ای </h6>
                    </div>
                    <div className="relative text-[#E6E9EB]">
                        <img src={manPng} className=" w-[180px] h-[400px]  rounded ml-[20px]" />
                        <h6 className="absolute top-[310px] left-[45px]"> شهاب علی بخشی </h6>
                        <h6 className="absolute top-[350px] left-[45px] text-[#C4C4C4]"> مشاور رسانه ای </h6>
                    </div>
                    <div className="relative text-[#E6E9EB]">
                        <img src={manPng} className=" w-[180px] h-[400px]  rounded ml-[20px]" />
                        <h6 className="absolute top-[310px] left-[45px]"> شهاب علی بخشی </h6>
                        <h6 className="absolute top-[350px] left-[45px] text-[#C4C4C4]"> مشاور رسانه ای </h6>
                    </div>
                    <div className="relative text-[#E6E9EB]" >
                        <img src={manPng} className=" w-[180px] h-[400px]  rounded ml-[20px]" />
                        <h6 className="absolute top-[310px] left-[45px]"> شهاب علی بخشی </h6>
                        <h6 className="absolute top-[350px] left-[45px] text-[#C4C4C4]"> مشاور رسانه ای </h6>
                    </div>
                    <div className="relative text-[#E6E9EB]">
                        <img src={manPng} className=" w-[180px] h-[400px] rounded" />
                        <h6 className="absolute top-[310px] left-[45px]"> شهاب علی بخشی </h6>
                        <h6 className="absolute top-[350px] left-[45px] text-[#C4C4C4]"> مشاور رسانه ای </h6>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Header