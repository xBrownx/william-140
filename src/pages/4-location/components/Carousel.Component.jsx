
import {
    CarouselContainer, CarouselSlide,
    ImgContainer,
} from "./LocationCarousel.styled";
import {useEffect, useState} from "react";
import {CarouselMenu} from "./CarouselMenu.component";


export const CarouselComponent = ({carouselItems}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const slideTitles = carouselItems.map(item => {
        return item.title
    });

    const slideIcons = carouselItems.map(item => {
        return item.icon
    });

    const slideSrc = carouselItems.map(item => {
        return item.src
    });

    const handleSlideChange = (idx) => {
        setActiveIndex(idx);
    }

    return (
        <div>
            <CarouselContainer>
                {slideSrc.map((Item, index) => (
                    <CarouselSlide index={`${index * 100}vw`} $isActive={activeIndex === index}>
                        <ImgContainer>
                            <Item/>
                        </ImgContainer>
                    </CarouselSlide>
                ))}
            </CarouselContainer>
            <CarouselMenu
                icons={slideIcons}
                titles={slideTitles}
                setActiveIndex={handleSlideChange}
            />
        </div>
    );
}




