import { CarouselContainer, CarouselSlide, ImgContainer, } from "./styles";
import { Image } from "../../atoms";
import React, { memo, useRef, useState } from "react";


export const FadeCarousel = memo(function FadeCarousel({activeShot, carouselItems}) {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [imgPosition, setImgPosition] = useState({x: 50, y: 50});


    return (
        <CarouselContainer >
            {carouselItems.map((item, idx) => (
                <CarouselSlide
                    key={item.key}
                    $isActive={activeShot === idx}
                >
                    <ImgContainer >
                        <Image
                            src={item.imgSrc}
                            alt={""}
                        />
                    </ImgContainer >
                </CarouselSlide >
            ))}
        </CarouselContainer >
    );
});