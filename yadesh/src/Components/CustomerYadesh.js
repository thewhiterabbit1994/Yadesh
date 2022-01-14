import React, { Component } from 'react'
import Slider from "react-slick";
import HamraheAval from "../assets/svg/CustomerYadesh/hamraheaval.svg"
import LogoBanafsh from "../assets/svg/CustomerYadesh/logo-banafsh.svg"
import MelatBank from "../assets/svg/CustomerYadesh/melatBank.svg"
import Shape from "../assets/svg/CustomerYadesh/shape.svg"
import Snap from "../assets/svg/CustomerYadesh/snap.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CustomerYadesh extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 0,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider {...settings}>
                    <img src={HamraheAval} className="w-[50px] h-[50px]" />
                    <img src={LogoBanafsh} className="w-[50px] h-[50px]" />
                    <img src={MelatBank} className="w-[50px] h-[50px]" />
                    <img src={Shape} className="w-[50px] h-[50px]" />
                    <img src={Snap} className="w-[50px] h-[50px]" />
                </Slider>
            </div>
        );
    }
}