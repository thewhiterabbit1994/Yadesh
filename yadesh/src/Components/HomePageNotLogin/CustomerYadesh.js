import React, { Component } from "react";
import Slider from "react-slick";
import { useContext } from "react";
import { MainCounter } from "../../Context/Context";
import "slick-carousel/slick/slick.css";
import "../../Css/CustomerYadesh.css";

export default () => {
  const { siteManagmentDatabase, setsiteManagmentDatabase } =
    useContext(MainCounter);

  const data = siteManagmentDatabase.HomePageNotLogin.costomerYadesh;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow:
      data.imagery.length === 1 ? data.imagery.length : data.imagery.length - 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <div className="bg-[#000] width-[100%] h-[60vh] ">
      <section className="  mb-[4rem]  mr-[120px] ">
        <div className="text-[#E6FFF3] flex w-[183px] h-[31px] ">
          <div className="border-[#00FF85]   border-r-[7px] h-[20px] mt-[7px] ml-[7px] rounded">
            {" "}
          </div>
          <h6 className="text-[22px]">{data.title}</h6>
        </div>
        <h6 className=" font-thin text-[#E6FFF3] mt-[1rem] text-[15px] opacity-80">
          {data.subTitle}
        </h6>
      </section>
      <Slider {...settings}>
        {data.imagery.map((image) => {
          return <img src={image} className="w-[40px] h-[40px]" />;
        })}
      </Slider>
    </div>
  );
};
