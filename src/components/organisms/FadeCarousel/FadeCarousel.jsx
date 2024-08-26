import {CarouselContainer, CarouselSlide, ImgContainer,} from "./FadeCarousel.styled";
import {Image} from "../../atoms/image";

export const FadeCarousel = ({activeIdx, carouselItems}) => {

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
}




