import {CarouselContainer, CarouselSlide, ImgContainer,} from "./FadeCarousel.styled";
import {useEffect} from "react";
import {StyledImg} from "../lifestyleImages/styles";
import {Image} from "../../atoms/image";



export const FadeCarousel = ({activeIdx, carouselItems}) => {

    useEffect(() => {
        console.log(activeIdx);
    }, [activeIdx])

    return (
        <>
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
        </>
    );
}




