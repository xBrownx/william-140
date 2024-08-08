import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carousel1 from "../assets/Carousel-1.png";
import carousel2 from "../assets/Carousel-2.png";
import carousel3 from "../assets/Carousel-3.png";
import carousel4 from "../assets/Carousel-4.png";
import carousel5 from "../assets/Carousel-5.png";
import carousel6 from "../assets/Carousel-6.png";
import carousel7 from "../assets/Carousel-7.png";
import carousel8 from "../assets/Carousel-8.png";

import React, {useCallback, useEffect, useRef, useState} from "react";
import {CarouselContainer, CarouselList, ImgContainer, StyledImg} from "./Carousel.styled";

const slides = [
    {src: carousel1},
    {src: carousel2},
    {src: carousel3},
    {src: carousel4},
    {src: carousel5},
    {src: carousel6},
    {src: carousel7},
    {src: carousel8},
];

export const CarouselComponent = () => {
    return (
        <CarouselContainer>
            <InfiniteLooper/>
        </CarouselContainer>
    );
}

const InfiniteLooper = () => {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef(null);
    const innerRef = useRef();

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const { width } = innerRef.current.getBoundingClientRect();

        const { width: parentWidth } = outerRef.current.getBoundingClientRect();

        const instanceWidth = width / innerRef.current.children.length;

        if (width < parentWidth + instanceWidth) {
            setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
        }
  }, [looperInstances]);

    useEffect(() => {
        setupInstances();
    }, []);

    return (
        <CarouselContainer ref={outerRef}>
            <CarouselList ref={innerRef}>
                {[...Array(looperInstances)].map((_, ind) => (
                    <ImgContainer key={ind}>
                        {
                            slides.map((slide, i) => {
                                return (<StyledImg src={slide.src} alt={`Carousel ${i}`}/>);
                            })
                        }
                    </ImgContainer>
                ))
                }

            </CarouselList>
        </CarouselContainer>
    )

}