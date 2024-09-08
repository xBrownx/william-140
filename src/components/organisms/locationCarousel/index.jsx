import { FadeCarousel } from "../../molecules";
import { Index } from "../../molecules/carouselMenu";
import { Wrapper } from "./styles";
import { useState, memo } from "react";
import { Container } from "../../molecules";

export const LocationCarousel = memo(
    function LocationCarousel(props) {
        const [activeIdx, setActiveIdx] = useState(0);
        const handleSlideChange = (idx) => {
            setActiveIdx(idx);
        }
        return (
            <Wrapper>
                <Container $imgCover>
                    <FadeCarousel
                        activeIdx={activeIdx}
                        carouselItems={props.assets.carousel} />
                </Container>
                <Index
                    carouselItems={props.menuItems}
                    icons={props.assets.icons}
                    activeIdx={activeIdx}
                    setActiveIndex={handleSlideChange}
                />
            </Wrapper>
        );
    }
);