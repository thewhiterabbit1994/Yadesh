import Company from "../../assets/svg/AdminPanelCourses/Company";
import Exele from "../../assets/svg/AdminPanelCourses/Exele";
import Create from "../../assets/svg/AdminPanelCourses/Create";
const MiddlwSection = () => {
  return (
    <section className="w-full h-[100px] ">
      <p>hi</p>
      <section className="w-[90%] flex text-[12px] m-auto justify-between font-semibold">
        <section className="flex w-[50%]">
          <div className=" ml-[10px]">
            <Company />
          </div>
          <p>شرکت ها</p>
        </section>
        <section className="w-[42%] justify-between flex text-[10px] text-[#001D29]">
          <section className="flex justify-center items-center border-dashed border-2 w-[180px] h-[50px] rounded border-[#0000003d]">
            <p>دانلود به صورت فایل اکسل</p>
            <div className="mr-[10px]">
              <Exele />
            </div>
          </section>
          <section className="w-[300px] rounded h-[50px] bg-[#008043] flex justify-around items-center">
            <section className="flex">
              <Create />
              <p className="text-[10px] mr-[10px] text-[#fff]">
                افزودن شرکت های جدید
              </p>
            </section>
            <div className="tetx-[#001D29] text-[10px] font-semibold bg-[#fff] w-[80px] h-[40px] rounded flex justify-center items-center">
              {" "}
              اضافه کنید
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};
export default MiddlwSection;
