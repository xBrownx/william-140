import {CarouselContainer, CarouselSlide, ImgContainer,} from "./styles";
import {Image} from "../../atoms";
import { memo } from "react";

export const FadeCarousel = memo(function FadeCarousel({activeIdx, carouselItems}) {

    return (
            <CarouselContainer>
                {carouselItems.map((item, idx) => (
                    <CarouselSlide
                        key={item.key}
                        $isActive={activeIdx === idx}
                    >
                        <ImgContainer {...item}>
                            <Image {...item}/>
                        </ImgContainer>
                    </CarouselSlide>
                ))}
            </CarouselContainer>
    );
});