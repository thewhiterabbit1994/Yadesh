import { useState, useRef, useMemo, useCallback } from "react";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import LogoGoogleMap from "../../assets/svg/AdminPanelCourses/LogoGoogleMap";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactYadesh = () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.AboutYadesh.ContactYadesh;
  const [titleValue, settitleValue] = useState(data.title);
  const [subtitleValue, setsubtitleValue] = useState(data.subTitle);
  const [phoneValue, setphoneValue] = useState(data.phoneNumber);
  const [emailValue, setemailValue] = useState(data.emailAddress);
  const [addressValue, setaddressValue] = useState(data.address);

  const [position, setPosition] = useState(data.addressLocation);
  function DraggableMarker() {
    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
          }
        },
      }),
      []
    );

    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      ></Marker>
    );
  }

  const handleClick = () => {
    let database = JSON.parse(JSON.stringify(siteManagmentDatabase));
    database.AboutYadesh.ContactYadesh.title = titleValue;
    database.AboutYadesh.ContactYadesh.subTitle = subtitleValue;
    database.AboutYadesh.ContactYadesh.phoneNumber = phoneValue;
    database.AboutYadesh.ContactYadesh.emailAddress = emailValue;
    database.AboutYadesh.ContactYadesh.address = addressValue;
    database.AboutYadesh.ContactYadesh.addressLocation.lat = position.lat;
    database.AboutYadesh.ContactYadesh.addressLocation.lng = position.lng;
    setsiteManagmentDatabase(database);
  };

  return (
    <section className="w-full h-[500px]  mt-[10px] ">
      <section className="bg-[#F5F5F5] rounded flex justify-between h-[500px]">
        <section className="w-[35%] pt-[10px]">
          <section className="w-[93%] h-[550px] m-auto  text-[12px]">
            <div className="text-[12px]">
              <label
                htmlFor="Title29"
                className="text-[12px] text-[#7A7A7A] pr-[10px]"
              >
                عنوان
              </label>
              <input
                onChange={(e) => settitleValue(e.target.value)}
                value={titleValue}
                id="Title29"
                className="w-[400px] h-[40px]  rounded mt-[8px] text-[11px] pr-[10px]"
                placeholder="تماس با یادش "
              />
            </div>
            <div className="mt-[8px]">
              <label
                htmlFor="Title30"
                className="text-[12px] text-[#7A7A7A]  pr-[10px]"
              >
                زیر عنوان
              </label>
              <input
                value={subtitleValue}
                onChange={(e) => setsubtitleValue(e.target.value)}
                id="Title30"
                className="w-[400px] px-[10px] py-[10px] leading-6  h-[40px] rounded my-[8px] text-[11px] pr-[10px]"
                placeholder="  اطلاعات تماس و موقعیت ما بر روی نقشه "
              />
            </div>

            <div className="text-[12px]">
              <label
                htmlFor="Title31"
                className="text-[12px] text-[#7A7A7A]  pr-[10px]"
              >
                شماره تلفن (به صورت کامل وارد کنید)
              </label>
              <input
                onChange={(e) => setphoneValue(e.target.value)}
                value={phoneValue}
                id="Title31"
                className="w-[400px] h-[40px]  rounded mt-[8px] text-[11px] pr-[10px]"
                placeholder="021-775566644 "
              />
            </div>
            <div className="text-[12px] mt-[7px]">
              <label
                htmlFor="Title31"
                className="text-[12px] text-[#7A7A7A]  pr-[10px]"
              >
                آدرس ایمیل
              </label>
              <input
                onChange={(e) => setemailValue(e.target.value)}
                value={emailValue}
                id="Title31"
                className="w-[400px] h-[40px]  rounded mt-[8px] text-[11px] pr-[10px]"
                placeholder="021-775566644 "
              />
            </div>
            <div className="mt-[30px]">
              <label
                htmlFor="Title33"
                className="text-[12px] text-[#7A7A7A] mb-[15px] pr-[10px]"
              >
                آدرس
              </label>
              <textarea
                value={addressValue}
                onChange={(e) => setaddressValue(e.target.value)}
                id="Title33"
                className="w-[400px] px-[10px] py-[10px] leading-6 resize-none h-[80px] rounded mt-[15px] text-[11px] pr-[10px]"
                placeholder=" تهران - میدان انقلاب - خ فخر رازی - روبروی دانشگاه تهران - پلاک 20  "
              />
            </div>
          </section>
        </section>
        <section className="w-[50%]">
          <div className="my-[30px]">
            <section className=" m-auto w-[400px]">
              <p className="text-[12px] text-center mb-5 text-[#7A7A7A]">
                با هدایت مارکر موقعیت جدید خود را انتخاب کنید
              </p>
              <div className="h-[300px] mr-[-100px] drop-shadow-xl w-[550px]">
                <MapContainer
                  center={data.addressLocation}
                  zoom={20}
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <DraggableMarker />
                </MapContainer>
              </div>
            </section>
          </div>

          <div className="w-[400px] text-center mt-[35px] m-auto">
            <button
              onClick={handleClick}
              className="w-[200px] h-[45px] text-[13px] text-white bg-[#008043] rounded"
            >
              {" "}
              ذخیره کردن تغییرات{" "}
            </button>
          </div>
        </section>
      </section>
    </section>
  );
};
export default ContactYadesh;
