import {CarouselContainer} from "../../Pages/05-Location/Location.styled";
import {FadeCarousel} from "../FadeCarousel/FadeCarousel";
import {CarouselMenu} from "../FadeCarousel/CarouselMenu";
import {Wrapper} from "./styles";
import { location } from '../../constants'
import {useState} from "react";

export const LocationCarousel = props => {
    const [activeIdx, setActiveIdx] = useState(0);
    const handleSlideChange = (idx) => {
        setActiveIdx(idx);
    }
    return (
        <Wrapper>
            <CarouselContainer id="location-carousel-container">
                <FadeCarousel
                    activeIdx={activeIdx}
                    carouselItems={location.assets.carousel}/>
            </CarouselContainer>
            <CarouselMenu
                carouselItems={location.menuItems}
                icons={location.assets.icons}
                activeIdx={activeIdx}
                setActiveIndex={handleSlideChange}
            />
        </Wrapper>
    );
}