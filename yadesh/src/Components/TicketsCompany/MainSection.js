import Header from "../../Components/TicketsCompany/Header"
import { useState } from "react"
import UserComent from "./UserComent"
import CompanyComent from "./CompanyComent"

const MainSection = () => {
  const [openTab, setOpenTab] = useState(1)

  return (
    <section className="w-full h-[100vh] relative ">
      <Header setOpenTab={setOpenTab} />
      <section className="w-[86%] h-fit m-auto mr-[120px] mt-[130px] justify-between flex ">
        <div className={`w-full flex justify-between ${openTab === 1 ? "block" : "hidden"}`}>
          <UserComent />
        </div>
        <div className={`w-full flex justify-between ${openTab === 2 ? "block" : "hidden"}`}>
          <CompanyComent />
        </div>
      </section>
    </section>
  )
}
export default MainSection