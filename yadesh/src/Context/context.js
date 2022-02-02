import { createContext, useState } from "react";
import imgUser from "../assets/Img/AdminPanelCourses/imgUser.jpg";
import classs from "../assets/Img/imgHomeNotLogin/class.jpg";
import asnad from "../assets/Img/imgHomeNotLogin/asnad.jpg";
import work from "../assets/Img/imgHomeNotLogin/work.jpg";
import convetion from "../assets/Img/imgHomeNotLogin/convertion.jpg";
import reading from "../assets/Img/imgHomeNotLogin/reading.jpg";
import AboutYadesh from "../assets/Img/AboutYadesh/Rectangle 857.jpg";
import imgPelaneSazmani from "../assets/Img/PelaneSazmani/imgPelaneSazmani.jpg";
import HamraheAval from "../assets/svg/CustomerYadesh/hamraheaval.svg";
import LogoBanafsh from "../assets/svg/CustomerYadesh/logo-banafsh.svg";
import MelatBank from "../assets/svg/CustomerYadesh/melatBank.svg";
import Shape from "../assets/svg/CustomerYadesh/shape.svg";
import Snap from "../assets/svg/CustomerYadesh/snap.svg";

export const MainCounter = createContext("");

const Context = (props) => {
  const [siteManagmentDatabase, setsiteManagmentDatabase] = useState({
    HomePageNotLogin: {
      hero: {
        title: "یادگیری به فاصله چند کلیک",
        subTitle:
          "بیش از هزاران ویدیوی آموزشی برای شما از بروزترین منابع آموزشی دنیا",
        description: "مزایای ثبت نام در یادش",
        attributes: {
          first: "دسترسی به بیش از هزاران ویدیو",
          second: "پنل کاربری کامل و کاربردی",
          third: "امکان دانلود ویدیو بدون محدودیت",
        },

        imagery: {
          img1: classs,
          img2: reading,
          img3: convetion,
          img4: asnad,
          img5: work,
        },
      },

      popularCourses: {
        title: "دوره های پرطرفدار",
        subTitle: " به انتخاب یادش",
      },
      aboutYadesh: {
        title: "درباره یادش",
        subTitle: "درباره ما بیشتر بدانید",
        description:
          "یادگیری دغدغه همیشگی افراد است ولی بستر مناسبی برای آن وجود ندارد. یادش یک پلتفرم آموزش برای شرکت هااساتید مدیران تولید محتواواراد است که دسترسی دسرسی به ویدیوهای آموزشی را برای کاربران آسان کرده است.",
        imagery: AboutYadesh,
      },
      mostViewedEpisodes: {
        title: "پربازدیدترین اپیزودها",
        subTitle: "اپیزودها پربازدید هفته",
      },
      costomerYadesh: {
        title: "مشتریان یادش",
        subTitle: "یادش از انتخاب شما تشکر میکند",
        imagery: [HamraheAval, LogoBanafsh, MelatBank, Shape, Snap],
      },
      pelanSazmani: {
        title: "پلن سازمانی",
        subTitle:
          "سازمان ها و شرگت ها به جهت ارتقای سطح کیفی نیروی انسانی خود می توانند از پلن ویژه آموزشی یادش برای آموزش مهارت ها استفاده کنند.",
        imagery: imgPelaneSazmani,
      },
    },
  });

  const [comment, setComment] = useState("");

  const [arrayAnswer, setArrayAnswe] = useState([
    {
      txt: "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ",
      name: "شما",
      time: "12:00",
      date: "22 شهریور",
    },
  ]);
  const [arrayComment, setArrayComment] = useState([
    {
      txt: "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ",
      name: "حسین ضرابی",
      time: "12:00",
      date: "22 شهریور",
    },
  ]);

  const [ticketDatabase, setticketDatabase] = useState({
    user: [
      {
        txt: "سلام من حسین ضرابی هستم از شرکت دیجی کالا ",
        name: "حسین ضرابی",
        time: "12:00",
        date: "22 شهریور",
        img: imgUser,
        categories: "حساب کاربری",
      },
      {
        txt: "سلام من علی حسنی هستم از شرکت دیجی کالا ",
        name: "علی حسنی ",
        time: "12:00",
        date: "22 شهریور",
        img: imgUser,
        categories: "اپیزودها",
      },
    ],
    company: [],
    userTicket: [
      {
        txt: "سلام من حسین ضرابی هستم",
        name: "حسین ضرابی",
        time: "12 : 00",
        date: "22 شهریور",
      },
    ],
    companyTicket: [
      {
        txt: "سلام من حسین ضرابی از شرکت مکین هستم",
        name: "حسین ضرابی",
        time: "12 : 00",
        date: "22 شهریور",
      },
    ],
  });
  return (
    <MainCounter.Provider
      value={{
        comment,
        setComment,
        arrayComment,
        setArrayComment,
        arrayAnswer,
        setArrayAnswe,
        ticketDatabase,
        setticketDatabase,
        siteManagmentDatabase,
        setsiteManagmentDatabase,
      }}
    >
      {props.children}
    </MainCounter.Provider>
  );
};
export default Context;
