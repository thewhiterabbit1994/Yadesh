import Snap from "../../assets/svg/YadgiriDarSatheJahani/Snap"
import HamraheAval from "../../assets/svg/YadgiriDarSatheJahani/hamraheAval.svg"
import Logo from "../../assets/svg/YadgiriDarSatheJahani/logo.svg"
import ritle from "../../assets/svg/YadgiriDarSatheJahani/ritle.svg"
import BankeMelat from "../../assets/svg/YadgiriDarSatheJahani/BanjeMelat"
import Bale from "../../assets/svg/YadgiriDarSatheJahani/Bale"
import textBank from "../../assets/svg/YadgiriDarSatheJahani/textBank.svg"
import textMelat from "../../assets/svg/YadgiriDarSatheJahani/textMelet.svg"
import { useContext } from "react"
import { MainCounter } from "../../Context/Context";
import { useState } from "react"

const CommentCustomer = () => {
  let [coment, setComent] = useState({})
  const { siteManagmentDatabase } =
    useContext(MainCounter);
  const data = siteManagmentDatabase.YadeshForOrganization.Customer

  setTimeout((i) => {
    setComent(coment)
  }, 10000);
  return (
    <div>
      <section className="w-full h-[400px] bg-[#000E14] flex " >
        <div className="w-[50%]  flex flex-col justify-center items-center ">
          <div>
            <div className="flex mb-[10px]">
              <div className="border-[#00FF85]   border-r-[6px] ml-[10px] rounded h-[20px] mt-[7px] "> </div>
              <h6 className="text-[20px] text-[#E6FFF3]">مشتریان در مورد یادش چه می گویند؟</h6>
            </div>
            <h6 className="text-[16px] text-[#C4C4C4] mb-[50px]">نظر مشتریان در مورد یادش</h6>
            <div className=" bg-gradient-to-l from-[#00FF85] h-[1.5px] mr-[-110px] w-[200px] relative -top-3 right-28"></div>
            <section className="flex">
              <img
                className="flex w-[50px] h-[40px] justify-between mt-[20px] mb-[20px]"
                src={coment.img}
              />
              <p className="text-[#fff] mt-[25px] mr-[10px]">{coment.name}</p>
            </section>
            <h6 className="text-[#C4C4C4] text-[14px] w-[480px] h-[80px] leading-[30px]">{coment.comment}</h6>
          </div>
          {

          }
        </div>
        <section className="w-[43.5%] h-[250px] pl-[50px] flex flex-wrap items-center mt-[70px]  justify-between ">
          {
            data.imagery.map((item, i) => {
              return (
                <div className="bg-[#011E29] w-[90px] cursor-pointer h-[90px] rounded-lg flex justify-center items-center">
                  <img
                    onClick={() => setComent((item , i))}
                    src={item.img}
                    className="w-[50px] h-[50px] " />
                </div>
              )
            })
          }
        </section>
      </section>
    </div>
  )
}
export default CommentCustomer