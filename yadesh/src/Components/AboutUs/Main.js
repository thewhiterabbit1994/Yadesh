import Tick from "../../assets/svg/AboutUs/Tick";
import Person from "../../assets/svg/AboutUs/Person";
import Dart from "../../assets/svg/AboutUs/Dart";
import GoogleLocation from "../../assets/svg/AboutUs/GoogleLocation";
import Letter from "../../assets/svg/AboutUs/Letter";
import Location from "../../assets/svg/AboutUs/Location";
import Phone from "../../assets/svg/AboutUs/Phone";
import map from "../../assets/Img/AboutUs/map.png";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Link } from "react-router-dom";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Main = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const visiondata = siteManagmentDatabase.AboutYadesh.VisionYadesh;
  const missiondata = siteManagmentDatabase.AboutYadesh.MissionYadesh;
  const identifydata = siteManagmentDatabase.AboutYadesh.YadeshIdentify;
  const contactdata = siteManagmentDatabase.AboutYadesh.ContactYadesh;
  const supportdata = siteManagmentDatabase.AboutYadesh.Support;
  return (
    <section className="w-full h-[1700px] bg-[#000]">
      <section className="w-[600px] m-auto text-center leading-[30px] ">
        <div
          className={`mb-[20px] m-auto flex justify-center ${visiondata.isLogoDisplayed ? "" : "hidden"
            }`}
        >
          <Dart />
        </div>
        <h6 className="text-[#E6FFF3] mb-[20px] text-[18px]">
          {visiondata.title}
        </h6>
        <p className="text-[#C4C4C4] text-[14px]">{visiondata.subTitle}</p>
      </section>
      <div className="bg-gradient-to-r mt-[50px] h-[2px] w-[70%] m-auto from-[#0004052d] via-[#E6E9EB] to-[#0004052a]"></div>
      <section className="w-[600px]   m-auto text-center leading-[30px]">
        <div
          className={`m-auto flex justify-center my-[50px] ${missiondata.isLogoDisplayed ? "" : "hidden"
            }`}
        >
          <Tick />
        </div>
        <h6 className="text-[#E6FFF3] mb-[20px] text-[18px]">
          {missiondata.title}
        </h6>
        <p className="text-[#C4C4C4] text-[14px]">{missiondata.subTitle}</p>
      </section>
      <div className="bg-gradient-to-r mt-[50px] h-[2px] w-[70%] m-auto from-[#0004052d] via-[#E6E9EB] to-[#0004052a]"></div>
      <section className="w-[600px]   m-auto text-center leading-[30px]">
        <div
          className={` m-auto flex justify-center my-[50px] ${identifydata.isLogoDisplayed ? "" : "hidden"
            }`}
        >
          <Person />
        </div>
        <h6 className="text-[#E6FFF3] mb-[20px] text-[18px]">
          {identifydata.title}
        </h6>
        <p className="text-[#C4C4C4] text-[14px]">{identifydata.subTitle}</p>
      </section>
      <section className="w-[80vw] flex h-[500px] mt-[100px] justify-end ">
        <div className="w-[40vw] h-[350px] text-[#E6FFF3] flex flex-col justify-center text-[14px]">
          <div className="flex">
            <div className="border-[#00FF85] opacity-80 h-[20px]  border-r-[6px] ml-[7px] mr-[7px] rounded mt-[3px]"></div>
            <p className="text-[#E6FFF3] text-[20px]">{contactdata.title}</p>
          </div>
          <div className="text-[#C4C4C4] mt-[10px]">
            <p>{contactdata.subTitle}</p>
          </div>
          <section className="text-[#C4C4C4] flex mt-[30px] justify-between w-[350px] ">
            <div className="flex">
              <Phone />
              <p className="mr-[10px]">{contactdata.phoneNumber}</p>
            </div>
            <div className="border-r-2 rounded border-[#c4c4c4ab]"></div>
            <div className="flex">
              <Letter />
              <p className="mr-[10px]">{contactdata.emailAddress}</p>
            </div>
          </section>
          <div className="text-[#C4C4C4] flex mt-[30px]">
            <Location />
            <p className="mr-[10px]">{contactdata.address}</p>
          </div>
        </div>
        <div className="w-[380px] ">
          <div className="h-[300px] mr-[-30px] drop-shadow-xl w-[550px]">
            <MapContainer
              center={contactdata.addressLocation}
              zoom={20}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={contactdata.addressLocation}></Marker>
            </MapContainer>
          </div>
        </div>
      </section>
      <section
        className={`${supportdata.isDisplayed ? "" : "hidden"
          } w-full bg-[#000E14] h-[270px] flex flex-col justify-center items-center leading-[40px]`}
      >
        <div>
          <p className="text-[#E6FFF3] text-[20px]">{supportdata.title}</p>
          <p className="text-[#C4C4C4] text-[14px]">{supportdata.subTitle}</p>
        </div>
        <div className="border-b-4 border-[#00FF85] w-[15px] rounded-xl mt-[10px]"></div>
        <div>
          <Link to="/home/contactsupport">
            <button className=" mt-[30px] text-[12px] text-[#E6FFF3] w-[130px] h-[40px] rounded-[6px] border-solid border-[#80ffc2] border-[1.5px]  ">
              {" "}
              تماس با پشتیبانی
            </button>
          </Link>

        </div>
      </section>
    </section>
  );
};
export default Main;
