import React, { Component } from "react";
import Slider from "react-slick";
import HamraheAval from "../../assets/svg/CustomerYadesh/hamraheaval.svg";
import LogoBanafsh from "../../assets/svg/CustomerYadesh/logo-banafsh.svg";
import MelatBank from "../../assets/svg/CustomerYadesh/melatBank.svg";
import Shape from "../../assets/svg/CustomerYadesh/shape.svg";
import Snap from "../../assets/svg/CustomerYadesh/snap.svg";
import "slick-carousel/slick/slick.css";
import "../../Css/CustomerYadesh.css";

export default class CustomerYadesh extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 0,
      cssEase: "linear",
    };
    return (
      <div className="bg-[#000] width-[100%] h-[60vh] ">
        <section className="  mb-[4rem]  mr-[55px]">
          <div className="text-[#E6FFF3] flex w-[183px] h-[31px]">
            <div className="border-[#00FF85] opacity-80  border-r-[7px] h-[20px] mt-[7px] ml-[7px] rounded">
              {" "}
            </div>
            <h6 className="text-[22px]"> مشتریان یادش</h6>
          </div>
          <h6 className=" font-thin text-[#E6FFF3] mt-[1rem] text-[15px] opacity-80">
            یادش از انتخاب شما تشکر میکند
          </h6>
        </section>
        <Slider {...settings}>
          <img src={HamraheAval} className="w-[40px] h-[40px]" />
          <img src={LogoBanafsh} className="w-[40px] h-[40px]" />
          <img src={MelatBank} className="w-[40px] h-[40px]" />
          <img src={Shape} className="w-[40px] h-[40px]" />
          <img src={Snap} className="w-[40px] h-[40px]" />
          <img src={HamraheAval} className="w-[40px] h-[40px]" />
          <img src={LogoBanafsh} className="w-[40px] h-[40px]" />
        </Slider>
      </div>
    );
  }
}
