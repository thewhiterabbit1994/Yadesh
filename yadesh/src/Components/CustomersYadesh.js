import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import HamraheAval from "../assets/svg/CustomerYadesh/hamraheaval.svg"
import LogoBanafsh from "../assets/svg/CustomerYadesh/logo-banafsh.svg"
import MelatBank from "../assets/svg/CustomerYadesh/melatBank.svg"
import Shape from "../assets/svg/CustomerYadesh/shape.svg"
import Snap from "../assets/svg/CustomerYadesh/snap.svg"

const CustomerYadesh = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="bg-[#000] w-[100%] h-[100vh] ">
            <section className=" mr-[5rem]">
                <div className="text-[#E6FFF3] flex">
                    <div className="border-[#00FF85] opacity-80  border-r-[3.5px] ml-[7px] " > </div>
                    <h6> مشتریان یادش</h6>
                </div>
                <h6 className="text-[#E6FFF3] mt-[1rem] text-[13px] opacity-80">یادش از انتخاب شما تشکر میکند</h6>
            </section>
            <Slider {...settings} className="">
                <section className="flex w-[100%] justify-around mt-[2rem]">
                    <img src={HamraheAval} />
                    <img src={LogoBanafsh} />
                    <img src={MelatBank} />
                    <img src={Shape} />
                    <img src={Snap} />
                </section>
            </Slider>
        </div>
    )
}
export default CustomerYadesh