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
import imgAboutUs from "../assets/Img/AboutUs/imgAbouUs.png";
import UserProfileBackground from "../assets/Img/UserProfileBackground.png";
import bgYDSJ from "../assets/Img/yadgiriDarSatheJahani/bgYDSJ.png";
import imgauestion from "../assets/Img/qustionFromYadesh/img-auestion.png";
import endSection from "../assets/Img/yadgiriDarSatheJahani/endSection.png";
import LoginBackground from "../assets/Img/LoginBackground.png";
import Cup from "../assets/Img/cup.png";
import ZtoMPrev from "../assets/videos/ZeroToMastery/ZtoMPrew.jpg";
import ZtoM_Intro from "../assets/videos/ZeroToMastery/Intro.mp4";
import ZtoM_IntroImg from "../assets/videos/ZeroToMastery/Intro.png";
import ZtoM_CSS from "../assets/videos/ZeroToMastery/CSS.mp4";
import ZtoM_CSSImg from "../assets/videos/ZeroToMastery/CSS.png";
import ZtoM_HTML from "../assets/videos/ZeroToMastery/HTML.mp4";
import ZtoM_HTMLImg from "../assets/videos/ZeroToMastery/HTML.png";
import ZtoMReactPrew from "../assets/videos/ZerToMasteryReact/ZtoMReactPrew.jpg";
import ZtoMReactintro from "../assets/videos/ZerToMasteryReact/IntroductionToReact.mp4";
import ZtoMReactintroImg from "../assets/videos/ZerToMasteryReact/introreact.png";
import ZtoMReactcreate from "../assets/videos/ZerToMasteryReact/create-react-app.mp4";
import ZtoMReactcreateImg from "../assets/videos/ZerToMasteryReact/creatreact.png";
import ZtoMReactcomponent from "../assets/videos/ZerToMasteryReact/ReactComponent.mp4";
import ZtoMReactcomponentImg from "../assets/videos/ZerToMasteryReact/ReactComponent.png";
import ZtoMBackPrew from "../assets/videos/ZerToMasteryBackend/prew.jpg";
import ZtoMBackHTTPS from "../assets/videos/ZerToMasteryBackend/HTTPS.mp4";
import ZZtoMBackHTTPSImg from "../assets/videos/ZerToMasteryBackend/HTTPS.png";
import ZtoMBackAJAX from "../assets/videos/ZerToMasteryBackend/AJAX.mp4";
import ZtoMBackAJAXImg from "../assets/videos/ZerToMasteryBackend/AJAX.png";
import ZtoMBackBasics from "../assets/videos/ZerToMasteryBackend/BackendBasics.mp4";
import ZtoMBackBasicsImg from "../assets/videos/ZerToMasteryBackend/BackendBasics.png";
import ZtoMBackJSON from "../assets/videos/ZerToMasteryBackend/JSON.mp4";
import ZtoMBackJSONImg from "../assets/videos/ZerToMasteryBackend/JSON.png";
import BuildingPrew from "../assets/videos/Buildingandminingsafety/prewImg.png";
import BuildingEpisode1 from "../assets/videos/Buildingandminingsafety/Episode1.mp4";
import BuildingEpisode1Img from "../assets/videos/Buildingandminingsafety/Episode1Img.png";
import BuildingEpisode2 from "../assets/videos/Buildingandminingsafety/Episode2.mp4";
import BuildingEpisode2Img from "../assets/videos/Buildingandminingsafety/Episode2Img.png";
import BuildingEpisode3 from "../assets/videos/Buildingandminingsafety/Episode3.mp4";
import BuildingEpisode3Img from "../assets/videos/Buildingandminingsafety/Episode3Img.png";
import BuildingEpisode4 from "../assets/videos/Buildingandminingsafety/Episode4.mp4";
import BuildingEpisode4Img from "../assets/videos/Buildingandminingsafety/Episode4Img.png";
import PowerPrew from "../assets/videos/FundamentalsofElectricEngineering/prewimg.jpg";
import PowerEpisode1 from "../assets/videos/FundamentalsofElectricEngineering/Episode1.mp4";
import PowerEpisode1Img from "../assets/videos/FundamentalsofElectricEngineering/Episode1Img.png";
import PowerEpisode2 from "../assets/videos/FundamentalsofElectricEngineering/Episode2.mp4";
import PowerEpisode2Img from "../assets/videos/FundamentalsofElectricEngineering/Episode2Img.png";
import PowerEpisode3 from "../assets/videos/FundamentalsofElectricEngineering/Episode3.mp4";
import PowerEpisode3Img from "../assets/videos/FundamentalsofElectricEngineering/Episode3Img.png";
import PowerEpisode4 from "../assets/videos/FundamentalsofElectricEngineering/Episode4.mp4";
import PowerEpisode4Img from "../assets/videos/FundamentalsofElectricEngineering/Episode4Img.png";
import PowerEpisode5 from "../assets/videos/FundamentalsofElectricEngineering/Episode5.mp4";
import PowerEpisode5Img from "../assets/videos/FundamentalsofElectricEngineering/Episode5Img.png";
import PowerEpisode6 from "../assets/videos/FundamentalsofElectricEngineering/Episode6.mp4";
import PowerEpisode6Img from "../assets/videos/FundamentalsofElectricEngineering/Episode6Img.png";
import MashinPrew from "../assets/videos/Safetyofindustrialmachineryandequipment/prewimg.jpg";
import MashinEpisode1 from "../assets/videos/Safetyofindustrialmachineryandequipment/Episode1.mp4";
import MashinEpisode1Img from "../assets/videos/Safetyofindustrialmachineryandequipment/Episode1Img.png";
import MashinEpisode2 from "../assets/videos/Safetyofindustrialmachineryandequipment/Episode2.mp4";
import MashinEpisode2Img from "../assets/videos/Safetyofindustrialmachineryandequipment/Episode2Img.png";
import MashinEpisode3 from "../assets/videos/Safetyofindustrialmachineryandequipment/Episode3.mp4";
import MashinEpisode3Img from "../assets/videos/Safetyofindustrialmachineryandequipment/Episode3Img.png";

export const MainCounter = createContext("");

const Context = (props) => {
  const [siteManagmentDatabase, setsiteManagmentDatabase] = useState({
    Courses: [
      {
        CourseImg: ZtoMPrev,
        TeacherName: "آندره نیگوا",
        CourseDurationTime: "27 دقیقه",
        NumberOfEpisodes: "3 اپیزود",
        CourseCategory: "صفر تا صد تسلط وب",
        Episodes: [
          {
            Video: ZtoM_Intro,
            PreviewImg: ZtoM_IntroImg,
            NameOfEpisode: "معرفی دوره",
            TimeOfEpisode: "9 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط وب",
            TeacherName: "آندره نیگوا",
          },
          {
            Video: ZtoM_CSS,
            PreviewImg: ZtoM_CSSImg,
            NameOfEpisode: "معرفی CSS",
            TimeOfEpisode: "10 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط وب",
            TeacherName: "آندره نیگوا",
          },
          {
            Video: ZtoM_HTML,
            PreviewImg: ZtoM_HTMLImg,
            NameOfEpisode: "معرفی HTML",
            TimeOfEpisode: "8 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط وب",
            TeacherName: "آندره نیگوا",
          },
        ],
      },
      {
        CourseImg: ZtoMReactPrew,
        TeacherName: "آندره نیگوا",
        CourseDurationTime: "44 دقیقه",
        NumberOfEpisodes: "3 اپیزود",
        CourseCategory: "صفر تا صد تسلط ریکت",
        Episodes: [
          {
            Video: ZtoMReactintro,
            PreviewImg: ZtoMReactintroImg,
            NameOfEpisode: "معرفی ری اکت",
            TimeOfEpisode: "12 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط ریکت",
            TeacherName: "آندره نیگوا",
          },
          {
            Video: ZtoMReactcreate,
            PreviewImg: ZtoMReactcreateImg,
            NameOfEpisode: "ساخت اپ ری اکت",
            TimeOfEpisode: "12 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط ریکت",
            TeacherName: "آندره نیگوا",
          },
          {
            Video: ZtoMReactcomponent,
            PreviewImg: ZtoMReactcomponentImg,
            NameOfEpisode: "آموزش ری اکت کامپوننت",
            TimeOfEpisode: "20 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط ریکت",
            TeacherName: "آندره نیگوا",
          },
        ],
      },
      {
        CourseImg: ZtoMBackPrew,
        TeacherName: "آندره نیگوا",
        CourseDurationTime: "52 دقیقه",
        NumberOfEpisodes: "4 اپیزود",
        CourseCategory: "صفر تا صد تسلط بک اند",
        Episodes: [
          {
            Video: ZtoMBackBasics,
            PreviewImg: ZtoMBackBasicsImg,
            NameOfEpisode: "معرفی بک اند",
            TimeOfEpisode: "12 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط بک اند",
            TeacherName: "آندره نیگوا",
          },
          {
            Video: ZtoMBackHTTPS,
            PreviewImg: ZZtoMBackHTTPSImg,
            NameOfEpisode: "معرفی HTTPS",
            TimeOfEpisode: "20 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط بک اند",
            TeacherName: "آندره نیگوا",
          },
          {
            Video: ZtoMBackAJAX,
            PreviewImg: ZtoMBackAJAXImg,
            NameOfEpisode: "معرفی AJAX",
            TimeOfEpisode: "13 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط بک اند",
            TeacherName: "آندره نیگوا",
          },
          {
            Video: ZtoMBackJSON,
            PreviewImg: ZtoMBackJSONImg,
            NameOfEpisode: "معرفی JSON",
            TimeOfEpisode: "7 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط بک اند",
            TeacherName: "آندره نیگوا",
          },
        ],
      },
      {
        CourseImg: BuildingPrew,
        TeacherName: "داوود پناهی",
        CourseDurationTime: "160 دقیقه",
        NumberOfEpisodes: "4 اپیزود",
        CourseCategory: "ایمنی ساختمان و معدن",
        Episodes: [
          {
            Video: BuildingEpisode1,
            PreviewImg: BuildingEpisode1Img,
            NameOfEpisode: "قسمت اول",
            TimeOfEpisode: "30 دقیقه",
            EpisodeCategory: "ایمنی ساختمان و معدن",
            TeacherName: "داوود پناهی",
          },
          {
            Video: BuildingEpisode2,
            PreviewImg: BuildingEpisode2Img,
            NameOfEpisode: "قسمت دوم",
            TimeOfEpisode: "30 دقیقه",
            EpisodeCategory: "ایمنی ساختمان و معدن",
            TeacherName: "داوود پناهی",
          },
          {
            Video: BuildingEpisode3,
            PreviewImg: BuildingEpisode3Img,
            NameOfEpisode: "قسمت سوم",
            TimeOfEpisode: "54 دقیقه",
            EpisodeCategory: "ایمنی ساختمان و معدن",
            TeacherName: "داوود پناهی",
          },
          {
            Video: BuildingEpisode4,
            PreviewImg: BuildingEpisode4Img,
            NameOfEpisode: "قسمت چهارم",
            TimeOfEpisode: "33 دقیقه",
            EpisodeCategory: "ایمنی ساختمان و معدن",
            TeacherName: "داوود پناهی",
          },
        ],
      },
      {
        CourseImg: PowerPrew,
        TeacherName: "جواد جباری",
        CourseDurationTime: "175 دقیقه",
        NumberOfEpisodes: "6 اپیزود",
        CourseCategory: "مبانی مهندسی برق",
        Episodes: [
          {
            Video: PowerEpisode1,
            PreviewImg: PowerEpisode1Img,
            NameOfEpisode: "قسمت اول",
            TimeOfEpisode: "40 دقیقه",
            EpisodeCategory: "مبانی مهندسی برق",
            TeacherName: "جواد جباری",
          },
          {
            Video: PowerEpisode2,
            PreviewImg: PowerEpisode2Img,
            NameOfEpisode: "قسمت دوم",
            TimeOfEpisode: "34 دقیقه",
            EpisodeCategory: "مبانی مهندسی برق",
            TeacherName: "جواد جباری",
          },
          {
            Video: PowerEpisode3,
            PreviewImg: PowerEpisode3Img,
            NameOfEpisode: "قسمت سوم",
            TimeOfEpisode: "33 دقیقه",
            EpisodeCategory: "مبانی مهندسی برق",
            TeacherName: "جواد جباری",
          },
          {
            Video: PowerEpisode4,
            PreviewImg: PowerEpisode4Img,
            NameOfEpisode: "قسمت چهارم",
            TimeOfEpisode: "27 دقیقه",
            EpisodeCategory: "مبانی مهندسی برق",
            TeacherName: "جواد جباری",
          },
          {
            Video: PowerEpisode5,
            PreviewImg: PowerEpisode5Img,
            NameOfEpisode: "قسمت پنجم",
            TimeOfEpisode: "30 دقیقه",
            EpisodeCategory: "مبانی مهندسی برق",
            TeacherName: "جواد جباری",
          },
          {
            Video: PowerEpisode6,
            PreviewImg: PowerEpisode6Img,
            NameOfEpisode: "قسمت ششم",
            TimeOfEpisode: "20 دقیقه",
            EpisodeCategory: "مبانی مهندسی برق",
            TeacherName: "جواد جباری",
          },
        ],
      },
      {
        CourseImg: MashinPrew,
        TeacherName: "مصطفی پویا کیان",
        CourseDurationTime: "90 دقیقه",
        NumberOfEpisodes: "3 اپیزود",
        CourseCategory: "ایمنی ماشین آلات و تجهیزات صنعتی",
        Episodes: [
          {
            Video: MashinEpisode1,
            PreviewImg: MashinEpisode1Img,
            NameOfEpisode: "قسمت اول",
            TimeOfEpisode: "34 دقیقه",
            EpisodeCategory: "ایمنی ماشین آلات و تجهیزات صنعتی",
            TeacherName: "مصطفی پویا کیان",
          },
          {
            Video: MashinEpisode2,
            PreviewImg: MashinEpisode2Img,
            NameOfEpisode: "قسمت دوم",
            TimeOfEpisode: "25 دقیقه",
            EpisodeCategory: "ایمنی ماشین آلات و تجهیزات صنعتی",
            TeacherName: "مصطفی پویا کیان",
          },
          {
            Video: MashinEpisode3,
            PreviewImg: MashinEpisode3Img,
            NameOfEpisode: "قسمت سوم",
            TimeOfEpisode: "28 دقیقه",
            EpisodeCategory: "ایمنی ماشین آلات و تجهیزات صنعتی",
            TeacherName: "مصطفی پویا کیان",
          },
        ],
      },
    ],
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
    HomePageLogin: {
      hero: {
        title: "دوره های ویژه امروز",
        subTitle: "برای شما",
      },
      ContinueLearning: {
        title: "به یادگیری ادامه دهید",
        subTitle: "ویدیو های در حال تماشای شما",
        isDisplayed: true,
      },
      TodayMostViewLessons: {
        title: "درس های پربازدید امروز",
        subTitle: "یادشی ها این ویدیو ها را بیشتر دیده اند",
      },
      PersonalManagement: {
        title: "مدیریت شخصی",
        subTitle: "پربازدیدترین های مدیریت شخصی",
      },
    },
    MyProgress: {
      YourProgressInYadesh: {
        title: "پیشرفت شما در یادش",
        subTitle: "لیست ویدیوها و دوره های شما",
        seenCourseIsDisplayed: true,
        seenVideoIsDisplayed: true,
      },
      KeepLearning: {
        title: "به یادگیری ادامه دهید",
        subTitle: "ویدیو های در حال تماشای شما",
        isDisplayed: true,
      },
      MyNotes: {
        title: "یادداشت های من",
        subTitle: "یادداشت های شما روی ویدیو ها",
        isDisplayed: true,
      },
      MyList: {
        title: "لیست من",
        subTitle: "لیست دوره های شما",
        isDisplayed: true,
      },
      SeenBefore: {
        title: "قبلا دیده اید",
        subTitle: "ویدیو هایی که قبلا تماشا کردید",
        isDisplayed: true,
      },
      DoneCourses: {
        title: "دوره های تکمیل شده",
        subTitle: "دوره هایی که شما کامل کرده اید",
        isDisplayed: true,
      },
    },
    AboutYadesh: {
      hero: {
        title: "یادش را بشناسید",
        subTitle:
          "یادش بزرگترین پلتفرم ویدئویی آموزشی برای شرکت ها افراد و مدیران تولید میباشد",
        imagery: imgAboutUs,
        isLogoDisplayed: true,
      },
      VisionYadesh: {
        title: "چشم انداز یادش",
        subTitle:
          "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن .          ",
        isLogoDisplayed: true,
      },
      MissionYadesh: {
        title: "ماموریت یادش",
        subTitle:
          "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن .          ",
        isLogoDisplayed: true,
      },
      YadeshIdentify: {
        title: "هویت یادش",
        subTitle:
          "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن .          ",
        isLogoDisplayed: true,
      },
      ContactYadesh: {
        title: "با یادش در تماس باشید",
        subTitle: "اطلاعات تماس و موقعیت ما بر روی نقشه",
        phoneNumber: "021-77268360",
        emailAddress: "info@yadesh.org",
        address: "تهران - میدان انقلاب اسلامی - خ گارکر شمالی - پلاک 42 واحد 2",
        addressLocation: {
          lat: 35.70529711180204,
          lng: 51.3902235031128,
        },
      },
      Support: {
        title: "سوال خاصی دارید ؟",
        subTitle: "با تیم پشتیبانی تماس بگیرید",
        isDisplayed: true,
      },
    },
    UserInfo: {
      hero: {
        imagery: UserProfileBackground,
        isUserImgDisplayed: true,
        seenCourseIsDisplayed: true,
        seenVideoIsDisplayed: true,
      },
      FavoriteEpisodes: {
        title: "اپیزودهای مورد علاقه",
        subTitle: "لیست اپیزودهای مورد علاقه شما",
        isDisplayed: true,
      },
      UserCourses: {
        title: "دوره های شما",
        subTitle: "لیست دوره های در حال تماشای شما",
        isDisplayed: true,
      },
    },
    YadeshForOrganization: {
      hero: {
        title: "یادگیری در سطح جهانی",
        subTitle:
          "سازمان ها در یادش جایگاه ویژه ای دارند , پس ما هم برای سازمان ها برنامه ویژه ای داریم.",
        description:
          "اشتراک ویژه ی سالانه برای گروه ها به همراه تخفیف 5 تا 25 درصدی",
        imagery: bgYDSJ,
      },
      Teachers: {
        title: "تجربه ی اساتید یادش را به کارمندان خود هدیه دهید",
        subTitle: "اساتید یادش در حرفه خود بهتریند",
      },
      Customer: {
        title: "اپیزودهای مورد علاقه",
        subTitle: "لیست اپیزودهای مورد علاقه شما",
        isDisplayed: true,
        imagery: [
          {
            name: "همراه اول",
            img: HamraheAval,
            comment: "هیچکس تنها نیست همراه اول",
          },
          {
            name: "رایتل",
            img: LogoBanafsh,
            comment: "رایتل اولین اپراتور 5G",
          },
          {
            name: "بانک ملت",
            img: MelatBank,
            comment: "دست ما در دست ملت",
          },
          {
            name: "بانک سامان",
            img: Shape,
            comment: "بانک سامان بانکی برای همه",
          },
          {
            name: "اسنپ",
            img: Snap,
            comment: "اسنپ سریع تر از همیشه",
          },
        ],
      },
      QuestionFromYadesh: {
        title: "چرا ما از بقیه متفاوت هستیم",
        subTitle: "دلیل تفاوت یادش از دیگران",
        imagery: imgauestion,
        Subheadings: {
          Subheading1: {
            title: "تنوع موضوع و مهارت در یادش",
            subTitle:
              "سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویژه ای داریم",
            isDisplayed: true,
          },
          Subheading2: {
            title: "اساتید برتر و نمونه",
            subTitle:
              "سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویژه ای داریم",
            isDisplayed: true,
          },
          Subheading3: {
            title: "ویدئو و محتوای با کیفیت",
            subTitle:
              "سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویژه ای داریم",
            isDisplayed: true,
          },
        },
      },
      JoinToYadesh: {
        title: "همین امروز یادش را انتخاب کنید",
        subTitle: "با انتخاب یادش به جمع سازمان های حرفه ای بپیوندید",
        imagery: endSection,
        isDisplayed: true,
      },
      QuestionAndAnswers: {
        first: {
          question: "چگونه میتوانیم به محتوای یادش دسترسی داشته باشیم؟",
          answer:
            "1طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.",
        },
        second: {
          question: "آیا میتوانم از یادش تقاضای محتوای مورد نظر خود را بنمایم؟",
          answer:
            "2طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.",
        },
        third: {
          question: "آیا به عنوان استاد میتوانم محتوای خود را آپلود کنم؟",
          answer:
            "3طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.",
        },
        forth: {
          question: "آیا یادش دوره های ویژه ی دانشجویان را نیز دارد؟",
          answer:
            "4طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.",
        },
      },
    },
    ContactWithYadesh: {
      Title: {
        title: "با یادش در تماس باشید",
        subTitle: "از طریق فرم روبه رو با ما در تماس باشید",
      },
      WhyYadesh: {
        Subheadings: {
          Subheading1: {
            title: "تنوع موضوع و مهارت در یادش",
            subTitle:
              "سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویژه ای داریم",
            isDisplayed: true,
          },
          Subheading2: {
            title: "اساتید برتر و نمونه",
            subTitle:
              "سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویژه ای داریم",
            isDisplayed: true,
          },
          Subheading3: {
            title: "ویدئو و محتوای با کیفیت",
            subTitle:
              "سازمان ها در یادش جایگاه ویژه ای دارند پس ما هم برای سازمان ها برنامه ویژه ای داریم",
            isDisplayed: true,
          },
        },
      },
      ContactForm: {
        Fields: {
          Field1: {
            title: "نام و نام خانوادگی",
            isDisplayed: true,
          },
          Field2: {
            title: "آدرس ایمیل",
            isDisplayed: true,
          },
          Field3: {
            title: "عنوان شما در سازمان",
            isDisplayed: true,
          },
          Field4: {
            title: "نام سازمان شما",
            isDisplayed: true,
          },
          Field5: {
            title: "متن پیام",
            isDisplayed: true,
          },
        },
      },
    },
    UserLogin: {
      title: "مهارت های خود را افزایش دهید",
      subTitle:
        "افزایش مهارت همیشه می تواند آینده شغلی شما را تضمین کند. هدف ما در یادش این است که آینده شغلی شما همیشه واضح و درخشان باشد",
      icon: Cup,
      imagery: LoginBackground,
    },
    Footer: {
      exploreInYadesh: true,
      FavoriteEpisodes: true,
      bestCourses: true,
      contactInfo: true,
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
