import { FadeCarousel } from "../../molecules/fadeCarousel";
import { Index } from "../../molecules/carouselMenu";
import { Wrapper } from "./styles";
import { location } from '../../../constants'
import { useState, memo } from "react";
import { Container } from "../../molecules";

export const LocationCarousel = memo(
    function LocationCarousel() {
        const [activeIdx, setActiveIdx] = useState(0);
        const handleSlideChange = (idx) => {
            setActiveIdx(idx);
        }
        return (
            <Wrapper>
                <Container $imgCover>
                    <FadeCarousel
                        activeIdx={activeIdx}
                        carouselItems={location.assets.carousel} />
                </Container>
                <Index
                    carouselItems={location.menuItems}
                    icons={location.assets.icons}
                    activeIdx={activeIdx}
                    setActiveIndex={handleSlideChange}
                />
            </Wrapper>
        );
    }
);