import { FadeCarousel } from "../../molecules";
import CarouselMenu from "../../molecules/carouselMenu/carouselMenu";
import { CustomContainer, SwipeContainer, Wrapper } from "./styles";
import { useState, memo } from "react";
import { constants as CONST } from "./constants";


function LocationCarousel(props) {
    const menuItems = CONST.menuItems;
    const [activeShot, setActiveShot] = useState(0);

    return (
        <Wrapper>
            {/*<SwipeContainer>*/}
            {/*    <img src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/swipe-icon.svg"} alt={"swipe"} />*/}
            {/*</SwipeContainer>*/}
            <CustomContainer>
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