import Ekhtar from "../../assets/svg/AdminPanelCourses/Ekhtar";
import { useState } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";

const Hero = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageNotLogin.hero;
  console.log(siteManagmentDatabase);
  const [title, settitle] = useState(data.title);
  console.log(data);
  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.HomePageNotLogin.hero.title = title;

    setsiteManagmentDatabase(database);
  };
  return (
    <section className="w-full h-[600px] bg-[#F5F5F5] flex justify-between rounded mt-[10px]">
      <section className="w-[45%]">
        <section className="w-[93%] h-[550px] m-auto  my-[20px] ">
          <div>
            <label
              htmlFor="title"
              className="text-[12px] text-[#7A7A7A]  pr-[10px]"
            >
              عنوان
            </label>
            <input
              value={title}
              onChange={(e) => settitle(e.target.value)}
              id="title"
              className="w-[400px] h-[40px] pr-[10px] mt-[15px] text-[11px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
            />
            <button onClick={handleClick}>کلیک کن چاقال</button>
          </div>
          <div className="my-[30px]">
            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
              زیر عنوان
            </p>
            <label>
              <input
                className="w-[400px] h-[80px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                placeholder="بیش از هزاران ویدبوی آموزش برای شما از بروزترین منابع آموزشی دنیا"
              />
            </label>
          </div>
          <div className="my-[30px]">
            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
              توضیحات
            </p>
            <label>
              <input
                className="w-[400px] h-[40px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                placeholder="مزایای ثبت نام در یادش"
              />
            </label>
          </div>
          <div className="my-[30px]">
            <p className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]">
              {" "}
              ویژگی ها (حد اقل 3 اکثر مورد){" "}
            </p>
            <label>
              <input
                className="w-[400px] h-[150px] rounded placeholder:text-[11px] placeholder:pr-[10px]"
                placeholder="دسترسی بیش از هزاران ویدیو "
              />
            </label>
          </div>
        </section>
      </section>
      <section className="w-[55%] ">
        <section className="w-[500px] h-[400px] mt-[20px] relative bg-[#ff000007]">
          <img className="rounded-lg w-[260px] h-[240px] bg-[red] absolute top-[10px] right-[10px] left-0 bottom-0" />
          <img className="rounded-lg w-[210px] h-[125px] bg-[blue] absolute top-[10px]  left-[10px] bottom-0" />
          <img className="rounded-lg w-[95px] h-[238px] bg-[yellow] absolute left-[10px] bottom-[15px]" />
          <img className="rounded-lg w-[375px] h-[120px] bg-[green]  absolute right-[10px]  bottom-[15px]" />
          <img className="rounded-lg w-[105px] h-[100px] bg-[#441515] absolute top-[149px] left-[115px]" />
        </section>
        <div className="text-[10px] flex mt-[20px] px-[10px] text-[#7A7A7A]">
          <Ekhtar />
          <p className="mr-[10px]">
            حداکثر اندازه عکس مورد نظر باید 1366 * 768 باشد و برش عکس به صورت
            اتوماتیک مطابق با سایز container باشد.
          </p>
        </div>
      </section>
    </section>
  );
};
export default Hero;
