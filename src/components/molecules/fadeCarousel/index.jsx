import {CarouselContainer, CarouselSlide, ImgContainer,} from "./styles";
import {Image} from "../../atoms";
import { memo } from "react";

export const FadeCarousel = memo(function FadeCarousel({activeShot, carouselItems}) {

    return (
            <CarouselContainer>
                {carouselItems.map((item, idx) => (
                    <CarouselSlide
                        key={item.key}
                        $isActive={activeShot === idx}
                    >
                        <ImgContainer>
                            <Image src={item.imgSrc}/>
                        </ImgContainer>
                    </CarouselSlide>
                ))}
            </CarouselContainer>
    );
});