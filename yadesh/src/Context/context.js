import { createContext, useState } from "react";
import andre from "../assets/Img/Teachers/alex.png";
import panahi from "../assets/Img/Teachers/derick.png";
import jabbari from "../assets/Img/Teachers/foto.png";
import poyakian from "../assets/Img/Teachers/philip.png";
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
import ZtoM_IntroImg from "../assets/videos/ZeroToMastery/Intro.png";
import ZtoM_CSSImg from "../assets/videos/ZeroToMastery/CSS.png";
import ZtoM_HTMLImg from "../assets/videos/ZeroToMastery/HTML.png";
import ZtoMReactPrew from "../assets/videos/ZerToMasteryReact/ZtoMReactPrew.jpg";
import ZtoMReactintroImg from "../assets/videos/ZerToMasteryReact/introreact.png";
import ZtoMReactcreateImg from "../assets/videos/ZerToMasteryReact/creatreact.png";
import ZtoMReactcomponentImg from "../assets/videos/ZerToMasteryReact/ReactComponent.png";
import ZtoMBackPrew from "../assets/videos/ZerToMasteryBackend/prew.jpg";
import ZZtoMBackHTTPSImg from "../assets/videos/ZerToMasteryBackend/HTTPS.png";
import ZtoMBackAJAXImg from "../assets/videos/ZerToMasteryBackend/AJAX.png";
import ZtoMBackBasicsImg from "../assets/videos/ZerToMasteryBackend/BackendBasics.png";
import ZtoMBackJSONImg from "../assets/videos/ZerToMasteryBackend/JSON.png";
import BuildingPrew from "../assets/videos/Buildingandminingsafety/prewImg.png";
import BuildingEpisode1Img from "../assets/videos/Buildingandminingsafety/Episode1Img.png";
import BuildingEpisode2Img from "../assets/videos/Buildingandminingsafety/Episode2Img.png";
import BuildingEpisode3Img from "../assets/videos/Buildingandminingsafety/Episode3Img.png";
import BuildingEpisode4Img from "../assets/videos/Buildingandminingsafety/Episode4Img.png";
import PowerPrew from "../assets/videos/FundamentalsofElectricEngineering/prewimg.jpg";
import PowerEpisode1Img from "../assets/videos/FundamentalsofElectricEngineering/Episode1Img.png";
import PowerEpisode2Img from "../assets/videos/FundamentalsofElectricEngineering/Episode2Img.png";
import PowerEpisode3Img from "../assets/videos/FundamentalsofElectricEngineering/Episode3Img.png";
import PowerEpisode4Img from "../assets/videos/FundamentalsofElectricEngineering/Episode4Img.png";
import PowerEpisode5Img from "../assets/videos/FundamentalsofElectricEngineering/Episode5Img.png";
import PowerEpisode6Img from "../assets/videos/FundamentalsofElectricEngineering/Episode6Img.png";
import MashinPrew from "../assets/videos/Safetyofindustrialmachineryandequipment/prewimg.jpg";
import MashinEpisode1Img from "../assets/videos/Safetyofindustrialmachineryandequipment/Episode1Img.png";
import MashinEpisode2Img from "../assets/videos/Safetyofindustrialmachineryandequipment/Episode2Img.png";
import MashinEpisode3Img from "../assets/videos/Safetyofindustrialmachineryandequipment/Episode3Img.png";

export const MainCounter = createContext("");

const Context = (props) => {
  const [siteManagmentDatabase, setsiteManagmentDatabase] = useState({
    Courses: [
      {
        CourseImg: ZtoMPrev,
        CourseView: "12084 بازدید",
        TeacherName: "آندره نیگوا",
        CourseDurationTime: "27 دقیقه",
        NumberOfEpisodes: "3 اپیزود",
        CourseCategory: "صفر تا صد تسلط وب",
        CourseID: "C-kzk1z7me4gb2djwyszv",
        Episodes: [
          {
            Video:
              "https://as9.cdn.asset.aparat.com/aparat-video/f279540e8b2c78012ced857a12bda21c32731810-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjU2ZWQ1ZTUxNDExOWIyZmI0YWI2ZDk4NmE5YzU1ZmQwIiwiZXhwIjoxNjQ0NzAyODExLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.frqQN5XFvmYmPosRoLVOyR1Zilr8cUWbZv7E0WlPP_M",
            PreviewImg: ZtoM_IntroImg,
            EpisodeView: "3652 بازدید",
            NameOfEpisode: "معرفی دوره",
            TimeOfEpisode: "9 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط وب",
            CourseID: "C-kzk1z7me4gb2djwyszv",
            TeacherName: "آندره نیگوا",
            EpisodeID: "E-kzk0sn2tp0xy7m2bi39",
          },
          {
            Video:
              "https://hw18.cdn.asset.aparat.com/aparat-video/5f44db28d045bff54c3941bb817cc7b132732665-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjcwMTdhZTk5MTgzZjIxMWJlNzE5MmY3OWVlNDBhNjE4IiwiZXhwIjoxNjQ0NzAyOTA1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.CrXRaR6D_Y_-aAdyQFdohcm2ZkgeLcUj9dNr5loQHFc",
            PreviewImg: ZtoM_CSSImg,
            EpisodeView: "4200 بازدید",
            NameOfEpisode: "معرفی CSS",
            TimeOfEpisode: "10 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط وب",
            CourseID: "C-kzk1z7me4gb2djwyszv",
            TeacherName: "آندره نیگوا",
            EpisodeID: "E-kzk0tk4uketo09lgr",
          },
          {
            Video:
              "https://as2.cdn.asset.aparat.com/aparat-video/85b5c99ee857f8bdc0aee1371be8f1f032782066-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjA5YThhZTM5MWNmZDRlNGYyZjUzNTlmMzgwMWExMzc1IiwiZXhwIjoxNjQ0NzAyOTM4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.THta7dxEUKEmEenW7M68Nf_euOECcnNx5WQuFpCljHA",
            PreviewImg: ZtoM_HTMLImg,
            EpisodeView: "7000 بازدید",
            NameOfEpisode: "معرفی HTML",
            TimeOfEpisode: "8 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط وب",
            CourseID: "C-kzk1z7me4gb2djwyszv",
            TeacherName: "آندره نیگوا",
            EpisodeID: "E-kzk0u8dmkqj2lqjguh",
          },
        ],
      },
      {
        CourseImg: ZtoMReactPrew,
        CourseView: "98656 بازدید",
        TeacherName: "آندره نیگوا",
        CourseDurationTime: "44 دقیقه",
        NumberOfEpisodes: "3 اپیزود",
        CourseCategory: "صفر تا صد تسلط ریکت",
        CourseID: "C-kzk21d0melc7o7zw0vv",
        Episodes: [
          {
            Video:
              "https://aspb13.cdn.asset.aparat.com/aparat-video/3042523d1e99fb4b9a0739db181c5e0223100892-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjcxYjYyOGZkYTc5YTliMWEzMDNjN2I0ZjY3MTkxYmUyIiwiZXhwIjoxNjQ0NzAyOTk4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.kLbTfb_94gzp6vfIFMGu06nv46-YF1N9YHRfDv6Dy1o",
            PreviewImg: ZtoMReactintroImg,
            EpisodeView: "8405 بازدید",
            NameOfEpisode: "معرفی ری اکت",
            TimeOfEpisode: "12 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط ریکت",
            CourseID: "C-kzk21d0melc7o7zw0vv",
            TeacherName: "آندره نیگوا",
            EpisodeID: "E-kzk0upxalu58xm2hsk",
          },
          {
            Video:
              "https://aspb10.cdn.asset.aparat.com/aparat-video/43d7641998eaad8f39bfc4599d7000a423203600-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImExNWNmMTBkNmZmYjJlNzNkYzA5ZjI2YWIwY2FmOWZhIiwiZXhwIjoxNjQ0NzAzMDM3LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Djg-p0B1wpvdgnN8fwTzNlW_6Uht1fkA5k9OiSSWR-4",
            PreviewImg: ZtoMReactcreateImg,
            EpisodeView: "1238 بازدید",
            NameOfEpisode: "ساخت اپ ری اکت",
            TimeOfEpisode: "12 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط ریکت",
            CourseID: "C-kzk21d0melc7o7zw0vv",
            TeacherName: "آندره نیگوا",
            EpisodeID: "E-kzk0v69k817emsuz186",
          },
          {
            Video:
              "https://aspb12.cdn.asset.aparat.com/aparat-video/ee7ad6a740b8c971863698a211e8568a23323324-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjY1NDUxMzk1ZTgxNDhkZDEzNjhlZjc0YmMwMDBiOTM4IiwiZXhwIjoxNjQ0NzAzMDcxLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.95ft0XnTvYgy2bsAzReYVHKAAUgMuHhVawp3rnpg0Ok",
            PreviewImg: ZtoMReactcomponentImg,
            EpisodeView: "7482 بازدید",
            NameOfEpisode: "آموزش ری اکت کامپوننت",
            TimeOfEpisode: "20 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط ریکت",
            CourseID: "C-kzk21d0melc7o7zw0vv",
            TeacherName: "آندره نیگوا",
            EpisodeID: "E-kzk0vse79odulf2k6l5",
          },
        ],
      },
      {
        CourseImg: ZtoMBackPrew,
        CourseView: "32584 بازدید",
        TeacherName: "آندره نیگوا",
        CourseDurationTime: "52 دقیقه",
        NumberOfEpisodes: "4 اپیزود",
        CourseCategory: "صفر تا صد تسلط بک اند",
        CourseID: "C-kzk227bet6b11z7vgk",
        Episodes: [
          {
            Video:
              "https://as8.cdn.asset.aparat.com/aparat-video/c2a7b7679c93a253edd7e140ebf970a325340055-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjZhZDBiNzU4NDhiMTQ2ZWFjM2YxZDYwNDM2NzQ1YTIzIiwiZXhwIjoxNjQ0NzAzMTMzLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.h3ZlJyFBqBQucecIYDkwc-lkUDJnaE9huLyqjhGadkk",
            PreviewImg: ZtoMBackBasicsImg,
            EpisodeView: "4895 بازدید",
            NameOfEpisode: "معرفی بک اند",
            TimeOfEpisode: "12 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط بک اند",
            CourseID: "C-kzk227bet6b11z7vgk",
            TeacherName: "آندره نیگوا",
            EpisodeID: "E-kzk0w4zhk1411b5k2b",
          },
          {
            Video:
              "https://aspb22.cdn.asset.aparat.com/aparat-video/2a26cf225eaa421a133852ca54a58c5331880633-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjYwYTMyMjAyMGRjYTc3ZjBhZWYyZGVjODliNzhmYzA2IiwiZXhwIjoxNjQ0NzAzMjE2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.PmLLTuMOP7pu5HRCQrLtjDxmFfYE4C_fSmIWyA2T2OU",
            PreviewImg: ZZtoMBackHTTPSImg,
            EpisodeView: "3215 بازدید",
            NameOfEpisode: "معرفی HTTPS",
            TimeOfEpisode: "20 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط بک اند",
            CourseID: "C-kzk227bet6b11z7vgk",
            TeacherName: "آندره نیگوا",
            EpisodeID: "E-kzk0wqzjxoi2wpbpq5c",
          },
          {
            Video:
              "https://as3.cdn.asset.aparat.com/aparat-video/fc6ef984b2533ca04ec3beb73743a32a32591962-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjA1MjMwY2I2OTNjOTFkYjE1YzM3MjhhNjcyZjBjZDAwIiwiZXhwIjoxNjQ0NzAzMjUyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.gsC4Oh5Zm71vD2w5mdjps4_M8EMiVu8xwhaw-QgrQjc",
            PreviewImg: ZtoMBackAJAXImg,
            EpisodeView: "7846 بازدید",
            NameOfEpisode: "معرفی AJAX",
            TimeOfEpisode: "13 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط بک اند",
            CourseID: "C-kzk227bet6b11z7vgk",
            TeacherName: "آندره نیگوا",
            EpisodeID: "E-kzk0x3od1o7heb4sf5o",
          },
          {
            Video:
              "https://aspb30.cdn.asset.aparat.com/aparat-video/9818dadce74208b521ef30957780182a35167946-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjEwYmFlYzJhNjczMDA2Y2VjODZmZmM2NTRhMzBjOTM3IiwiZXhwIjoxNjQ0NzAzMjgwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.GK4yBWMpZgUKLOZ6SGuf2vE0P1c0COUB6rRcxI891K0",
            PreviewImg: ZtoMBackJSONImg,
            EpisodeView: "6547 بازدید",
            NameOfEpisode: "معرفی JSON",
            TimeOfEpisode: "7 دقیقه",
            EpisodeCategory: "صفر تا صد تسلط بک اند",
            CourseID: "C-kzk227bet6b11z7vgk",
            TeacherName: "آندره نیگوا",
            EpisodeID: "E-kzk0xoer6iyvsz1i28n",
          },
        ],
      },
      {
        CourseImg: BuildingPrew,
        CourseView: "78496 بازدید",
        TeacherName: "داوود پناهی",
        CourseDurationTime: "160 دقیقه",
        NumberOfEpisodes: "4 اپیزود",
        CourseCategory: "ایمنی ساختمان و معدن",
        CourseID: "C-kzk23gmcoxdxs2dc7xb",
        Episodes: [
          {
            Video:
              "https://aspb19.cdn.asset.aparat.com/aparat-video/026b9e29df8e23c43887b796d7172c6c18713092-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjY0ZjA3NmFlNTE3ODAwYzY5ZTZlN2JjYTFmMzcwOTNmIiwiZXhwIjoxNjQ0NzAzMzI0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Xk92TkldX1Wj59rfSKrb81wmczg5-FXyFoJtLfYDYy8",
            PreviewImg: BuildingEpisode1Img,
            EpisodeView: "4576 بازدید",
            NameOfEpisode: "قسمت اول",
            TimeOfEpisode: "30 دقیقه",
            EpisodeCategory: "ایمنی ساختمان و معدن",
            CourseID: "C-kzk23gmcoxdxs2dc7xb",
            TeacherName: "داوود پناهی",
            EpisodeID: "E-kzk0y78s9pzgnmmdzr7",
          },
          {
            Video:
              "https://aspb1.cdn.asset.aparat.com/aparat-video/3f88156cda1e07e063e1b4d8b9dc38497033536-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImIyMzI5NmVjMDgwZjEzYmZlZjM4NzI2YjQ4MGI2MTRlIiwiZXhwIjoxNjQ0NzAzMzg3LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.5T64WQ0ATUbwM6ThDxKE-dlj-bZkxvfj3fgjtzyr_ho",
            PreviewImg: BuildingEpisode2Img,
            EpisodeView: "1287 بازدید",
            NameOfEpisode: "قسمت دوم",
            TimeOfEpisode: "30 دقیقه",
            EpisodeCategory: "ایمنی ساختمان و معدن",
            CourseID: "C-kzk23gmcoxdxs2dc7xb",
            TeacherName: "داوود پناهی",
            EpisodeID: "E-kzk0ymjgx17dq7v5j5e",
          },
          {
            Video:
              "https://aspb3.cdn.asset.aparat.com/aparat-video/86a477cdd352e891a251f500bd2fd91e7034681-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImZlMWEzMjQ4Zjc1NjdlYjI3YzQyZmYxN2ZjMTQxOGQ1IiwiZXhwIjoxNjQ0NzAzNDExLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.jFe-8U4nK4t5CHtbWArt2_le7N4VCRzvLC3PssCRTuY",
            PreviewImg: BuildingEpisode3Img,
            EpisodeView: "3569 بازدید",
            NameOfEpisode: "قسمت سوم",
            TimeOfEpisode: "54 دقیقه",
            EpisodeCategory: "ایمنی ساختمان و معدن",
            CourseID: "C-kzk23gmcoxdxs2dc7xb",
            TeacherName: "داوود پناهی",
            EpisodeID: "E-kzk0yy7tv2bj8uc5lfi",
          },
          {
            Video:
              "https://aspb3.cdn.asset.aparat.com/aparat-video/20ed75fcb39291c13322c757da06bdc57059788-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImIzMGMxNmYzOWIxNjBlZTk4OGJmMDBhOGMwZTI0MGNjIiwiZXhwIjoxNjQ0NzAzNDQ2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.-meeeDKR1io8WJ-F2PUMIsyO9aBD-JU9MBcJA0MhtII",
            PreviewImg: BuildingEpisode4Img,
            EpisodeView: "7541 بازدید",
            NameOfEpisode: "قسمت چهارم",
            TimeOfEpisode: "33 دقیقه",
            EpisodeCategory: "ایمنی ساختمان و معدن",
            CourseID: "C-kzk23gmcoxdxs2dc7xb",
            TeacherName: "داوود پناهی",
            EpisodeID: "E-kzk0zb8dllaw0b293y",
          },
        ],
      },
      {
        CourseImg: PowerPrew,
        CourseView: "65823 بازدید",
        TeacherName: "جواد جباری",
        CourseDurationTime: "160 دقیقه",
        NumberOfEpisodes: "6 اپیزود",
        CourseCategory: "مبانی مهندسی برق",
        CourseID: "C-kzk24912hm86scientb",
        Episodes: [
          {
            Video:
              "https://aspb27.cdn.asset.aparat.com/aparat-video/3e65873dddc5ababd55127de48654c3625755147-240p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImZjOGFjNWUwZDJmZmY2ZTE3M2IzZmJkZjQyMGVkMWMzIiwiZXhwIjoxNjQ0NzAzNTAyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.ausYMJ6lg7XGQqHLmoNuQWqj31DnZ5CE3dStdR27tOU",
            PreviewImg: PowerEpisode1Img,
            EpisodeView: "6732 بازدید",
            NameOfEpisode: "قسمت اول",
            TimeOfEpisode: "30 دقیقه",
            EpisodeCategory: "مبانی مهندسی برق",
            CourseID: "C-kzk24912hm86scientb",
            TeacherName: "جواد جباری",
            EpisodeID: "E-kzk10e7otd1qu6i0dfi",
          },
          {
            Video:
              "https://aspb32.cdn.asset.aparat.com/aparat-video/3b1c8274c6ba5c540617ac9c24e2d7be40702367-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImJlZDc2ZjFlMjgwNjQ3ZDRhZDI2YmFkODdhYTc4NTcyIiwiZXhwIjoxNjQ0NzAzNDk2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.CGWO3vnGF6-_s0lslJ122e9WdYiPFzxhRi5RY12XIxM",
            PreviewImg: PowerEpisode2Img,
            EpisodeView: "1679 بازدید",
            NameOfEpisode: "قسمت دوم",
            TimeOfEpisode: "30 دقیقه",
            EpisodeCategory: "مبانی مهندسی برق",
            CourseID: "C-kzk24912hm86scientb",
            TeacherName: "جواد جباری",
            EpisodeID: "E-kzk1108phftxtkb0gg6",
          },
          {
            Video:
              "https://aspb19.cdn.asset.aparat.com/aparat-video/a87eed5f52efe40cca72903dce9d713831304520-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjdhOWE2NzdmOWFmYzQ5ZGQ5OTM3YjI5ODg2NzQ0OGUyIiwiZXhwIjoxNjQ0NzAzNTUzLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.9Dq7c-uEDo_NApC9Lz9zOnISuZjV1CNHf_liItZECfk",
            PreviewImg: PowerEpisode3Img,
            EpisodeView: "3457 بازدید",
            NameOfEpisode: "قسمت سوم",
            TimeOfEpisode: "20 دقیقه",
            EpisodeCategory: "مبانی مهندسی برق",
            CourseID: "C-kzk24912hm86scientb",
            TeacherName: "جواد جباری",
            EpisodeID: "E-kzk11hgrmh0x4kprnkm",
          },
          {
            Video:
              "https://aspb21.cdn.asset.aparat.com/aparat-video/3e65873dddc5ababd55127de48654c3625755147-240p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjcyNWE4NTI1NGRiMjM4NGZhMjdjNzY3ZTE0OGQyMTgxIiwiZXhwIjoxNjQ0NzAzNTkzLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.O4-93D7IXgPauH24sDVrCqV7Au61Nb84ablAiazqclU",
            PreviewImg: PowerEpisode4Img,
            EpisodeView: "9652 بازدید",
            NameOfEpisode: "قسمت چهارم",
            TimeOfEpisode: "30 دقیقه",
            EpisodeCategory: "مبانی مهندسی برق",
            CourseID: "C-kzk24912hm86scientb",
            TeacherName: "جواد جباری",
            EpisodeID: "E-kzk11vj5tfrq7fp8q4",
          },
          {
            Video:
              "https://aspb35.cdn.asset.aparat.com/aparat-video/d549e049c220d57d4f269fb2239be63d34668563-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImY3MTIyNzE2ODAzMmVmOGMzN2YxZTYwZWI3YzkwMzk4IiwiZXhwIjoxNjQ0NzAzNTk0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.6fbzEAK5cwf7194UHICMN1nj-TRCyDm7v9Pmcr_bdDM",
            PreviewImg: PowerEpisode5Img,
            EpisodeView: "1255 بازدید",
            NameOfEpisode: "قسمت پنجم",
            TimeOfEpisode: "30 دقیقه",
            EpisodeCategory: "مبانی مهندسی برق",
            CourseID: "C-kzk24912hm86scientb",
            TeacherName: "جواد جباری",
            EpisodeID: "E-kzk127mw1s78a3dd8c9",
          },
          {
            Video:
              "https://aspb28.cdn.asset.aparat.com/aparat-video/fb9ae6b9e73f0fafbec41667a718dab936145160-240p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImUyMDg5MzgzZTFjN2MzYzEyY2YzZDNkY2UyOWM0N2VkIiwiZXhwIjoxNjQ0NzAzNjQ2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.unlJt1ofJC3J5gIfiaDTl-iJHpXslE0VoFQpnw6T6-0",
            PreviewImg: PowerEpisode6Img,
            EpisodeView: "6549 بازدید",
            NameOfEpisode: "قسمت ششم",
            TimeOfEpisode: "20 دقیقه",
            EpisodeCategory: "مبانی مهندسی برق",
            CourseID: "C-kzk24912hm86scientb",
            TeacherName: "جواد جباری",
            EpisodeID: "E-kzk12m4knhl63re06p",
          },
        ],
      },
      {
        CourseImg: MashinPrew,
        CourseView: "45813 بازدید",
        TeacherName: "مصطفی پویا کیان",
        CourseDurationTime: "90 دقیقه",
        NumberOfEpisodes: "3 اپیزود",
        CourseCategory: "ایمنی ماشین آلات و تجهیزات صنعتی",
        CourseID: "C-kzk24waa5vrc2hpf7go",
        Episodes: [
          {
            Video:
              "https://aspb3.cdn.asset.aparat.com/aparat-video/73c883747422f9255d6bea77484f05477491719-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjUxMTU2N2MwZGM2YmE5M2RjZTJjNzE4OWEwZjQzOTIwIiwiZXhwIjoxNjQ0NzAzNjk0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.xlzwLKx4BgiU9NUjYDsOrxEVVJWmw7gDjIdI_GIJb8Y",
            PreviewImg: MashinEpisode1Img,
            EpisodeView: "7448 بازدید",
            NameOfEpisode: "قسمت اول",
            TimeOfEpisode: "34 دقیقه",
            EpisodeCategory: "ایمنی ماشین آلات و تجهیزات صنعتی",
            CourseID: "C-kzk24waa5vrc2hpf7go",
            TeacherName: "مصطفی پویا کیان",
            EpisodeID: "E-kzk1349flbz92hjx6ho",
          },
          {
            Video:
              "https://aspb22.cdn.asset.aparat.com/aparat-video/5ef89d9500796fd1c64de05f87779ffe23620599-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjMzNTJmYTgzMzRjM2YyNTE3YTY0MWZkNmJiMWEwYjI1IiwiZXhwIjoxNjQ0NzAzNzU2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.ASMon6EpetV8AEHZXcZkKpvnFkeBrug50guPm_m4o1o",
            PreviewImg: MashinEpisode2Img,
            EpisodeView: "3266 بازدید",
            NameOfEpisode: "قسمت دوم",
            TimeOfEpisode: "25 دقیقه",
            EpisodeCategory: "ایمنی ماشین آلات و تجهیزات صنعتی",
            CourseID: "C-kzk24waa5vrc2hpf7go",
            TeacherName: "مصطفی پویا کیان",
            EpisodeID: "E-kzk13h9vyo0oa95fpj",
          },
          {
            Video:
              "https://hajifirouz2.cdn.asset.aparat.com/aparat-video/4bc9905e407fbc76530b2eb9102a6e9141615126-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjZlMzFmOGFjZjM2NGUzNDNiZTIzN2RhMGFmZTkzN2I3IiwiZXhwIjoxNjQ0NzAzNzg5LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.j7xmwePnN0ssyZKRGZgj9xYw0AlIx8zah6qcWsdEX-k",
            PreviewImg: MashinEpisode3Img,
            EpisodeView: "7754 بازدید",
            NameOfEpisode: "قسمت سوم",
            TimeOfEpisode: "28 دقیقه",
            EpisodeCategory: "ایمنی ماشین آلات و تجهیزات صنعتی",
            CourseID: "C-kzk24waa5vrc2hpf7go",
            TeacherName: "مصطفی پویا کیان",
            EpisodeID: "E-kzk13tsjhb8iicrx9ft",
          },
        ],
      },
    ],
    Teachers: [
      {
        TeacherName: "آندره نیگوا",
        Carrier: "برنامه نویس سنیور",
        TeacherImg: andre,
      },
      {
        TeacherName: "داوود پناهی",
        Carrier: "دکترای ایمنی ساختمان و معدن",
        TeacherImg: panahi,
      },
      {
        TeacherName: "جواد جباری",
        Carrier: "دکترای برق",
        TeacherImg: jabbari,
      },
      {
        TeacherName: "مصطفی پویا کیان",
        Carrier: "دکترای ایمنی",
        TeacherImg: poyakian,
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
            "1طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.1طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.1طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. پاسخ شماره 1",
        },
        second: {
          question: "آیا میتوانم از یادش تقاضای محتوای مورد نظر خود را بنمایم؟",
          answer:
            " 1طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.2طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شو پاسخ شماره 2",
        },
        third: {
          question: "آیا به عنوان استاد میتوانم محتوای خود را آپلود کنم؟",
          answer:
            " 1طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.1طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.3طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. پاسخ شماره 3",
        },
        forth: {
          question: "آیا یادش دوره های ویژه ی دانشجویان را نیز دارد؟",
          answer:
            "1طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.1طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.  4طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. پاسخ شمارخ 4",
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

  const [emtyCourse, setemtyCourse] = useState(true);

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
        emtyCourse,
        setemtyCourse,
      }}
    >
      {props.children}
    </MainCounter.Provider>
  );
};
export default Context;
