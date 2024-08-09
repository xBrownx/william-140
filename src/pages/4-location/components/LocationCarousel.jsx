import {ReactComponent as Carousel1} from '../assets/Location-1.svg'
import {ReactComponent as Carousel2} from '../assets/Location-2.svg'
import {ReactComponent as Carousel3} from '../assets/Location-3.svg'
import {ReactComponent as Carousel4} from '../assets/Location-4.svg'
import {ReactComponent as Icon1} from '../assets/1-FB.svg'
import {ReactComponent as Icon2} from '../assets/2-Retail.svg'
import {ReactComponent as Icon3} from '../assets/3-Trains.svg'
import {ReactComponent as Icon4} from '../assets/4-Hotels.svg'
import {ReactComponent as Icon5} from '../assets/5-Trams.svg'
import {ReactComponent as Icon6} from '../assets/6-Access.svg'
import {
    CarouselContainer, CarouselSlide, CarouselSlideHidden, CarouselWrapper,
    ImgContainer,
    ImgWrapper,
    MenuContainer, MenuItem,
    MenuWrapper
} from "./LocationCarousel.styled";
import {useEffect, useState} from "react";


export const LocationCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const menu = [
        'F&B',
        'RETAIL',
        'TRAINS',
        'HOTELS',
        'TRAMS',
        'ACCESS',
    ];

    const slides = [
        Carousel1,
        Carousel2,
        Carousel3,
        Carousel4,
        Carousel4,
        Carousel4,
    ];

    const icons = [
        Icon1,
        Icon2,
        Icon3,
        Icon4,
        Icon5,
        Icon6
    ]

    useEffect(() => {
        console.log(activeIndex);
    }, [activeIndex]);

    return (
        <CarouselContainer>
            <CarouselWrapper>
                {slides.map((Item, index) => (
                    <CarouselSlide index={`${index*100}vw`} $isActive={activeIndex === index}>
                        <ImgContainer>
                            <Item/>
                        </ImgContainer>
                    </CarouselSlide>
                ))}
            </CarouselWrapper>

            <MenuContainer>
                <MenuWrapper>
                    {icons.map((Item, index) => (
                        <MenuItem key={index}>
                            <Item/><p onClick={() => setActiveIndex(index)}>{menu[index]}</p>
                        </MenuItem>
                    ))}
                </MenuWrapper>

            </MenuContainer>
        </CarouselContainer>
    );
}


