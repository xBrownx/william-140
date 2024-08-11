
import {
    CarouselContainer, CarouselSlide,
    ImgContainer,
} from "./LocationCarousel.styled";
import {useState} from "react";
import {CarouselMenu} from "./CarouselMenu.component";


export const CarouselComponent = ({activeIdx, carouselItems}) => {
    const slideSrc = carouselItems.map(item => {
        return item.src
    });

    return (
        <>
            <CarouselContainer>
                {slideSrc.map((Item, index) => (
                    <CarouselSlide
                        key={`${index}_cc`}
                        $isActive={activeIdx === index}
                    >
                        <ImgContainer>
                            <Item/>
                        </ImgContainer>
                    </CarouselSlide>
                ))}
            </CarouselContainer>
        </>
    );
}




