
import {
    CarouselContainer, CarouselSlide,
    ImgContainer,
} from "./FadeCarousel.styled";
import {useEffect, useState} from "react";
import {CarouselMenu} from "./CarouselMenu.component";


export const FadeCarousel = ({activeIdx, carouselItems}) => {
    const slideSrc = carouselItems.map(item => {
        return item.src
    });

    useEffect(() => {
        console.log(activeIdx);
    }, [activeIdx])

    return (
        <>
            <CarouselContainer id="fade-carousel-container">
                {slideSrc.map((item, index) => (
                    <CarouselSlide
                        id="fade-carousel-slide"
                        key={`${index}_cc`}
                        $isActive={activeIdx === index}
                    >
                        <ImgContainer id="fade-carousel-img-container">
                            <img src={item} alt={"carousel item"}/>
                        </ImgContainer>
                    </CarouselSlide>
                ))}
            </CarouselContainer>
        </>
    );
}




