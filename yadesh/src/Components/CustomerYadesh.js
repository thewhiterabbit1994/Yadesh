import React, { Component } from 'react'
import Slider from "react-slick";
import HamraheAval from "../assets/svg/CustomerYadesh/hamraheaval.svg"
import LogoBanafsh from "../assets/svg/CustomerYadesh/logo-banafsh.svg"
import MelatBank from "../assets/svg/CustomerYadesh/melatBank.svg"
import Shape from "../assets/svg/CustomerYadesh/shape.svg"
import Snap from "../assets/svg/CustomerYadesh/snap.svg"
import "slick-carousel/slick/slick.css";

export default class CustomerYadesh extends Component {
    render() {
        const settings = {
            slidesToShow: 7,
            slidesToScroll: 2,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 0,
        };
        return (
            <div className="bg-[#000] width-[100%] h-[50vh] ">
                <section className=" mr-[11rem] mb-[4rem] ">
                    <div className="text-[#E6FFF3] flex">
                        <div className="border-[#00FF85] opacity-80  border-r-[4px] ml-[7px] rounded" > </div>
                        <h6> مشتریان یادش</h6>
                    </div>
                    <h6 className="text-[#E6FFF3] mt-[1rem] text-[13px] opacity-80">یادش از انتخاب شما تشکر میکند</h6>
                </section>
                <section className="w-[100%]">
                    <Slider {...settings}>
                        <img src={HamraheAval} className="w-[40px] h-[40px]" />
                        <img src={LogoBanafsh} className="w-[40px] h-[40px]" />
                        <img src={MelatBank} className="w-[40px] h-[40px]" />
                        <img src={Shape} className="w-[40px] h-[40px]" />
                        <img src={Snap} className="w-[40px] h-[40px]" />
                        <img src={HamraheAval} className="w-[40px] h-[40px]" />
                        <img src={LogoBanafsh} className="w-[40px] h-[40px]" />
                        <img src={MelatBank} className="w-[40px] h-[40px]" />
                        <img src={Shape} className="w-[40px] h-[40px]" />
                        <img src={Shape} className="w-[40px] h-[40px]" />
                    </Slider>
                </section>
            </div>
        );
    }
}