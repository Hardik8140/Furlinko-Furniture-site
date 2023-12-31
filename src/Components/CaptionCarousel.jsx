"use client";

import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

import { styled } from "styled-components";
import { fur, sofa, sofaImg } from "../assets";
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = useState([]);

  const cards = [sofaImg, sofa, fur];

  return (
    <Box position={"relative"} height={"100%"} width={"100%"}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}

      {/* Slider */}

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"469px"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            overflow={"hidden"}
            width={"100%"}
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
