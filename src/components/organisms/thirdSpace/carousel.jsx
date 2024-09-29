import React, { memo } from 'react';
import { CarouselWrapper, Container } from './styles';
import { constants as CONST } from "./constants";
import { PageTitle, SlideCarousel } from "../../molecules";

function ThirdSpaceCarousel() {
    return (

        <CarouselWrapper>
            <SlideCarousel images={CONST.carousel} />
        </CarouselWrapper>

    );
}


export default memo(ThirdSpaceCarousel);
