import { FadeCarousel } from "../../molecules/fadeCarousel";
import { CarouselMenu } from "../../molecules/fadeCarousel/CarouselMenu";
import { Wrapper } from "./styles";
import { location } from '../../../constants'
import {useState} from "react";
import {Container} from "../../molecules";

export const LocationCarousel = props => {
    const [activeIdx, setActiveIdx] = useState(0);
    const handleSlideChange = (idx) => {
        setActiveIdx(idx);
    }
    return (
        <Wrapper>
            <Container $imgCover>
                <FadeCarousel
                    activeIdx={activeIdx}
                    carouselItems={location.assets.carousel}/>
            </Container>
            <CarouselMenu
                carouselItems={location.menuItems}
                icons={location.assets.icons}
                activeIdx={activeIdx}
                setActiveIndex={handleSlideChange}
            />
        </Wrapper>
    );
}