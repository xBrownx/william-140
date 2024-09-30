import { FadeCarousel } from "../../molecules";
import CarouselMenu from "../../molecules/carouselMenu/carouselMenu";
import { CustomContainer, Wrapper } from "./styles";
import { useState, memo } from "react";
import { Container } from "../../molecules";
import { constants as CONST } from "./constants";


function LocationCarousel(props) {
    const menuItems = CONST.menuItems;
    const [activeShot, setActiveShot] = useState(0);

    return (
        <Wrapper>
            <CustomContainer $imgCover>
                <FadeCarousel
                    activeShot={activeShot}
                    carouselItems={menuItems} />
            </CustomContainer>
            <CarouselMenu
                menuItems={menuItems}
                activeShot={activeShot}
                setActiveShot={setActiveShot}
            />
        </Wrapper>
    );
}

export default memo(LocationCarousel);