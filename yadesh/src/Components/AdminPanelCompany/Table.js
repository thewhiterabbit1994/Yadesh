import Edit from "../../assets/svg/AdminPanelCourses/Edit";
import Sort from "../../assets/svg/AdminPanelCourses/Sort";
import Search from "../../assets/svg/AdminPanelCourses/Search";
import { useState } from "react"
import EditCompany from "../../Components/Modals/EditCompany"

const Table = () => {
  const [showMore, setShowMore] = useState(false)
  const [EditComponyModal, setEditComponyModal] = useState(false)
  const [company, setCompany] = useState([
    {
      companyNmae: "مخابرات ایران",
      educationExpert: "علی محرابی",
      NumberOfEmployees: "1300 نفر",
      CompanyPosition: "خوزستان اهواز",
    },
    {
      companyNmae: "مخابرات ایران",
      educationExpert: "علی محرابی",
      NumberOfEmployees: "1300 نفر",
      CompanyPosition: "خوزستان اهواز",
    },
    {
      companyNmae: "مخابرات ایران",
      educationExpert: "علی محرابی",
      NumberOfEmployees: "1300 نفر",
      CompanyPosition: "خوزستان اهواز",
    },
    {
      companyNmae: "مخابرات ایران",
      educationExpert: "علی محرابی",
      NumberOfEmployees: "1300 نفر",
      CompanyPosition: "خوزستان اهواز",
    },
    {
      companyNmae: "مخابرات ایران",
      educationExpert: "علی محرابی",
      NumberOfEmployees: "1300 نفر",
      CompanyPosition: "خوزستان اهواز",
    },
  ])
  let twoOfCompany = [];
  for (let i = 0; i < 2; i++) {
    let loopResult = company[i];
    twoOfCompany.push(loopResult);
  }

  console.log(EditComponyModal);
  return (
    <sectio n className="w-[97vw]">
      <EditCompany EditComponyModal={EditComponyModal} setEditComponyModal={setEditComponyModal} />

      <section className="w-[89%] m-auto text-[12px] text-[#001D29] mr-[120px]">
        <section className="w-full justify-between flex py-[20px] bg-[#e6e9eb6b]">
          <section className="w-[50%] font-semibold pr-[10px]	"> لیست شرکت ها</section>
          <section className="w-[570px] flex justify-between pl-[10px]">
            <div className="flex text-[12px] w-[300px] h-[35px] bg-[#E6E9EB] rounded">
              <div className="mt-[13px] mx-[10px]">
                <Search />
              </div>
              <lable >
                <input
                  className="w-[250px] h-[35px] bg-[#E6E9EB] outline-none text-[12px] placeholder:text-[#0000009f] placeholder:text-[10px]"
                  placeholder="جست وجوی شرکت"
                />
              </lable>
            </div>
            <div className="flex items-center justify-center text-[10px] w-[250px] h-[35px] bg-[#E6E9EB] rounded">
              <p> چیدمان بر اساس لیست شرکت ها</p>
              <div className=" mx-[10px]">
                <Sort />
              </div>
            </div>
          </section>
        </section>
        <table class="table-auto w-full bg-[#e6e9eb6e]">
          <thead className="">
            <tr className="h-[70px]">
              <th><p className="text-center">ردیف</p></th>
              <th><p className="text-center">نام شرکت</p></th>
              <th>کارشناسان آموزش</th>
              <th> تعداد کارمندان</th>
              <th> موقعیت شرکت</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="w-full">
            {
              !showMore ?
                twoOfCompany.map((item, i) => {
                  return (
                    <tr className="h-[50px] hover:bg-[#e6e9ebc2]">
                      <td className="text-center">{i}</td>
                      <td className="text-center"><p>{item.companyNmae}</p></td>
                      <td className="text-center"><p>{item.educationExpert}</p></td>
                      <td className=" text-[#0050A8] font-semibold text-center	"><p>{item.NumberOfEmployees}</p></td>
                      <td className="text-center"><p>{item.CompanyPosition}</p></td>
                      <td className="flex  h-[50px] items-center">
                        <div className="mt-[3px]">
                          <Edit />{" "}
                        </div>
                        <p 
                        onClick={()=>setEditComponyModal(!EditComponyModal)}
                        className="mr-[10px] cursor-pointer text-[#0050A8] ">ویراش شرکت ها</p>
                      </td>
                    </tr>
                  )
                })
                :
                company.map((item, i) => {
                  return (
                    <tr className="h-[50px] hover:bg-[#e6e9ebc2]">
                      <td className="text-center">{i}</td>
                      <td className="text-center"><p>{item.companyNmae}</p></td>
                      <td className="text-center"><p>{item.educationExpert}</p></td>
                      <td className=" text-[#0050A8] font-semibold text-center	"><p>{item.NumberOfEmployees}</p></td>
                      <td className="text-center"><p>{item.CompanyPosition}</p></td>
                      <td className="flex">
                        <div className="mt-[3px]">
                          <Edit />{" "}
                        </div>
                        <p className="mr-[10px] text-[#0050A8]">ویراش شرکت ها</p>
                      </td>
                    </tr>
                  )
                })
            }


          </tbody>
        </table>
        <section onClick={() => setShowMore(!showMore)} className="w-full h-[50px] cursor-pointer bg-[#E6E9EB] flex justify-center mt-[20px] items-center">
          <p>موارد بیشتر</p>
        </section>
      </section>
    </sectio>
  );
};
export default Table;
